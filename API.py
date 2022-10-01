from fastapi import FastAPI
from pydantic import BaseModel
import fitz
import io
from PIL import Image
import numpy as np
import pytesseract
import yake
text=''
import spacy
import pytextrank
import PyPDF2
import urllib.request 
# from io import StringIO


pytesseract.pytesseract.tesseract_cmd = 'D:/Tesseract-OCR/tesseract.exe'

class Item(BaseModel):
    url: str
    
app = FastAPI()

def getKeyWords(text):
    language = "en"
    max_ngram_size = 3
    deduplication_threshold = 0.9
    deduplication_algo = 'seqm'
    windowSize = 1
    numOfKeywords = 20

    custom_kw_extractor = yake.KeywordExtractor(lan=language, n=max_ngram_size, dedupLim=deduplication_threshold, dedupFunc=deduplication_algo, windowsSize=windowSize, top=numOfKeywords, features=None)
    keywords = custom_kw_extractor.extract_keywords(text)
    
    return keywords

def getImgDescp(filename):
    pdf_file = fitz.open(filename)
    pdf_image_list=[]
    imgdescps=[]

    for page_index in range(len(pdf_file)):
    
        page = pdf_file[page_index]
        image_list = pdf_file.get_page_images(page_index)
        if image_list:
            pdf_image_list.append(image_list)
            
        for image_index, img in enumerate(pdf_file.get_page_images(page), start=1):
            xref = img[0]
            pix = fitz.Pixmap(pdf_file,xref)
            piximg = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            # piximgarr = np.array(pix)
            decp=''
            decp=pytesseract.image_to_string(piximg)
            imgdescps.append(decp)
            
            
    return imgdescps

def getabstract(filereader):
    fulltext = []
    for i in filereader.pages:
        fulltext+= [i.extract_text()]
        currpage = i.extract_text().lower()
        if 'abstract' in currpage:
            abstract = currpage[currpage.find('abstract'):]
            # print('abstrat',abstract)
            return abstract
        if 'a b s t r a c t' in currpage:
            abstract = currpage[currpage.find('a b s t r a c t'):]
            # print('abstract',abstract)
            return abstract
    
    return ' '.join(fulltext[:4])


def getsummary(text):
    nlp = spacy.load('en_core_web_sm')
    nlp.add_pipe('textrank')
    doc = nlp(text)
    summ1 = list(doc._.textrank.summary())
    tostring = lambda sent:sent.text
    summary = list(map(tostring,summ1))
    summary = ' '.join(summary)
    return summary

def main(filename):
    text=''
    # filename=''
    file = open(filename,'rb')
    filereader = PyPDF2.PdfReader(file)
    text = getabstract(filereader)
    resp = {'summary':'','keywords':'',"img_descp":''}
    resp['keywords'] = getKeyWords(text)
    resp['summary']= getsummary(text)
    resp['img_descp'] = getImgDescp(filename)
    return resp

def main_with_url(url):
    
    # url = 'https://doc-0c-2c-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/9jn1e0jcb4vuhlg2rg91j1rkel93775u/jdslu3fdm904jf00s88jviollq5lj7qq/1664634000000/3/*/APznzaZjmDhh-2YM8NCN4_g2PwbQnvEvPkTDC9Q3H9ffqn47r551wvZ5pLpd_e9GQNaG2evnY3VhP5C1wzK2TRovD9xLrMgq--XeZo4q28pVCwh5Wbdz9Gk_ykUUbe8PBD2NaQTeGi_qMbSESp86cDxYP6k8XEwywie8DK7EHdEl17CXEruJ49FLwGFzR8MJ3qUPYip0ybcEc8X2Tyc5s08ft2sqyl6KMyy8jrSLv0J9KMCS0xaW-0vYn7G2PDqQjx2YflnJjjQD8ucdqfCkr2MNMSoqjnMnJCLDjJQ4xAam68YPLY8qoS_WFhZT9O5EMEm463QQ2eukgNGOLIx0oVFhL6TMe1M6jISCDkcp_7_85w3xD4293xiJnG-dYkOAGOfInMGzj5oz?authuser'
    """writer = PyPDF2.PdfFileWriter()
    remoteFile = urlopen(Request(url)).read()
    print('hi')
    # remotefile = remoteFile[ :remoteFile.find("%%EOF") ]
    
    # newfile = open('newfile.pdf','wb')
    # newfile.write(remoteFile)
    # newfile.close()
    
    memoryfile = StringIO(remoteFile)
    pdffile = PyPDF2.PdfReader(memoryfile)"""
   
    """ url = "http://www.silicontao.com/ProgrammingGuide/other/beejnet.pdf"
    writer = PyPDF2.PdfFileWriter()

    remoteFile = urlopen(Request(url)).read()
    
    memoryFile = StringIO(remoteFile)
    print('=================',type(memoryFile))

    pdfFile = PyPDF2.PdfFileReader(memoryFile)

    for pageNum in range(pdfFile.getNumPages()):
            currentPage = pdfFile.getPage(pageNum)
            #currentPage.mergePage(watermark.getPage(0))
            writer.addPage(currentPage)


    outputStream = open("output.pdf","wb")
    writer.write(outputStream)
    outputStream.close()"""

    urllib.request.urlretrieve(url, "mast.pdf")
    text=''
    # filename=''
    # file = open('newfile.pdf','rb')
    # filereader = PyPDF2.PdfReader(file)
    file = open("mast.pdf",'rb')
    filereader = PyPDF2.PdfReader(file)
    text = getabstract(filereader)
    file.close()
    resp = {'summary':'','keywords':'',"img_descp":''}
    
    resp['keywords'] = getKeyWords(text)
    resp['summary']= getsummary(text)
    resp['img_descp'] = getImgDescp('mast.pdf')
    return resp


@app.post('/nlpmodel/')
async def create_item(item: Item):
    return main_with_url(item.url)

@app.get('/')
async def index():
    return {"message":"hello"}
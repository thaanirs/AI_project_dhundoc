import React, { useState, useEffect } from "react";
import Image from "next/image";
import thelogo from "../../public/Image/nasa1.svg";
import search from "../../public/Image/Group 6.svg";
import upload from "../../public/Image/upload.svg";
import photo from "../../public/Image/Group (2).svg";
import albertpic from "../../public/Image/albertpic.svg";
// import useSpeech from "../../hooks/useSpeech";
import mic from "../../public/navbar/mic.svg";

// code for checking support
let speech;
if (typeof window !== "undefined") {
  if (window.webkitSpeechRecognition) {
    const speechRecognition = webkitSpeechRecognition;
    speech = new speechRecognition();
    speech.continuous = true;
  } else {
    speech = null;
  }
}

function Navbar(props) {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");
  const [speciallyAbled, setSpeciallyAbled] = useState(false);

  // listening code
  const listen = () => {
    setIsListening(!isListening);
    if (isListening) {
      speech.stop();
    } else {
      speech.start();
    }
  };

  useEffect(() => {
    if (!speech) {
      return;
    }
    speech.onresult = (event) => {
      setText(event.results[event.results.length - 1][0].transcript);
    };
  }, []);

  const searchText = () => {};
  return (
    <div className="thenavbar">
      <div className="commoncontainer">
        <div className="thelogocontainer">
          {" "}
          <Image src={thelogo} alt="Foo image" layout="responsive" />
        </div>

        <p>NASA Technical Reports Server</p>
      </div>
      <div className="searchbarcontainer">
        <div className="searchbarcontainer">
          <input
            className="search"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div className="searchicon">
            <Image src={search} alt="image" layout="responsive" />
          </div>
        </div>

        <div className="searchvoice">
          <Image src={mic} alt="image" layout="responsive" onClick={listen} />
        </div>
      </div>
      {/* upload */}
      <div className="allicons">
        <div className="uploadicon">
          <Image src={upload} alt="upload" layout="responsive" />
        </div>
        <div className="photoicon">
          <Image src={photo} alt="photo" layout="responsive" />
        </div>
        <div className="albertpic">
          <Image src={albertpic} alt="albert" layout="responsive" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

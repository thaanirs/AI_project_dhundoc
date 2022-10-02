import React from "react";
import Image from "next/image";
import bg from "../public/Image/bgofalbert.svg";
import him from "../public/Image/circlepicofalbert.svg";
import Navbar from "../components/Navbar";
import Profileupdate from "../components/profileupdate";
import PersonalArticle from "../components/personalArticle";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="thebox">
        <div className="Myprofile">
          <h1 className="myprofile">My Profile</h1>
          <p>Its awesome to have you with us </p>
        </div>
        <div className="allDiv">
          {/* div for side info card  */}
          <div className="profilebox">
            {" "}
            <div className="bgbox">
              {" "}
              <Image alt="" src={bg} layout="responsive" />
            </div>
            <div className="him">
              <Image alt="him" src={him} layout="responsive" />
            </div>
            <h2 className="hisname">Albert Einstein</h2>
            <p className="hisemail">elbo69@gmail.com</p>
            <div className="git">
              <div className="tnumber">
                <h1>10</h1>
                <p>Papers Published</p>
              </div>
              <div className="tnumber2">
                <h1>50</h1>
                <p>Peer Review Request</p>
              </div>
            </div>
          </div>
          <div className="articlesMain">
            <Profileupdate />
            <PersonalArticle />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

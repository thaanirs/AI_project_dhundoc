import React from "react";
import Image from "next/image";
import thelogo from "../../public/Image/nasa1.svg";
import search from "../../public/Image/Group 6.svg";
import upload from "../../public/Image/upload.svg";
import photo from "../../public/Image/Group (2).svg";
import albertpic from "../../public/Image/albertpic.svg";

function Navbar() {
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
        <input
          className="search"
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
        />
        <div className="searchicon">
          <Image src={search} alt="image" layout="responsive" />
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

import React from "react";
import Card from "../../components/Article/Card";
import Navbar from "../../components/Navbar";

import Articles from "../../components/Article copy";

const Articlepage = () => {
  return (
    <>
      <Navbar />{" "}
      <div style={{ display: "flex ", flexDirection: "row", width: "100vw" }}>
        <div style={{ width: "80vw" }}>
          <Articles />
        </div>
        <iframe
          className="iframe"
          src="https://nasachallenge2022.s3.ap-south-1.amazonaws.com/YWcnvauC.pdf"
          width="100%"
          style={{ height: "100vh" }}
        ></iframe>
      </div>
    </>
  );
};

export default Articlepage;

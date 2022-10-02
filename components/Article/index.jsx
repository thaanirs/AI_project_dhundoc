import React from "react";
import Card from "./Card";
import Filter from "./Filter";
import { data } from "./data";

const Articles = () => {
  return (
    <div style={{ display: "flex" }}>
      <Filter />
      <div>
        {data.map((content, idx) => {
          return <Card data={content} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Articles;

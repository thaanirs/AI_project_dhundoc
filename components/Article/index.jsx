import React from "react";
import Card from "./Card";
import Filter from "./Filter";

const Articles = () => {
  const data = [
    {
      title:
        "Chronic Water Stress Reduces Tree Growth And The Carbon Sink Of Deciduous Hardwood Forests",
      summary:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      authors: [
        "Edward R. Brzostek",
        "Danilo Dragoni",
        "Hans Peter Schmid",
        "Edward R. Brzostek",
        "Danilo Dragoni",
        "Hans Peter Schmid",
      ],
      published: "18/10/2021",
      acquired: "18/10/2021",
      tags: ["keyword"],
      public: false,
    },
  ];
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

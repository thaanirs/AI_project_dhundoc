import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import PDF_Img from "../../public/Image/pdf_ui.png";

const Card = () => {
  const title =
    "Chronic Water Stress Reduces Tree Growth And The Carbon Sink Of Deciduous Hardwood Forests";
  const description =
    "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.";

  const authors = [
    "Edward R. Brzostek",
    "Danilo Dragoni",
    "Hans Peter Schmid",
    "Edward R. Brzostek",
    "Danilo Dragoni",
    "Hans Peter Schmid",
  ];

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.chip}>Public</div>
        <div className={styles.image}>
          <Image src={PDF_Img} alt="Pdf image" />
        </div>
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <h4>{description}</h4>

        <div>
          <p className={styles.fieldHeading}>Authors:</p>
          <div className={styles.authorGrid}>
            {authors.map((author, idx) => {
              return <p key={idx}>{author}</p>;
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Field heading={"Date Acquired:"} value={"23/10/2022"} />
            <Field heading={"Publication Date"} value={"18/10/2021"} />
          </div>

          <p className={styles.fieldHeading}>Publication Information:</p>
          <Field heading={"Publication:"} value={"Pearson"} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Field heading={"Volume"} value={"20"} />
            <Field heading={"Issue"} value={"20"} />
            <Field heading={"ISSN"} value={"1345-1013"} />
          </div>
          <Field heading={"Keywords"} value={authors.toString()} />
        </div>
      </div>
    </div>
  );
};

export default Card;

const Field = ({ heading, value }) => {
  return (
    <span style={{ display: "flex" }}>
      <p className={styles.fieldHeading}>{heading}</p>
      <p className={styles.fieldValue}>{value}</p>
    </span>
  );
};

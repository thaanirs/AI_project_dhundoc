import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import PDF_Img from "../../public/Image/pdf_ui.png";

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <div>
        {data.public ? (
          <div className={styles.pubchip}>Public</div>
        ) : (
          <div className={styles.prochip}>Protected</div>
        )}
        <div className={styles.image}>
          <Image src={PDF_Img} alt="Pdf image" />
        </div>
      </div>
      <div className={styles.content}>
        <h1>{data.title}</h1>
        <h4 style={{ marginBottom: 40 }}>{data.title}</h4>

        <div>
          <p className={styles.fieldHeading}>Authors:</p>
          <div className={styles.authorGrid}>
            {data.authors.map((author, idx) => {
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
          <Field heading={"Keywords"} value={data.tags.toString()} />
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

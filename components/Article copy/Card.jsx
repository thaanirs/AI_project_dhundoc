import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import PDF_Img from "../../public/Image/pdf_ui.png";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link style={{ cursor: "pointer" }} href="/articles">
          <h1>{data.title}</h1>
        </Link>

        <h4 style={{ marginBottom: 40 }}>{data.summary}</h4>

        <div>
          <p className={styles.fieldHeading}>Authors:</p>
          <div className={styles.authorGrid}>
            {data.authors.map((author, idx) => {
              return <p key={idx}>{author}</p>;
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Field heading={"Date Acquired:"} value={data.acquired} />
            <Field heading={"Publication Date"} value={data.published} />
          </div>

          <p className={styles.fieldHeading}>Publication Information:</p>
          <Field heading={"Publication:"} value={"Pearson"} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Field heading={"Volume"} value={"20"} />
            <Field heading={"Issue"} value={"20"} />
            <Field heading={"ISSN"} value={"1345-1013"} />
          </div>
          <p className={styles.fieldHeading}>Tags</p>
          <div className={styles.tag}>
            {data.tags.map((tag, idx) => {
              return <p key={idx}>{tag}</p>;
            })}
          </div>
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

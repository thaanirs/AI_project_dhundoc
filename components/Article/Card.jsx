import React, { useState, useEffect } from "react";
import styles from "./card.module.css";
import Image from "next/image";
import PDF_Img from "../../public/Image/pdf_ui.png";
import Link from "next/link";
import Router from "next/router";
const Card = ({ data }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 15000);
  });
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
            <Field
              heading={"Date Acquired:"}
              value={data.acquiredAt?.toISOString()}
            />
            <Field
              heading={"Publication Date"}
              value={data.publishedAt?.toISOString()}
            />
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p class={{ fontWeight: "900" }}>views:</p>
            <p>{counter}</p>
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

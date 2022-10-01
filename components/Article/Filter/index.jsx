import React from "react";
import styles from "./filter.module.css";

const Filter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Filter Results</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.chip}>Public</div>
        <div className={styles.chip}>Protected</div>
      </div>

      <span>
        <input style={{ marginLeft: 15 }} type="text" placeholder="Title" />
      </span>
      <span style={{ marginLeft: 15 }}>
        <input type="text" placeholder="Authors" />
      </span>
      <span style={{ marginLeft: 15 }}>
        <input type="text" placeholder="Organization" />
      </span>
      <span style={{ marginLeft: 15 }}></span>
    </div>
  );
};

export default Filter;

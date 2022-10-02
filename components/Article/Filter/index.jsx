import React, { useState } from "react";
import styles from "./filter.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Filter = () => {
  const [startDate, setStartDate] = useState("");

  const options = ["one", "two", "three"];

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
      <span style={{ marginLeft: 15 }}>
        <DatePicker
          selected={startDate}
          placeholderText="Publication Date"
          onChange={(date) => setStartDate(date)}
        />
      </span>
      <span style={{ marginLeft: 15 }}>
        <DatePicker
          selected={startDate}
          placeholderText="Date Acquired"
          onChange={(date) => setStartDate(date)}
        />
      </span>
      <span style={{ marginLeft: 15 }}>
        <input type="text" placeholder="Subject" />
      </span>
      {/* <span style={{ marginLeft: 15 }}>
        <Dropdown
          options={options}
          // onChange={this._onSelect}
          value={options[0]}
          placeholder="Select an option"
        />
        ;
      </span> */}
      <button className={styles.btn}>Apply</button>
    </div>
  );
};

export default Filter;

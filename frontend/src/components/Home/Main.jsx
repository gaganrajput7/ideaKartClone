  import React, { useState } from "react";
import Card from "./Card";
import styles from "./main.module.css";
import { useEffect } from "react";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let res = await fetch("https://ideakartclone.herokuapp.com/products");
    let data = await res.json();
    setData(data);
  }

  return (
    <>
      <div className={styles.header}>
      <h1>Top Reads</h1>
      </div>
      <div className={styles.main}>
        {data.map((row) => (
          <>
            <Card key={row.id} row={row} />
          </>
        ))}
      </div>
    </>
  );
}

export default Main;

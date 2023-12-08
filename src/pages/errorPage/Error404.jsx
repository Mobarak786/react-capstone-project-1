import React from "react";
import styles from "./error.module.css";

const Error404 = () => {
  return (
    <div className={styles.error404}>
      <div>
        <h1>Error 404</h1>
        <p>This page does not exist.Please check a proper route.</p>
      </div>
    </div>
  );
};

export default Error404;

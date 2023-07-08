import React from "react";
import styles from "./page.module.css";

const layout = ({ children }) => {
  return (
    <div>
      <h3 className={styles.mainTitle}>
        Prepare to be dazzled, for the wisdom contained within these Subjects
      </h3>
      {children}
    </div>
  );
};

export default layout;

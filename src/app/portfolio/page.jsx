import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>
        Which captivating subject shall embark on your intellectual odyssey
        today?
      </h1>
      <div className={styles.items}>
        <Link href="/portfolio/computerSoftware" className={styles.item}>
          <span className={styles.title}>Computer Software</span>
        </Link>
        <Link href="/portfolio/internationalBusiness" className={styles.item}>
          <span className={styles.title}>International Business</span>
        </Link>
        <Link href="/portfolio/bigData" className={styles.item}>
          <span className={styles.title}>Big Data Analytics</span>
        </Link>
        <Link href="/portfolio/devOps" className={styles.item}>
          <span className={styles.title}>DevOps</span>
        </Link>
        <Link href="/portfolio/supplyChain" className={styles.item}>
          <span className={styles.title}>Supply Chain </span>
        </Link>
        <Link href="/portfolio/cyberSecurity" className={styles.item}>
          <span className={styles.title}>Cyber Security</span>
        </Link>
        <Link href="/portfolio/projectManagement" className={styles.item}>
          <span className={styles.title}>Project Management</span>
        </Link>
        <Link href="/portfolio/hotelManagement" className={styles.item}>
          <span className={styles.title}>Hotel Management</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;

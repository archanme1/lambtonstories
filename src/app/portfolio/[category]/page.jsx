import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const fetchedData = items[cat];
  if (fetchedData) {
    return fetchedData;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <div className={styles.catTitle}>{params.category}</div>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>
              {item.desc}
              repellendus ad odit distinctio voluptate rem velit in minus
              tempore.
            </p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image src={item.image} className={styles.img} alt="" fill={true} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

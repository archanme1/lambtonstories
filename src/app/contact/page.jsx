import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Lambton Stories contact paginfoe",
  description: "Contact us for lambton stories and confessions",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact image"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" className={styles.input} placeholder="name" />
          <input type="text" className={styles.input} placeholder="email" />
          <textarea
            type="textarea"
            placeholder="message"
            className={styles.textarea}
            cols="30"
            row="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

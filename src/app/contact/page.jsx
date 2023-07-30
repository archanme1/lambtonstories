"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import emailjs from "@emailjs/browser";

export const metadata = {
  title: "Lambton Stories contact paginfoe",
  description: "Contact us for lambton stories and confessions",
};

const Contact = () => {
  const ref = useRef();
  const [isSuccess, setIsSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_GOOGLE_SERVICE_KEY || "service_k2yd0gc",
        process.env.EMAILJS_TEMPLATE_KEY || "template_8qji4hs",
        ref.current,
        process.env.EMAILJS_PUBLIC_KEY || "p3g2QAdpgzuNCK64L"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true);
          ref.current = null;
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
        }
      );
  };

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
        <form ref={ref} className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="name"
            name="name"
          />
          <input
            type="email"
            className={styles.input}
            placeholder="email"
            name="email"
          />
          <textarea
            name="message"
            type="textarea"
            placeholder="message"
            className={styles.textarea}
            cols="30"
            row="10"
          ></textarea>
          <button type="send" className={styles.sendButton}>
            SEND
          </button>
          {isSuccess && (
            <span className={styles.successMessage}>
              Your Message has been sent. We will get back to you soon :)
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="work"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h2 className={styles.imgTitle}>Next JS Baby</h2>
          <h3 className={styles.imgDesc}>Lets go with next 13.0000000000000</h3>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quos officiis nihil animi exercitationem, laboriosam, eaque aliquid
            eveniet quis facere temporibus nobis fugit corrupti eius modi libero
            sequi beatae ducimus!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            illum facilis, molestias quidem velit unde tenetur rerum earum nihil
            quasi inventore pariatur consectetur reprehenderit sint rem ratione
            autem sit repellat.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quos officiis nihil animi exercitationem, laboriosam, eaque aliquid
            eveniet quis facere temporibus nobis fugit corrupti eius modi libero
            sequi beatae ducimus!
            <br />
            <br />
            - eius modi libero sequi beatae ducimus!
            <br />
            <br />- libero sequi beatae ducimus!
          </p>
          <Button url="/contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;

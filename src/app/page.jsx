import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital product</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          incidunt aliquam error aperiam sit asperiores, soluta, fugit itaque
          aliquid numquam neque in illum laudantium suscipit vitae dolorem
          commodi, fugiat atque.
        </p>
        <Button text="See more work" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt="home image" />
      </div>
    </div>
  );
}

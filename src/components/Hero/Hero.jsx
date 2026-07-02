import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Amaan Ahmed</h1>
        <p className={styles.description}>
          Associate Software Engineer building modern full-stack web applications with React, Node.js, AWS, and a strong focus on user-centered product experiences.
        </p>
        <a href="mailto:amaanahmed2405@gmail.com" className={styles.contactBtn}>
          Let&apos;s Connect
        </a>
      </div>
      <img
        src={getImageUrl("hero/hoodie.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Development</h3>
              <p>
                I build responsive web applications with React on the frontend and Node.js, Express, and MongoDB on the backend.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Enterprise Modernization</h3>
              <p>
                I have experience modernizing legacy systems, implementing secure role-based portals, and integrating authentication flows for real-world client projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Continuous Learning</h3>
              <p>
                I enjoy understanding systems deeply, improving architecture, and learning new tools such as AWS while keeping code scalable and maintainable.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

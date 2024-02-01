import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:hasan.13519011722@ipu.ac.in">hasan.13519011722@ipu.ac.in</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/hasan-zaigam-1914b124b/">linkedin.com/in/hasan-zaigam</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/HasanZaigam">github.com/HasanZaigam</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/X_logo_2023_(white).png")}
            alt="X icon" width="50px" height="50px"
          />
          <a href="https://twitter.com/HasanZaigam">twitter.com/HasanZaigam</a>
        </li>
      </ul>
    </footer>
  );
};
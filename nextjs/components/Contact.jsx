import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import {faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
  return (
    <footer>
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          <p>&copy; ShAaGGy. All rights reserved. | Design by ShAaGGy</p>
          <ul className={styles.contact}>
            <li>
              <a href="https://twitter.com/ShAaGGy25" >
                <span>
                <FontAwesomeIcon icon={faTwitter} className={styles.icons} size="2x"/>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/sagar.vartak.1/">
                {/* <span class="fa fa-facebook fa-2x"></span> */}
                <span>
                <FontAwesomeIcon icon={faFacebook} className={styles.icons} color="white" size="2x"/>
                </span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_0.sagar.0_">
                {/* <span class="fa fa-instagram fa-2x"></span> */}
                <span>
                <FontAwesomeIcon icon={faInstagram} className={styles.icons} color="white" size="2x" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <script src="https://kit.fontawesome.com/e5539f2c5b.js" crossOrigin="anonymous"></script>
    </footer>
  );
}

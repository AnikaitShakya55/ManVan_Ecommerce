import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>About MAN VAN</h3>
          <ul>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Our Story</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Services</h3>
          <ul>
            <li>Vehicle Customization</li>
            <li>Mobile Workshops</li>
            <li>Van Conversions</li>
            <li>Consultation</li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contact Us</h3>
          <p>
            <FaEnvelope /> info@manvan.com
          </p>
          <p>
            <FaPhone /> +1 (555) 123-4567
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <FaFacebook className={styles.icon} />
            <FaTwitter className={styles.icon} />
            <FaInstagram className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.footerSecondary}>
        <p>Make Van &copy; {new Date().getFullYear()} | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      <div>
        <a href="https://github.com/Kostubhtripathi" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kaustubh-tripathi-736170229/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;

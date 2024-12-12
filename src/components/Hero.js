import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <video className={styles.backgroundVideo} autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/5155396/5155396-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.heading}>
          Welcome to My <span className={styles.portfolio}>Portfolio</span>
        </h1>
        <p className={styles.subheading}>
          Explore my work and projects. I'm a Software developer with a
          passion for building interactive, user-friendly web experiences.
        </p>
        <button className={styles.button}>Discover My Work</button>
      </div>
    </div>
  );
};

export default Hero;

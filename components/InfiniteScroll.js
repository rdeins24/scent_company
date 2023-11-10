import React from 'react';
import styles from '../styles/InfiniteScrollAnimation.module.css';
import {
    FaCreativeCommonsShare,
    FaCode,
    FaInstagram,
    FaExpandArrowsAlt,
    FaChartLine,
  } from "react-icons/fa";
  

function GlowingIcons() {
  return (
    <div className={styles.container}>
      <i className={`fa fa-apple ${styles.apple}`} id="apple"><FaCode/></i>
      <i className={`fa fa-twitter ${styles.twitter}`} id="twitter"></i>
      <i className={`fa fa-github-square ${styles.github}`} id="github"></i>
      <i className={`fa fa-facebook-square ${styles.facebook}`} id="facebook"></i>
    </div>
  );
}

export default GlowingIcons;

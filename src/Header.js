import React from "react";
import styles from "../styles/App.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__main}>
        <h3>Weather App</h3>
        <div className={styles.location}>
          <div className={styles.location__icon}></div>
          <div className={styles.location__details}>Bangalore, India</div>
        </div>
      </div>
      <div className={styles.search__bar}>
        <input type="text" placeholder="Search city" />
      </div>
    </div>
  );
};

export default Header;

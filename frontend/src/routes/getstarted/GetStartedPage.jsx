import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, } from 'react';
import styles from './css/getStarted.module.css';

const GetStarted = () => {
  return (
    <>
    <div className={`${styles.changeTheme}`}>
      <div className={`slider`}>
        <label className={`${styles.switch}`}>
          <input type="checkbox"/>
          <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
      </div>
      <div className={`${styles.arrowPlacement}`}>
        <div className={`${styles.arrowBlock}`}>
          <div className={`${styles.themeArrowImage}`}/>
        </div>
        <div className={`${styles.changeThemeDesc}`}>
          <p>Zmieniaj wygląd za pomocą <strong>Jednego Kliknięcia!</strong></p>
        </div>
      </div>
    </div>
    <div className={`${styles.posts}`}>
      <div className={`${styles.postsDesc}`}>
        <p>Przeglądaj <strong>Wpisy</strong> znajomych oraz ich <strong>Zdjęcia.</strong></p>
      </div>
      <div className={`${styles.arrowBlock}`}>
        <div className={`${styles.postsArrowImage}`}></div>
      </div>
    </div>
    </>
  );
};

export default GetStarted;
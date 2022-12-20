import PopupManager from '../../utils/popupManager';
import SlideManager from '../../utils/slideManager';
import Login from '../../components/login/login';
import styles from './css/home.module.css'
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, } from 'react';
import { AuthGuard } from '../../managers/authManager';
// import ReCAPTCHA from "react-google-recaptcha";


const Home = () => {
  const [popupShown, setPopup] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    {/* <ReCAPTCHA
    sitekey="6LegOncjAAAAAKdtFFfpd3rYbJO2HGGPt5qtSnM0"
    onChange={() => {}}
    /> */}
    <div className={`${styles.mainBlock}`}>
      <div className={styles.leftBlock}>
            <div className={styles.signButtons}>
              <div className={`${styles.button} ${styles.signUp}`} onClick={() => {navigate("/login/sign-up"); setPopup(true)}}>
                <p>
                  Sign up
                </p>
              </div>
              <div className={`${styles.button} ${styles.signIn}`} onClick={() => {navigate("/login/sign-in"); setPopup(true)}}>
                <p>Sign in</p>
              </div>
            </div>
            <div className={styles.projectTitle}>
              <p>Poznaj Najlepszy Portal Społecznościowy!</p>
            </div>
            <div className={styles.projectDesc}>
              <p>Już dzisiaj sprawdź co dzieje się w Twojej szkole. Twórz grupy z innymi użytkownikami i zdobywaj nowe kontakty!</p>
            </div>
            <div className={styles.projectButton} onClick={() => {navigate("../getstarted");}}>
              <p>Get Started</p>
            </div>
          </div>
      <div className={styles.rightBlock}></div>
    </div>
    <PopupManager show={popupShown} onClose={() => {navigate("/"); setPopup(false)}}>
      <SlideManager>
        <Login/>
      </SlideManager>
    </PopupManager>
    
    </>
  );
};

export default Home;
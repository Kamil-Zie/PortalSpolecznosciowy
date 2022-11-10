import "../assets/styles/button.css";
import "../assets/styles/projectDesc.css";
import "../assets/styles/home.css";
import "../assets/styles/popup.css";
import React, { useState } from 'react';
const Home = () => {

  const [popupSignin, setPopupSignIn] = useState(false);
  const [popupSignup, setPopupSignUp] = useState(false);
  return (
    <>
      {popupSignin ? 
      <form className="popup-box">
        <div className="popup-sign-text"><p>Zaloguj się / </p><p>Zarejestruj się</p></div>
        <div className="popup-email-area popup-input"><input type="text" placeholder="Email"/></div>
        <div className="popup-password-area popup-input"><input type="password" placeholder="Password"/></div>
        <div className="popup-submit-button popup-input"><input type="submit" value="Zaloguj się"/></div>
        <hr />
      </form> : false}
      
      {popupSignup ? 
      <form className="popup-box">
        <div className="popup-sign-text"><p>Zarejestruj się / </p><p>Zaloguj się</p></div>
        <div className="popup-email-area popup-input"><input type="text" placeholder="Email"/></div>
        <div className="popup-password-area popup-input"><input type="password" placeholder="Password"/></div>
        <div className="popup-password-area popup-input"><input type="password" placeholder="Repeat Password"/></div>
        <div className="popup-submit-button popup-input"><input type="submit" value="Zarejestruj się"/></div>
        <hr />
      </form> : false}
      
      <div className="main">
        <div className="left-block">
          <div className="sign-buttons">
            <div className="button sign-up" id="sign-up-button" onClick={() => { !popupSignin?!popupSignin:pass;setPopupSignUp(!popupSignup); document.getElementsByTagName("body")[0].style="blur:100px;"}}>
              <p>
                Sign up
              </p>
            </div>
            <div className="button sign-in" id="sign-in-button" onClick={() => { !popupSignup?!popupSignup:pass; setPopupSignIn(!popupSignin); }}>
              <p>Sign in</p>
            </div>
          </div>
          <div className="project-title">
            <p>Poznaj Najlepszy Portal Społecznościowy!</p>
          </div>
          <div className="project-desc">
            <p>Już dzisiaj sprawdź co dzieje się w Twojej szkole. Twórz grupy z innymi użytkownikami i zdobywaj nowe kontakty!</p>
          </div>
          <div className="project-button">
            <p>Get Started</p>
          </div>
        </div>
        <div className="right-block"></div>
      </div>
    </>
  );
};

export default Home;
// import "../assets/styles/button.css";
// import "../assets/styles/projectDesc.css";
// import "../assets/styles/home.css";
// import "../assets/styles/popup.css";
// import SignUpPopup from '../components/signUpPopup';
// import SignUpPopupStage2 from '../components/signUpPopupStage2';
// import SignInPopup from '../components/signInPopup';
// import LoginPopUp from '../components/login/Login';
import PopupManager from '../utils/popupManager';
//import React, { useState, useEffect, } from 'react';
// import { useNavigate } from 'react-router-dom';
const Home = () => {


  // const navigate = useNavigate();
  // const [popupSignup, setPopupSignUp] = useState(false);
  // const [popupSignin, setPopupSignIn] = useState(false);
  // const [isInShown, setInShown] = useState(false);
  // const [isUpShown, setUpShown] = useState(false);

  return (
    <>
    <PopupManager>
      <p>OK</p>
    </PopupManager>
      {/* {popupSignin ? <LoginPopUp onClose={setPopupSignIn} isInShown={isInShown} setInShown={setInShown}  ></LoginPopUp> : <></>} */}

      {/* {popupSignup ? <LoginPopUp onClose={setPopupSignUp} isInShown={isUpShown} setInShown={setUpShown} /> : <></>} */}


      {/* <div className="main">
        <div className="left-block">
          <div className="sign-buttons">
            <div className="button sign-up" id="sign-up-button" onClick={() => { !popupSignin ? !popupSignin : pass; setPopupSignUp(!popupSignup); setUpShown(true); }}>
              <p>
                Sign up
              </p>
            </div>
            <div className="button sign-in" id="sign-in-button" onClick={() => { !popupSignup ? !popupSignup : pass; setPopupSignIn(!popupSignin); setInShown(true) }}>
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
      </div> */}
    </>
  );
};

export default Home;
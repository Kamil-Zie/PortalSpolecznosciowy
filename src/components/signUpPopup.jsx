import React, {useState} from 'react';

const SignUpPopup = (props) => {    
    const managePopupUp = () => {
    if (!props.isUpShown) {
      props.onClose(false);
    }
  }
  return(
    <>
      <div className={(props.isUpShown ? "fade-bg-in" : "fade-bg-out")} onClick={() => { props.setUpShown(false) }} onAnimationEnd={() => { managePopupUp() }}></div>
          <form className={(props.isUpShown ? "popup-box-in" : "popup-box-out")}>
            <div className="popup-sign-text"><p>Zarejestruj się / </p><p>Zaloguj się</p></div>
            <div className="popup-email-area popup-input"><input type="text" placeholder="Email" /></div>
            <div className="popup-password-area popup-input"><input type="password" placeholder="Password" /></div>
            <div className="popup-password-area popup-input"><input type="password" placeholder="Repeat Password" /></div>
            <div className="popup-submit-button popup-input"><input type="submit" value="Zarejestruj się" /></div>
            <hr />
          </form>
    </>
  );
}
export default SignUpPopup;
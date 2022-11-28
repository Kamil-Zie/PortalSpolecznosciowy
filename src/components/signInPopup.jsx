import React, { useState } from 'react';

const SignInPopup = (props) => {
  const managePopupIn = () => {
    if (!props.isInShown) {
      props.onClose(false)
    }
  }
  return (
    <>
      <div className={(props.isInShown ? "fade-bg-in" : "fade-bg-out")} onClick={() => { props.setInShown(false) }} onAnimationEnd={() => { managePopupIn() }}></div>
      <form className={(props.isInShown ? "popup-box-in" : "popup-box-out")} onSubmit={() => { navigate('/getstarted') }}>

        <div className="popup-sign-text"><p>Zaloguj się / </p><p>Zarejestruj się</p></div>
        <div className="popup-email-area popup-input"><input type="text" placeholder="Email" /></div>
        <div className="popup-password-area popup-input"><input type="password" placeholder="Password" /></div>
        <div className="popup-submit-button popup-input"><input type="submit" value="Zaloguj się" /></div>
        <hr />

      </form>
    </>
  );
}
export default SignInPopup;
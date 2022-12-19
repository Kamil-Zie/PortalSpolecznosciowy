import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, } from 'react';
import styles from './css/getStarted.module.css';
import { TextField ,Switch } from "@mui/material";
import {createTheme} from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Search from '@mui/icons-material/Search'
import PostTemplate from '../../components/postTemplate/post.js'
import InputAdornment from '@mui/material/InputAdornment';
import PopupManager from '../../utils/popupManager';
import SlideManager from '../../utils/slideManager';
import Login from '../../components/login/login';
import ContactField from '../../components/contactField/contactField';

const GetStarted = () => {
  const [popupShown, setPopup] = useState(false);
  const navigate = useNavigate();
  const theme = createTheme({
    palette:{
      primary:{ main: grey[800] },
      type: 'dark',
    }
  })
  return (
    <>
    <div className={`${styles.themeFriendsProfile}`}>
      <div className={`${styles.changeTheme}`}>
        <Switch theme={theme} />
        <div className={`${styles.arrowPlacement}`}>
          <div className={`${styles.arrowBlock}`}>
            <div className={`${styles.themeArrowImage}`}/>
          </div>
          <div className={`${styles.changeThemeDesc}`}>
            <p>Zmieniaj wygląd za pomocą <strong>Jednego Kliknięcia!</strong></p>
          </div>
        </div>
      </div>
      <div className={`${styles.newFriends}`}>
        <div className={`${styles.newFriendsDesc}`}>
          <p>Twórz <strong>Nowe Znajomości</strong>, a także znajduj interesujące Cię <strong>Grupy</strong>.</p>
        </div>
        <div className={`${styles.newFriendsArrow}`}>

        </div>
        <TextField
        className={`${styles.newFriendsSampleSearch}`}
        id="input-with-icon-textfield"
        label="Znajdź znajomego"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        variant="standard"
        />
      </div>
      <div className={`${styles.profileBlock}`}>
        <div className={`${styles.profileImage}`}>

        </div>
        <div className={`${styles.profileDesc}`}>
          <p>Wyświetlaj <strong>Swój Profil</strong> i sprawdzaj jak wyglądasz w sieci!</p>
        </div>
      </div>
      
      <div className={`${styles.accountManagment}`}>
          <div className={`${styles.accountManagment}`}>
            <div className={`${styles.accountMangmentDesc}`}>
                <p><strong>Stwórz Konto!</strong></p>
            </div>
            <div className={`${styles.accountMangmentImage}`}>
                
            </div>
            <div className={`${styles.accountManagmentButtons}`}>
              <div className={`${styles.button} ${styles.signUp}`} onClick={() => {navigate("/getstarted/sign-up"); setPopup(true)}}>
                <p>
                  Sign up
                </p>
              </div>
              <div className={`${styles.button} ${styles.signIn}`} onClick={() => {navigate("/getstarted/sign-in"); setPopup(true)}}>
                <p>Sign in</p>
              </div>
            </div>
          </div>
      </div>

    </div>
    <div className={`${styles.postBlock}`}>
      <div className={`${styles.posts}`}>
        <div className={`${styles.postsDesc}`}>
          <p>Przeglądaj <strong>Wpisy</strong> znajomych oraz ich <strong>Zdjęcia.</strong></p>
        </div>
        <div className={`${styles.arrowBlock}`}>
          <div className={`${styles.postsArrowImage}`}></div>
        </div>
      </div>

      <div className={`${styles.postsField}`}>
        <PostTemplate isBlured={false}/>

        <PostTemplate isBlured={true}/>
      </div>
      <div className={`${styles.contactBlock}`}>
        <div className={`${styles.contactDescBlock}`}>
          <div className={`${styles.contactArrow}`}>

          </div>
          <div className={`${styles.contactDesc}`}>
            <p>Kontaktuj się ze swoimi znajomymi za pomocą <strong>Wiadomości Prywatnych i Twórz Grupy!</strong></p>
          </div>
        </div>
        <div className={`${styles.contactList}`}>
          <ContactField  isBlured={false}/>
          <ContactField  isBlured={true}/>
          <ContactField  isBlured={true}/>
          <ContactField  isBlured={true}/>
        </div>
      </div>
    </div>
    <PopupManager show={popupShown} onClose={() => {navigate("/getstarted"); setPopup(false)}}>
      <SlideManager>
        <Login/>
      </SlideManager>
    </PopupManager>
    </>
  );
};

export default GetStarted;
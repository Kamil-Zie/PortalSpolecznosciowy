import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, } from 'react';
import styles from './css/getStarted.module.css';
import { TextField ,Switch } from "@mui/material";
import {createTheme} from '@mui/material/styles';
import grey from '@mui/material/colors/grey';
import Search from '@mui/icons-material/Search'
import Post from '../../components/post/post.js'
import InputAdornment from '@mui/material/InputAdornment';


const GetStarted = () => {
  const theme = createTheme({
    palette:{
      primary:{ main: grey[800] },
      type: 'dark',
    }
  })
  return (
    <>
    <div className={`${styles.themeFriends}`}>
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
        <Post/>
      </div>
    </div>
    </>
  );
};

export default GetStarted;
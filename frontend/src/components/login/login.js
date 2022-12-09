import React, { useState } from 'react';
import { Route, NavLink, Routes, Outlet } from "react-router-dom";
import styles from "./css/login.module.css"
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

const Login = (props) => {
  console.log(styles.main)
  return (
    <div className={styles.main}>
      {/* <div className={styles.appAside} /> */}
      <div className={styles.appForm}>
        <div className={styles.pageSwitcher}>
          <NavLink
            to="sign-in"
            className={({ isActive }) =>
              isActive ? `${styles.pageSwitcherItemActive} ${styles.pageSwitcherItem}` : styles.pageSwitcherItem
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to="sign-up"
            className={({ isActive }) =>
              isActive ? `${styles.pageSwitcherItemActive} ${styles.pageSwitcherItem}` : styles.pageSwitcherItem
            }
          >
            Sign Up
          </NavLink>
        </div>

        <div className={styles.formTitle}>
          <NavLink
            to="sign-in"
            className={({ isActive }) =>
              isActive ? `${styles.formTitleLinkActive} ${styles.formTitleLink}` : styles.formTitleLink
            }
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            to="sign-up"
            className={({ isActive }) =>
              isActive ? `${styles.formTitleLinkActive} ${styles.formTitleLink}` : styles.formTitleLink
            }
          >
            Sign Up
          </NavLink>
        </div>

        <Outlet/>

      </div>
    </div>
  );
}
export default Login;
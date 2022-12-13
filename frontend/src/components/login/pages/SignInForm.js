import React, { useState } from "react";
import { Link, useHref } from "react-router-dom";
import styles from "../css/login.module.css"
import { loginRequest } from "../../../managers/loginManager"
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [error, setError] = useState(false)

  const onSuccess = (data) =>
  {
    console.log("req")
  }

  const onFailure = (data) =>
  {
    setError(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    loginRequest(email, password, onSuccess, onFailure)
  }

    return (
      <div className={styles.formCenter}>
        <form className={styles.formFields} onSubmit={(event) => handleSubmit(event)}>
          <div className={styles.formField}>
            {error ? <p color="red">Invalid credentials</p> : <></>}
            <label className={styles.formFieldLabel} htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className={styles.formFieldInput}
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formFieldLabel} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.formFieldInput}
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className={styles.formField}>
            <button className={styles.formFieldButton}>Sign In</button>{" "}
            <Link to="/login/sign-up" className={styles.formFieldLink}>
              Create an account
            </Link>
          </div>

          {/* <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </div> */}
        </form>
      </div>
    );
  }

export default SignInForm;

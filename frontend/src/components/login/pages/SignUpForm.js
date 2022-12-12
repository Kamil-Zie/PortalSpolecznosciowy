import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/login.module.css"
import { registerRequest } from "../../../managers/loginManager";

const SignUpForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [hasAgreed, setAgreed] = useState("false")

  const onSuccess = () =>
  {
    console.log("req")
  }

  const onFailure = () =>
  {
    console.log('fail')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    registerRequest(name, email, password, onSuccess, onFailure)
    console.log('dupa')
  }

    return (
      <div className={styles.formCenter} onSubmit={(event) => handleSubmit(event)}>
        <form className={styles.formFields}>
          <div className={styles.formField}>
            <label className={styles.formFieldLabel} htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.formFieldInput}
              placeholder="Enter your full name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
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
            <label className={styles.formFieldCheckboxLabel}>
              <input
                className={styles.formFieldCheckbox}
                type="checkbox"
                name="hasAgreed"
                value={hasAgreed}
                onChange={(event) => setAgreed(event.target.value)}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className={styles.formFieldTermsLink}>
                terms of service
              </a>
            </label>
          </div>

          <div className={styles.formField}>
            <button className={styles.formFieldButton}>Sign Up</button>{" "}
            <Link to="/login/sign-in" className={styles.formFieldLink}>
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }

export default SignUpForm;

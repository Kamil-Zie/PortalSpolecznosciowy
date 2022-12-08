import React, { Component } from "react";
import { Link, useHref } from "react-router-dom";
import styles from "../css/login.module.css"

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className={styles.formCenter}>
        <form className={styles.formFields} onSubmit={this.handleSubmit}>
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
              value={this.state.email}
              onChange={this.handleChange}
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
              value={this.state.password}
              onChange={this.handleChange}
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
}

export default SignInForm;

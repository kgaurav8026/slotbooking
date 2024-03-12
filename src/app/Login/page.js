"use client";

import React, { useRef, useState } from "react";
import classes from "./login.module.css";
import Button from "../components/Elements/Button";
import Navbar from "../components/Elements/Navigation";
import Form from "../components/Elements/Form";
import { signIn } from "../Firebase";

function Login() {
  const href = "/components/Home";
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      alert("Please enter a correct email address.");
    } else if (password === "") {
      alert("Please enter your password.");
    } else {
      signIn(email, password, href);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <form id="form" className={classes.form}>
          <Form
            formName="Email"
            type="email"
            inputRef={emailRef}
            value={email}
            setValue={setEmail}
          />
          <Form
            formName="Password"
            type="password"
            inputRef={passwordRef}
            value={password}
            setValue={setPassword}
          />
        </form>
        <div onClick={handleLogin} className={classes.buttons}>
          {Button("LOGIN", "")}
        </div>
        <div className={classes.forgotpw}>forgot password?</div>
      </div>
    </div>
  );
}

export default Login;

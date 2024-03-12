"use client";
import React, { useRef, useState } from "react";
import Navbar from "../components/Elements/Navigation";
import classes from "./register.module.css";
import Button from "../components/Elements/Button";
import Form from "../components/Elements/Form";
import { createUser } from "../Firebase";

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userRef = useRef(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Call your createUser function here
    createUser(email, password);
  };

  return (
    <div>
      <Navbar />
      <div>
        <form id="form" className={classes.form}>
          <h3>REGISTRATION FORM</h3>
          <Form
            formName="Username"
            type="text"
            inputRef={userRef}
            value={username}
            setValue={setUsername}
          />
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
          <div onClick={handleRegister} className={classes.buttons}>
            {Button("REGISTER", "")}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

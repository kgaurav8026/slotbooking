"use client"
import { useRef } from "react";
import Navbar from "../components/Elements/Navigation";
import classes from "./register.module.css";
import Button from "../components/Elements/Button";
import { createUser } from "../Firebase";

function Register() {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = async () => {
    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Call your createUser function here
    createUser(email, password);
  };

  return (
    <div>
      <Navbar />
      <div className={classes.forms}>
        <h2>REGISTRATION FORM</h2>
        <form id="register">
          <br />
          <label>
           USERNAME
            <input type="text" ref={usernameRef} />
          </label>
          <br />
          <label>
            EMAIL
            <input type="text" ref={emailRef} />
          </label>
          <br />
          <label>
            PASSWORD
            <input type="password" ref={passwordRef} />
          </label>
          <br />

          <div onClick={handleRegister}>
            {Button("REGISTER", "")}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

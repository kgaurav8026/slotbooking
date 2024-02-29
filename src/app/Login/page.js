"use client";
import pagestyles from "./login.module.css";
import Button from "../components/Elements/Button";
import Navbar from "../components/Elements/Navigation";
import Form from "../components/Elements/Form";
import { signIn } from "../Firebase";

// Initialize Firebase

function Login() {
  const href = "/components/Home"
  let data = { email: "", password: "" };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div>
      {Navbar("Admin Login", "", "")}
      <form id="form" className={pagestyles.form}>
        {Form("Email", "email", "email")}
        {Form("Password", "pw", "password")}
      </form>
      <div
        onClick={() => {
          data.email = document.getElementById("form").elements[0].value;
          data.password = document.getElementById("form").elements[1].value;
          if (!validateEmail(data.email)) {
            alert("Please enter correct email");
          } else if (data.password === "") {
            alert("Please enter password");
          } else {
            signIn(data.email, data.password,href);
            
          }
        }}
        className={pagestyles.buttons}
      >
        {Button("login", "")}
      </div>
      <div className={pagestyles.forgotpw}>forgot password?</div>
    </div>
  );
}

export default Login;

"use client";
import classses from "./login.module.css";
import Button from "../components/Elements/Button";
import Navbar from "../components/Elements/Navigation";
import Form from "../components/Elements/Form";
import { signIn } from "../Firebase";

// Initialize Firebase

function Login() {
  const href = "/components/Home";
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
      <Navbar/>
      <div>
        <form id="form" className={classses.form}>
          {Form("EMAIL", "email", "email")}
          {Form("PASSWORD", "pw", "password")}
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
              signIn(data.email, data.password, href);
            }
          }}
          className={classses.buttons}
        >
          {Button("LOGIN", "")}
        </div>
        <div className={classses.forgotpw}>forgot password?</div>
      </div>
    </div>
  );
}

export default Login;

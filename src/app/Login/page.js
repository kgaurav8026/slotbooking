'use client'
import pagestyles from "./login.module.css";
import Button from "../components/Elements/Button";
import Navbar from "../components/Elements/Navigation";
import Form from "../components/Elements/Form";
function Login() {
  return (
    <div>
      {Navbar("Admin Login","","")}
      <form id="form" className={pagestyles.form}>
        {Form("Email", "email", "email")}
        {Form("Password", "pw", "password")}
      </form>
      <div
        onClick={() => {
          let data = document.getElementById("form");
          console.log(data.elements[0].value);
        }}
        className={pagestyles.buttons}
      >
        {Button("login", "/components/Home")}
      </div>
      <div className={pagestyles.forgotpw}>forgot password?</div>
    </div>
  );
}
export default Login;

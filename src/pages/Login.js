import React, {useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./Login.module.css";

const Login = () => {
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const loginCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let email =enteredEmail.replace('@','').replace('.','');

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAtPE5V4PgE1oV8PXclyPU6LLYZUXB0XG0";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            alert(data.error.message);
          });
        }
      })
      .then((data) => {
        loginCtx.login(data.idToken, data.email);
        localStorage.setItem('email', email);
        history.replace("/store");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h2>Login</h2>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="passwprd"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button type="button" className={classes.toggle} onClick={submitHandler}>
            Login
          </button>
        </div>
      </form>
    </section>
  );
};
export default Login;
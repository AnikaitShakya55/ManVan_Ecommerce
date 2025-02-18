import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Store/Auth-Context";
import "./Login.css";

const AuthForm = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvGr36zSTrjBGtcICaKTzPWuRJ-EW8-aQ";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvGr36zSTrjBGtcICaKTzPWuRJ-EW8-aQ";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setIsLoading(false);
          return res.json();
        } else {
          setIsLoading(false);
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        ctx.login(data.idToken, data.email);
        console.log(data);

        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";

        navigate("/products", { replace: true });
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordInputRef}
              required
            />
          </div>
          <div className="actions">
            <button
              type="button"
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
            {!isLoading && (
              <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
            )}
            {isLoading && <button disabled>Loading...</button>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./Main.module.scss";

const Main = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // condtion to display LOGIN or REGISTER form
  const revealForm = (e) => {
    if (e.target.id === "login-text") {
      setShowRegister(false);
      setShowLogin(!showLogin);
    } else if (e.target.id === "register-text") {
      setShowLogin(false);
      setShowRegister(!showRegister);
    }
  };

  return (
    <main className={styles.mainPage}>
      <h1>Welcome</h1>
      <p>
        A simple todos app to keep track of all those fun or essential tasks
        that need to be done (even begrudgingly!!!)
      </p>
      <p>
        Please{" "}
        <span id="login-text" onClick={revealForm}>
          LOGIN
        </span>{" "}
        or{" "}
        <span id="register-text" onClick={revealForm}>
          REGISTER
        </span>
      </p>
      {showLogin && <Login />}
      {showRegister && <Register />}
    </main>
  );
};

export default Main;

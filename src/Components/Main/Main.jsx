import React, { useState } from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import styles from "./Main.module.scss";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {

  const [ errorMsg, setErrorMsg ] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // condtion to display LOGIN or REGISTER form
  const revealForm = (e) => {
    if (e.target.id === "login-text") {
      setErrorMsg('');
      setShowRegister(false);
      setShowLogin(!showLogin);
    } else if (e.target.id === "register-text") {
      setErrorMsg('');
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
      <p className={styles.mainPage__description}>
        Please{" "}
        <span id="login-text" onClick={revealForm}>
          LOGIN
        </span>{" "}
        or{" "}
        <span id="register-text" onClick={revealForm}>
          REGISTER
        </span>
      </p>
      {showLogin && <Login errorMsg={errorMsg} setErrorMsg={setErrorMsg} />}
      {showRegister && <Register errorMsg={errorMsg} setErrorMsg={setErrorMsg} />}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </main>
  );
};

export default Main;

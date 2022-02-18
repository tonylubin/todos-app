import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import Form from "../Form/Form";

const Login = () => {

  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();

    // grab email & password from form element
    const email = e.target.form[0].value;
    const password = e.target.form[1].value;

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/home");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (email.length < 1) {
          setErrorMessage(true);
        }
      });
  };

  return (
    <>
      <Form
        labelName="EMAIL"
        inputName="PASSWORD"
        action="Login"
        onClick={handleOnClick}
      />
      {errorMessage ? <p>Please enter a valid email address</p> : null}
    </>
  );
};

export default Login;
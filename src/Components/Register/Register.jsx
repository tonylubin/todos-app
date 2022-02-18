import React from "react";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.js';

const Register = () => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {

    e.preventDefault();

    const email = e.target.form[0].value;
    const password = e.target.form[1].value;

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email;
        alert(`Thank you for registering as a user with the email: ${user}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    navigate("/home");
  };

  return (
    <Form
      labelName="EMAIL"
      inputName="PASSWORD"
      action="Register"
      onClick={handleOnClick}
    />
  );
};

export default Register;

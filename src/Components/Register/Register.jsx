import React, { useContext } from "react";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.js';
import { UserContext } from "../../App";

const Register = () => {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  const handleOnClick = (e) => {

    e.preventDefault();

    const email = e.target.form[0].value;
    const password = e.target.form[1].value;

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user.setCurrentUser(userCredential.user.uid);
        const userGreetingName = userCredential.user.email;
        alert(`Thank you for registering as a user with the email: ${userGreetingName}`)
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

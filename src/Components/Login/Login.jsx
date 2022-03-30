import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import Form from "../Form/Form";
import { UserContext } from "../../App";

const Login = () => {

  const user = useContext(UserContext);

  // page navigation (router method)
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();

    // grab email & password from form element
    const email = e.target.form[0].value;
    const password = e.target.form[1].value;

    // instance of firebase auth & email/pwd authentication for logging in
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user.setCurrentUser(userCredential.user.uid);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
    </>
  );
};

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Form from "../Form/Form";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { cleanUpErrorMsg } from "../../util/functions";

const Login = ({ errorMsg, setErrorMsg }) => {
  

  // page navigation (router method)
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    e.preventDefault();

    // grab email & password from form element
    const email = e.target.form["EMAIL"].value;
    const password = e.target.form["PASSWORD"].value;

    // instance of firebase auth & email/pwd authentication for logging in
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {        
        setErrorMsg(cleanUpErrorMsg(error.message));
        console.log("Error Message: ", error.message, "Error Code: ", error.code);
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
      { errorMsg && <ErrorMsg message={errorMsg} /> }
    </>
  );
};

export default Login;

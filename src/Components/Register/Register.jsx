import React from "react";
import Form from "../Form/Form";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase.js';
import { toast } from "react-toastify";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
import { cleanUpErrorMsg } from "../../util/functions";


const Register = ({ errorMsg, setErrorMsg }) => {

  const navigate = useNavigate();;

  const handleOnClick = (e) => {

    e.preventDefault();

    const name = e.target.form['NAME'].value;
    const email = e.target.form['EMAIL'].value;
    const password = e.target.form['PASSWORD'].value;


    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {displayName: name});
        const userGreetingName = userCredential.user.email;       
        return userGreetingName;
      })
      .then((userEmail) => {
        toast.success(`Thank you for registering as a user with the email: ${userEmail}`, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        })
        setTimeout(() => navigate("/home"), 2500); // wait for toastify alert to finish      
      })
      .catch ((error) => {
        setErrorMsg(cleanUpErrorMsg(error.message));
        console.log("Error Message: ", error.message, "Error Code: ", error.code);
      })     
  };

  return (
    <>
      <Form
        name="NAME"
        labelName="EMAIL"
        inputName="PASSWORD"
        action="Register"
        onClick={handleOnClick}
      />
      { errorMsg && <ErrorMsg message={errorMsg} /> }
    </>
  );
};

export default Register;

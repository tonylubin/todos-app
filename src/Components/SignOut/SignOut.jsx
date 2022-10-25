import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignOut = () => {

  // for redirecting to another page(root/main page)
  const navigate = useNavigate();

  const handleLogOut = () => {

    signOut(auth)
      .then(() => {
        toast.success("You've successfully signed out", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <Button text="Log Out" onClick={handleLogOut} />;
};

export default SignOut;

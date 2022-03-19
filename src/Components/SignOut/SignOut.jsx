import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebase";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { toast } from "react-toastify";

const SignOut = () => {
  const user = useContext(UserContext);

  // for redirecting to another page(root/main page)
  const navigate = useNavigate();

  const handleLogOut = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        user.setCurrentUser();
        toast.success("You've successfully signed out", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
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

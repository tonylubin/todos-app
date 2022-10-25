import React from "react";
import { Navigate } from "react-router-dom";

const PrivatePage = ({ currentUser, children }) => {

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivatePage;

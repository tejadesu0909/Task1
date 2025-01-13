import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Get JWT from localStorage
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

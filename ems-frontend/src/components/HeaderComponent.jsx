import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear the token

    navigate("/");
  };

  return (
    <div>
      <header>
         <nav className="navbar navbar-dark bg-dark">
          {/* <a className="navbar-brand" href="http://www.gdninfo.net/"> */}
          {/* <a className="navbar-brand">
            Employee Management System
          </a> */} 
          {token && ( // Conditionally display the Logout button
            <button
              className="btn btn-outline-light"
              onClick={handleLogout}
              style={{ marginLeft: "auto" }}
            >
              Logout
            </button>
          )}
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;

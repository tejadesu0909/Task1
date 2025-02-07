import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

const Contactus = () => {
  const [auth, setAuth] = useState(false);
  const value = useContext(UserContext); // Use useContext to get the context value

  if (auth) return <Navigate to="/" />;

  return (
    <div>
      <div>{value}</div> {/* Render the context value */}
      <center>
        <button onClick={() => setAuth(true)}>Home page</button>
      </center>
      <h2>Contact Us</h2>
      <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
    </div>
  );
};

export default Contactus;

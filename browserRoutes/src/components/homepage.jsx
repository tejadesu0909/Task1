import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const homepage = () => {
  const [auth, setAuth] = useState(false);
  if (auth) return <Navigate to="/" />;


  
  return (
    <div>
      <h2> FAQs</h2>
      <center>
        <button onClick={() => setAuth(true)}>Home page</button>
      </center>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Consectetur nulla
        ultricies lorem etiam natoque. Egestas vulputate mus mus efficitur
        habitasse ultricies.
      </p>
    </div>
  );
};

export default homepage;

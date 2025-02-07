import { Link } from "react-router-dom";
import React from "react";




const navbar = () => {
  return (
    <div>
      <ul>
        <Link to="/homepage">
          <li>Any doubts</li>
        </Link>
        <Link to="/aboutus">
          <li>About us</li>
        </Link>
        <Link to="/contactus">
          <li>Contact us</li>
        </Link>
      </ul>
    </div> 
  );
};

export default navbar;

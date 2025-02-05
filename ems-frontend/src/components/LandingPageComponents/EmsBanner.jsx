import React from "react";
import EmsLogo from "../../assets/LandingPageAssets/emslogo.jpg";
import { Link } from 'react-router-dom'

const EMSBanner = () => {
  return (
    <div className="flex w-full items-center justify-center bg-gradient-to-r from-[#0A192F] to-[#172A45] py-6 text-center text-white">
      <div className="flex max-w-5xl items-center space-x-6 px-6">
        {/* Bigger EMS Logo */}
        <img src={EmsLogo} alt="EMS Logo" className="h-20 w-auto" />

        {/* Banner Content */}
        <p className="text-lg text-gray-300">
          <strong className="text-white">
            Revolutionize Workforce Management with EMS! 🚀
          </strong>{" "}
          <br />
          Discover the next level of efficiency for your organization.
        </p>

        {/* Call to Action */}
        <Link
          to="/GetStarted"
          className="ml-auto bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
        >
          Get Started →
        </Link>
        
      </div>
    </div>
  );
};

export default EMSBanner;

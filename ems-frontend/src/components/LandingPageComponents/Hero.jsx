import React from "react";
import heroBackground from "../../assets/LandingPageAssets/herobackground.jpg";


const Hero = () => {
  return (
    <section
      className="relative flex h-[70vh] w-full flex-col items-start justify-center px-12 text-white"
      style={{
        background: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-6 left-6 text-2xl font-semibold shadow-md">
        Employee Management System
      </div>
      <div className="relative z-10 max-w-[600px] rounded-lg p-6 text-white backdrop-blur-md">
        <p className="text-2xl font-semibold">
          "Great things in business are never done by one person. They’re done
          by a team of people."{" "}
        </p>
        <p className="text-xl font-semibold">– Steve Jobs</p>
      </div>
    </section>
  );
};

export default Hero;

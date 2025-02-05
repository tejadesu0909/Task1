import React from "react";

// import Logo1 from ".../assets/LandingPageAssets/company2.png";
import Logo1 from "../../assets/LandingPageAssets/company2.png";
import Logo2 from "../../assets/LandingPageAssets/company5.png"
import Logo3 from "../../assets/LandingPageAssets/copmany1.jpg";
import Logo4 from "../../assets/LandingPageAssets/copmany3.jpg";
import Logo5 from "../../assets/LandingPageAssets/copmany4.jpg";

const TrustedBy = () => {
  return (
    <div className="bg-gray-100 px-8 py-16 justify-center">
      <h2 className="text-center text-4xl font-bold text-black">
        Trusted By Leading Companies
      </h2>
      <div className="mt-15 flex flex-wrap justify-center items-center gap-50">
        <img src={Logo1} className="h-35 object-contain" alt="Company1" />
        <img src={Logo2} className="h-35 object-contain" alt="Company2" />
        <img src={Logo3} className="h-35 object-contain" alt="Company3" />
        <img src={Logo4} className="h-35 object-contain" alt="Company4" />
        <img src={Logo5} className="h-35 object-contain" alt="Company5" />
      </div>
    </div>
  );
};

export default TrustedBy;

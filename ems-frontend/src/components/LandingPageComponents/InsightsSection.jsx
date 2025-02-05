import React from "react";
import { Link } from "react-router-dom";

const InsightsSection = () => {
  const insights = [
    {
      title: "Optimize Employee Productivity",
      buttonText: "Learn More",
      link: "/LearnMore",
    },
    {
      title: "Seamless Payroll & Benefits",
      buttonText: "Explore Features",
      link: "/ExploreFeatures",
    },
    {
      title: "Advanced Workforce Analytics",
      buttonText: "See Reports",
      link: "/SeeReports",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-white px-12 py-16 md:flex-row">
        <div className="w-full md:w-1/6 ">
      <h2 className="text-4xl font-bold text-black">
        {" "}
        Insights that Empower Workforce Management
      </h2>
      </div>


      <div className="w-full md:w-2/8 space-y-6">
      {insights.map((item,index)=> (
        <div key = {index} className="flex justify-between items-center">
            <p className="text-xl font-semibold text-black">
                {item.title}
            </p>
            <Link
              to = {item.link}
              className="w-40 bg-black text-white text-sm font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition flex justify-center items-center"
            >
              {item.buttonText}
            </Link>
            </div>
      ))}
      </div>
    </section>
  );
};

export default InsightsSection;

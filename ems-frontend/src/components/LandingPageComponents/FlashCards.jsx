import React, { useState } from "react";

const Flashcards = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const updatedFlips = [...prev];
      updatedFlips[index] = !updatedFlips[index];
      return updatedFlips;
    });
  };

  const cards = [
    {
      title: "Employee Management",
      frontText: "Manage Employees Efficiently",
      backText: "Track employee details, performance, and growth with our intuitive platform.",
    },
    {
      title: "Payroll & Benefits",
      frontText: "Automate Payroll & Benefits",
      backText: "Seamlessly handle payroll processing, deductions, and benefits for employees.",
    },
    {
      title: "Analytics & Reports",
      frontText: "Get Actionable Insights",
      backText: "Generate real-time reports and analytics to improve workforce efficiency.",
    },
  ];

  return (
    <div className="flex justify-center space-x-6 mt-12 py-12 ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative w-80 h-80 cursor-pointer"
          onClick={() => handleFlip(index)}
          style={{ perspective: "1000px" }} 
        >
          {/* 3D Flip Container */}
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
              flipped[index] ? "rotate-y-180" : ""
            }`}
            style={{
              transformStyle: "preserve-3d", 
            }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-purple-700 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-6"
              style={{
                backfaceVisibility: "hidden", 
                transform: flipped[index] ? "rotateY(180deg)" : "rotateY(0deg)", 
              }}
            >
              <h3 className="text-2xl font-bold">{card.title}</h3>
              <p className="text-lg mt-2">{card.frontText}</p>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-purple-700 text-white flex flex-col items-center justify-center rounded-lg shadow-lg p-6"
              style={{
                backfaceVisibility: "hidden", 
                transform: "rotateY(180deg)", 
              }}
            >
              <p className="text-lg text-center">{card.backText}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flashcards;

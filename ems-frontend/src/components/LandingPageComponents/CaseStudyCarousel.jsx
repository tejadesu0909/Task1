import React from "react";
import Slide1Image from "../../assets/LandingPageAssets/emsSlide1.png";
import Slide2Image from "../../assets/LandingPageAssets/emsSlide1.png";
import { useState } from "react";
import { use } from "react";

const CaseStudyCarousel = () => {
  const slides = [
    {
      title: "Slide 1",
      mediaUrl: Slide1Image,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Libero id dui fringilla nisl lacinia nam sollicitudin vehicula. Enim sodales finibus suspendisse venenatis venenatis odio etiam praesent sollicitudin? Faucibus faucibus eros ornare, mattis lectus penatibus ultrices.",
    },
    {
      title: "Slide 2",
      mediaUrl: Slide2Image,
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Auctor curabitur ac urna non varius pharetra viverra. Habitant justo duis cubilia quisque eros; imperdiet suspendisse.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="relative flex items-center justify-center bg-gray-100 px-12 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="w-full md:w-1/2">

      <h2 className="text-4xl font-bold text-black">
          {slides[currentIndex].title}
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          {slides[currentIndex].description}
        </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-end items-center align-middle">
          {slides[currentIndex].type === "video" ? (
            <video className="rounded-lg shadow-lg w-full max-w-lg" controls>
              <source src={slides[currentIndex].mediaUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={slides[currentIndex].mediaUrl}
              alt="Case Study"
              className="rounded-lg shadow-lg w-full max-w-lg "
            />
          )}
        </div>
       
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-gray-200 p-3 hover:bg-gray-300 md:left-12"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-gray-200 p-3 hover:bg-gray-300 md:right-12"
          onClick={nextSlide}
        >
          ❯
        </button>

        {/* Dots for Indicators */}
        <div className="absolute bottom-4 flex space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${
                currentIndex === index ? "bg-purple-600" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCarousel;

import React from "react";
import heroIcon from "../assets/hero_icon.png";
import flipkartIcon from "../assets/flipkart.png";
import AmazonIcon from "../assets/amazon.png";

const HeroSection = () => {
  return (
    <main className="mx-auto max-w-full px-4 py-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full">
        <div className="hero-content w-full md:w-1/2 flex flex-col gap-8 items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="w-full md:w-96 text-gray-600 font-semibold">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div className="hero-btn flex gap-5 mt-4">
            <button className="bg-red-700 text-white text-xl md:text-2xl px-6 py-2 font-semibold">
              Shop Now
            </button>
            <button className="border border-black text-gray-700 text-xl md:text-2xl px-6 py-2 font-semibold hover:bg-gray-100">
              Category
            </button>
          </div>

          <div className="shopping mt-4">
            <p className="text-sm mb-2">Also Available On</p>
            <div className="brand-icons flex justify-center gap-4">
              <img
                src={flipkartIcon}
                alt="flipkart-logo"
                className="h-8 w-auto"
              />
              <img src={AmazonIcon} alt="amazon-logo" className="h-8 w-auto" />
            </div>
          </div>
        </div>
        <div className="hero-image mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
          <img
            src={heroIcon}
            alt="hero-image"
            className="h-auto md:h-full w-full md:w-auto"
          />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;

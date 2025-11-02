import React, { useState, useEffect } from "react";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setIsFixed(offset > 60); // Set threshold for fixed position
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`bg-customBlue text-white text-base leading-[1.6em] h-[64px] relative z-50 transition-all duration-300 ${
        isFixed ? "fixed top-0 left-0 right-0 shadow-lg" : "sticky top-0"
      }`}
    >
      <div className="flex justify-center items-center opacity-100 py-3 px-[56px] max-w-[1240px] w-full">
        <div className="text-[14px] text-center">
          <strong className="text-[16px]">Christmas Came Early🎄: </strong>
          Get 35% More Conversions by Our Free GA4 Audit
        </div>
        <a
          href="/"
          rel="noopener noreferrer"
          className="bg-[#f3f1ff] text-customBlue text-[14px] font-medium leading-[1rem] ml-4 px-6 py-3 rounded-[80px] hover:bg-customBlue2 hover:text-white"
        >
          Book A Call
        </a>

        <img
          src="/images/close.svg"
          alt="Close"
          className="cursor-pointer max-w-full absolute right-8 transition-transform duration-200 ease-in-out transform-gpu hover:scale-90"
          onClick={handleClose}
        />
      </div>
    </div>
  );
};

export default TopBar;

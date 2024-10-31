import React from "react";

const TechItem = ({ imageSrc, altText, techName }) => {
  return (
    <div
      style={{
        textShadow: "0 4px 7px #0707210d",
        letterSpacing: "-0.02em",
      }}
      className="flex flex-col justify-center items-center w-[84px] h-[84px] pt-2.5 pb-2.5 transition-shadow overflow-hidden shadow-[0_4px_7px_rgba(7,7,33,0.05)]"
    >
      <img
        src={imageSrc}
        alt={altText}
        className="w-[48px] h-[48px] max-w-full"
      />
      <div className="mt-1.5 text-[12px] text-customBlue3 leading-[15px]">
        {techName}
      </div>
    </div>
  );
};

export default TechItem;

import React from "react";

const AchievementCard = ({ number, description, symbol }) => {
  return (
    <div
      style={{
        textShadow: "0 3px 6px #302cff1c",
        letterSpacing: "-0.02em",
      }}
      className="flex justify-center items-center px-12 pt-[57px] pb-[54px] rounded-[36px] border-[0.5px] border-customBlue6 overflow-hidden"
    >
      <div className="text-left text-[64px] font-bold mr-5 text-customBlue4">
        {number}
        <span className="accent-text-color text-customBlue">{symbol}</span>
      </div>
      <div className="max-w-[296px]">
        <h3 className="text-customBlue2 my-0 text-[24px] font-bold">
          {description}
        </h3>
      </div>
    </div>
  );
};

export default AchievementCard;

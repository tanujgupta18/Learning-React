import React from "react";
import AchievementCard from "./AchievementCard";

const AchievmentSection = () => {
  return (
    <div className="py-20 leading-[1.687em]">
      <div className="mb-12 text-center max-w-[458px] mx-auto px-6 ">
        <div className="text-center tracking-[-0.02em] mb-6 ml-0 text-[24px] font-normal leading-[1em] text-customBlue no-underline block static opacity-100">
          Our impact in numbers
        </div>
        <h2
          style={{
            textShadow: "0 3px 6px #302cff1c",
            letterSpacing: "-0.02em",
          }}
          className="text-center text-customBlue2 text-[38px] font-bold mt-0 mb-4 leading-[1.3em]"
        >
          Great work produces great results.
        </h2>
      </div>
      <div className="flex flex-col max-w-[1257px] my-0 mx-auto pb-0 px-6 ">
        <div className="grid grid-cols-2 grid-rows-auto-rows auto-cols-fr gap-x-[27px] gap-y-[25px] opacity-100">
          <AchievementCard
            number={125}
            description="Mobile apps and websites developed"
            symbol="+"
          />
          <AchievementCard
            number={10}
            description="Years of in-market experience"
            symbol="+"
          />
          <AchievementCard
            number={57}
            description="Users using products built by us"
            symbol="M"
          />
          <AchievementCard
            number={93}
            description="Client retention rate"
            symbol="%"
          />
        </div>
      </div>
    </div>
  );
};

export default AchievmentSection;

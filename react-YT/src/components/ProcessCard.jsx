import React from "react";

const ProcessCard = ({ number, title, description, imageSrc }) => {
  return (
    <div className="flex justify-start items-start border-[0.5px] border-customBlue5 rounded-[36px] pt-[49px] pb-[56px] px-12">
      <img
        src={imageSrc}
        alt=""
        className="rounded-[20px] w-[50px] h-[50px] mr-7 mt-0 pb-0 text-[24px]"
      />
      <div className="text-left mt-0 pt-[7px]">
        <h3
          style={{
            letterSpacing: "-0.02em",
          }}
          className="text-customBlue4 text-[24px] font-bold mt-0 mb-[11px] leading-[1.4em]"
        >
          {number}. {title}
        </h3>
        <p className="my-0">{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;

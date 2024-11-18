import React from "react";

const ServiceCard = ({ imageSrc, title, description, link }) => {
  return (
    <a
      href={link}
      style={{ textShadow: "0 3px 6px #302cff1c" }}
      className="cursor-pointer items-center h-full mx-auto pt-10 pb-[43px] px-[23px] no-underline rounded-[36px] overflow-hidden bg-white border-[0.5px] border-neutral-300 transition-transform duration-[350ms] ease-in transform hover:scale-95 hover:shadow-lg"
    >
      <div className="mx-auto max-w-[940px] h-[150px] block">
        <img
          src={imageSrc}
          className="w-[200px] h-[150px] mb-0 mx-auto pb-5 item flex items-center overflow-normal border-0 rounded-full"
          alt={title}
        />
      </div>
      <div className="w-[337.67px] h-[282px]">
        <h2 className="-mx-6 mb-4 text-[24px] w-[385px] h-[33px] font-bold leading-[1.416em] text-customBlue4 text-center hover:text-customBlue">
          {title}
        </h2>
        <p className="text-center mt-0 mb-8 mx-0 text-customBlue2 w-[337.667px] leading-[26.992px]">
          {description}
          <br />
        </p>
        <div className="text-customBlue border-[0.5px] border-customBlue py-[22px] px-8 rounded-[10px] text-[20px] text-center leading-[20px] transition-all duration-[200ms] ease-in transform hover:scale-95 hover:bg-customBlue hover:text-white">
          Contact Us
        </div>
      </div>
    </a>
  );
};

export default ServiceCard;

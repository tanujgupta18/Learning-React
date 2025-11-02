import React from "react";

const LogoRow = ({ logos }) => {
  return (
    <div className="logo-row flex">
      {logos.map((logo, index) => (
        <div className="logo-div w-[240px] h-[94px] py-2.5" key={index}>
          <img
            src={logo}
            alt={`Logo ${index + 1}`}
            className="logo-img w-[188px] h-[74px]"
          />
        </div>
      ))}
    </div>
  );
};

export default LogoRow;

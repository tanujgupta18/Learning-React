import React from "react";

const WhyChoose = () => {
  return (
    <div className="bg-customBlue4 py-20 w-[1263px] h-[570px] ">
      <div className="flex flex-col px-6 pb-0 max-w-[1257px] items-center mt-0 mx-auto">
        <div className="flex justify-between items-center">
          <img
            src="/images/whychoose.jpeg"
            className="rounded-[10px] w-auto h-auto max-w-full max-h-[337px] mr-10 relative "
            alt="whychoose img"
          />
          <div className=" max-w-[543px] h-[400px]">
            <div className="text-left text-[30px] text-white opacity-100 transform preserve-3d pb-4">
              Why choose us?
            </div>
            <h2
              style={{
                textShadow: "0 3px 6px #302cff1c",
                letterSpacing: "-0.02em",
              }}
              className="text-white text-[38px] mt-0 mb-4 font-bold leading-[1.368em] opacity-100 transform preserve-3d"
            >
              We are a team of skilled IT professionals.
            </h2>
            <p
              style={{
                letterSpacing: "-0.16px",
              }}
              className="mb-10 text-customBlue5 leading-[26.9px] opacity-100 transform preserve-3d"
            >
              For the past 11+ years, we have been helping more than 175+ B2B
              companies outsource their IT development with a proven record of
              timely delivery and maintaining high quality.
              <br />
              Whether you are stuck in between of your development process or
              you only have an idea, we got you.
            </p>
            <div className="flex justify-start items-center">
              <a
                href="/"
                className="cursor-pointer bg-customBlue text-white no-underline border-0 text-center rounded-[10px] mr-[26px] px-8 py-[22px] leading-4 transition-all duration-[200ms] ease-in transform hover:scale-95 hover:shadow-lg hover:bg-customBlue2 hover:text-white"
              >
                Contact Us
              </a>
              <a
                href="/"
                className="cursor-pointer bg-customBlue4 text-customBlue no-underline border-[0.5px] border-customBlue text-center rounded-[10px] px-8 py-[22px] leading-4 transition-all duration-[200ms] ease-in transform hover:scale-95 hover:shadow-lg hover:bg-customBlue hover:text-white"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;

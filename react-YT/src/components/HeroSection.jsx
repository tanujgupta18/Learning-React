const HeroSection = () => {
  return (
    <div
      style={{
        wordSpacing: "-0.16px",
      }}
      className="section-hero pt-[80px] pb-10 overflow-hidden w-[1263px] h-[666px]"
    >
      <div className="flex flex-col px-6 my-0 mx-auto">
        <div className="flex mb-10">
          <div className="flex flex-col max-w-[480px] px-0 ml-2.5 mr-0">
            <p
              style={{
                wordSpacing: "-2px",
              }}
              className="text-customBlue text-[24px] leading-[24px] pb-4"
            >
              Full stack technology agency
            </p>
            <h1
              style={{
                textShadow: "0 3px 6px #302cff1c",
                wordSpacing: "1px",
              }}
              className="text-[46px] font-bold no-underline text-customBlue2 -mr-[157px] mb-4 ml-0 pb-0 leading-[1.3] tracking-[-0.02em] "
            >
              We are a team of Full-Stack MarTech Experts
            </h1>
            <p className="max-w-[451px] mb-[39px] mr-0 text-gray-600">
              People who understand the science of using data to build
              consistent revenue growth engines.
            </p>
            <div className="flex gap-x-6">
              <button className="text-white text-center bg-customBlue rounded-lg px-8 py-5 font-medium leading-none  transition-all duration-[150ms] ease-in transform hover:scale-95 hover:shadow-lg hover:bg-customBlue2">
                Get free estimation
              </button>

              <button className="text-customBlue text-center bg-transparent border border-customBlue rounded-lg px-8 py-5 text-base leading-none transition-all duration-[200ms] ease-in transform hover:scale-95 hover:bg-customBlue hover:text-white">
                Our Work
              </button>
            </div>
          </div>
          <img
            className="w-[1000px] h-[500px]"
            src="/images/hero.svg"
            alt="hero-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

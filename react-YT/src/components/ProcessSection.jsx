import React from "react";
import ProcessCard from "./ProcessCard";

const ProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      title: "Project Scoping",
      description:
        "Our process starts with discovery calls covering your business's vision and the goals that you want to achieve with the software product. A free detailed estimation sheet is provided at the end.",
      imageSrc: "/images/scope.svg",
    },
    {
      number: 2,
      title: "Roadmap Planning",
      description:
        "Once we have a clear understanding of your needs, our design team creates prototypes to visualize your product and ensure alignment before development begins.",
      imageSrc: "/images/roadmap.svg",
    },
    {
      number: 3,
      title: "Development Execution",
      description:
        "Our team leverages the latest technologies available to bring your vision to life. We maintain complete transparency during the development process so that you have complete control over the product lifecycle.",
      imageSrc: "/images/dev.svg",
    },
    {
      number: 4,
      title: "Launch & Scale",
      description:
        "After thorough testing, we launch your product and provide ongoing support to ensure it meets your evolving needs.",
      imageSrc: "/images/check.svg",
    },
  ];

  return (
    <div className="py-20 leading-[1.687em]">
      <div className="mb-12 text-center max-w-[900px] mx-auto px-6 relative flex flex-col justify-start">
        <div className="text-center tracking-[-0.02em] mb-6 ml-0 text-[24px] font-normal leading-[1em] text-customBlue no-underline block static opacity-100">
          Our Process
        </div>
        <h2
          style={{
            textShadow: "0 3px 6px #302cff1c",
            letterSpacing: "-0.02em",
          }}
          className="text-center text-customBlue2 text-[38px] font-bold mt-0 mb-4 leading-[1.3em]"
        >
          We have a simple, yet robust
          <br />
          and effective process.
        </h2>
        <p className="text-customBlue2 my-0">
          We consult, build and ship successful software products.
        </p>
      </div>
      <div className="flex flex-col items-center my-0 pt-0 px-6 max-w-[1257px]">
        <div className="grid grid-cols-2 gap-[27px] mb-[48px] auto-rows-auto">
          {processSteps.map((step) => (
            <ProcessCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              imageSrc={step.imageSrc}
            />
          ))}
        </div>
        <div className="flex flex-col text-center">
          <a
            href="/"
            className="cursor-pointer bg-customBlue text-white no-underline border-0 items-center rounded-[10px] font-medium w-[200px] px-8 py-[22px] leading-4 transition-all duration-[350ms] ease-in transform hover:scale-95 hover:shadow-lg hover:bg-customBlue2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

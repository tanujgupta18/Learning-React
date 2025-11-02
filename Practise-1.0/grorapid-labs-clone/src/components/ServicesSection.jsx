import React from "react";
import ServiceCard from "./ServiceCard"; // Adjust the path as necessary

const ServicesSection = () => {
  const services = [
    {
      imageSrc: "/images/grid1.svg",
      title: "Google Analytics Setup",
      description:
        "Precise tracking with our Google Analytics GA4 and GTM setup services. From ecommerce tracking to SaaS analytics on Webflow, we ensure your data is configured for better conversions.",
      link: "/",
    },
    {
      imageSrc: "/images/grid2.svg",
      title: "HubSpot Onboarding and Implementation",
      description: (
        <>
          <br />
          As esteemed HubSpot partners, we provide customised solutions
          carefully built to enhance sales efficiency and propel revenue
          growth.‍
          <br />
        </>
      ),
      link: "/",
    },
    {
      imageSrc: "/images/grid3.svg",
      title: "Web app development",
      description:
        "Poor user experience repels potential customers, we help you build progressive and responsive web apps using custom code, boilerplates, open source, or self-hosted codebases.",
      link: "/",
    },
    {
      imageSrc: "/images/grid4.svg",
      title: "No-Code development",
      description:
        "When it comes to early stages MVP development, no-code app development should be your go to choice and we will help you with there.",
      link: "/",
    },
    {
      imageSrc: "/images/grid5.svg",
      title: "Automations & Integrations",
      description: (
        <>
          Leverage multiple apps and automate tedious tasks to boost your team’s
          efficiency and nurture customer relationships effectively.
          <br />
        </>
      ),
      link: "/",
    },
    {
      imageSrc: "/images/grid6.svg",
      title: "CRM solutions",
      description:
        "Through the right use of tools like Hubspot, Salesforce &amp; Zoho, we will help make your conversion rates soar by tracking and optimize user journeys.",
      link: "/",
    },
  ];

  return (
    <div className="pt-[94px] pb-20 block w-[1263px] h-[1522px] leading-[1.6]">
      <div className="items-center mb-12 max-w-[761px] mx-auto px-6">
        <div className="text-center tracking-[-0.02em] mb-6 ml-0 text-[24px] font-normal leading-[1em] text-customBlue no-underline block static opacity-100">
          Our Services
        </div>
        <h1
          style={{ textShadow: "0 3px 6px #302cff1c", wordSpacing: "-0.72px" }}
          className="text-center text-customBlue2 text-[36px] font-bold mt-0 mb-5 leading-[1.3]"
        >
          From ideation to deployment
          <br />
          we've got you.
        </h1>
      </div>
      <div className="flex flex-col items-center max-w-[1257px] mx-auto pb-0 px-[24px]">
        <div className="grid grid-cols-3 gap-x-[27px] gap-y-[40px] auto-columns pb-14">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex flex-col text-center">
          <a
            href="/"
            className="cursor-pointer bg-customBlue text-white no-underline border-0 items-center rounded-[10px] font-medium w-[200px] px-8 py-[22px] leading-4 transition-all duration-[350ms] ease-in transform hover:scale-95 hover:shadow-lg hover:bg-customBlue2"
          >
            Our services
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

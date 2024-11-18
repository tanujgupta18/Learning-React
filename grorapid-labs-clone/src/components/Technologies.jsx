import React from "react";
import TechItem from "./TechItem";

const Technologies = () => {
  const techCategories = [
    {
      title: "Web App Development",
      techData: [
        {
          imageSrc: "/images/NodeJS.svg",
          altText: "NodeJS",
          techName: "NodeJS",
        },
        {
          imageSrc: "/images/reactJs.webp",
          altText: "ReactJS",
          techName: "ReactJS",
        },
        { imageSrc: "/images/HTML.svg", altText: "HTML5", techName: "HTML5" },
        {
          imageSrc: "/images/NextJS.svg",
          altText: "NextJS",
          techName: "NextJS",
        },
        {
          imageSrc: "/images/jamstack.webp",
          altText: "Jamstack",
          techName: "Jamstack",
        },
        { imageSrc: "/images/java.webp", altText: "Java", techName: "Java" },
        {
          imageSrc: "/images/tailwind.webp",
          altText: "Tailwind",
          techName: "Tailwind",
        },
      ],
    },
    {
      title: "Mobile App Development",
      techData: [
        {
          imageSrc: "/images/Xamarin.webp",
          altText: "Xamarin",
          techName: "Xamarin",
        },
        {
          imageSrc: "/images/Kotlin.webp",
          altText: "Kotlin",
          techName: "Kotlin",
        },
        {
          imageSrc: "/images/Objective C.svg",
          altText: "Objective C",
          techName: "Objective C",
        },
        {
          imageSrc: "/images/Flutter.webp",
          altText: "Flutter",
          techName: "Flutter",
        },
        { imageSrc: "/images/Swift.png", altText: "Swift", techName: "Swift" },
        {
          imageSrc: "/images/ReactNative.png",
          altText: "React Native",
          techName: "React Native",
        },
      ],
    },
    {
      title: "No-Code Development",
      techData: [
        {
          imageSrc: "/images/bubble.png",
          altText: "Bubble",
          techName: "Bubble",
        },
        { imageSrc: "/images/glide.png", altText: "Glide", techName: "Glide" },
        {
          imageSrc: "/images/webflow.png",
          altText: "Webflow",
          techName: "Webflow",
        },
        {
          imageSrc: "/images/squarespace.png",
          altText: "Squarespace",
          techName: "Squarespace",
        },
        {
          imageSrc: "/images/airtable.png",
          altText: "Airtable",
          techName: "Airtable",
        },
        {
          imageSrc: "/images/zapier.png",
          altText: "Zapier",
          techName: "Zapier",
        },
      ],
    },
    {
      title: "Cloud Platforms",
      techData: [
        { imageSrc: "/images/gcp.png", altText: "GCP", techName: "GCP" },
        { imageSrc: "/images/aws.png", altText: "AWS", techName: "AWS" },
        { imageSrc: "/images/azure.png", altText: "Azure", techName: "Azure" },
        {
          imageSrc: "/images/digitalOcean.png",
          altText: "DigitalOcean",
          techName: "Digital Ocean",
        },
        {
          imageSrc: "/images/heroku.png",
          altText: "Heroku",
          techName: "Heroku",
        },
      ],
    },
  ];

  return (
    <div className="py-20 leading-[1.687em]">
      <div className="mb-12 text-center max-w-[900px] mx-auto px-6">
        <div className="text-center mb-6 text-[24px] font-normal leading-[1em] text-customBlue">
          Technologies
        </div>
        <h2
          className="text-center text-customBlue2 text-[38px] font-bold mt-0 mb-4 leading-[1.3em]"
          style={{
            textShadow: "0 3px 6px #302cff1c",
            letterSpacing: "-0.02em",
          }}
        >
          We use trusted technologies for NoCode, LowCode & Custom code
        </h2>
      </div>

      <div className="max-w-[761px] mx-auto px-6">
        <p className="text-customBlue2 my-0 text-center">
          We utilize modern technology for product development, whether it's for
          no-code, low-code, or custom-code solutions. Unleash your creativity
          and efficiency without compromising quality.
        </p>

        {techCategories.map(({ title, techData }, index) => (
          <div key={index} className="mt-10">
            <h3 className="text-customBlue4 mt-0 mb-[11px] font-bold text-[24px]">
              {title}
            </h3>
            <div className="grid gap-[24px] grid-cols-7 auto-rows-auto mt-[18px] mb-[48px]">
              {techData.map((tech, index) => (
                <TechItem
                  key={index}
                  imageSrc={tech.imageSrc}
                  altText={tech.altText}
                  techName={tech.techName}
                />
              ))}
            </div>
            <div className="divider my-[60px] w-full h-[1px] bg-customBlue6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

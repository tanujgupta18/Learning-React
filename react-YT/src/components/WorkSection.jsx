import React from "react";

const WorkSection = () => {
  return (
    <div className="py-40 block w-[1263px]">
      <div className="max-w-[940px] mx-auto block">
        <div className="block items-center mb-14 max-w-[761px] mx-[90px] px-6">
          <div
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
            className="text-center tracking-[-0.02em] mb-6 ml-0 text-[24px] font-normal leading-[1em] text-customBlue no-underline block static opacity-100"
          >
            Our Work
          </div>
          <h1
            style={{
              textShadow: "0 3px 6px #302cff1c",
              wordSpacing: "-0.72px",
            }}
            className="text-center text-customBlue2 text-[36px] font-bold mt-0 mb-5 leading-[1.3]"
          >
            Browse some of our past successful projects
          </h1>
        </div>
        <div className="w-[940px]">
          <div className="-mx-[10px] flex gap-2">
            <div className="w-1/2 float-left px-2.5 relative leading-6">
              <div>
                <img
                  className="max-w-full inline-block border-none"
                  src="/images/Publsh.png"
                  alt="Publsh"
                />
                <div className="text-left mt-0 py-5">
                  <div className="flex justify-center bg-gray-100 w-[150px] h-[30px] mb-[10px] rounded-2xl">
                    <div className="px-0">Publsh</div>
                  </div>
                  <h3 className="mt-0 mb-[11px] text-[24px] font-bold leading-[1.4] text-customBlue2">
                    Using Reverse Proxy Solutions to Solve SEO Challenges for
                    Publsh.ai
                  </h3>
                  <p
                    style={{
                      wordSpacing: "1px",
                    }}
                    className="mb-0 flex flex-wrap text-[rgb(80,80,126)]"
                  >
                    Resolved a complex multi-domain issue, integrating Webflow
                    with Next.js to enhance website performance and user
                    experience using Cloudflare Workers.
                  </p>
                  <a
                    href="#"
                    className="mt-2.5 max-w-full inline-block no-underline text-customBlue"
                  >
                    <div>
                      <div
                        style={{
                          wordSpacing: "1px",
                        }}
                        className="flex-wrap inline-block no-underline leading-[26.9px]"
                      >
                        Read case study
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/6529762860f5d2796d4eb420/66150e20e115260c73b022e0_Icon%20(1).svg"
                        className="ml-[5px] max-w-full inline-block pl-5px"
                        loading="lazy"
                        alt="arrow svg"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 float-left px-2.5 relative leading-6">
              <div>
                <img
                  className="max-w-full inline-block border-none"
                  src="/images/Private Bank.png"
                  alt="Private Bank"
                />
                <div className="text-left mt-0 py-5">
                  <div className="flex justify-center bg-gray-100 w-[150px] h-[30px] mb-[10px] rounded-2xl">
                    <div className="px-0">Private Bank</div>
                  </div>
                  <h3 className="mt-0 mb-[11px] text-[24px] font-bold leading-[1.4] text-customBlue2">
                    AI-based Chatbot for a Private Bank
                  </h3>
                  <p
                    style={{
                      wordSpacing: "-0.16px",
                    }}
                    className="my-0 flex flex-wrap text-[rgb(80,80,126)]"
                  >
                    We helped a private bank resolve 10,00,000 queries per month
                    by building an automated query resolution management system
                    with AI.
                  </p>
                  <a
                    href="#"
                    className="mt-2.5 max-w-full inline-block no-underline text-customBlue"
                  >
                    <div>
                      <div
                        style={{
                          wordSpacing: "1px",
                        }}
                        className="flex-wrap inline-block no-underline leading-[26.9px]"
                      >
                        Read case study
                      </div>
                      <img
                        src="https://cdn.prod.website-files.com/6529762860f5d2796d4eb420/66150e20e115260c73b022e0_Icon%20(1).svg"
                        className="ml-[5px] max-w-full inline-block pl-5px"
                        loading="lazy"
                        alt="arrow svg"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-5 items-center">
          <button className="text-customBlue text-center bg-transparent border border-customBlue rounded-lg px-8 py-5 text-base leading-none transition-all duration-[350ms] ease-in transform hover:scale-105 hover:bg-customBlue hover:text-white">
            View all case studies
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

import React from "react";

const WorkSection = () => {
  return (
    <div className="py-40">
      <div className="max-w-[940px] mx-auto block">
        <div className="items-center mb-14 max-w-[761px] mx-auto px-6">
          <div
            className="text-center tracking-[-0.02em] mb-6 ml-0 text-[24px] font-normal leading-[1em] text-customBlue no-underline block static opacity-100"
            style={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            Our Work
          </div>
          <h1
            style={{
              textShadow: "0 3px 6px #302cff1c",
              wordSpacing: "1px",
            }}
            className="text-center text-customBlue2 text-[36px] font-bold mt-0 mb-5 leading-[1.3]"
          >
            Browse some of our past successful projects
          </h1>
        </div>
        <div>
          <div className="-mx-[10px]">
            <div className="w-1/2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;

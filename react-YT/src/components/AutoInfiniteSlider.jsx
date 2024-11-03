import React, { useEffect, useRef } from "react";
import LogoRow from "./LogoRow";

const AutoInfiniteSlider = () => {
  const row1Logos = [
    "/images/mba&beyond.png",
    "/images/ais.png",
    "/images/SHL.png",
    "/images/ev-hair.png",
    "/images/binary.png",
    "/images/expertTal.png",
  ];

  const row2Logos = [
    "/images/3cloud.png",
    "/images/xoxoday.png",
    "images/kennect.png",
    "images/artysta.png",
    "images/beat.png",
  ];

  const row3Logos = [
    "/images/polester.png",
    "/images/publsh..png",
    "images/roombae.png",
    "images/lal10.png",
    "images/tern.png",
  ];

  const sliderRefs = [useRef(null), useRef(null), useRef(null)];
  const scrollIntervals = [useRef(null), useRef(null), useRef(null)];
  const speed = 0.35;

  useEffect(() => {
    const startAutoScroll = (index) => {
      if (sliderRefs[index].current) {
        const logos =
          index === 0 ? row1Logos : index === 1 ? row2Logos : row3Logos;
        const totalWidth = logos.length * 100;
        sliderRefs[index].current.style.width = `${totalWidth}vw`;
        sliderRefs[index].current.style.display = "flex";

        let offset = 0;

        scrollIntervals[index].current = setInterval(() => {
          offset += speed;
          sliderRefs[
            index
          ].current.style.transform = `translateX(-${offset}px)`;

          if (offset >= sliderRefs[index].current.offsetWidth / 2) {
            offset = 0;
            sliderRefs[index].current.style.transform = `translateX(0)`;
          }
        }, 10);
      }
    };

    startAutoScroll(0); // Left
    startAutoScroll(1); // Right
    startAutoScroll(2); // Left

    return () => {
      scrollIntervals.forEach((interval) => clearInterval(interval.current));
    };
  }, [row1Logos, row2Logos, row3Logos]);

  return (
    <div className="Auto Slider">
      <div className="pt-10 mx-auto w-4/5">
        <div
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            letterSpacing: "-0.02em",
          }}
          className="text-center tracking-[-0.02em] mb-6 ml-0 text-[24px] font-normal leading-[1em] text-customBlue no-underline block static opacity-100"
        >
          We are trusted by
        </div>
      </div>
      <div className="pb-10 overflow-hidden">
        <div className="flex flex-col">
          {[row1Logos, row2Logos, row3Logos].map((logos, index) => (
            <div key={index} className="overflow-hidden pb-[5px]">
              <div ref={sliderRefs[index]} className="flex whitespace-nowrap">
                <LogoRow logos={logos} />
                <LogoRow logos={logos} />
                <LogoRow logos={logos} />
                <LogoRow logos={logos} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoInfiniteSlider;

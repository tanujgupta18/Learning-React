import React from "react";
import heroIcon from "./assets/hero.svg";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const App = () => {
  return (
    <div className="mx-auto px-40 pt-13">
      <h1 className="w-80 h-[48px] text-3xl uppercase font-extrabold">
        Contact us
      </h1>
      <p className="w-[975px] text-gray-600 font-medium uppercase">
        Let’s connect: we’re here to help, and we’d love to hear from you!
        Whether you have a question, comment, or just want to chat, you can
        reach out to us through the contact form on this page, or by phone,
        email, or social media.
      </p>
      <div className="flex gap-20">
        <div className="form pt-7 w-[472px]">
          <div className="buttons w-full flex gap-7">
            <button className="flex items-center justify-center cursor-pointer gap-2 min-w-[220px] py-3 px-2.5 rounded-md uppercase bg-black text-white font-semibold text-[15px]">
              <MdOutlineMessage className="text-2xl" />
              <span>via support chat</span>
            </button>
            <button className="flex items-center justify-center cursor-pointer gap-2 min-w-[220px] py-3 px-2.5 rounded-md uppercase bg-black text-white font-semibold text-[15px]">
              <IoMdCall className="text-2xl" />
              <span>via call</span>
            </button>
          </div>
          <button className="mt-4 flex items-center justify-center cursor-pointer gap-2 min-w-[472px] py-3 px-2.5 rounded-md uppercase bg-white text-black border-1 font-semibold text-[15px]">
            <MdOutlineMessage className="text-2xl" />
            <span>via email form</span>
          </button>
          <form className="p-0 m-0">
            <div className="form_container relative flex flex-col w-[420px] mt-5 mx-auto">
              <label
                htmlFor="name"
                className="absolute -top-3 left-2.5 px-2.5 bg-white text-sm font-bold"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="h-10 px-2 mb-5 border border-gray-500"
              />
            </div>

            <div className="form_container relative flex flex-col w-[420px] mt-2 mx-auto">
              <label
                htmlFor="email"
                className="absolute -top-3 left-2.5 px-2.5 bg-white text-sm font-bold"
              >
                E-Mail
              </label>
              <input
                type="text"
                name="email"
                className="h-10 px-2 mb-5 border border-gray-500"
              />
            </div>

            <div className="form_container relative flex flex-col w-[420px] mt-2 mx-auto">
              <label
                htmlFor="text"
                className="absolute -top-3 left-2.5 px-2.5 bg-white text-sm font-bold"
              >
                TEXT
              </label>
              <textarea
                name="text"
                className="h-28 px-2 border border-gray-500"
              />
            </div>
            <div className="flex justify-end px-0 pb-3 mt-4 mx-4">
              <button className="flex items-center justify-center cursor-pointer gap-2 min-w-[220px] py-3 px-2.5 rounded-md uppercase bg-black text-white font-semibold">
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="hero relative -bottom-1 w-[608px] h-[515px]">
          <img src={heroIcon} alt="heroIcon" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default App;

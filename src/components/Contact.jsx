import React from "react";
import hat from "../assets/images/hat.jpeg";
import { RxHome } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div className="relative mb-[50px]">
        <img src={hat} alt="Contact Image" className="w-full" />

        <p className="absolute ml-[50px] text-red-700 md:text-8xl mt-[-100px] md:mt-[-400px] md:ml-[100px] md:contro ">
          Contact Us
        </p>
      </div>
      <b className="text-[#000835] ml-[200px]">Get in Touch</b>
      <div className="md:flex justify-between mt-[30px] ml-[100px]">
        <div className="md:w-1/2 px-[30px]">
          <form className="w-full max-w-lg ml-[-40px] md:ml-0">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-[#000835] text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full outline outline-1 outline-[#000835] text-[#000835] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-[#000835] text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full outline outline-1 outline-[#000835] text-[#000835] border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-[#000835] text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Subject
                </label>
                <input
                  className="appearance-none block w-full outline outline-1 outline-[#000835] text-[#000835] border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                  placeholder="Enter Subject"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-[#000835] text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Body
                </label>
                <textarea
                  placeholder="Email Body"
                  className="outline outline-1 outline-[#000835] w-[240px] h-[150px] md:w-[500px] md:h-[200px]"
                ></textarea>
              </div>
            </div>
            <button class="bg-blue-500 uppercase ml-[100px] mt-[-20px] mb-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Send
            </button>
          </form>
        </div>
        <div className="md:w-1/2 px-[30px] mt-[20px] ml-[-40px]">
          {/* Home icon */}
          <div className="flex">
            <p>
              {" "}
              <RxHome className="size-10 text-[#000835]" />{" "}
            </p>
            <p className="ml-[30px]">Association Physical Address</p>
          </div>
          {/* Phone icon */}
          <div className="flex my-[30px]">
            <p>
              {" "}
              <FiPhone className="size-10 text-[#000835]" />{" "}
            </p>
            <p className="ml-[30px]">Association Phone Number</p>
          </div>
          {/* Email Icon */}
          <div className="flex">
            <p>
              {" "}
              <BsEnvelope className="text-red-500 size-10" />{" "}
            </p>
            <p className="ml-[30px]">Association Email Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

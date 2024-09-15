import React from "react";
import "./Page.css";
import circle from "../assets/images/circle.jpeg";
import join from "../assets/images/join.jpeg";
import chain from "../assets/images/chain.jpeg";
import hand from "../assets/images/hand.jpeg";
import img4 from "../assets/images/4.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mt-[-2px] relative">
      <p className="mb-[100px]">
        {" "}
        <img src={img4} className="-z-5" />{" "}
      </p>
      <div className="md:flex justify-between  mt-[-30px] mb-5">
        <div className="md:w-1/2 md:px-5">
          <img src={hand} width={800} className="pix" />
        </div>
        {/* Nurse and Checked list */}
        <div className="md:p-[30px] ml-[30px] p-[30px] md:w-1/2 md:mt-[50px] md:ml-[-300px]">
          <p className="md:fs text-blue-500 mt-5">
            Why we need to come together as one:
          </p>
          <div className="text-[#000835] mt-5">
            <div className="flex">
              <input type="checkbox" checked />
              <p className="ml-[20px] text-[#000835] ">
                Growth and Development
              </p>
            </div>
            <div className="flex">
              <input type="checkbox" checked />
              <p className="ml-[20px] text-[#000835] ">Enhanced Security</p>
            </div>
            <div className="flex">
              <input type="checkbox" checked />
              <p className="ml-[20px] text-[#000835] ">Greater achievement</p>
            </div>
            <div className="flex">
              <input type="checkbox" checked />
              <p className="ml-[20px] text-[#000835] ">
                Support for one another
              </p>
            </div>
          </div>
          <button class="bg-blue-500 mt-[30px] mb-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to={"/employee-form"}>Join Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

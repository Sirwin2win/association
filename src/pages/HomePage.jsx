import React from "react";
import "./Page.css";
import okpu1 from "../assets/images/okpu1.jpg";
import okpu3 from "../assets/images/okpu3.jpg";
import okpu5 from "../assets/images/okpu5.jpg";
import hand from "../assets/images/hand.jpeg";
import img4 from "../assets/images/4.png";
import { Link } from "react-router-dom";
import Landing from "../components/Landing";
import Gallery from "../components/Gallery";
import Home2 from "../components/Home2";

const HomePage = () => {
  return (
    <div className="mt-[-2px] relative">
      {/* <Gallery /> */}
      <Home2 />
      <div className="md:flex justify-between  mt-[0px] mb-5">
        <div className="md:w-1/2 md:px-5">
          <img src={hand} width={800} className="pix" />
        </div>
        {/* Animations */}
        <section class="flex">
          <div class="flex-item">
            <div class="toast add">
              {/* <code>add;</code> */}
              <img src={okpu3} width={20} />
            </div>
          </div>
          <div class="flex-item">
            <div class="toast accumulate">
              {/* <code>accumulate;</code> */}
              <img src={okpu5} width={20} />
            </div>
          </div>
        </section>

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
        {/* <div className="">
          <Link to={"/city"} className="text-white">
            City
          </Link>
          <Link to={"/branch"} className="text-white">
            Branch
          </Link>
        </div> */}
      </div>
      <hr />
      <Landing />
    </div>
  );
};

export default HomePage;

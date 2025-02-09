import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

const Footer = () => {
  return (
    <div className="md:flex justify-evenly border-t border-[#000835] mb-5 bg-orange-700">
      <div className="mx-5 ml-[80px] md:ml-0">
        <Link
          to={"/"}
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <div className="mt-[50px] flex">
            <img src={logo} className="h-10 mt-[-5px]" alt="Neesilo Logo" />
            <span className="text-[#000835] font-extrabold ml-2">
              Association
            </span>
          </div>
        </Link>
        {/* Menu Links */}

        <div className="text-[#000835] mt-5">
          <div className="flex">
            <input type="checkbox" checked />
            <p className="ml-[20px] text-[#000835] ">
              <Link
                to={"/"}
                className="text-[#000835] font-serif font-bold men"
              >
                Home
              </Link>
            </p>
          </div>
          <div className="flex">
            <input type="checkbox" checked />
            <p className="ml-[20px] text-[#000835] ">
              <Link
                to={"/about"}
                className="text-[#000835] font-serif font-bold men"
              >
                About Us
              </Link>
            </p>
          </div>
          <div className="flex">
            <input type="checkbox" checked />
            <p className="ml-[20px] text-[#000835] ">
              <Link
                to={"/contact"}
                className="text-[#000835] font-serif font-bold men"
              >
                Contact Us
              </Link>
            </p>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              className="bg-[#000835] text-[#000835]"
              checked
            />
            <p className="ml-[20px] text-[#000835] ">
              <Link
                to={"/blog"}
                className="text-[#000835] font-serif font-bold men"
              >
                WebBlog
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Quick Links */}
      <div className="ml-[50px] md:mx-[80px] mt-[50px]">
        <p className="font-bold ml-[20px] text-[#000835]">Our Branches</p>
        <div className="flex mt-[25px]">
          <input type="checkbox" checked />
          <p className="ml-[20px] text-[#000835] ">
            <Link to={"/"} className="text-[#000835] font-serif font-bold men">
              Kubwa Branch
            </Link>
          </p>
        </div>
        {/* Employer Form */}
        <div className="flex">
          <input
            type="checkbox"
            className="bg-[#000835] text-[#000835]"
            checked
          />
          <p className="ml-[20px] text-[#000835] ">
            <Link to={"/"} className="text-[#000835] font-serif font-bold men">
              Dei-Dei Branch
            </Link>
          </p>
        </div>
        {/* Blog */}
        <div className="flex">
          <input
            type="checkbox"
            className="bg-[#000835] text-[#000835]"
            checked
          />
          <p className="ml-[20px] text-[#000835] ">
            <Link to={"/"} className="text-[#000835] font-serif font-bold men">
              Maitama Branch
            </Link>
          </p>
        </div>
      </div>
      {/* NewsLetter Sign Up */}
      <div className="mx-5 mt-[50px]">
        <p className="font-bold ml-[80px] md:ml-[50px] text-[#000835]">
          Newsletter
        </p>
        <div className="mt-[20px]">
          <p className="text-[#000835]">
            You can trust us. we only send promo offers
          </p>
          <form className="w-full max-w-sm mt-[20px]">
            <div className="flex items-center border-b border-[#000835] py-2">
              <input
                className="rounded-full bg-white border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="email@example.com"
                aria-label="Full name"
              />
              <button class="bg-[#000835]  hover:bg-blue-700 text-white font-bold w-[100px] rounded-full">
                <Link to={"/employee-form"}>Sign Up </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="mb-5" />
    </div>
  );
};

export default Footer;

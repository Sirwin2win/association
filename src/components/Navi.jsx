import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import { BiMenu, BiX } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { Dropdown, Space } from "antd";
import "./Comp.css";

const items = [
  {
    label: <Link to={"login"}>Login</Link>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <Link to={"register"}>Register</Link>,
    key: "1",
  },
];

const Navi = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, to: "/", txt: "Home" },
    { id: 2, to: "/about", txt: "About" },
    { id: 3, to: "/contact", txt: "Contact" },
    { id: 4, to: "/blog", txt: "Blog" },
  ];

  return (
    <div className="bg-orange-700">
      <nav className="relative md:mb-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-evenly mx-auto p-4 mt-[20px]">
          <Link
            to={"/"}
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <img src={logo} height={50} width={50} />
            <span className="text-[#000835] font-extrabold ml-[-30px]">
              Association
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          ></button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex">
              {navItems.map((item) => (
                <>
                  <li
                    key={item.id}
                    className="p-4 text-[#000835] rounded-xl m-2 cursor-pointer duration-300 hover:text-[#000835]"
                  >
                    <Link
                      to={item.to}
                      className="text-[#000835] font-serif font-bold men"
                    >
                      {item.txt}
                    </Link>
                  </li>
                </>
              ))}
              <div className="flex mt-[25px]">
                <p>Accounts</p>

                {/* <p>
                  {" "}
                  <IoIosArrowDown />{" "}
                </p> */}
                <Dropdown menu={{ items }} trigger={["click"]}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <IoIosArrowDown />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Icon */}
      <div className="relative z-[20px]">
        <div
          onClick={handleNav}
          className=" block ml-[300px] mb-1 mt-[-55px] md:hidden"
        >
          {nav ? <BiX size={50} /> : <BiMenu size={50} />}
        </div>
        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "md:hidden mt-4 w-screen bg-white ease-in-out duration-500"
              : "ease-in-out w-screen duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}

          {/* Mobile Navigation Items */}

          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative p-2 font-extrabold duration-300 h-8 men"
            >
              <Link to={item.to}>{item.txt}</Link>
            </li>
          ))}
          <div className="flex mt-[25px]">
            <p>Accounts</p>

            {/* <p>
                  {" "}
                  <IoIosArrowDown />{" "}
                </p> */}
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <IoIosArrowDown />
                </Space>
              </a>
            </Dropdown>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navi;

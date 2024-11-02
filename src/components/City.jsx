import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createCity } from "../features/cities/citySlice";

const City = () => {
  const [formData, setFormData] = useState({
    city: "",
  });

  const { city } = formData;
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!city) {
      toast.error("Please fill up all the fields");
    } else {
      const cityData = {
        city,
      };
      console.log(city);
      dispatch(createCity(cityData));
    }
  };
  return (
    <div className="mt-5 ml-5">
      {/* <h1>Create State</h1> */}
      <form className="w-full max-w-lg px-[30px] mt-[50px] md:mt-0 md:ml-[-100px]">
        {/* First Name Input */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              State
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Enter your state name"
              name="city"
              onChange={onChange}
            />
          </div>
        </div>
        <button
          className="bg-blue-500 mt-[30px] mb-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onSubmit}
        >
          Create State
        </button>
      </form>
    </div>
  );
};

export default City;

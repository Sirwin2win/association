import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createBranch } from "../features/branches/branchSlice";
import { getCity } from "../features/cities/citySlice";

const Branch = () => {
  const [formData, setFormData] = useState({
    branch: "",
    cityId: "",
  });
  // const [cityId, setCityId] = useState("");

  const { cities, isLoading, isError, message } = useSelector(
    (state) => state.cities
  );

  const { branch, cityId } = formData;
  //   const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Capture Branch
  // const handleCity = (e) => {
  //   setCityId(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    const n = Number(cityId);
    const branchData = {
      branch,
      cityId: n,
    };
    console.log(branchData);
    dispatch(createBranch(branchData));
    // setCityId("");
    // setFormData("");
  };
  useEffect(() => {
    dispatch(getCity());
  }, []);
  return (
    <div className="mt-5 ml-5">
      {/* <h1>Create Branch</h1> */}
      <form className="w-full max-w-lg px-[30px] mt-[50px] md:mt-0 md:ml-[-100px]">
        {/* State Dropdown */}
        <div className="inline-block relative w-64 md:ml-[150px]">
          <div className="md:w-1/3">
            <label
              className="block text-[#000835] font-bold md:text-left mb-1 md:mb-[-30px] md:mt-[-20px] pr-4"
              htmlFor="branch"
            >
              State
            </label>
          </div>
          <select
            className="w-[333px] mt-[30px] border border-gray-400 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            onChange={onChange}
            name="cityId"
            id="state"
            // value={state}
          >
            <option>--State--</option>
            {cities.map((city) => (
              <option value={city.id}>{city.city}</option>
            ))}
          </select>
        </div>
        {/*Branch Input */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Branch
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Enter your state name"
              name="branch"
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

export default Branch;

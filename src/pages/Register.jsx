import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import rad from "../assets/images/rad.jpeg";
import Spinner from "../components/Spinner";
// import chains from "../assets/images/chains.jpeg";
import { reset, register } from "../features/auth/authSlice";
import { getCity } from "../features/cities/citySlice";

const Register = () => {
  const [stat, setStat] = useState("");
  const [bra, setBra] = useState([]);
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState([]);
  // const
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    occupation: "",
    village: "",
    email: "",
    password: "",
    cityId: "",
  });
  const {
    firstName,
    lastName,
    phone,
    occupation,
    village,
    email,
    password,
    cityId,
  } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cities, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.cities
  );

  // Capture Address
  // onChange = { onChange };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Capture Branch
  const handleCity = (e) => {
    setCity(e.target.value);
  };

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (e) => {
    setStat(e.target.value);
    setBra(cities.find((x) => x.city === e.target.value).Branch);

    // const sub = {
    //   address: formData,
    //   state: stat,
    //   branchName: city,
    // };
  };

  useEffect(() => {
    dispatch(getCity());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const oldCityId = localStorage.getItem("cityId");
    // const newCityId =
    const sub = {
      firstName,
      lastName,
      phone,
      occupation,
      village,
      email,
      password,
      cityId: Number(oldCityId),
      branchId: Number(city),
    };
    console.log(sub);

    dispatch(register(sub));
    setFormData("");
    setBra("");
    setStat("");
    setCity("");
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="mt-[100px] md:flex md:justify-between">
        <div className="ml-[30px] md:ml-0">
          <img src={rad} alt="igbo" />
        </div>
        <form className="w-full max-w-lg px-[30px] mt-[50px] md:mt-0 md:ml-[-100px]">
          {/* First Name Input */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                First Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                onChange={onChange}
              />
            </div>
          </div>
          {/* Last Name */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Last Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Enter your first name"
                name="lastName"
                onChange={onChange}
              />
            </div>
          </div>
          {/* Phone */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Phone
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Enter your Phone number"
                name="phone"
                onChange={onChange}
              />
            </div>
          </div>
          {/* Occupation */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Occupation
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Enter your occupation/Career"
                name="occupation"
                onChange={onChange}
              />
            </div>
          </div>
          {/* State */}
          {/* Dependent Select Dropdown */}
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
              onChange={changeSelectOptionHandler}
              name="cityId"
              id="city"
              // value={state}
            >
              <option>--State--</option>
              {cities &&
                cities.map((city) => (
                  <>
                    <option key={city.city} name={city.id} value={city.city}>
                      {city.city}
                    </option>
                    {localStorage.setItem("cityId", city.id)}
                  </>
                ))}
            </select>
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-[-30px] md:mt-[0px] pr-4"
                htmlFor="branch"
              >
                Branch
              </label>
            </div>
            <select
              className="w-[333px] mt-[30px] border border-gray-400 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              // value={city}
              name={city}
              onChange={handleCity}
            >
              <option>--Branch--</option>
              {bra &&
                bra.map((b) => (
                  <option key={b.branch} value={b.id}>
                    {b.branch}
                  </option>
                ))}
            </select>
          </div>
          {/* Village */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Village
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Enter the name of your village"
                name="village"
                onChange={onChange}
              />
            </div>
          </div>
          {/*Email Input  */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="email@example.com"
                name="email"
                onChange={onChange}
              />
            </div>
          </div>
          {/* Password */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-[20px]"
                id="inline-password"
                type="password"
                placeholder="******************"
                name="password"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-[#000835] font-bold">
              <span className="text-sm">Already have an account?</span>
              <Link to={"/login"} className="mx-5 text-blue-500">
                Login
              </Link>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="bg-blue-500 mt-[30px] mb-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onSubmit}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

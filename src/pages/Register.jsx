import React, { useState } from "react";
import { Link } from "react-router-dom";
import rad from "../assets/images/rad.jpeg";

const Register = () => {
  const [state, setState] = useState("");
  const [branch, setBranch] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
    setBranch("");
  };

  return (
    <div>
      <div className="mt-[100px] md:flex justify-evenly">
        <div className="ml-[30px] md:ml-0">
          <img src={rad} height={700} width={300} alt="Health Worker" />
        </div>
        <form className="w-full max-w-lg px-[30px] mt-[50px] md:mt-0">
          {/* Full Name Input */}
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border border-gray-400 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="John Doe"
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
              />
            </div>
          </div>
          {/* Phone Number Input */}
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
                placeholder="+234..........."
              />
            </div>
          </div>
          {/* Dependent Select Dropdown */}
          <div className="inline-block relative w-64 md:ml-[150px]">
            <div className="md:w-1/3">
              <label
                className="block text-[#000835] font-bold md:text-right mb-1 md:mb-[-30px] md:mt-[-20px] pr-4"
                htmlFor="branch"
              >
                State
              </label>
            </div>
            <select
              className="w-[333px] md:w-[300px] mt-[30px] border border-gray-400 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={handleStateChange}
              value={state}
              id="state"
            >
              <option value="">Select State</option>
              <option key="Abia">Abia</option>
              <option key="Adamawa">Adamawa</option>
              <option key="Akwa Ibom">Akwa Ibom</option>
              <option key="Anambra">Anambra</option>
              <option key="Bauchi">Bauchi</option>
              <option key="Bayelsa">Bayelsa</option>
              <option key="Benue">Benue</option>
              <option key="Borno">Borno</option>
              <option key="Cross River">Cross River</option>
              <option key="Delta">Delta</option>
              <option key="Ebonyi">Ebonyi</option>
              <option key="Edo">Edo</option>
              <option key="Ekiti">Ekiti</option>
              <option key="Enugu">Enugu</option>
              <option key="Gombe">Gombe</option>
              <option key="Imo">Imo</option>
              <option key="Jigawa">Jigawa</option>
              <option key="Kaduna">Kaduna</option>
              <option key="Kano">Kano</option>
              <option key="Katsina">Katsina</option>
              <option key="Kebbi">Kebbi</option>
              <option key="Kogi">Kogi</option>
              <option key="Kwara">Kwara</option>
              <option key="Lagos">Lagos</option>
              <option key="Nasarawa">Nasarawa</option>
              <option key="Niger">Niger</option>
              <option key="Ogun">Ogun</option>
              <option key="Ondo">Ondo</option>
              <option key="Osun">Osun</option>
              <option key="Oyo">Oyo</option>
              <option key="Plateau">Plateau</option>
              <option key="Rivers">Rivers</option>
              <option key="Sokoto">Sokoto</option>
              <option key="Taraba">Taraba</option>
              <option key="Yobe">Yobe</option>
              <option key="Zamfara">Zamfara</option>
              <option key="Abuja">Abuja</option>
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
              className="w-[333px] md:w-[300px] mt-[30px] border border-gray-400 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={branch}
              disabled={state === ""}
            >
              <option value="">Select State</option>
              {state === "Abia" && (
                <>
                  <option key="Umuahia">Umuahia</option>
                </>
              )}
              {state === "Adamawa" && (
                <>
                  <option key="Yola">Yola</option>
                </>
              )}
              {state === "Akwa Ibom" && (
                <>
                  <option key="Uyo">Uyo</option>
                </>
              )}
              {state === "Anambra" && (
                <>
                  <option key="Awka">Awka</option>
                  <option key="Onitsha">Onitsha</option>
                </>
              )}
              {state === "Bauchi" && (
                <>
                  <option key="Bauchi">Bauchi</option>
                </>
              )}
              {state === "Bayelsa" && (
                <>
                  <option key="Yenagoa">Yenagoa</option>
                </>
              )}
              {state === "Benue" && (
                <>
                  <option key="Makurdi">Makurdi</option>
                </>
              )}
              {state === "Borno" && (
                <>
                  <option key="Maiduguri">Maiduguri</option>
                </>
              )}
              {state === "Cross River" && (
                <>
                  <option key="Calabar">Calabar</option>
                </>
              )}
              {state === "Delta" && (
                <>
                  <option key="	Asaba"> Asaba</option>
                </>
              )}
              {state === "Ebonyi" && (
                <>
                  <option key="	Abakaliki"> Abakaliki</option>
                </>
              )}
              {state === "Edo" && (
                <>
                  <option key="	Benin City"> Benin City</option>
                </>
              )}
              {state === "Ekiti" && (
                <>
                  <option key="	Ado Ekiti"> Ado Ekiti</option>
                </>
              )}
              {state === "Enugu" && (
                <>
                  <option key="Enugu">Enugu</option>
                </>
              )}
              {state === "Gombe" && (
                <>
                  <option key="Gombe">Gombe</option>
                </>
              )}
              {state === "Imo" && (
                <>
                  <option key="Owerri">Owerri</option>
                </>
              )}
              {state === "Jigawa" && (
                <>
                  <option key="Dutse">Dutse</option>
                </>
              )}
              {state === "Kaduna" && (
                <>
                  <option key="Kaduna">Kaduna</option>
                </>
              )}
              {state === "Kano" && (
                <>
                  <option key="Kano">Kano</option>
                </>
              )}
              {state === "Katsina" && (
                <>
                  <option key="Katsina">Katsina</option>
                </>
              )}
              {state === "Kebbi" && (
                <>
                  <option key="Birnin Kebbi">Birnin Kebbi</option>
                </>
              )}
              {state === "Kogi" && (
                <>
                  <option key="Lokoja">Lokoja</option>
                </>
              )}
              {state === "Kwara" && (
                <>
                  <option key="Ilorin">Ilorin</option>
                </>
              )}
              {state === "Lagos" && (
                <>
                  <option key="Ikeja">Ikorodu</option>
                  <option key="Ikeja">Lekki</option>
                  <option key="Ikeja">Ojo</option>
                </>
              )}
              {state === "Nasarawa" && (
                <>
                  <option key="Lafia">Lafia</option>
                </>
              )}
              {state === "Niger" && (
                <>
                  <option key="Minna">Minna</option>
                </>
              )}
              {state === "Ogun" && (
                <>
                  <option key="Abeokuta">Abeokuta</option>
                </>
              )}
              {state === "Ondo" && (
                <>
                  <option key="Akure">Akure</option>
                </>
              )}
              {state === "Osun" && (
                <>
                  <option key="Oshogbo">Oshogbo</option>
                </>
              )}
              {state === "Oyo" && (
                <>
                  <option key="Ibadan">Ibadan</option>
                </>
              )}
              {state === "Plateau" && (
                <>
                  <option key="	Jos"> Jos</option>
                </>
              )}
              {state === "Rivers" && (
                <>
                  <option key="	Port Harcourt"> Port Harcourt</option>
                </>
              )}
              {state === "Sokoto" && (
                <>
                  <option key="	Sokoto"> Sokoto</option>
                </>
              )}
              {state === "Taraba" && (
                <>
                  <option key="	Jalingo"> Jalingo</option>
                </>
              )}
              {state === "Yobe" && (
                <>
                  <option key="	Damaturu"> Damaturu</option>
                </>
              )}
              {state === "Zamfara" && (
                <>
                  <option key="		Gusau"> Gusau</option>
                </>
              )}
              {state === "Abuja" && (
                <>
                  <option key="Abuja Main Branch">Abuja Main Branch</option>
                  <option key="Kubwa"> Kubwa</option>
                  <option key="Suleja">Suleja</option>
                  <option key="Nyanya">Nyanya</option>
                  <option key="Gwagwalada">Gwagwalada</option>
                </>
              )}
            </select>
          </div>
          {/* Password Input */}
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
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-[#000835] font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">I agree!</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="bg-blue-500 mt-[30px] mb-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to={"/dashboard"}> Register </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

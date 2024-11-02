import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Branch = () => {
  const [stat, setStat] = useState("");
  const [bra, setBra] = useState([]);
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState([]);
  // const
  const [formData, setFormData] = useState({
    address: "",
  });

  // const { address, state, branchName } = selected;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  // Capture Address
  // onChange = { onChange };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(user._id);

  useEffect(() => {
    fetchData();
    // }
  }, []);
  // console.log(branch);
  async function fetchData() {
    // const token = await getToken();
    const apiUrl = "http://localhost:5000/api/branch";

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();

    setBranch(data.data);
    console.log(branch);
  }

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  /** Function that will set different values to state variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (e) => {
    setStat(e.target.value);
    setBra(states.find((x) => x.name === e.target.value).branches);

    // const sub = {
    //   address: formData,
    //   state: stat,
    //   branchName: city,
    // };
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const sub = {
      address: formData,
      state: stat,
      branchName: city,
    };
    console.log(sub);

    // Update Data
    {
      branch.map((x) => {
        console.log(x._id);
      });
    }
    fetch(`http://localhost:5000/api/branch/${x._id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${user.token}`,
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(sub),
    });
  };

  // State & Branch Object
  const states = [
    {
      name: "abia",
      branches: [{ name: "Umuahia" }],
    },
    {
      name: "adamawa",
      branches: [{ name: "Yola" }],
    },
    {
      name: "akwaIbom",
      branches: [{ name: "Uyo" }],
    },
    {
      name: "anambra",
      branches: [{ name: "Awka" }, { name: "Onitsha" }],
    },
    {
      name: "bauchi",
      branches: [{ name: "Bauchi" }],
    },
    {
      name: "bayelsa",
      branches: [{ name: "Yenagoa" }],
    },
    {
      name: "benue",
      branches: [{ name: "Makurdi" }],
    },
    {
      name: "borno",
      branches: [{ name: "Maiduguri" }],
    },
    {
      name: "crossRiver",
      branches: [{ name: "Calabar" }],
    },
    {
      name: "delta",
      branches: [{ name: "Asaba" }],
    },
    {
      name: "ebonyi",
      branches: [{ name: "Abakaliki" }],
    },
    {
      name: "edo",
      branches: [{ name: "Benin City" }],
    },
    {
      name: "ekiti",
      branches: [{ name: "Ado Ekiti" }],
    },
    {
      name: "enugu",
      branches: [{ name: "Enugu" }],
    },
    {
      name: "gombe",
      branches: [{ name: "Gombe" }],
    },
    {
      name: "imo",
      branches: [{ name: "Owerri" }],
    },
    {
      name: "jigawa",
      branches: [{ name: "Dutse" }],
    },
    {
      name: "kaduna",
      branches: [{ name: "Kaduna" }],
    },
    {
      name: "kano",
      branches: [{ name: "Kano" }],
    },
    {
      name: "katsina",
      branches: [{ name: "Katsina" }],
    },
    {
      name: "kebbi",
      branches: [{ name: "Birnin Kebbi" }],
    },
    {
      name: "kogi",
      branches: [{ name: "Lokoja" }],
    },
    {
      name: "kwara",
      branches: [{ name: "Ilorin" }],
    },
    {
      name: "lagos",
      branches: [{ name: "Ikorodu" }, { name: "Lekki" }, { name: "Ojo" }],
    },
    {
      name: "nasarawa",
      branches: [{ name: "Lafia" }],
    },
    {
      name: "niger",
      branches: [{ name: "Minna" }, { name: "Bida" }],
    },
    {
      name: "ogun",
      branches: [{ name: "Abeokuta" }],
    },
    {
      name: "ondo",
      branches: [{ name: "Akure" }],
    },
    {
      name: "osun",
      branches: [{ name: "Oshogbo" }],
    },
    {
      name: "oyo",
      branches: [{ name: "Ibadan" }],
    },
    {
      name: "plateau",
      branches: [{ name: "Jos" }],
    },
    {
      name: "rivers",
      branches: [{ name: "Port Harcourt" }],
    },
    {
      name: "sokoto",
      branches: [{ name: "Sokoto" }],
    },
    {
      name: "taraba",
      branches: [{ name: "Jalingo" }],
    },
    {
      name: "yobe",
      branches: [{ name: "Damaturu" }],
    },
    {
      name: "zamfara",
      branches: [{ name: "Gusau" }],
    },
    {
      name: "abuja",
      branches: [
        { name: "Abuja Main Branch" },
        { name: "Kubwa" },
        { name: "Suleja" },
        { name: "Nyanya" },
        { name: "Gwagwalada" },
      ],
    },
  ];
  console.log(user.token);

  return (
    <div className="pr-[100px]">
      <h1 className="font-bold mb-[30px] mr-[-100px]">Update User Details</h1>
      <form className="max-w-lg  mt-[50px] md:mt-0">
        {/* Phone Number Input */}
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-[#000835] font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Address
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="appearance-none border border-gray-400 w-[350px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Business Address"
              name="address"
              onChange={onChange}
              // onChange={changeSelectOptionHandler}
              // value={address}
            />
          </div>
        </div>
        {/* {branch.data && branch.user} */}
        {/* {branch.map((x) => {
          console.log(x.user);
        })} */}

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
            name="state"
            id="state"
            // value={state}
          >
            <option>--State--</option>
            {states.map((s) => (
              <option value={s.name}>{s.name}</option>
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
            {bra.map((b) => (
              <option key={b.name} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="bg-blue-500 mt-[30px] mb-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onSubmit}
            >
              updateBranch
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Branch;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import rad from "../assets/images/rad.jpeg";
import Spinner from "../components/Spinner";
// import chains from "../assets/images/chains.jpeg";
import { reset, login } from "../features/auth/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    // dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill up all the fields");
    } else {
      const userData = {
        email,
        password,
      };
      // console.log(userData);

      dispatch(login(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <div className="mt-[100px] md:flex md:justify-between">
        <div className="ml-[30px] md:ml-0">
          <img src={rad} height={700} width={300} alt="igbo" />
        </div>
        <form className="w-full max-w-lg px-[30px] mt-[50px] md:mt-0 md:ml-[-100px]">
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
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="bg-blue-500 mt-[30px] mb-[50px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { ReactEventHandler, useState } from "react";
interface props {}

const Login: React.FC<props> = () => {
  const [data, setdata] = useState({ email: "", password: "" });
  const handlechange = (event: any) => {
    const nameOfChangeInput = event.target.name;
    setdata({ ...data, [nameOfChangeInput]: event.target.value });
  };
  return (
    <>
      <div className="w-1/2 text-left  flex flex-col justify-center justify-items-center items-center ">
        <div className="mt-14">
          <h1 className="text-4xl ">
            Log In to <span className="inline text-blue-700">CORK</span>
          </h1>
          <h2 className="mt-5">
            New Here?{" "}
            <span className="underline inline text-blue-700">
              {" "}
              Create an account
            </span>{" "}
          </h2>
          <form
            className="bg-white rounded  pt-6 pb-8 mb-4 mt-10"
            onSubmit={(event) => handlechange(event)}
          >
            <div className="mb-4  border-b-2 pb-4">
              <i className=" text-blue-500 text-2xl pr-4 fas fa-user"></i>
              <input
                name="email"
                className="outline-none border-0 "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4  border-b-2 pb-4">
              <i className=" text-blue-500 text-2xl pr-4 fas fa-lock"></i>

              <input
                name="password"
                className="outline-none"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center flex-row-reverse justify-between">
              <button
                className="bg-blue-700 hover:shadow:xl text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>

              <div className="">
                <div className="flex items-center cursor-pointer flex-row justify-between">
                  <div className="mr-3 text-black ">Show Password </div>
                  <div className="relative">
                    <input type="checkbox" id="toggleB" className="sr-only" />
                    <div className="block bg-blue-600 w-10 h-5 rounded-full"></div>
                    <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition"></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="text-gray-400 text-md mt-5">
          <input type="checkbox" id="toggleB" className="border-2" /> Keep me
          Logged in
        </div>
        <div className="mt-6 text-lg text-blue-800">Forgot Password?</div>
        <p className="text-center mt-10 text-sm font-medium  w-7/12 ">
          © 2020 All Rights Reserved. <div className="inline mt-6 text-lg text-blue-600">CORK</div> is a product of Designreset.
          <div className="inline mt-6 text-lg text-blue-600">
            Cookie Preferences, Privacy,
          </div>{" "}
          and <div className="inline mt-6 text-lg text-blue-600">Terms.</div>{" "}
        </p>
      </div>
      <div></div>
      <div className="hidden w-1/2 h-full absolute top-0 right-0 bg-black lg:flex justify-center justify-items-center items-center">
        <div className=" h-5/6 ">
          <img
            className=" h-5/6 "
            src="https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png"
          ></img>
        </div>
      </div>
    </>
  );
};

Login.defaultProps = {};

export default React.memo(Login);

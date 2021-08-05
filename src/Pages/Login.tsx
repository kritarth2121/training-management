import React, {

  useEffect,
  useState,
} from "react";
import { Switch } from "@headlessui/react";

import { login } from "../api/auth";
import { authaction } from "../actions/auth.actions";
interface props {}

const Login: React.FC<props> = () => {
  const [enabled, setEnabled] = useState(false);
  const [data, setdata] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  //const [submit, setsubmit] = useState(false);
  useEffect(() => {}, []);
  const handlechange = (event: any) => {
    console.log("handlechange");
    const nameOfChangeInput = event.target.name;
    setdata({ ...data, [nameOfChangeInput]: event.target.value });
    console.log(data);
  };
  const handlesubmit = (event: any) => {
    event.preventDefault();

    console.log("submit");
    login(data).then((user: any) =>
      //dispatch({ type: "me/login", payload: user })
      authaction.login(user)
    );
  };
  const allow = () => {
    if (emailerror === "" && passworderror === "") {
      console.log(emailerror, passworderror, true);
      return true;
    } else {
      console.log(emailerror, passworderror, false);

      return false;
    }
  };
  function ValidateEmail(mail: string) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      return true;
    }

    return false;
  }
  console.log(ValidateEmail(data.email));
  const blur = (event: any) => {
    const nameOfChangeInput = event.target.name;
    setTouched({ ...touched, [nameOfChangeInput]: event.target.value });
    console.log(data);
  };
  let emailerror = "";
  let passworderror = "";
  if (!data.email) {
    emailerror = "Email adress required";
  } else if (ValidateEmail(data.email) == false) {
    emailerror = "Please enter a valid email address";
  }
  if (!data.password) {
    passworderror = "Password Required";
  } else if (data.password.length < 8) {
    passworderror = "Please use atleast 8 characters";
  }

  return (
    <>
      <div className="lg:w-1/2 text-left  flex flex-col justify-center justify-items-center items-center ">
        <div className="mt-14">
          <h1 className="text-4xl ">
            Log In to <span className="inline text-blue-700">CORK</span>
          </h1>
          <h2 className="mt-5">
            New Here?{" "}
            <span className="underline inline text-blue-700">
              Create an account
            </span>{" "}
          </h2>
          <form
            className="bg-white rounded  pt-6 pb-8 mb-4 mt-10"
            onSubmit={(event) => {
              console.log("horha h");
              handlesubmit(event);
            }}
          >
            <div className="mb-4">
              <div className="  border-b-2 pb-4">
                <i className=" text-blue-500 text-2xl pr-4 fas fa-user"></i>
                <input
                  name="email"
                  className="outline-none border-0 "
                  id="username"
                  type="text"
                  placeholder="Email"
                  onChange={handlechange}
                  onBlur={blur}
                />
              </div>
              <div>
                {touched.email && (
                  <div className="text-red-500">{emailerror} </div>
                )}
              </div>
            </div>
            <div className="mb-4">
              <div className=" border-b-2 pb-4">
                <i className=" text-blue-500 text-2xl pr-4 fas fa-lock"></i>

                <input
                  name="password"
                  className="outline-none"
                  id="password"
                  type={enabled ? "text" : "password"}
                  placeholder="Password"
                  onChange={handlechange}
                  onBlur={blur}
                />
              </div>

              {touched.password && (
                <div className="text-red-500">{passworderror} </div>
              )}
            </div>
            <div className="flex items-center flex-row-reverse justify-between">
              <button
                className={
                  "hover:shadow-xl text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline " +
                  (allow() ? "bg-blue-800" : "bg-blue-200")
                }
                type="submit"
                value="submit"
                disabled={!allow()}
              >
                Sign In
              </button>

              <div className="">
                <div className="flex items-center cursor-pointer flex-row justify-between">
                  <div className="mr-3 text-black ">
                    {" "}
                    <div className="mt-2">
                      <span className="font-mono">Show password </span>
                      {/* <input
                      type="checkbox"
                      id="toggle-password"
                      className=""
                    ></input> */}

                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${
                          enabled ? "bg-blue-600" : "bg-gray-200"
                        } relative inline-flex items-center h-5 rounded-full w-10 `}
                      >
                        <span className="sr-only">Enable notifications</span>
                        <span
                          className={`${
                            enabled ? "translate-x-6" : "translate-x-1"
                          } inline-block w-4 h-4 transform bg-blue-500 rounded-full`}
                        />
                      </Switch>
                    </div>
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
          © 2020 All Rights Reserved.{" "}
          <div className="inline mt-6 text-lg text-blue-600">CORK</div> is a
          product of Designreset.
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
function dispatch(arg0: { type: string; payload: any }): any {
  throw new Error("Function not implemented.");
}

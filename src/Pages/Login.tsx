import React, { ReactEventHandler, useState } from "react";
import yup from 'yup';
interface props {}

const Login: React.FC<props> = () => {
  const [data, setdata] = useState({ email: "", password: "" });
  const [touched,setTouched]=useState({email:false,password:false});
  const [submit,setsubmit]=useState(false);
  const handlechange = (event: any) => {
    const nameOfChangeInput = event.target.name;
    setdata({ ...data, [nameOfChangeInput]: event.target.value });
    console.log(data);
  };
  const handlesubmit = (event:any) => {
    event.preventDefault();

  }
  const allow=()=>{
    if (emailerror=='' && passworderror=='' ){
      console.log(emailerror,passworderror,true);
      return true;
    }
    else{
      console.log(emailerror,passworderror,false);

      return false;
    }
  }
  const blur = (event: any) => {
    const nameOfChangeInput = event.target.name;
    setTouched({ ...touched, [nameOfChangeInput]: event.target.value });
    console.log(data);
  };
  let emailerror="";
  let passworderror="";
  if (!data.email){
    emailerror="Email adress required"
  }
  else if(!data.email.endsWith('@gmail.com')){
    emailerror="Please enter a valid email address";
  }
  if (!data.password){
    passworderror='Password Required';

  }
  else if (data.password.length<8){
passworderror="Please use atleast 8 characters";
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
            onSubmit={(event) => 
             { event.preventDefault();
          

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
              {touched.email && <div className="text-red-500">{emailerror} </div>}
            </div>
            </div>
            <div className="mb-4">
            <div className=" border-b-2 pb-4">
              <i className=" text-blue-500 text-2xl pr-4 fas fa-lock"></i>

              <input
                name="password"
                className="outline-none"
                id="password"
                type="password"
                placeholder="Password"
                onChange={handlechange}
                onBlur={blur}
              />
            </div>
            
            {touched.password && <div className="text-red-500">{passworderror} </div>}
            </div>
            <div className="flex items-center flex-row-reverse justify-between">
              <button
                className={"hover:shadow-xl text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline " + (allow() ? 'bg-blue-800':'bg-blue-200' )}
                type="submit"
                value="submit"
                disabled={allow()}
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

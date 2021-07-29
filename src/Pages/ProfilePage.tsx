import React, { useContext } from "react";
import AppContext from "../Appcontext";
import Button from "../Components/Button/Button";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
interface props {}
const ProfilePage: React.FC<props> = () => {
  const user = useContext(AppContext);
  console.log(user);
  return (
    <div className="bg-gray-300 absolute w-full top-0">
      <Sidebar />
      <Header />

      <div className=" h-full  md:ml-60 ">
        <div className="  bg-white   my-20 mx-5 p-7">
          <div className="font-medium mb-10">GENERAL INFORMATION</div>
          <form>
            <div className="flex flex-col md:flex-row justify-evenly justify-items-center">
              <div>
                <img
                  className="h-28 w-28 rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8SJZalEzsMbwlSZY4chR62sCdrrNcTYoKA&usqp=CAU"
                />
                <div className="text-blue-700 font-medium mb-10">
                  {" "}
                  Upload Image
                </div>
              </div>
              <div className="flex flex-col md:w-9/12">
                <div className="flex flex-col md:flex-row w-full ">
                  <div className="flex flex-col  w-full md:w-7/12 my-4 md:mr-10">
                    <label className="text-gray-500">Full Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="rounded-md w-full  h-10 border-2 border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col  my-2 ">
                    <label className="text-gray-500">Date Of Birth</label>
                    <div className="flex flex-col md:flex-row md:space-x-2 space-y-3 lg:space-y-0">
                      <input
                        type="text"
                        placeholder="Date"
                        className="rounded-md md:w-20 h-10 border-2 border-gray-300"
                      />
                      <input
                        type="text"
                        placeholder="Month"
                        className="rounded-md md:w-20 h-10 border-2 border-gray-300"
                      />

                      <input
                        type="text"
                        placeholder="Year"
                        className="rounded-md md:w-20 h-10 border-2 border-gray-300"
                      />
                    </div>
                  </div>
                </div>
                <div className=" w-full my-4">
                  <label className="text-gray-500">Profession</label>
                  <input
                    type="text"
                    placeholder="Profession"
                    className="rounded-md w-full h-10 border-2 border-gray-300"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-white my-10 mx-5 p-7 ">
          <div className="font-medium mb-10">About</div>
          <div className="font-medium mb-10 text-gray-500 px-10">
            Bio
            <div className="font-medium mb-10 text-gray-500 ">
              <textarea
                className="border-2 border-gray-300 w-full rounded-md"
                rows={10}
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed h-16 bottom-0 bg-blue-900 w-full md:w-10/12 right-0 flex flex-row items-center justify-between px-4 ">
        <div>
        <Button
          border="Solidify"
          theme="Primary"
          allow={true}
          onclick={() => {}}
          children="Reset All"
        ></Button>
        </div>
        <div>
          {" "}
          <Button
            border="Solidify"
            theme="Success"
            allow={true}
            onclick={() => {}}
            children="Save Changes"
          ></Button>
        </div>
      </div>
    </div>
  );
};

ProfilePage.defaultProps = {};

export default React.memo(ProfilePage);

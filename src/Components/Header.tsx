import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { logout } from "../api/auth";
import Button from "./Button/Button";
interface props {}
function DeleteInactiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props: any) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
const Header: React.FC<props> = () => {
  return (
    <>
      <div className="fixed flex items-center top-0 h-14 w-full bg-blue-900 flex-row">
        <img
          className="h-10 w-20"
          src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg"
        ></img>
        <div className="text-white text-2xl font-medium">CORK</div>
        <div className="absolute right-10 space-x-4 flex flex-row items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-mail "
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>

          <div className=" text-right ">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="text-black"><img className="h-10 w-10" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-8SJZalEzsMbwlSZY4chR62sCdrrNcTYoKA&usqp=CAU"></img></Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <a href="/profile">
                          <button
                            className={`${
                              active
                                ? "bg-blue-500 font-medium"
                                : "text-gray-900"
                            } group flex rounded-md items-center font-medium w-full px-2 py-2 text-sm`}
                          >
                            Profile
                          </button>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-blue-500 font-medium" : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-blue-500 font-medium" : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Archive
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-blue-500 font-medium" : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Move
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logout}
                          className={`${
                            active ? "bg-blue-500 font-medium" : "text-gray-900"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {};

export default React.memo(Header);

import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store";
interface props {}
const Sidebar: React.FC<props> = () => {
  const user=useSelector<AppState>((state)=>state.me);
  return (
    <>
      <div className=" hidden md:block fixed h-screen w-60 left-0 top-14 bg-gray-200">
        <ul className=" p-4 text-xl space-y-4">
          <li>Dashboard</li>
          <li>Elements</li>
          <li>Home</li>
          <li>Components</li>
        </ul>
      </div>
    </>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);

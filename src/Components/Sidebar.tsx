import React from "react";
interface props {}
const Sidebar: React.FC<props> = () => {
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

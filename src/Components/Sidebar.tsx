import React from "react";
import { meSelector } from "../selectors/auth.selectors";
import {  useAppSelector } from "../store";
import { HiOutlineChevronRight, HiOutlineHome,HiOutlineChip, HiOutlineCube, HiOutlineLightningBolt ,HiOutlineStop, HiOutlineTerminal
  ,HiOutlineTable, HiOutlineDatabase, HiOutlineClipboard ,HiOutlineUserGroup, HiOutlineDocument ,HiOutlineLockClosed,
  HiOutlineArrowsExpand, HiOutlineMap,HiOutlineChartPie,HiOutlineTrendingUp,HiOutlineDocumentReport} from 'react-icons/hi';
 
interface props {}
const Sidebar: React.FC<props> = () => {
  const user = useAppSelector(meSelector);
  return (
    <>
      <div className=" hidden md:block fixed h-screen w-60 left-0 top-14 bg-gray-200">
        <ul className=" p-4 text-xl space-y-4">
        <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineHome className="inline-block mr-2 w-5 h-5 text-gray-600"/> Dashboard <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineChip className="inline-block mr-2 w-5 h-5 text-gray-600"/>Apps  <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineCube className="inline-block mr-2 w-5 h-5 text-gray-600"/>Components <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineLightningBolt className="inline-block mr-2 w-5 h-5 text-gray-600"/>Elements <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineStop className="inline-block mr-2 w-5 h-5 text-gray-600"/>Font Icons</button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineTerminal className="inline-block mr-2 w-5 h-5 text-gray-600"/>Widgets</button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineTable className="inline-block mr-2 w-5 h-5 text-gray-600"/>Tables</button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineDatabase className="inline-block mr-2 w-5 h-5 text-gray-600"/>DataTables <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineClipboard className="inline-block mr-2 w-5 h-5 text-gray-600"/>Forms <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineUserGroup className="inline-block mr-2 w-5 h-5 text-gray-600"/>Users <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineDocument className="inline-block mr-2 w-5 h-5 text-gray-600"/>Pages <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineLockClosed className="inline-block mr-2 w-5 h-5 text-gray-600"/>Authentication <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineArrowsExpand className="inline-block mr-2 w-5 h-5 text-gray-600"/>Drag and Drop</button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineMap className="inline-block mr-2 w-5 h-5 text-gray-600"/>Maps</button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineChartPie className="inline-block mr-2 w-5 h-5 text-gray-600"/>Charts</button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineTrendingUp className="inline-block mr-2 w-5 h-5 text-gray-600"/>Starter Kit  <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
          <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineDocumentReport className="inline-block mr-2 w-5 h-5 text-gray-600"/>Documentation</button>
 
        </ul>
      </div>
    </>
  );
};

Sidebar.defaultProps = {};

export default React.memo(Sidebar);

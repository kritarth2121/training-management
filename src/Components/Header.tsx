import React from "react";
import { logout } from "../api";
import Button from "../Button/Button";
interface props{

}
const Header:React.FC<props> =()=>{
    return(
        <>
        <div className="fixed flex items-center top-0 h-14 w-full bg-black flex-row">
            <img className="h-10 w-20" src="https://designreset.com/cork/ltr/demo4/assets/img/logo.svg"></img>
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
          <Button border="Solidify"  theme="Primary" allow={true} onclick={logout} children ="Logout"/>
        </div>
        </div>
        
        </>
)}

Header.defaultProps={};

export default React.memo(Header);




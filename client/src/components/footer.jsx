import React from "react";
import Logo from "../assets/images/logo.png";
import { FaRegCopyright } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
export default function footer() {
  return (
    <div id="footer" className=" flex h-full bg-mygrey">
      <div className=" w-full h-full ">
        <div className=" flex justify-between w-2/3 sm:w-2/5 mx-auto p-4 sm:p-8 items-center">
          <img className=" w-14" src={Logo} alt="My Logo" />
          <div className=" flex items-center text-xs sm:text-base text-white gap-1">
            <FaRegCopyright />
            2024 by Gutu Shiferaw.{" "}
            <span className=" hidden sm:inline-block">
              All rights reserved!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

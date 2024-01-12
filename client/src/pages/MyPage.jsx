import React from "react";
import Logo from "../assets/images/Logo.png";
import { FaHamburger } from "react-icons/fa";
export default function MyPage() {
  return (
    <div className=" font-mono">
      <div className="w-screen bg-slate-300">
        <div className=" flex items-center justify-between w-2/3 h-auto mx-auto">
          <img className=" w-16 mt-5" src={Logo} alt="My Logo" />
          <div className=" hidden sm:inline-block">
            <ul className="flex items-center list-none gap-6 lg:gap-8 mt-5 text-sm">
              <li>Home</li>
              <li>
                <span className=" hidden lg:inline-block">Techinical-</span>
                <span>Skills</span>
              </li>
              <li>
                <span className=" hidden lg:inline-block">Professional-</span>
                Experience
              </li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <a className="inline-block sm:hidden">
            <FaHamburger />
            {/**/}
          </a>
        </div>
      </div>
    </div>
  );
}

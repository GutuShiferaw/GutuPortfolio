import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/images/Logo.png";
import { FaHamburger } from "react-icons/fa";
import resume from "../assets/files/UpdatedResume.pdf";
import Home from "../components/home";
import Myimage from "../assets/images/background1.png";
export default function home() {
  return (
    <div id="home" className=" h-screen w-screen">
      <div
        id="nav-bar"
        className=" top-0 w-screen shadow-xl bg-transparent py-2 z-20"
      >
        <div className="flex items-center justify-between w-2/3 h-auto mx-auto ">
          <Link to="home" smooth={true} duration={500}>
            <img className="w-14" src={Logo} alt="My Logo" />
          </Link>
          <div className="hidden sm:inline-block">
            <ul className="flex items-center list-none gap-6 lg:gap-8 mt-5 text-base font-extrabold">
              <Link to="home" smooth={true} duration={500}>
                <li className="p-2 cursor-pointer hover:text-white text-mylime ">
                  Home
                </li>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                <li className=" cursor-pointer hover:text-white text-mylime ">
                  <span className=" hidden lg:inline-block">Technical-</span>
                  Skills
                </li>
              </Link>
              <Link to="experience" smooth={true} duration={500}>
                <li className=" cursor-pointer hover:text-white text-mylime ">
                  Career
                  <span className="hidden lg:inline-block">-Journey</span>
                </li>
              </Link>
              <Link to="portfolio" smooth={true} duration={500}>
                <li className=" cursor-pointer hover:text-white text-mylime ">
                  Portfolio
                </li>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <li className="cursor-pointer hover:text-white text-mylime ">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <a className="inline-block sm:hidden">
            <FaHamburger />
          </a>
        </div>
      </div>
      {/* nav bar ends */}

      <div
        id="intro-par"
        className="typing-text mt-28 sm:mt-32 w-5/6 sm:w-2/6 md:w-2/4  mx-auto mb-20"
      >
        <div className="line">
          <div className="text-white text-5xl sm:text-7xl mb-3 font-extrabold">
            I<span className="text-mylime">'</span>M
          </div>
          <div className="text-white text-5xl sm:text-7xl mb-3 font-extrabold">
            Gutu<span className="text-mylime">,</span>
          </div>
          <div className="text-white text-5xl sm:text-7xl mb-5 font-extrabold max-w-full">
            Shiferaw<span className="text-mylime">.</span>
          </div>
          <div className="typingtext2 text-white text-sm sm:text-2xl">
            <span>SOFTWARE ENGINEER | FULLSTACK-DEVELOPER</span>
          </div>
        </div>
      </div>
      <div
        id="button-container"
        className=" line sm:flex text-white w-24 sm:w-60 gap-3 mx-auto "
      >
        <div className=" p-2 bg-orange-700 rounded-2xl  mb-3 sm:m-0 text-xs sm:text-base hover:opacity-80">
          <a href={resume} download="UpdatedResume.pdf" target="_blank">
            Download CV
          </a>
        </div>
        <div className=" p-2 bg-mylime rounded-2xl text-xs sm:text-base hover:opacity-80 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

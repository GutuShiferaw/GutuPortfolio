import React from "react";
import {
  FaRegSmileWink,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
export default function contact() {
  return (
    <div id="contact" className="flex h-screen w-screen  ">
      <div
        id="form-cont"
        className=" h-4/5 sm:h-3/4 w-11/12 sm:w-3/5 m-auto bg-DimGrey rounded-lg "
      >
        <div className=" inline-block sm:flex w-full sm:w-10/12 my-8 sm:my-24 mx-auto p-0 sm:p-3 mb-2 sm:mb-36 ">
          <div
            id="left-side"
            className=" w-full sm:w-1/2 justify-normal sm:justify-start text-white"
          >
            <div id="header" className=" w-1/3 sm:w-4/5 mx-auto ">
              <h1 className=" font-semibold  text-3xl"> CONTACT </h1>
            </div>
            <div
              id="intro-para"
              className=" w-full sm:w-4/5 mx-auto mt-5 mb-3 sm:mb-0"
            >
              <p className=" text-center sm:text-justify text-xs sm:text-sm">
                Hello there! I'm delighted to connect with you.{" "}
                <span className=" hidden sm:inline-block">
                  Whether you have a business inquiry, project proposal, or just
                  want to say hello, feel free to reach out using the contact
                  form. Your messages are always welcome, and I'm excited about
                  the possibility of collaborating and exploring new
                  opportunities together. Looking forward to hearing from you!
                </span>{" "}
              </p>
            </div>
          </div>
          <div id="right-side" className=" sm:justify-end ">
            <div id="form-cont" className=" w-11/12 sm:w-auto mx-auto sm:mx-0">
              <form action="#" className="w-full">
                <div className=" sm:flex gap-2 w-full mx-auto">
                  <input
                    className=" w-full sm:w-auto  p-1 sm:p-2 mb-2 sm:mb-0"
                    placeholder=" Full-Name"
                    type="text"
                  ></input>
                  <input
                    className=" w-full sm:w-auto p-1 sm:p-2"
                    placeholder=" Email"
                    type="text"
                  ></input>
                </div>
                <div className=" mt-2">
                  <input
                    className=" w-full p-1 sm:p-2"
                    placeholder=" Phone"
                    type="phone"
                  ></input>
                </div>
                <div className=" mt-2">
                  <textarea
                    className=" w-full p-1 sm:p-2"
                    name="text-box"
                    cols="20"
                    rows="5"
                    placeholder=" Your Message here"
                  ></textarea>
                </div>
                <div className=" mt-2">
                  <button
                    className=" p-1 sm:p-2 w-full bg-mylime"
                    type="sumbit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="socials-cont" className=" w-full">
          <div className=" w-1/2 sm:w-1/6 mt-5 sm:mt-0  mx-auto">
            <div className=" flex gap-7 text-white text-2xl">
              <a
                className=" cursor-pointer"
                href="https://twitter.com/Gutuwestbrook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/gutu-shiferaw-049086261/"
                target="_blank"
                className=" cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/paidway_g/"
                target="_blank"
                className=" cursor-pointer"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

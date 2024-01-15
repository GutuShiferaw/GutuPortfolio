import React from "react";

export default function experience() {
  return (
    <div id="experience" className="flex h-screen">
      <div className="w-full h-full">
        <div id="header-cont" className="w-full">
          <h1 className="text-center mt-6 text-xl sm:text-4xl text-white mb-5 sm:mb-10">
            03 Career Journey
          </h1>
        </div>
        <div id="grid-cont" className="flex w-full h-4/5">
          <div
            id="left-half"
            className="w-1/2 justify-start border-r-2 mx-3 border-mylime h-full"
          >
            {/* Content for the left half */}
            <div className=" h-1/4 "></div>
            <div className=" h-1/4 text-right mr-2">
              <p className=" text-sm sm:text-lg text-white">INSA (2021-2022)</p>
              <p className=" text-xs sm:text-sm text-white">
                Software Developer Intern
              </p>
              <p className=" text-xs sm:text-sm">details </p>
            </div>
            <div className=" h-1/4 "></div>
            <div className=" h-1/4 text-right mr-2 ">
              <p className=" text-sm sm:text-lg text-white">
                Walmart Canada (2019-2021)
              </p>
              <p className=" text-xs sm:text-sm text-white">
                Part-time E-commerce Associate{" "}
              </p>
              <p className="text-xs sm:text-sm">details </p>
            </div>
          </div>
          <div id="right-half" className="w-1/2 h-full justify-end">
            {/* Content for the right half */}
            <div className=" h-1/4 ">
              <p className=" text-sm sm:text-lg text-white">
                People to People Aid Organization (2023-Present)
              </p>
              <p className=" text-xs sm:text-sm text-white">
                {" "}
                Full Stack Developer{" "}
              </p>
              <p className="text-xs sm:text-sm">details </p>
            </div>
            <div className=" h-1/4 "></div>
            <div className=" h-1/4 ">
              <p className=" text-sm sm:text-lg text-white">
                Go-Bolt Logisitcs (2019-2023)
              </p>
              <p className=" text-xs sm:text-sm text-white">
                {" "}
                Logistics Specialist - Partime{" "}
              </p>
              <p className=" text-xs sm:text-sm">details </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

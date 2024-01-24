import React from "react";

export default function experience() {
  return (
    <div id="experience" className="flex h-screen w-screen ">
      <div className="w-full h-full">
        <div id="header-cont" className="w-full">
          <h1 className="text-center mt-6 text-xl sm:text-4xl text-white mb-5 sm:mb-10">
            <span className=" text-slate-400">02</span>{" "}
            <span className=" font-semibold">Career Journey</span>
          </h1>
        </div>
        <div id="grid-cont" className="flex w-full h-4/5">
          <div
            id="left-half"
            className="w-1/2 justify-start border-r-2 mx-3 border-mylime h-full "
          >
            {/* Content for the left half */}
            <div className=" h-1/4 "></div>
            <div className=" h-1/4 text-right mr-2 experience-item">
              <p className=" text-sm sm:text-lg text-white">
                INSA <span className=" text-slate-400">(2021-2022)</span>
                <span className=" text-mylime">.</span>
              </p>
              <p className=" text-xs sm:text-sm text-mylime font-extrabold">
                Software Developer Intern
              </p>
              <div className=" hidden lg:inline-block w-3/5 text-xs sm:text-sm text-white">
                <li className=" text-justify">
                  Developed a comprehensive Fuel, Oil, Lubricant, and Car
                  Administration System as a mobile application using Flutter
                  for the front end, delivering an intuitive and responsive user
                  experience.
                </li>
                <li className=" text-justify">
                  Implemented robust backend functionalities utilizing Java
                  Enterprise Edition (EJB), ensuring seamless data management
                  and system efficiency.
                </li>
              </div>
            </div>
            <div className=" h-1/4 "></div>
            <div className=" h-1/4 text-right mr-2 experience-item">
              <p className=" text-sm sm:text-lg text-white">
                Walmart Canada{" "}
                <span className=" text-slate-400">(2019-2021)</span>
                <span className=" text-mylime">.</span>
              </p>
              <p className=" text-xs sm:text-sm text-mylime font-extrabold">
                Part-time E-commerce Associate{" "}
              </p>
              <div className=" hidden lg:inline-block w-3/5 text-xs sm:text-sm text-white">
                <li className=" text-justify">
                  Managed inventory by arranging for product returns, rebates,
                  and exchanges.Communicated with customers about order status,
                  shipping dates and delivery tracking numbers.
                </li>
              </div>
            </div>
          </div>
          <div
            id="right-half"
            className="w-1/2 h-full justify-end experience-item"
          >
            {/* Content for the right half */}
            <div className=" h-1/4 experience-item">
              <p className=" text-sm sm:text-lg text-white">
                <span className=" text-mylime">.</span>People to People Aid
                Organization{" "}
                <span className=" text-slate-400">(2023-Present)</span>
              </p>
              <p className=" text-xs sm:text-sm text-mylime font-extrabold">
                {" "}
                Full Stack Developer{" "}
              </p>
              <div className=" hidden lg:inline-block w-3/5 text-xs sm:text-sm text-white">
                <li className=" text-justify">
                  Handled the entire software development lifecycle, from
                  conceptualization and design to implementation and
                  maintenance, for both web and mobile applications.
                </li>
                <li className=" text-justify">
                  Utilized React frameworks/html&CSS for the front-end and
                  employed Node.js/Spring Boot for the back end.{" "}
                </li>
              </div>
            </div>
            <div className=" h-1/4 "></div>
            <div className=" h-1/4 experience-item">
              <p className=" text-sm sm:text-lg text-white">
                <span className=" text-mylime">.</span>Go-Bolt Logisitcs
                <span className=" text-slate-400">(2019-2023)</span>
              </p>
              <p className=" text-xs sm:text-sm text-mylime font-extrabold">
                {" "}
                Logistics Specialist - Partime{" "}
              </p>
              <div className=" hidden lg:inline-block w-3/5 text-xs sm:text-sm text-white">
                <li className=" text-justify">
                  Kept materials organized in a central laydown area and
                  maintained an inventory of stocked materials.
                </li>
                <li className=" text-justify">
                  Analyzed areas of logistics for continuous improvement and to
                  determine the most cost-effective means or methods of
                  operations.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

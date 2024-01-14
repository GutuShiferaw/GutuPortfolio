import React from "react";

export default function Skills() {
  return (
    <div id="skills" className="flex   h-screen bg-DimGrey">
      <div className=" text-center h-3/4 my-auto w-3/4 mx-auto ">
        <h1 className=" text-4xl text-white mb-3">01 Technical Skills</h1>
        <p className=" text-lg text-white mb-10">
          My Knowledge Level in software
        </p>
        <div id="proficiency-cont" className=" w-3/5 mx-auto">
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">React</p>
            <div className="bg-mylime w-8/12 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">70%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">Flutter</p>
            <div className="bg-mylime w-7/12 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">65%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">Java EE</p>
            <div className="bg-mylime w-2/4 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">50%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">HTML & CSS</p>
            <div className="bg-mylime w-4/5 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">80%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">Javascript</p>
            <div className="bg-mylime w-7/12 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">65%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">Node.js</p>
            <div className="bg-mylime w-7/12 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">65%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">Django </p>
            <div className="bg-mylime w-3/4 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">75%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">MongoDB</p>
            <div className="bg-mylime w-7/12 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">65%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">WordPress</p>
            <div className="bg-mylime w-5/6 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">85%</div>
          </div>
          <div className="flex items-center mb-3">
            <p className="mr-5 opacity-90 text-white">GCP</p>
            <div className="bg-mylime w-2/4 h-2 mr-5 rounded-lg"></div>
            <div className=" text-white">50%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

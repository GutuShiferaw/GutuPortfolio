import React from "react";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gui from "../assets/images/Gui.png";
import Therm from "../assets/images/ThermApp.png";
import Steg from "../assets/images/stegTool.png";
import pred from "../assets/images/predictorApp.png";
export default function Portfolio() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };
  const sliderStyles = {
    border: "none",
  };

  return (
    <div id="portfolio" className="flex h-screen w-screen ">
      <div className="w-full h-full">
        <div id="header-cont" className="w-full text-center">
          <h1 className="mt-14 text-xl sm:text-4xl text-white mb-1 sm:mb-2">
            {" "}
            <span className="text-slate-400">03</span>
            <span className="font-semibold"> Portfolio </span>
          </h1>
          <h2 className=" text-base sm:text-xl text-slate-200 mb-1 sm:mb-2">
            Here is some of my Recent work ~
          </h2>
          <a
            href="https://github.com/GutuShiferaw/Software-Projects.git"
            target="_blank"
            className="  text-slate-400 text-base sm:text-xl underline italic"
          >
            SEE MORE
          </a>
        </div>
        <div
          id="slider-cont"
          className="w-full mt-12 md:mt-24 lg:mt-20"
          style={sliderStyles}
        >
          <Slider {...settings}>
            {/* Your portfolio items go here */}
            <div className=" text-center">
              <img
                src={gui}
                alt="Micro Grid GUI"
                className="border-white border-2 w-3/4 sm:w-1/5 mx-auto object-cover rounded-lg"
              />
              <p className=" mt-2 text-mylime">
                Micro Grid GUI (Renewable resource Project)
              </p>
              <p className="  text-white w-4/5 sm:w-1/2 mx-auto  text-sm sm:text-base ">
                A graphical user interface (GUI) for a Microgrid simulation,
                developed within the Django framework, serves as a platform for
                presenting MATLAB Simulink Microgrid simulations through the
                utilization of APIs. This entails creating a user interface with
                Django and integrating it with MATLAB and Simulink to enable the
                seamless presentation of Microgrid simulations. The GUI
                facilitates user interaction and visualization of simulation
                results, providing a cohesive environment for managing and
                exploring Microgrid scenarios..{" "}
              </p>
              <a
                href="https://github.com/GutuShiferaw/Software-Projects/tree/36ddf891af940f1afb1f38ec6a656647c70c5bc5/power%20control%20gui/Power%20Gui/powergui"
                target="_blank"
                className=" text-slate-400 underline italic mb-10 cursor-pointer"
              >
                View more detail:
              </a>
            </div>
            <div className=" text-center">
              <img
                src="https://media.giphy.com/media/26vUFrAE8wlkiH5CM/giphy.gif"
                alt="Thermostat App"
                className="border-white border-2 w-3/4 sm:w-1/5  mx-auto object-cover rounded-lg"
              />
              <p className=" mt-2 text-mylime">Thermostat Appilcation</p>
              <p className="  text-white w-4/5 sm:w-1/2 mx-auto  text-sm sm:text-base ">
                This project involves using a Raspberry Pi to control an LED
                through a locally hosted Django server. The Raspberry Pi,
                functioning as both the server host and controller, communicates
                with a simple LED via GPIO pins. Raspbian OS and Python are
                utilized to establish a seamless connection between the software
                and hardware components, showcasing a fundamental application of
                Django for local device control.
              </p>
              <a
                href="https://github.com/GutuShiferaw/Software-Projects/tree/36ddf891af940f1afb1f38ec6a656647c70c5bc5/ThermoStat-app"
                target="_blank"
                className=" text-slate-400 underline italic mb-10 cursor-pointer"
              >
                View more detail:
              </a>
            </div>
            <div className=" text-center">
              <img
                src={Steg}
                alt="Stegenography Tool"
                className="border-white border-2 w-3/4 sm:w-1/5  mx-auto object-cover rounded-lg"
              />
              <p className=" mt-2 text-mylime">Stegenography Tool</p>
              <p className="  text-white w-4/5 sm:w-1/2 mx-auto  text-sm sm:text-base ">
                PiHide is a tool that enables users to swiftly encode and decode
                concealed messages within images, employing a range of optional
                encryption algorithms for added security and versatility
              </p>
              <a
                href="https://github.com/GutuShiferaw/Software-Projects/tree/36ddf891af940f1afb1f38ec6a656647c70c5bc5/Stegenography_tool"
                target="_blank"
                className=" text-slate-400 underline italic mb-10 cursor-pointer"
              >
                View more detail:
              </a>
            </div>
            <div className=" text-center">
              <img
                src={pred}
                alt="Stegenography Tool"
                className="border-white border-2 w-3/4 sm:w-1/5  mx-auto object-cover rounded-lg"
              />
              <p className=" mt-2 text-mylime">
                Soccer Match Predictor AI Tool
              </p>
              <p className="  text-white w-4/5 sm:w-1/2 mx-auto  text-sm sm:text-base ">
                This AI tool is constructed using Python's tkinter module and
                incorporates a trained AI model, specifically Gradient Boosting.
                The model leverages historical English Premier League soccer
                data to predict match outcomes, ultimately determining a winner
                for a given matchup. By analyzing past data, this tool provides
                insights into soccer match predictions with the help of advanced
                machine learning techniques.
              </p>
              <a
                href="https://github.com/GutuShiferaw/Software-Projects/tree/36ddf891af940f1afb1f38ec6a656647c70c5bc5/Game%20Predictor%20app"
                target="_blank"
                className=" text-slate-400 underline italic mb-10 cursor-pointer"
              >
                View more detail:
              </a>
            </div>
            <div className=" text-center">
              <img
                src="https://media.giphy.com/media/0pBmCPzL0Tn7MCyZZb/giphy.gif"
                alt="Recipe Organizer App"
                className="border-white border-2 w-3/4 sm:w-1/5  mx-auto object-cover rounded-lg"
              />
              <p className=" mt-2 text-mylime">Recipe Organizer App</p>
              <p className="  text-white w-4/5 sm:w-1/2 mx-auto  text-sm sm:text-base ">
                A simple Recipe Organizer CRUD Application developed in EJS,
                this tool assists users in efficiently managing their cooking
                recipes. The application supports basic CRUD (Create, Read,
                Update, Delete) operations, allowing users to seamlessly add,
                view, modify, and remove recipes from their collection. With an
                intuitive user interface, it simplifies the organization of
                cooking instructions, ingredients, and other details, providing
                a convenient solution for recipe management.
              </p>
              <a
                href="https://github.com/GutuShiferaw/Software-Projects/tree/36ddf891af940f1afb1f38ec6a656647c70c5bc5/Recipe%20Organizer%20APP/RecipeOrganizer_-main"
                target="_blank"
                className=" text-slate-400 underline italic mb-10 cursor-pointer"
              >
                View more detail:
              </a>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

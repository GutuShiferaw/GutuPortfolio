import React from "react";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
            href="#"
            target="_blank"
            className="  text-slate-400 text-base sm:text-xl underline italic"
          >
            SEE MORE
          </a>
        </div>
        <div
          id="slider-cont"
          className="w-full mt-16 md:mt-24 lg:mt-20"
          style={sliderStyles}
        >
          <Slider {...settings}>
            {/* Your portfolio items go here */}
            <div className=" text-center">
              <img
                src="https://media.giphy.com/media/EDV30lQQ9VW5q/giphy.gif"
                alt="Portfolio Item"
                className="border-white border-2 w-3/4 sm:w-1/5 mx-auto object-cover rounded-lg"
              />
              <p className=" mt-2 text-mylime">Project Title</p>
              <p className="  text-white">Project Description</p>
              <a
                href="#"
                target="_blank"
                className=" text-slate-400 underline italic mb-3"
              >
                View more detail:
              </a>
            </div>
            <div>
              <img
                src="https://media.giphy.com/media/EDV30lQQ9VW5q/giphy.gif"
                alt="Portfolio Item"
                className=" w-3/4  sm:w-1/5 mx-auto object-cover"
              />
            </div>
            <div>
              <img
                src="https://media.giphy.com/media/EDV30lQQ9VW5q/giphy.gif"
                alt="Portfolio Item"
                className=" w-3/4  sm:w-1/5 mx-auto object-cover"
              />
            </div>
            {/* Add more items as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

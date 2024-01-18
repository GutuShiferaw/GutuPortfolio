import React from "react";
import Slider from "react-slick";
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
    <div id="portfolio" className="flex h-screen">
      <div className="w-full h-full">
        <div id="header-cont" className="w-full">
          <h1 className="text-center mt-14 text-xl sm:text-4xl text-white mb-1 sm:mb-2">
            {" "}
            <span className="text-slate-400">03</span>
            <span className="font-semibold"> Portfolio </span>
          </h1>
          <h2 className="text-center text-base sm:text-xl text-slate-200 mb-1 sm:mb-2">
            Here is some of my Recent work ~
          </h2>
          <h3 className="text-center text-xs sm:text-sm text-mylime mb-1 sm:mb-14">
            (Swipe or drag each window for easy navigation, or simply use the
            side arrow buttons to move between slides)
          </h3>
        </div>
        <div id="slider-cont" className="w-full" style={sliderStyles}>
          <Slider {...settings}>
            {/* Your portfolio items go here */}
            <div>
              <img
                src="https://media.giphy.com/media/EDV30lQQ9VW5q/giphy.gif"
                alt="Portfolio Item"
                className="border-white border-2 w-1/5 mx-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src="https://media.giphy.com/media/EDV30lQQ9VW5q/giphy.gif"
                alt="Portfolio Item"
                className=" w-1/5 mx-auto object-cover"
              />
            </div>
            {/* Add more items as needed */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

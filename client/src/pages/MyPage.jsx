import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../assets/images/Logo.png";
import { FaHamburger } from "react-icons/fa";
import Home from "../components/home";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function MyPage() {
  return (
    <div className="font-mono relative ">
      <div>
        <Home />
      </div>
      <div>
        <Skills />
      </div>

      <div id="experience">
        <Experience />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

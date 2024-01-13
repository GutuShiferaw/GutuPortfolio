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
    <div className="font-mono ">
      <div>
        <Home />
      </div>

      <Skills />

      <div>
        <Experience />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

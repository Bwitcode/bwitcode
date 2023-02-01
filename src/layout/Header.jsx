import React from "react";
import logo from "../assets/images/logo.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Header = ({ className }) => {
  return (
    <nav className="fixed z-10 pointer-events-none w-full">
      <div
        className={`wrapper ${
          className || ""
        } flex items-center justify-between`}
      >
        <img className="h-10 w-44" src={logo} alt="BWITCODE" />
        <Link
          to="malito:bwitcode@gmail.com"
          target="_blank"
          className="bg-services text-p px-8 py-2.5 rounded-full flex justify-center items-center font-medium gap-4 hover:bg-hover pointer-events-auto"
        >
          <span>Contact</span>
          <HiArrowLongRight size={24} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;

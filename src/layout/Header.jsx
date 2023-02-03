import React from "react";
import logo from "../assets/images/logo.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Header = ({ className }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed z-10 pointer-events-none w-full"
    >
      <div
        className={`wrapper ${
          className || ""
        } flex items-center justify-between`}
      >
        <img className="w-2/12" src={logo} alt="BWITCODE" />
        <Link
          to="malito:bwitcode@gmail.com"
          target="_blank"
          className="bg-services text-p px-[3%] py-[1%] rounded-full flex justify-center items-center font-medium gap-[1vw] hover:bg-hover pointer-events-auto"
        >
          <span>Contact</span>
          <HiArrowLongRight size="1.5vw" />
        </Link>
      </div>
    </motion.nav>
  );
};

export default Header;

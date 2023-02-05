import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiOutlineMenuAlt4, HiOutlineX, HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import servicesIcon from "../assets/icons/services.svg";
import workIcon from "../assets/icons/book.svg";
import aboutIcon from "../assets/icons/prisma.svg";

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

  const text = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 1.5,
      },
    },
  };

  const menu = {
    hidden: {
      x: "120%",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    show: {
      x: "0",
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  const aboutMenu = {
    show: {
      x: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.4,
        duration: 0.6,
      },
    },
    hidden: {
      x: "120%",
    },
  };

  const servicesMenu = {
    show: {
      y: 0,
      transition: {
        delay: 1,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: "220%",
    },
  };

  const worksMenu = {
    show: {
      y: 0,
      transition: {
        delay: 1,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: "320%",
    },
  };

  const contactMenu = {
    show: {
      y: 0,
      transition: {
        delay: 1,
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: "420%",
    },
  };

  const [isOpen, setOpen] = useState(false);
  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed z-10 w-full pointer-events-none"
    >
      <div
        className={`wrapper !py-8 ${
          className || ""
        } flex items-center justify-between`}
      >
        <img className="w-40 md:w-44 lg:w-48" src={logo} alt="BWITCODE" />

        {/* Desktop Menu */}
        <Link
          to="/contact"
          className="bg-services hidden lg:flex text-p px-8 py-2.5 rounded-full  justify-center items-center font-medium gap-4 hover:bg-hover pointer-events-auto"
        >
          <span>Contact</span>
          <HiArrowLongRight className="text-2xl" />
        </Link>
        {/* Mobile Menu */}
        <div className="flex items-center justify-center pointer-events-auto lg:hidden">
          {isOpen ? (
            <HiOutlineX
              size={42}
              className="cursor-pointer"
              onClick={() => setOpen(!isOpen)}
            />
          ) : (
            <HiOutlineMenuAlt4
              size={42}
              className="cursor-pointer"
              onClick={() => setOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      <motion.ul
        layout
        variants={menu}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
        exit="hidden"
        className={`pointer-events-auto lg:hidden w-full min-h-full flex flex-col items-end inset-0 -z-10 fixed justify-end pt-24 text-p bg-primary`}
      >
        <motion.li
          variants={contactMenu}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          exit="hidden"
          className="w-8/12 h-full "
        >
          <Link
            to="malito:bwitcode@gmail.com"
            target="_blank"
            className="flex items-center h-full bg-line"
          >
            <motion.div
              variants={text}
              initial="hidden"
              animate={isOpen ? "show" : "hidden"}
              exit="show"
              className="flex items-center justify-center gap-6 pl-8 sm:gap-10 sm:pl-10"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full sm:h-16 sm:w-16 bg-primary">
                <HiMail className="text-2xl sm:text-4xl fill-line" />
              </div>
              <p className="text-2xl sm:text-4xl font-gotu">Contact</p>
            </motion.div>
          </Link>
        </motion.li>
        <motion.li
          variants={worksMenu}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          exit="hidden"
          className="flex items-center w-9/12 h-full bg-works"
        >
          <motion.div
            variants={text}
            initial="hidden"
            animate={isOpen ? "show" : "hidden"}
            exit="show"
            className="flex items-center justify-center gap-8 pl-10 sm:gap-12 sm:pl-12"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full sm:h-16 sm:w-16 bg-primary">
              <img className="w-6 sm:w-8" src={workIcon} alt="work-icon" />
            </div>
            <p className="text-2xl sm:text-4xl font-gotu">Works</p>
          </motion.div>
        </motion.li>
        <motion.li
          variants={servicesMenu}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          exit="hidden"
          className="w-10/12 h-full"
        >
          <Link to="/services" className="flex items-center h-full bg-services">
            <motion.div
              variants={text}
              initial="hidden"
              animate={isOpen ? "show" : "hidden"}
              exit="show"
              className="flex items-center justify-center gap-10 pl-12 sm:gap-[56px] sm:pl-[56px]"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full sm:h-16 sm:w-16 bg-primary">
                <img
                  className="w-6 sm:w-8"
                  src={servicesIcon}
                  alt="services-icon"
                />
              </div>
              <p className="text-2xl sm:text-4xl font-gotu">Services</p>
            </motion.div>
          </Link>
        </motion.li>
        <motion.li
          variants={aboutMenu}
          initial="hidden"
          animate={isOpen ? "show" : "hidden"}
          exit="hidden"
          className="w-11/12 h-full"
        >
          <Link to="/about" className="flex items-center h-full bg-about">
            <motion.div
              variants={text}
              initial="hidden"
              animate={isOpen ? "show" : "hidden"}
              exit="show"
              className="flex items-center justify-center gap-12 pl-[56px] sm:gap-16 sm:pl-16"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full sm:h-16 sm:w-16 bg-primary">
                <img className="w-6 sm:w-8" src={aboutIcon} alt="about-icon" />
              </div>
              <p className="text-2xl sm:text-4xl font-gotu">About</p>
            </motion.div>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default Header;

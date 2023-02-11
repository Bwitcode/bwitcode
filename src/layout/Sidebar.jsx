import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import servicesIcon from "../assets/icons/services.svg";
import workIcon from "../assets/icons/book.svg";
import aboutIcon from "../assets/icons/prisma.svg";
import DisableClickSpamLink from "../components/DisableClickSpamLink";
const Sidebar = ({ variant }) => {
  const [isRight, setRight] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const sidebar = {
    wordVisible: {
      scale: 1,
      x: "0%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    wordHidden: {
      x: "100%",
      rotate: 180,
    },
    iconVisible: {
      scale: 1,
    },
    iconHidden: {
      scale: 0,
    },
    visible: {
      scaleX: 1,
      x: 0,
      transformOrigin: "right",
    },
    hidden: {
      scaleX: 0,
      x: 0,
      transformOrigin: "right",
    },
    servicesToLeft: {
      scaleX: [1, 12, 0],
      x: ["0vw", "0vw", "-100vw"],
      transition: {
        duration: 0.85,
        delay: 0.73,
        ease: "easeInOut",
        times: [0, 0.6, 1],
      },
    },
    aboutToLeft: {
      scaleX: [1, 12, 1],
      x: ["0vw", "0vw", "-75vw"],
      transition: { duration: 1.4, ease: "easeInOut", times: [0, 0.6, 1] },
    },
    workToLeft: {},

    servicesToRight: {
      scaleX: [1, 12, 1],
      x: ["0vw", "0vw", "75vw"],
      transformOrigin: "left",
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.6, 1],
      },
    },

    aboutToRight: {
      scaleX: [1, 12, 0],
      x: ["0vw", "0vw", "100vw"],
      transformOrigin: "left",
      transition: {
        duration: 1.4,
        delay: 0.2,
        ease: "easeInOut",
        times: [0, 0.5, 1],
      },
    },
  };

  const handleLinkClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, [2000]);
  };

  if (variant === "about") {
    return (
      <aside className="fixed top-0 left-0 z-10 justify-end hidden w-full min-h-screen text-3xl pointer-events-none lg:flex font-gotu text-p">
        <motion.div
          className="z-10 side-bar"
          initial={{ display: "none" }}
          exit={{ display: "flex" }}
        >
          <motion.div
            layout
            className="about-sidebar"
            variants={sidebar}
            initial="hidden"
            exit="aboutToLeft"
          ></motion.div>
        </motion.div>
        <motion.div className="side-bar">
          <Link
            onClick={handleLinkClick}
            className={isClicked && "pointer-events-none"}
            to="/services"
          >
            <motion.div
              layout
              className="services-sidebar"
              variants={sidebar}
              initial="visible"
              exit="servicesToLeft"
            >
              <motion.div className="flex flex-col items-center justify-between h-full py-8">
                <motion.div
                  className="icon-box-sidebar"
                  variants={sidebar}
                  initial="iconHidden"
                  animate="iconVisible"
                  exit="iconHidden"
                >
                  <img
                    className="w-6/12"
                    src={servicesIcon}
                    alt="services-icon"
                  />
                </motion.div>
                <div className="overflow-hidden">
                  <motion.p
                    variants={sidebar}
                    initial="wordHidden"
                    animate="wordVisible"
                    exit="wordHidden"
                    className="writing-mode-vertical"
                  >
                    Services
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div className="side-bar">
          <motion.div className="works-sidebar" initial={{ scaleX: 1 }}>
            <motion.div className="flex flex-col items-center justify-between h-full py-8">
              <motion.div
                className="icon-box-sidebar"
                variants={sidebar}
                initial="iconHidden"
                animate="iconVisible"
                exit="iconHidden"
              >
                <img className="w-6/12" src={workIcon} alt="works-icon" />
              </motion.div>
              <div className="overflow-hidden">
                <motion.p
                  variants={sidebar}
                  initial="wordHidden"
                  animate="wordVisible"
                  exit="wordHidden"
                  className="writing-mode-vertical"
                >
                  Works - soon
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </aside>
    );
  }
  if (variant === "services") {
    return (
      <aside className="fixed top-0 left-0 z-10 hidden w-full min-h-screen text-3xl pointer-events-none lg:flex font-gotu text-p">
        <motion.div className="side-bar">
          <Link
            onClick={handleLinkClick}
            className={isClicked && "pointer-events-none"}
            to={"/"}
          >
            <motion.div
              layout
              className="about-sidebar"
              variants={sidebar}
              initial="visible"
              exit="aboutToRight"
            >
              <motion.div className="flex flex-col items-center justify-between h-full py-8">
                <motion.div
                  variants={sidebar}
                  initial="iconHidden"
                  animate="iconVisible"
                  exit="iconHidden"
                  className="icon-box-sidebar"
                >
                  <img className="w-6/12" src={aboutIcon} alt="about-icon" />
                </motion.div>
                <div className="overflow-hidden">
                  <motion.p
                    variants={sidebar}
                    initial="wordHidden"
                    animate="wordVisible"
                    exit="wordHidden"
                    className="writing-mode-vertical"
                  >
                    About
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
        <motion.div className="pointer-events-none side-bar">
          <Link
            onClick={handleLinkClick}
            className={isClicked && "pointer-events-none"}
            to="/services"
          >
            <motion.div
              layout
              className="services-sidebar"
              variants={sidebar}
              initial="hidden"
              exit="servicesToRight"
            ></motion.div>
          </Link>
        </motion.div>
        <motion.div className="ml-auto pointer-events-none side-bar">
          <Link
            onClick={handleLinkClick}
            className={isClicked && "pointer-events-none"}
            to="/services"
          >
            <motion.div
              layout
              className="services-sidebar"
              variants={sidebar}
              initial="hidden"
              onClick={() => setRight(true)}
              exit={isRight && "servicesToLeft"}
            ></motion.div>
          </Link>
        </motion.div>
        <motion.div className="side-bar">
          <motion.div className="works-sidebar" initial={{ scaleX: 1 }}>
            <motion.div className="flex flex-col items-center justify-between h-full py-8">
              <motion.div
                className="icon-box-sidebar"
                variants={sidebar}
                initial="iconHidden"
                animate="iconVisible"
                exit="iconHidden"
              >
                <img className="w-6/12" src={workIcon} alt="works-icon" />
              </motion.div>
              <div className="overflow-hidden">
                <motion.p
                  variants={sidebar}
                  initial="wordHidden"
                  animate="wordVisible"
                  exit="wordHidden"
                  className="writing-mode-vertical"
                >
                  Works - soon
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </aside>
    );
  }
};

export default Sidebar;

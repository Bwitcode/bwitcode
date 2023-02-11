import React, { useState } from "react";
import Layout from "../layout";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import letter from "../assets/icons/letter.svg";
import instagram from "../assets/icons/instagram.svg";
import logoWhite from "../assets/images/logo-white.png";
import processFrame from "../assets/images/process-frame.png";
import { FaLinkedinIn } from "react-icons/fa";
import {
  HiArrowLongDown,
  HiMagnifyingGlass,
  HiOutlineCog8Tooth,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";
import { HiOutlineTemplate } from "react-icons/hi";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiRedux,
  SiReactrouter,
} from "react-icons/si";
const Services = () => {
  const services = [
    {
      id: 1,
      name: "Web design and development",
      icon: <HiOutlineTemplate />,
    },
    {
      id: 2,
      name: "Web hosting and maintenance",
      icon: <HiOutlineCog8Tooth />,
    },
    {
      id: 3,
      name: "Search engine optimization (SEO)",
      icon: <HiOutlineComputerDesktop />,
    },
    {
      id: 4,
      name: "Custom software development",
      icon: <HiMagnifyingGlass />,
    },
    {
      id: 5,
      name: "Content management system (CMS) development",
    },
  ];

  const process = [
    {
      id: 1,
      title: "Discovery",
      desc: "The team will do their research and will take all the necessary steps so that we can make an accurate plan for your project.",
    },
    {
      id: 2,
      title: "Wire framing",
      desc: "Before we reach the design prototype stage wireframes will be created to plot out the website user flow and structure.",
    },
    {
      id: 3,
      title: "Design",
      desc: "In an end to end collaborative process a bespoke design for your website will be created in Photoshop.",
    },
    {
      id: 4,
      title: "Development",
      desc: "A digital version will be developed on our staging server, using the final designs.",
    },
    {
      id: 5,
      title: "Population",
      desc: "Function will be established and the site populated with content to meet the project requirements.",
    },
    {
      id: 6,
      title: "Testing",
      desc: "This is the stage that consists of full testing with Q&A as well as testing for interoperability to provide a performance that is always optimal.",
    },
  ];

  const technologies = [
    {
      id: 1,
      icon: (
        <SiHtml5 className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-orange-600" />
      ),
    },
    {
      id: 2,
      icon: (
        <SiCss3 className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-blue-500" />
      ),
    },
    {
      id: 3,
      icon: (
        <SiTailwindcss className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-sky-500" />
      ),
    },
    {
      id: 4,
      icon: (
        <SiBootstrap className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-indigo-600" />
      ),
    },
    {
      id: 5,
      icon: (
        <SiJavascript className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-amber-300" />
      ),
    },
    {
      id: 6,
      icon: (
        <SiTypescript className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-blue-800" />
      ),
    },
    {
      id: 7,
      icon: (
        <SiReact className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-sky-400" />
      ),
    },
    {
      id: 8,
      icon: (
        <SiNextdotjs className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-gray-900" />
      ),
    },
    {
      id: 9,
      icon: (
        <SiDotnet className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-sky-500" />
      ),
    },
    {
      id: 10,
      icon: (
        <SiRedux className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-fuchsia-700" />
      ),
    },
    {
      id: 11,
      icon: (
        <SiReactrouter className="text-6xl transition-all duration-300 sm:text-7xl md:text-8xl group-hover:scale-125 fill-gray-800" />
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll();

  const next = () => {
    const length = process.length - 1;
    setCurrent((perv) => (perv === length ? (perv = 0) : perv + 1));
  };

  const perv = () => {
    const length = process.length - 1;
    setCurrent((perv) => (perv === 0 ? (perv = length) : perv - 1));
  };

  const variants = {
    titleVisible: {
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    titleHidden: {
      transition: { duration: 1, ease: "easeOut" },

      y: "100%",
    },
  };

  return (
    <div>
      <Layout page={"services"}>
        <motion.div
          className="pt-32 overflow-hidden"
          style={{ translateY: scrollYProgress }}
        >
          <header className="relative mx-auto wrapper ">
            <div className="relative flex flex-col items-center gap-2 lg:gap-8 xl:gap-20 lg:flex-row">
              <h1 className="relative max-w-md text-6xl text-right sm:pr-40 sm:max-w-xl lg:pr-0 md:mr-0 xl:pl-20 sm:text-8xl md:text-9xl font-playfairDisplay">
                <span className="block pb-4 contain-content">
                  <motion.span
                    className="block"
                    variants={variants}
                    initial="titleHidden"
                    animate="titleVisible"
                    exit="titleHidden"
                  >
                    Our
                  </motion.span>
                </span>
                <span className="block pb-4 contain-content prespective-100">
                  <motion.span
                    className="block"
                    variants={variants}
                    initial="titleHidden"
                    animate="titleVisible"
                    exit="titleHidden"
                  >
                    Services
                  </motion.span>
                </span>{" "}
                <span className="absolute top-4 left-16 sm:left-28 md:left-54 lg:left-20 xl:left-44">
                  <svg
                    className="w-8 sm:w-12"
                    viewBox="0 0 48 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.52 33.9C29.52 42.48 27.21 46.77 22.59 46.77C19.73 46.77 16.4667 44.9733 12.8 41.38C16.2467 37.7867 18.8133 33.6067 20.5 28.84C15.66 31.1133 11.5167 32.25 8.07 32.25C3.15667 32.25 0.7 29.9033 0.7 25.21C0.7 22.79 1.50667 20.0767 3.12 17.07C8.25333 19.3433 13.0933 20.48 17.64 20.48C12.5067 14.76 9.94 10.0667 9.94 6.4C9.94 2.22 13.0567 0.129994 19.29 0.129994C20.6833 0.129994 22.04 0.239995 23.36 0.459996C23.0667 2.73333 22.92 4.97 22.92 7.17C22.92 9.37 23.5433 12.0833 24.79 15.31C29.41 7.39 33.6633 3.43 37.55 3.43C38.87 3.43 40.3367 4.49333 41.95 6.62C43.6367 8.67333 44.81 11.3867 45.47 14.76C39.8967 15.7867 35.2767 17.6567 31.61 20.37C41.95 23.0833 47.12 26.3467 47.12 30.16C47.12 31.5533 46.4967 33.0933 45.25 34.78C44.0767 36.4667 42.3533 37.9333 40.08 39.18C34.2133 33.1667 30.62 29.6467 29.3 28.62C29.4467 29.72 29.52 31.48 29.52 33.9Z"
                      fill="#0EBDB8"
                    />
                  </svg>
                </span>
              </h1>

              <div className="flex lg:items-end">
                <p className="flex mt-2 text-xs max-sm:w-64 lg:mx-auto sm:text-sm md:text-base lg:pb-12">
                  We try to perform every service as qualitatively as possible
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center ml-auto cursor-pointer max-md:hidden max-w-fit">
              <div className="w-10 h-10 rounded-full sm:w-12 sm:h-12 bg-services"></div>
              <HiArrowLongDown className="absolute text-4xl sm:text-5xl top-7" />
            </div>
          </header>

          <section className="mx-auto bg-alternative wrapper">
            <h2 className="text-base font-semibold uppercase md:text-lg lg:text-xl">
              Services
            </h2>
            <div className="mt-8">
              <h3 className="font-gotu text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center">
                We provide the following services
              </h3>
              <div className="hidden lg:flex flex-wrap justify-center gap-8 mt-10 text-xs md:text-base sm:text-sm md:gap-12">
                {services.map(({ id, name }) => (
                  <div className="px-8 py-4 rounded-full bg-card" key={id}>
                    {name}
                  </div>
                ))}
              </div>
              <div className="grid lg:hidden justify-items-center gap-8 mt-10 text-xs md:text-base sm:text-sm md:gap-12  mx-auto">
                {services.map(({ id, name, icon }) => (
                  <div
                    key={id}
                    className="flex w-full justify-between odd:flex-row-reverse gap-4"
                  >
                    {icon && (
                      <div className="px-4 py-3 text-lg sm:text-xl md:text-2xl flex justify-center items-center rounded-full bg-card">
                        {icon}
                      </div>
                    )}
                    <div className="text-center w-full py-4 rounded-full bg-card">
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative mx-auto bg-footer wrapper text-p">
            <h2 className="text-base font-semibold uppercase md:text-lg lg:text-xl">
              Process
            </h2>
            <div className="flex flex-col-reverse justify-between pt-12 sm:flex-row ">
              <div className="sm:max-w-[220px] flex flex-col justify-between items-center">
                <motion.div className="pt-12 space-y-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfairDisplay">
                    {process[current].title}
                  </h3>
                  <p className="text-xs font-semibold sm:text-sm md:text-base">
                    {process[current].desc}
                  </p>
                  <div className="absolute top-0 font-semibold right-6 text-9xl sm:right-24 sm:top-4 text-white/40">
                    0{process[current].id}
                  </div>
                </motion.div>

                <div className="flex gap-12 -ml-10 sm:ml-4 md:-ml-10">
                  <div
                    onClick={perv}
                    className="relative flex items-center justify-center my-12 text-white rotate-90 cursor-pointer max-w-fit"
                  >
                    <div className="w-10 h-10 rounded-full lg:w-12 lg:h-12 bg-services "></div>
                    <HiArrowLongDown className="absolute text-4xl lg:text-5xl top-7" />
                  </div>
                  <div
                    onClick={next}
                    className="relative flex items-center justify-center my-12 text-white -rotate-90 cursor-pointer max-w-fit"
                  >
                    <div className="w-10 h-10 rounded-full lg:w-12 lg:h-12 bg-services"></div>
                    <HiArrowLongDown className="absolute text-4xl lg:text-5xl top-7" />
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="w-11/12 mx-auto lg:w-[635px] relative"
                  src={processFrame}
                  alt="process-frame"
                />
              </div>
            </div>
          </section>

          <section className="mx-auto wrapper">
            <div className="py-12 space-y-12">
              <h2 className="text-2xl font-medium text-center sm:text-3xl lg:text-4xl text-primary">
                We Work with future-proof technologies
              </h2>
              <div className="grid grid-cols-2 gap-4 md:gap-12 md:grid-cols-3">
                {technologies.map(({ id, icon }) => (
                  <div
                    key={id}
                    className="flex items-center justify-center py-8 transition-all bg-white rounded-tl-3xl rounded-br-3xl md:rounded-3xl group"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="hidden mx-auto lg:block wrapper bg-footer text-p">
            <div className="flex flex-col space-y-16">
              <div className="flex items-center justify-between">
                <h2 className="max-w-sm text-5xl leading-normal font-playfairDisplay">
                  What our help with something?
                </h2>
                <div className="flex gap-20 pt-4 font-bold">
                  <div className="space-y-4">
                    <span className="text-sm text-secondary">Contact</span>
                    <ul>
                      <li>+994 99 344 54 34</li>
                      <li>bwitcode@gmail.com</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <span className="text-sm font-bold text-secondary">
                      Pages
                    </span>
                    <ul>
                      <li>
                        <Link to="/">About</Link>
                      </li>
                      <li
                        className="cursor-pointer"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Services
                      </li>
                      <li>Works</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between ">
                <div className="relative flex items-center cursor-pointer">
                  <Link
                    className="relative flex items-center cursor-pointer"
                    to="/contact"
                  >
                    <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-alternative ">
                      <img
                        src={letter}
                        className="pointer-events-none"
                        alt="letter"
                      />
                    </div>
                    <div className="w-64 flex justify-end items-center pr-12 rounded-full bg-primary absolute h-[72px] text-primary font-medium text-xl">
                      Reach Out
                    </div>{" "}
                  </Link>
                </div>

                <div className="flex gap-8 pr-40">
                  <div className="w-[56px] h-[56px] bg-primary rounded-full flex justify-center items-center pointer-events-none">
                    <img src={instagram} alt="instagramLogo" />
                  </div>
                  <div className="w-[56px] h-[56px] bg-primary rounded-full flex justify-center items-center">
                    <FaLinkedinIn size={24} className="fill-footer" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-48 pointer-events-none"
                    src={logoWhite}
                    alt="logoWhite"
                  />
                </div>
                <div className="flex pr-12">
                  <span className="text-sm font-medium text-secondary">
                    © 2023 BWITCODE, All rights reserved
                  </span>
                </div>
              </div>
            </div>
          </footer>

          <footer className="block lg:hidden bg-footer text-p">
            <div className="flex flex-col gap-4 rounded-br-full sm:flex-row bg-works wrapper outline outline-line">
              <h2 className="text-3xl leading-normal sm:max-w-sm md:text-5xl sm:text-4xl font-playfairDisplay">
                What our help with something?
              </h2>
              <div className="flex cursor-pointer ">
                <div>
                  <Link to="/contact" className="relative flex items-center ">
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full md:w-20 md:h-20 bg-alternative ">
                      <img
                        src={letter}
                        className="w-8 pointer-events-none md:w-10"
                        alt="letter"
                      />
                    </div>
                    <div className="absolute flex items-center justify-end w-48 pr-8 text-base font-medium rounded-full md:w-60 md:h-16 h-14 bg-primary text-primary sm:text-lg md:text-xl">
                      Reach Out
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="sm:flex sm:justify-between">
                <div>
                  <img
                    className="w-48 pointer-events-none"
                    src={logoWhite}
                    alt="logoWhite"
                  />
                </div>

                <div className="flex gap-12 pt-12 font-bold sm:gap-16 lg:gap-20 sm:pt-0">
                  <div className="space-y-4">
                    <span className="text-xs sm:text-sm text-secondary">
                      Contact
                    </span>
                    <ul className="text-sm sm:text-base">
                      <li>+994 99 344 54 34</li>
                      <li>bwitcode@gmail.com</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <span className="text-xs font-bold sm:text-sm text-secondary">
                      Pages
                    </span>
                    <ul className="text-sm sm:text-base">
                      <li>About</li>
                      <li>
                        <Link to="/services">Services</Link>
                      </li>
                      <li>Works</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex pt-12 sm:justify-center">
                <span className="text-xs font-medium sm:text-sm text-secondary">
                  © 2023 BWITCODE, All rights reserved
                </span>
              </div>
            </div>
          </footer>
        </motion.div>
      </Layout>
    </div>
  );
};

export default Services;

import React, { useState } from "react";
import Layout from "../layout";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import letter from "../assets/icons/letter.svg";
import instagram from "../assets/icons/instagram.svg";
import logoWhite from "../assets/images/logo-white.png";
import processFrame from "../assets/images/process-frame.png";
import { FaLinkedinIn } from "react-icons/fa";
import { HiArrowLongDown } from "react-icons/hi2";
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
    },
    {
      id: 2,
      name: "Web hosting and maintenance",
    },
    {
      id: 3,
      name: "Search engine optimization (SEO)",
    },
    {
      id: 4,
      name: "Custom software development",
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
      icon: <SiHtml5 size={80} className="fill-orange-600" />,
    },
    {
      id: 2,
      icon: <SiCss3 size={80} className="fill-blue-500" />,
    },
    {
      id: 3,
      icon: <SiTailwindcss size={80} className="fill-sky-500" />,
    },
    {
      id: 4,
      icon: <SiBootstrap size={80} className="fill-indigo-600" />,
    },
    {
      id: 5,
      icon: <SiJavascript size={80} className="fill-amber-300" />,
    },
    {
      id: 6,
      icon: <SiTypescript size={80} className="fill-blue-800" />,
    },
    {
      id: 7,
      icon: <SiReact size={80} className="fill-sky-400" />,
    },
    {
      id: 8,
      icon: <SiNextdotjs size={80} className="fill-gray-900" />,
    },
    {
      id: 9,
      icon: <SiDotnet size={80} className="fill-sky-500" />,
    },
    {
      id: 10,
      icon: <SiRedux size={80} className="fill-fuchsia-700" />,
    },
    {
      id: 11,
      icon: <SiReactrouter size={80} className="fill-gray-800" />,
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
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    titleHidden: {
      y: "100%",
    },
  };

  return (
    <div>
      <Layout page={"services"}>
        <motion.div
          className="pt-44 overflow-hidden"
          style={{ translateY: scrollYProgress }}
        >
          <header className="relative wrapper mx-auto py-12">
            <div className="flex gap-20">
              <h1 className="text-9xl font-playfairDisplay  text-right max-w-xl pl-20">
                <span className="block contain-content pb-4">
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
                <span className="block contain-content pb-4 prespective-100">
                  <motion.span
                    className="block"
                    variants={variants}
                    initial="titleHidden"
                    animate="titleVisible"
                    exit="titleHidden"
                  >
                    Services
                  </motion.span>
                </span>
                <span className="absolute top-16 left-80">
                  <svg
                    width="48"
                    height="47"
                    viewBox="0 0 48 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.52 33.9C29.52 42.48 27.21 46.77 22.59 46.77C19.73 46.77 16.4667 44.9733 12.8 41.38C16.2467 37.7867 18.8133 33.6067 20.5 28.84C15.66 31.1133 11.5167 32.25 8.07 32.25C3.15667 32.25 0.7 29.9033 0.7 25.21C0.7 22.79 1.50667 20.0767 3.12 17.07C8.25333 19.3433 13.0933 20.48 17.64 20.48C12.5067 14.76 9.94 10.0667 9.94 6.4C9.94 2.22 13.0567 0.129994 19.29 0.129994C20.6833 0.129994 22.04 0.239995 23.36 0.459996C23.0667 2.73333 22.92 4.97 22.92 7.17C22.92 9.37 23.5433 12.0833 24.79 15.31C29.41 7.39 33.6633 3.43 37.55 3.43C38.87 3.43 40.3367 4.49333 41.95 6.62C43.6367 8.67333 44.81 11.3867 45.47 14.76C39.8967 15.7867 35.2767 17.6567 31.61 20.37C41.95 23.0833 47.12 26.3467 47.12 30.16C47.12 31.5533 46.4967 33.0933 45.25 34.78C44.0767 36.4667 42.3533 37.9333 40.08 39.18C34.2133 33.1667 30.62 29.6467 29.3 28.62C29.4467 29.80 29.52 31.48 29.52 33.9Z"
                      fill="#0EBDB8"
                    />
                  </svg>
                </span>
              </h1>

              <div className="flex items-end">
                <p className="flex pb-12 mx-auto mt-2">
                  We try to perform every service as qualitatively as possible
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center my-12 ml-auto max-w-fit">
              <div className="w-12 h-12 rounded-full bg-services"></div>
              <HiArrowLongDown size={48} className="absolute top-7" />
            </div>
          </header>

          <section className="bg-alternative wrapper mx-auto py-16">
            <h2 className="text-xl font-semibold uppercase">Services</h2>
            <div className="mt-8">
              <h3 className="font-gotu text-[40px] text-center">
                We provide the following services
              </h3>
              <div className="flex flex-wrap gap-12 mt-10 justify-center">
                {services.map(({ id, name }) => (
                  <div className="py-4 px-8 bg-card rounded-full" key={id}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-footer wrapper mx-auto py-16 text-p relative">
            <h2 className="text-xl font-semibold uppercase">Process</h2>
            <div className="pt-12 flex justify-between ">
              <div className="max-w-[220px] flex flex-col justify-between items-center">
                <motion.div className="space-y-8 pt-12">
                  <h3 className="font-playfairDisplay text-4xl">
                    {process[current].title}
                  </h3>
                  <p className="font-semibold">{process[current].desc}</p>
                  <div className="font-semibold text-9xl absolute right-24 top-4 text-white/40">
                    0{process[current].id}
                  </div>
                </motion.div>

                <div className="flex -ml-10 gap-12">
                  <div
                    onClick={perv}
                    className="relative flex items-center justify-center my-12 max-w-fit text-white rotate-90 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-services "></div>
                    <HiArrowLongDown size={48} className="absolute top-7" />
                  </div>
                  <div
                    onClick={next}
                    className="relative flex items-center justify-center my-12 max-w-fit text-white -rotate-90 cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-services"></div>
                    <HiArrowLongDown size={48} className="absolute top-7" />
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="w-[635px] relative"
                  src={processFrame}
                  alt="process-frame"
                />
              </div>
            </div>
          </section>

          <section className="wrapper mx-auto">
            <div className="space-y-12 py-12">
              <h2 className="text-primary text-4xl text-center font-medium">
                We Work with future-proof technologies
              </h2>
              <div className="flex flex-wrap gap-12">
                {technologies.map(({ id, icon }) => (
                  <div
                    key={id}
                    className="rounded-xl hover:-translate-y-4 hover:scale-110 py-6 flex justify-center items-center shadow-md px-24 bg-white transition-all group"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <footer className="wrapper bg-footer text-p mx-auto">
            <div className="flex flex-col space-y-16">
              <div className="flex items-center justify-between">
                <h2 className=" leading-normal font-playfairDisplay text-5xl max-w-sm">
                  What our help with something?
                </h2>
                <div className="font-bold flex pt-4 gap-20">
                  <div className="space-y-4">
                    <span className="text-secondary text-sm">Contact</span>
                    <ul>
                      <li>+994 99 344 54 34</li>
                      <li>bwitcode@gmail.com</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <span className="text-secondary font-bold text-sm">
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
                    to="malito:bwitcode@gmail.com"
                    target="_blank"
                    className="h-20 w-20 bg-alternative flex justify-center relative z-10 items-center rounded-full "
                  >
                    <img
                      src={letter}
                      className="pointer-events-none"
                      alt="letter"
                    />
                  </Link>
                  <div className="w-64 flex justify-end items-center pr-12 rounded-full bg-primary absolute h-[72px] text-primary font-medium text-xl">
                    Reach Out
                  </div>
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
                  <span className="text-secondary font-medium text-sm">
                    © 2023 BWITCODE, All rights reserved
                  </span>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      </Layout>
    </div>
  );
};

export default Services;

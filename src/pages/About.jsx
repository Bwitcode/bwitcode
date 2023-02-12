import React from "react";
import Layout from "../layout";
import { motion } from "framer-motion";
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import aboutUsFrame from "../assets/images/about-us-frame.png";
import miniLogo from "../assets/images/mini-logo.png";
import userChecked from "../assets/icons/userChecked.svg";
import statics from "../assets/icons/statics.svg";
import eye from "../assets/icons/eye.svg";
import lamp from "../assets/icons/lamp.svg";
import footerFrame from "../assets/icons/footer-frame.svg";
import footerArrow from "../assets/icons/footer-arrow.svg";
import letter from "../assets/icons/letter.svg";
import instagram from "../assets/icons/instagram.svg";
import logoWhite from "../assets/images/logo-white.png";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import video from "../assets/images/video.mp4"
const About = () => {
  const principles = [
    {
      id: 1,
      left: "Our participants needs are paramount",
      icon: userChecked,
      right:
        "Our focus is always on understanding your needs in everything that we do.",
    },
    {
      id: 2,
      left: "Stay open and learn from mistakes",
      icon: statics,
      right:
        "Mistakes are where we learn the most. We listen, iterate and collaborate to overcome obstacles and improve outcomes for all involved.",
    },
    {
      id: 3,
      left: "Design for accessibility always",
      icon: eye,
      right:
        "Research, refine, share and learn in the fields of usability and accessibility. Design universally.",
    },
    {
      id: 4,
      left: "Innovate to improve outcomes",
      icon: lamp,
      right:
        "We believe innovation is the best way to improve outcomes for those in care.",
    },
  ];

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
      <Layout page={"about"}>
        <motion.div className="pt-32 overflow-hidden">
          <header className="wrapper ">
            <div className="space-y-20">
              <div className="relative">
                <h1 className="text-6xl sm:text-8xl md:text-9xl font-playfairDisplay">
                  <span className="block pb-4 contain-content">
                    <motion.span
                      className="block"
                      variants={variants}
                      initial="titleHidden"
                      animate="titleVisible"
                      exit="titleHidden"
                    >
                      Make
                    </motion.span>
                  </span>
                  <span className="block pb-4 contain-content prespective-100">
                    <motion.span
                      className="hidden lg:block"
                      variants={variants}
                      initial="titleHidden"
                      animate="titleVisible"
                      exit="titleHidden"
                    >
                      Everthing Easier
                    </motion.span>
                    <motion.span
                      className="block lg:hidden"
                      variants={variants}
                      initial="titleHidden"
                      animate="titleVisible"
                      exit="titleHidden"
                    >
                      Everthing
                    </motion.span>
                  </span>
                  <span className="block pb-4 lg:hidden contain-content prespective-100">
                    <motion.span
                      className="block lg:hidden"
                      variants={variants}
                      initial="titleHidden"
                      animate="titleVisible"
                      exit="titleHidden"
                    >
                      Easier
                    </motion.span>
                  </span>
                </h1>
                <span className="absolute top-12 left-72 sm:left-96">
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
                <p className="flex max-w-md pr-20 mx-auto mt-4 text-xs sm:mt-8 sm:text-sm md:text-base">
                  We will prepare your tech stack and software delivery process
                  for a bright future.
                </p>
              </div>
              <div className="relative flex items-center justify-center cursor-pointer max-md:hidden max-w-fit">
                <div className="w-10 h-10 rounded-full sm:w-12 sm:h-12 bg-services"></div>
                <HiArrowLongDown className="absolute text-4xl sm:text-5xl top-7" />
              </div>
            </div>
          </header>

          <section className="relative py-12 wrapper bg-footer text-p">
            <div>
              <h2 className="text-sm font-semibold uppercase">About us</h2>
              <div className="space-y-16">
                <div className="flex">
                  <img
                    src={aboutUsFrame}
                    className="relative w-8/12 pointer-events-none -left-8 sm:-left-10 lg:-left-16"
                    alt="person-with-pen"
                  />
                  <div className="text-3xs flex flex-col justify-center items-center gap-3">
                    {/* <p className="hover:scale-110 cursor-pointer transition-all">Best Price</p>
                    <p className="hover:scale-110 cursor-pointer transition-all">Well designed</p>
                    <p className="hover:scale-110 cursor-pointer transition-all">SEO optimazed</p>
                    <p className="hover:scale-110 cursor-pointer transition-all">User-friendly</p> */}
                    <p>Our vision is to explore every dimension of the digital world, gain knowledge and use it to help businesses achieve creative and long-term success quickly. Our research and development team is constantly working on how we can improve such web design and development solutions to grow with time.</p>
                    <p>We work to digitally transform businesses to harness the power of the digital space. Our focus is to provide quality solutions for every business that chooses us. We believe in providing affordable IT and software development solutions with hundred percent transparency, commitment and mutual trust.</p>
                  </div>
                </div>
                <div className="grid gap-8 text-xs sm:gap-20 sm:grid-cols-2 sm:text-sm md:text-base">
                  <p>
                    We all know that setting up a business or branding it can be
                    costly. One of the first things that you need to have is a
                    good web site and that can often be where the costs can
                    skyrocket. You want a really professional looking job done
                    but you can’t spend your entire budget on it.
                  </p>
                  <p>
                    Well, now you can get your business off to a flying start,
                    with Bwitcode most reliable and affordable provider of
                    quality website design.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="wrapper">
            <div className="space-y-16">
              <h2 className="text-lg font-semibold text-center capitalize sm:text-xl md:text-2xl">
                The team will turn your ideas into reality
              </h2>

              <div className="flex flex-col-reverse items-center gap-16 lg:gap-10 xl:gap-24 md:flex-row">
                <div className="px-8 space-y-12 text-xs text-center sm:text-sm lg:text-base md:px-0 sm:max-w-lg md:max-w-xs">
                  <p>
                    Bwitcode is a leading Development & Design expert company
                    providing superior Software, Web, Mobile and Creative
                    Designing solutions and services to companies globally.
                  </p>
                  <div className="h-0.5 w-full rounded-sm bg-line"></div>
                  <p>
                    Highly skilled intellectual personnel, most having
                    substantial work experience in diverse areas of Information
                    Technology make up our team.
                  </p>
                </div>
                <video src={video} autoPlay="autoplay" loop="loop" muted className="h-64 sm:h-80 lg:h-80 xl:h-96 bg-footer sm:w-8/12 w-10/12 rounded-xl rounded-bl-[600px]">
                  
                  {/* Video */}
                </video>
              </div>
            </div>
          </section>

          <section className="bg-alternative wrapper">
            <div className="space-y-16">
              <h2 className="text-4xl font-medium text lg:text-5xl">
                Principles <br />
                <span className="text-services">which guide us</span>
              </h2>
              <ul className="hidden lg:block">
                {principles.map(({ id, left, right, icon }) => {
                  return (
                    <li key={id}>
                      <div className="flex items-center justify-between gap-8">
                        <p className="max-w-xs xl:text-2xl lg:text-xl font-gotu">
                          {left}
                        </p>{" "}
                        <img
                          className="pointer-events-none "
                          src={icon}
                          alt={id + "list"}
                        />
                        <p className="max-w-xs lg:text-sm xl:text-base">
                          {right}
                        </p>
                      </div>
                      {id !== 4 && (
                        <div className="h-0.5 w-11/12 mx-auto my-10 bg-line rounded-sm"></div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <ul className="grid grid-cols-2 gap-8 lg:hidden">
                {principles.map(({ id, left, icon }) => {
                  return (
                    <li key={id}>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center justify-center w-32 h-32 bg-white md:w-64 md:h-64 sm:w-40 sm:h-40 rounded-tr-3xl rounded-bl-3xl">
                          <img
                            className="w-24 pointer-events-none sm:w-32 md:w-44"
                            src={icon}
                            alt={id + "list"}
                          />
                        </div>
                        <p className="w-32 text-xs text-center md:w-64 sm:w-44 sm:text-sm md:text-lg font-gotu">
                          {left}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section className="hidden mt-12 lg:block wrapper bg-alternative">
            <div className="flex items-center justify-between gap-4">
              <img src={footerFrame} alt="" />

              <div className="max-w-md text-center">
                <h3 className="text-4xl font-gotu">Learn about our services</h3>
                <p className="mt-4">
                  A selection of in house projects, client projects and upcoming
                  projects in our area's of practice.
                </p>
              </div>
              <Link to="/services">
                <img src={footerArrow} alt="" />
              </Link>
            </div>
          </section>

          <section className="relative block mt-12 lg:hidden bg-alternative">
            <div className="wrapper">
              <div className="flex justify-between gap-4">
                <h3 className="w-40 text-2xl sm:text-4xl md:text-5xl sm:w-72 md:w-72 font-gotu">
                  Learn about our services
                </h3>
                <Link
                  to="/services"
                  className="flex items-center justify-center w-12 h-12 rotate-45 rounded-full bg-services md:w-24 md:h-24 sm:w-16 sm:h-16 text-p"
                >
                  <HiArrowLongUp className="text-2xl md:text-5xl sm:text-4xl" />
                </Link>
              </div>
              <p className="mt-4 text-xs w-60 sm:w-72 md:text-base sm:text-sm">
                A selection of in house projects, client projects and upcoming
                projects in our area's of practice.
              </p>
            </div>
            <img
              className="absolute right-0 pointer-events-none w-72 sm:w-96 sm:top-16 top-24"
              src={miniLogo}
              alt=""
            />
          </section>

          <footer className="hidden lg:block wrapper bg-footer text-p">
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

export default About;

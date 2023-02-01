import React from "react";
import Layout from "../layout";
import { motion } from "framer-motion";
import { HiArrowLongDown } from "react-icons/hi2";
import aboutUsFrame from "../assets/images/about-us-frame.png";
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

  return (
    <div>
      <Layout page={"about"}>
        <motion.div
          className="pt-44 overflow-hidden"
          exit={{ display: "none" }}
        >
          <header className="wrapper">
            <div className="space-y-12">
              <div>
                <h1 className="leading-normal text-9xl font-playfairDisplay">
                  <span>Make</span> <br />
                  <span>Everthing Easier</span>
                </h1>
                <span className="absolute top-16 left-[500px]">
                  <svg
                    width="48"
                    height="47"
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
                <p className="flex max-w-md pr-20 mx-auto mt-2">
                  We will prepare your tech stack and software delivery process
                  for a bright future.
                </p>
              </div>
              <div className="relative flex items-center justify-center max-w-fit">
                <div className="w-12 h-12 rounded-full bg-services"></div>
                <HiArrowLongDown size={48} className="absolute top-7" />
              </div>
            </div>
          </header>

          <section className="relative py-12 wrapper bg-footer text-p">
            <div>
              <h2 className="text-xl font-semibold uppercase">About us</h2>
              <div className="space-y-16">
                <div>
                  <img
                    src={aboutUsFrame}
                    className="relative pointer-events-none -left-16"
                    alt="person-with-pen"
                  />
                </div>
                <div className="grid grid-cols-2 gap-20">
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
              <h2 className="capitalize font-semibold text-[32px] text-center">
                The team will turn your ideas into reality
              </h2>

              <div className="flex gap-24">
                <div className="max-w-[270px] space-y-12 text-center">
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
                <div className="h-[456px] bg-footer w-full rounded-xl rounded-bl-[600px]">
                  {/* Video */}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-alternative wrapper">
            <div className="space-y-16">
              <h2 className="font-medium text-[54px]">
                Principles <br />{" "}
                <span className="text-services">which guide us</span>
              </h2>
              <ul>
                {principles.map(({ id, left, right, icon }) => {
                  return (
                    <li key={id}>
                      <div className="flex items-center justify-between">
                        <p className="max-w-xs text-2xl font-gotu">{left}</p>{" "}
                        <img
                          className="pointer-events-none "
                          src={icon}
                          alt={id + "list"}
                        />
                        <p className="max-w-xs">{right}</p>
                      </div>
                      {id !== 4 && (
                        <div className="h-0.5 w-11/12 mx-auto my-10 bg-line rounded-sm"></div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          <section className="wrapper bg-alternative mt-12">
            <div className="flex items-center justify-between">
              <img src={footerFrame} alt="" />

              <div className="max-w-md text-center">
                <h3 className="text-4xl font-gotu">Learn about our services</h3>
                <p>
                  A selection of in house projects, client projects and upcoming
                  projects in our area's of practice.
                </p>
              </div>
              <Link to="/services">
                <img src={footerArrow} alt="" />
              </Link>
            </div>
          </section>

          <footer className="wrapper bg-footer text-p">
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
                      <li>About</li>
                      <li>
                        <Link to="/services">Services</Link>
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
                    © 2023 BWITCODE, All rights reserved{" "}
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

export default About;

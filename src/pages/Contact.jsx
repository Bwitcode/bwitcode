import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import logoWhite from "../assets/images/logo-white.png";
import instagram from "../assets/icons/instagram.svg";
import { FaLinkedinIn } from "react-icons/fa";
import footerArrow from "../assets/icons/footer-arrow.svg";
import contactFrame from "../assets/images/contact-frame.png";
import { HiHome } from "react-icons/hi2";
const Contact = () => {
  return (
    <div>
      <nav className="mx-auto fixed z-10 w-full pointer-events-none">
        <div className="wrapper w-full !py-8  flex items-center justify-between">
          <img className="w-40 md:w-44 lg:w-48" src={logo} alt="BWITCODE" />
          <Link
            to="/"
            className="bg-services text-p p-2 rounded lg:px-8 lg:py-2.5 lg:rounded-full justify-center items-center font-medium gap-4 hover:bg-hover pointer-events-auto"
          >
            <span className="hidden lg:flex">Return back</span>
            <HiHome className="lg:hidden text-2xl sm:text-3xl" />
          </Link>
        </div>
      </nav>

      <section className="wrapper w-full grid lg:grid-cols-2 justify-items-center lg:justify-items-end">
        <img
          src={contactFrame}
          className="hidden lg:block max-w-[690px]"
          alt="contact-frame"
        />
        <div className=" pt-12 flex flex-col items-center lg:items-end">
          <h2 className="font-medium text-4xl">Let's discuss the project</h2>
          <p className="text-lg mt-8">24/7 We will answer your question</p>
          <form className="space-y-8 max-w-md mt-16">
            <input
              className=" w-full bg-transparent p-2 focus:outline-none focus:ring-none border-b-line border border-transparent"
              placeholder="Fullname"
            />
            <input
              className=" w-full bg-transparent p-2 focus:outline-none focus:ring-none border-b-line border border-transparent"
              placeholder="Email"
            />
            <textarea
              className=" w-full bg-transparent p-2 focus:outline-none focus:ring-none border-b-line border border-transparent"
              placeholder="How can we help?"
            />
            <button className="font-bold text-xl py-3 hover:bg-hover text-p bg-services rounded-full w-full">
              Send
            </button>
          </form>
        </div>
      </section>

      <section className="hidden mt-12 lg:block w-full wrapper bg-alternative">
        <div className="flex items-center justify-between gap-4">
          <div className="max-w-4xl">
            <h3 className="text-7xl leading-normal font-gotu font-semibold">
              Have a project? <br />
              We would love to help.
            </h3>
            <p className="mt-4">24/7 We will answer your question</p>
          </div>
          <div className="-rotate-90">
            <img src={footerArrow} alt="" />
          </div>
        </div>
      </section>

      <footer className="hidden lg:block wrapper w-full bg-footer text-p">
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
                <span className="text-sm font-bold text-secondary">Pages</span>
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
          <div className="flex items-center justify-end">
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
                © 2023 BWITCODE, All rights reserved{" "}
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Footer */}
      <footer className="block lg:hidden bg-footer text-p">
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
                  <li>+994 51 205 11 14</li>
                  <li>support@bwitcode.com</li>
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
              © 2023 BWITCODE, All rights reserved{" "}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;

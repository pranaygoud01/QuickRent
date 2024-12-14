import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaReddit } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="w-[1300px] h-[200px] max-lg:w-full max-lg:h-fit max-lg:flex-col max-lg:gap-10 max-lg:px-10 pt-10 flex justify-between">
      <div className="w-[200px] max-lg:w-9/12">
        <a href="home">
          {" "}
          <h1 className="font-bold text-2xl ">
            Quick<span className="text-neutral-700">Rent</span>
          </h1>
        </a>
        <p className="text-sm font-sans mt-3 text-neutral-600">
          Your one-stop solution for renting laptops, cameras, and gaming
          consoles. Rent smarter, live better!
        </p>
      </div>
      <div className=" flex flex-col gap-4 max-lg:gap-2">
        <h1 className="text-xl font-semibold text-neutral-700">Explore</h1>
        <nav className="flex max-lg:flex-col max-lg:gap-2 justify-center text-sm gap-10">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#gadgets">Gadgets</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
      <div>
        <div className="flex gap-3 text-xl ">
          <p>
            <FaXTwitter />
          </p>
          <p>
            <FaFacebookF />
          </p>
          <p>
            <FaInstagram />
          </p>
          <p>
            <FaReddit />
          </p>
          <p>
            <FaLinkedin />
          </p>
        </div>
        <div className="mt-10 max-lg:mt-5 max-lg:mb-10 text-xs ">
          <h1 className="font-sans">
            Copyright &copy; Pranay Goud.
            <br />
            All rights are Reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

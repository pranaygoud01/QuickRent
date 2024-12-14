import React from "react";
import headerimg from "../assets/headerimg.png";
import Features from "../components/Features";
import Gadgets from "../components/Gadgets";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
const Hero = () => {
  return (
    <div className="w-full bg-neutral-100">
      <div className="h-fit w-full bg-white ">
        <div className="mt-4 h-fit grid grid-cols-2 max-lg:grid-cols-1">
          <div className=" flex items-center">
            <div className="p-40 max-lg:p-10  flex gap-5 flex-col">
              <h1 className="text-5xl max-lg:text-3xl font-bold leading-[50px]">
                Your Trusted Partner for Gadget Rentals
              </h1>
              <p className=" leading-7 max-lg:text-sm text-neutral-700">
                Need a gadget for a short time? QuickRent has you covered with a
                wide variety of laptops, cameras, and gaming consoles, all at
                affordable rates!
              </p>
              <a
                href="#gadgets"
                className="text-sm  max-lg:text-xs font-bold px-10 py-3 w-fit bg-black text-white"
              >
                Explore Rentals
              </a>
            </div>
          </div>
          <div className="">
            <img
              src={headerimg}
              alt="header"
              className="w-full h-full object-cover rounded-xl overflow-hidden"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Features />
      </div>
      <div className="h-[500px] w-full overflow-hidden">
        <video
          src="https://cdn.pixabay.com/video/2024/03/26/205691-927672681_large.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="flex justify-center bg-white">
        <Gadgets />
      </div>

      <div className="flex justify-center bg-black">
        <Contact />
      </div>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Hero;

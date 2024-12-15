import React, { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
const NavBar = () => {
  const Menu = [
    {
      name: "Home",
      id: "home",
      path: "#",
    },
    {
      name: "Features",
      id: "features",
      path: "#features",
    },
    {
      name: "Gadgets",
      id: "gadgets",
      path: "#gadgets",
    },
    {
      name: "Contact Us",
      id: "contact",
      path: "#contact",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="flex">
      <div className="fixed">
        <div className="h-[60px] w-screen bg-white  flex justify-center ">
          <div className="w-[1300px] max-lg:w-full  flex justify-between  items-center">
            <div className="max-lg:ml-7">
              <a href="#home">
                <h1 className="font-bold text-2xl">
                  Quick<span className="text-neutral-600">Rent</span>
                </h1>
              </a>
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden mr-8 text-3xl"
            >
              {open ? <IoCloseSharp /> : <IoMenuSharp />}
            </button>
            <div className="flex gap-14 items-center max-lg:hidden">
              <div>
                <ul className="flex gap-7 text-[11.5px] font-medium">
                  {Menu.map((item) => {
                    return (
                      <a href={item.path}>
                        <li
                          key={item.id}
                          className="cursor-pointer text-sm hover:scale-105 hover:bg-neutral-100 duration-200 font-sans px-4 py-2"
                        >
                          {item.name}
                        </li>
                      </a>
                    );
                  })}
                </ul>
              </div>
              <button className="font-semibold text-sm px-5 py-2 bg-black   duration-200 hover:scale-95 text-white">
                Login
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div
            className={`h-[450px]  lg:hidden  w-full top-16 bg-white absolute`}
          >
            <div className="p-10 flex flex-col gap-10">
              {Menu.map((item) => {
                return (
                  <div className="">
                    <a
                      href={item.path}
                      className=" text-lg text-neutral-800 font-bold"
                    >
                      <button onClick={() => setOpen(!open)}>
                        {item.name}
                      </button>
                    </a>
                  </div>
                );
              })}
              <button className="font-semibold text-sm w-fit  px-10 py-2 bg-black   duration-200 hover:scale-95 text-white">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;

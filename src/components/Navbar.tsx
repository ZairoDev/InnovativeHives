"use client";
import { Facebook, Linkedin, Menu, Smartphone, X, Youtube } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isHamburgerOn, setIsHamburgerOn] = useState(false);

  return (
    <div className=" flex justify-between w-full items-center font-satoshi bg-transparent text-2xl font-medium my-2 px-4 md:px-8">
      <div className="">
        <a href="#Home">
          <img
            src="/innovativeHivesLogo-light.png"
            alt="text"
            className=" w-44 h-24 "
          />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-4 text-lg lg:flex border border-white">
        {" "}
        <div
          className={` ${
            isHamburgerOn ? "flex flex-col" : "hidden"
          } flex flex-col lg:flex-row gap-x-4 text-lg lg:flex `}
        >
          {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
            (item, index) => {
              return (
                <div
                  key={index}
                  id={item}
                  className=" navitems px-2 cursor-pointer flex lg:flex-col border-b lg:border-none border-neutral-700 py-1"
                  onClick={() => setIsActive(item)}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a href={`#${item}`}>{item}</a>
                  <div
                    className={` ${
                      (isActive === item || hoveredItem === item) &&
                      "w-1 h-1 bg-primary_color rounded-full animate-pulse"
                    } `}
                  ></div>
                </div>
              );
            }
          )}
        </div>
        <div className=" justify-between gap-x-8 hidden lg:flex">
          <div className="flex">
            <a
              href="tel:+919876543210"
              className=" flex items-center text-base"
            >
              <Smartphone className=" text-primary_color" size={20} />
              +91 9876543210
            </a>
          </div>
          <div className=" flex gap-x-2">
            <div className=" cursor-pointer p-2 rounded-full bg-transparent text-primary_color border border-primary_color transition-colors duration-300 hover:bg-primary_color hover:text-white">
              <a href="#facebook">
                <Facebook size={18} />
              </a>
            </div>
            <div className=" cursor-pointer p-2 rounded-full bg-transparent text-primary_color border border-primary_color transition-colors duration-300 hover:bg-primary_color hover:text-white">
              <a href="#linkedin">
                <Linkedin size={18} />
              </a>
            </div>
            <div className=" cursor-pointer p-2 rounded-full bg-transparent text-primary_color border border-primary_color transition-colors duration-300 hover:bg-primary hover:text-white">
              <a href="#youtube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" block lg:hidden cursor-pointer">
        <Menu
          size={30}
          className={`${
            isHamburgerOn && "hidden"
          } transition-all ease-in-out duration-1000`}
          onClick={() => setIsHamburgerOn(true)}
        />
        <X
          size={30}
          className={`${!isHamburgerOn && "hidden"}`}
          onClick={() => setIsHamburgerOn(false)}
        />
      </div>
    </div>
  );
};

export default Navbar;

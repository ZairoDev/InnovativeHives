"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" bg-background_colour fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://vacationsaga.b-cdn.net/assets/innovativeHivesLogo-light.png"
              alt="/"
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white hover:text-primary_color transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary_color scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </Link>
              )
            )}
          </div>

          {/* Contact and Social Links */}
          <div className="hidden lg:flex items-center   gap-8">
            <div className="flex items-center text-primary_color font-medium">
              <Phone className="w-5 h-5 mr-2" />
              +1 (837) 652 8800
            </div>
            <div className="flex items-center gap-4">
              {[Facebook, Linkedin, Youtube].map((Icon, index) => (
                <Link
                  key={index}
                  href="/"
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary_color hover:text-primary_color text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden h-screen ${isOpen ? "block" : "hidden"} pt-4`}
        >
          <div className="flex flex-col gap-4">
            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white hover:text-primary_color transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
            <div className="border-t border-gray-800 pt-4 mt-2">
              <div className="flex items-center text-primary_color font-medium mb-4">
                <Phone className="w-5 h-5 mr-2" />
                +1 (837) 652 8800
              </div>
              <div className="flex items-center gap-4">
                {[Facebook, Linkedin, Youtube].map((Icon, index) => (
                  <Link
                    key={index}
                    href="/"
                    className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary_color hover:text-primary_color text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

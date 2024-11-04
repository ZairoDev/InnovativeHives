import { DribbbleIcon, Facebook, Instagram, LucideProps } from "lucide-react";
import Link from "next/link";
import React from "react";
import CustomHeading from "./typo/Heading";
import { Button } from "./ui/button";
import FadeInBlur from "./FadeInBlur";

const Footer = () => {
  return (
    <>
      <FadeInBlur>
        <section className=" py-20">
          <footer className="   px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3fr,1fr,1fr] gap-4">
                {/* Left Column */}
                <div className="space-y-8 ">
                  <CustomHeading
                    className="lg:text-4xl  md:text-3xl text-pretty text-2xl "
                    heading="Ready to get started with Resonance Template?"
                  />
                  <Button
                    variant="company"
                    className=" bg-primary_color  text-background_colour hover:bg-secondary_color rounded-xl  md:text-xl text-lg md:px-8 md:py-6 px-6 py-4 h-auto "
                  >
                    Get a Consultation
                  </Button>
                </div>

                {/* Middle Column */}
                <nav className="space-y-4">
                  {["About", "Services", "Portfolio", "Blog", "Contact"].map(
                    (item) => (
                      <Link
                        key={item}
                        href="#"
                        className="block text-gray-300 hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </nav>

                {/* Right Column */}
                <nav className="space-y-4">
                  {[
                    "Privacy Policy",
                    "Terms & Conditions",
                    "Presskit",
                    "Credits",
                  ].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block text-gray-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-gray-400 space-y-2">
                  <p>Made with love for great people</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Instagram, label: "Instagram" },
                    {
                      icon: (props: LucideProps) => (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          {...props}
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 0v0zm0 0v0z" />
                          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                          <line x1="9" y1="9" x2="9.01" y2="9" />
                          <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg>
                      ),
                      label: "Pinterest",
                    },
                    {
                      icon: (props: LucideProps) => (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          {...props}
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 0v0zm0 0v0z" />
                          <path d="M16 12l-3-3-6 6" />
                          <path d="M8 12h8" />
                        </svg>
                      ),
                      label: "Behance",
                    },
                    { icon: DribbbleIcon, label: "Dribbble" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href="#"
                      className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-colors"
                      aria-label={item.label}
                    >
                      <item.icon className="w-5 h-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </section>
      </FadeInBlur>
    </>
  );
};

export default Footer;

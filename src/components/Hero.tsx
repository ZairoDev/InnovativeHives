"use client";
import React from "react";
import Particles from "./ui/particles";
import { CheckCircle2, MessageCircle, Search, Users } from "lucide-react";
import { Button } from "./ui/button";
import BlurIn from "./ui/blur-in";
import FadeInBlur from "./FadeInBlur";
import Navbar from "./Navbar";

const HeroPage = () => {
  return (
    <>
      <div className="relative overflow-hidden  border-b border-neutral-800 ">
        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={80}
          color="#ffffff"
          refresh
        />
        <div className="relative min-h-screen">
          <div className="container mx-auto px-4  md:py-20 py-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-2">
                <BlurIn
                  word="Global Marketing "
                  className="text-start font-normal "
                />

                <BlurIn
                  word="Consulting Agency "
                  className="text-start font-normal"
                />
                <FadeInBlur>
                  <p className="text-xl md:text-2xl sm:mt-10 mt-4 text-gray-300 mb-8">
                    We&apos;re a global marketing company delivering innovative
                    solutions to our clients.
                  </p>
                </FadeInBlur>
                <FadeInBlur>
                  <Button
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg  sm:w-auto"
                  >
                    Get a Consultation
                  </Button>
                </FadeInBlur>
                <FadeInBlur>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="text-emerald-600 w-5 h-5" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="text-emerald-600 w-5 h-5" />
                      <span>Free 30 minute consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="text-emerald-600 w-5 h-5" />
                      <span>Free marketing report</span>
                    </div>
                  </div>
                </FadeInBlur>
              </div>
              <div className="relative order-2 lg:order-1">
                <div className="rounded-3xl overflow-hidden">
                  <FadeInBlur>
                    <img
                      src="https://vacationsaga.b-cdn.net/assets/personImage.webp"
                      alt="hero-image"
                      className="w-full object-cover"
                    />
                  </FadeInBlur>
                </div>
                <div className="absolute -top-16 -left-10 -z-50">
                  <img
                    src="https://vacationsaga.b-cdn.net/assets/bgImage-iv.svg"
                    alt="svgimage"
                  />
                </div>
                <div className="absolute  sm:-left-14 left-0 sm:bottom-20 bottom-0 flex flex-col gap-3">
                  <FadeInBlur>
                    <div className="bg-white/10 backdrop-blur-sm  rounded-full text-white border  flex gap-2 items-center py-2 px-4">
                      <div className="bg-pink-800 p-2 rounded-full ">
                        <Users className="" size={18} />
                      </div>
                      Marketing Consulting
                    </div>
                  </FadeInBlur>
                  <FadeInBlur>
                    <div className="bg-white/10 backdrop-blur-sm  rounded-full text-white border  flex gap-2 items-center py-2 px-4">
                      <div className="bg-yellow-500 p-2 rounded-full ">
                        <Search className="" size={18} />
                      </div>
                      Search Engine Optimization
                    </div>
                  </FadeInBlur>
                  <FadeInBlur>
                    <div className="bg-white/10 backdrop-blur-sm  rounded-full text-white border  flex gap-2 items-center py-2 px-4">
                      <div className="bg-sky-600 p-2 rounded-full ">
                        <MessageCircle className="" size={18} />
                      </div>
                      Social Media Marketing
                    </div>
                  </FadeInBlur>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;

"use client";
import React from "react";
import Particles from "../../components/ui/particles";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CurlyBraces,
  FileText,
  GitBranch,
  Link,
  Map,
  MessageCircle,
  MessageSquare,
  Rocket,
  Search,
  Shield,
  Star,
  Target,
  Users,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import BlurIn from "../../components/ui/blur-in";

import CustomPara from "@/components/typo/Para";
import CustomHeading from "@/components/typo/Heading";
import Image from "next/image";
import FadeInBlur from "@/components/FadeInBlur";
import SlideInFromTop from "@/components/SlideInFromTop";

const HeroPage = () => {
  return (
    <>
      {/* HeroSection */}
      <section className="relative overflow-hidden  border-b border-neutral-800 ">
        <Particles
          className="absolute inset-0"
          quantity={500}
          ease={80}
          color="#ffffff"
          refresh
        />
        <div className="relative min-h-screen">
          <div className="container mx-auto px-4  md:py-14 py-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-2">
                <CustomHeading heading="Global Marketing Consulting Agency" />
                <FadeInBlur>
                  <p className="text-xl md:text-2xl sm:mt-10  text-gray-300 mb-8">
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
      </section>
      {/* Review Section */}
      <section>
        <div className="md:h-screen h-full max-w-7xl mb:mb-0 mb-10  mx-auto mt-20">
          <div className="max-w-7xl mx-auto">
            <CustomHeading
              className="text-center max-w-4xl mx-auto"
              heading="High-rated Online Marketing Agency Based in New York"
            />
            <CustomPara
              className="text-center max-w-3xl mx-auto"
              para="Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers partners, and society at large. However, the definition of marketing has evolved over the years."
            />
          </div>
          <div className="flex md:flex-row flex-col mt-20 items-center justify-between">
            <div className="p-2 max-w-md flex flex-col items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary_color" />
                ))}
              </div>
              <CustomPara
                className="text-center"
                para="Really impressed with the service and the results!”"
              />
              <p className="text-sm mt-4">Rated 4.5 on Trustpilot</p>
            </div>
            <div className="p-2 max-w-md flex flex-col items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary_color" />
                ))}
              </div>
              <CustomPara
                className="text-center"
                para="“Excellent service for targeted lead generation."
              />
              <p className="text-sm mt-4">Rated 4.5 on Trustpilot</p>
            </div>
            <div className="p-2 max-w-md flex flex-col items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary_color" />
                ))}
              </div>
              <CustomPara
                className="text-center"
                para="I have super enjoyed working with Resonance."
              />
              <p className="text-sm mt-4">Rated 4.5 on Trustpilot</p>
            </div>
          </div>
          <FadeInBlur>
            <div className="flex items-center z-50 mt-10 justify-center">
              <Button className="group cursor-pointer bg-gray-800/50 hover:bg-gray-700/50 text-gray-200 rounded-full pl-3 pr-4 py-6 flex items-center gap-2 shadow-lg backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <span className="bg-pink-600 p-1.5 rounded-full">
                  <Star className="w-4 h-4" />
                </span>
                <span className="text-sm font-medium">View Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </FadeInBlur>
        </div>

        <FadeInBlur>
          <img
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-30"
            src="https://vacationsaga.b-cdn.net/assets/curveline.svg"
            alt="lineimage"
          />
        </FadeInBlur>
      </section>
      {/* consultation section  */}
      <section>
        <div className="relative   overflow-hidden bg-primary_color">
          <div className="absolute inset-0">
            <Image
              src="https://vacationsaga.b-cdn.net/assets/corporate.jpg"
              alt="Business consultation"
              width={1920}
              height={1080}
              className="object-cover w-full h-full opacity-40"
              priority
            />
          </div>

          <div className="relative z-20 px-6 mx-auto max-w-7xl lg:px-8  flex flex-col justify-center">
            <div className="max-w-xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <FadeInBlur>
                <h1 className="md:text-5xl lg:text-6xl  sm:text-5xl text-3xl">
                  Get free
                  <span className="relative inline-block">
                    marketing
                    <svg
                      className="absolute -bottom-0.5 w-full"
                      height="8"
                      viewBox="0 0 200 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5C47.3333 2.16667 154.4 -2.4 199 6"
                        stroke="#F97316"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  consultation online
                </h1>
              </FadeInBlur>

              <FadeInBlur>
                <CustomPara
                  para="Contact us and get free marketing consultation for your
                business."
                />
                <Button className=" bg-white ml-1 mt-10 text-black hover:opacity-80 hover:bg-white hover:text-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-lg  sm:w-auto">
                  Get a Consultation
                </Button>
              </FadeInBlur>

              <div className="mt-10 ml-1">
                <FadeInBlur>
                  <p className="mb-8 text-xl font-normal text-white">
                    Trusted by leading companies
                  </p>
                </FadeInBlur>
                <FadeInBlur>
                  <div className="flex flex-wrap items-center gap-x-10 gap-y-8">
                    <div className="border px-4 py-2 rounded-lg">
                      <h1>Github</h1>
                    </div>
                    <div className="border px-4 py-2 rounded-lg">
                      <h1>Google</h1>
                    </div>
                    <div className="border px-4 py-2 rounded-lg">
                      <h1>Unplash</h1>
                    </div>
                    <div className="border px-4 py-2 rounded-lg">
                      <h1>Meta</h1>
                    </div>
                  </div>
                </FadeInBlur>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section four */}
      <section>
        <div className="max-w-7xl m-auto my-20">
          <div className="flex max-w-4xl px-2 m-auto items-center justify-center gap-y-4  flex-col">
            <CustomHeading
              className="text-center"
              heading="Providing the Best Marketing Solutions for Our Clients"
            />
            <CustomPara
              className="text-center"
              para="The marketing mix represents the basic tools that marketers can use to bring their products or services to the market."
            />
          </div>
        </div>
      </section>
      {/* Section five */}
      <section className="mb-20">
        <div className=" border-y border-neutral-800   ">
          <div className="grid grid-cols-1    md:grid-cols-2 lg:grid-cols-4  max-w-screen m-auto">
            {/* Marketing Consulting */}
            <FadeInBlur>
              <div className="py-20 px-6 flex flex-col  border-r  border-neutral-800  items-start">
                <div className="w-24 h-24 rounded-full bg-[#E91E63] flex items-center justify-center mb-6">
                  <FileText size={50} />
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">
                  Marketing Consulting
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The product aspects of marketing deal with the specifications
                  of the actual relevant products, goods or services, and how it
                  relates to the end-user's needs and wants.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Search Engine Optimization
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Marketing Strategy
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Partnerships
                  </span>
                </div>
              </div>
            </FadeInBlur>

            {/* Media Relations */}
            <FadeInBlur>
              <div className="py-20 px-6 flex  flex-col border-t md:border-t-0 border-r border-neutral-800  items-start">
                <div className="w-24 h-24 rounded-full bg-[#FFC107] flex items-center justify-center mb-6">
                  <CurlyBraces size={50} />
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">
                  Media Relations
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The price need not be monetary it can simply be what is
                  exchanged for the product or services energy or any sacrifices
                  consumers make in order to acquire a product or service.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Seasonal Campaigns
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Digital Marketing
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Sponsorships
                  </span>
                </div>
              </div>
            </FadeInBlur>
            <FadeInBlur>
              {/* Online Advertising */}
              <div className="py-20 px-6 flex  border-r border-t lg:border-t-0 border-neutral-800 flex-col items-start">
                <div className="w-24 h-24 rounded-full bg-[#4CAF50] flex items-center justify-center mb-6">
                  <Rocket size={50} />
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">
                  Online Advertising
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  This refers to how the product gets to the custome and
                  intermediaries such as wholesalers and retailers who enable
                  customers to access products or services in a convenient
                  manner.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Experiential Marketing
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Event Marketing
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Seasonal Campaigns
                  </span>
                </div>
              </div>
            </FadeInBlur>

            {/* Social Media */}
            <FadeInBlur>
              <div className=" py-20 px-6 flex border-r border-t lg:border-t-0 border-neutral-800   flex-col items-start">
                <div className="w-24 h-24 rounded-full bg-[#00BCD4] flex items-center justify-center mb-6">
                  <MessageSquare size={50} />
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">
                  Social Media
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  In response to environmental and technological changes in
                  marketing, as well as criticisms towards the 4Ps approach, the
                  4Cs has emerged as a modern marketing mix model.
                </p>
                <div className="flex flex-col gap-2">
                  <span className=" px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Content Generation
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    Copywriting
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/20 text-white text-sm">
                    SMO Strategy
                  </span>
                </div>
              </div>
            </FadeInBlur>
          </div>
        </div>
      </section>
      {/* Section five */}
      <section>
        <div className="relative min-h-[500px]  flex flex-col items-center justify-center  overflow-hidden">
          <div className="mb-8 ">
            <FadeInBlur>
              <img
                src="https://vacationsaga.b-cdn.net/assets/resonance.webp"
                alt="Logo"
                className=""
              />
            </FadeInBlur>
          </div>
          <div className="max-w-3xl text-center mb-8">
            <CustomPara
              para="Looking for exclusive marketing services? Contact us and get free
              online consultation for your brand or your client's brand."
            />
          </div>
          <SlideInFromTop>
            <Button className="h-12 cursor-pointer  px-6 rounded-full bg-transparent border border-white/20 text-white hover:bg-white/10 transition-colors">
              <Shield className="w-5 h-5 mr-2 text-emerald-500" />
              Get Free Consultation
              <span className="ml-2">
                <ArrowRight size={18} />
              </span>
            </Button>
          </SlideInFromTop>
          <div className=" bottom-0 left-0 w-full">
            <Image
              src="https://vacationsaga.b-cdn.net/assets/decoration-3.svg"
              alt="Decorative wave"
              width={1920}
              height={200}
              className="w-full opacity-20 h-auto"
            />
          </div>
        </div>
      </section>
      {/* Section 6 */}
      <section>
        <div className="  my-18 p-2 ">
          <div className="max-w-7xl mx-auto">
            <CustomHeading heading="Case Studies" />
            <div className="grid md:grid-cols-2 gap-x-4  items-start">
              <div>
                <CustomPara
                  className="-mt-8 mb-8"
                  para=" We help brands and businesses stand out in the changing
                  digital landscape."
                />
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <SlideInFromTop>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary_color flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-lg text-white">
                      Business to business
                    </span>
                  </div>
                </SlideInFromTop>
                <SlideInFromTop>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary_color flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-lg text-white">
                      Business to customer
                    </span>
                  </div>
                </SlideInFromTop>
                <SlideInFromTop>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary_color flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-lg text-white">
                      Non-profit business
                    </span>
                  </div>
                </SlideInFromTop>
                <SlideInFromTop>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary_color flex items-center justify-center">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-lg text-white">Ecommerce</span>
                  </div>
                </SlideInFromTop>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-7xl mx-auto p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col cursor-pointer group">
                <FadeInBlur>
                  <div className="rounded-2xl overflow-hidden mb-6 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                    <img
                      src="https://vacationsaga.b-cdn.net/assets/img1.webp"
                      alt="Marketing Wire team member"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </FadeInBlur>
                <SlideInFromTop>
                  <h3 className="md:text-xl  lg:text-2xl text-lg text-white font-normal mb-6 leading-tight relative inline-block">
                    How Marketing Wire Support Increased Data Accuracy by 70%
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                </SlideInFromTop>
                <div className="mt-auto">
                  <SlideInFromTop>
                    <div className="text-7xl text-white font-normal mb-2">
                      70%
                    </div>
                  </SlideInFromTop>
                  <SlideInFromTop>
                    <div className="text-lg text-white/80">
                      growth with Resonance
                    </div>
                  </SlideInFromTop>
                </div>
              </div>

              {/* Surface Mobility Case Study */}

              <div className="flex flex-col cursor-pointer group">
                <FadeInBlur>
                  <div className="rounded-2xl overflow-hidden mb-6 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                    <img
                      src="https://vacationsaga.b-cdn.net/assets/img2.webp"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </FadeInBlur>
                <SlideInFromTop>
                  <h3 className="md:text-xl  lg:text-2xl text-lg text-white font-normal mb-6 leading-tight relative inline-block">
                    How Surface Mobility Increased Sales 3X During
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                </SlideInFromTop>
                <div className="mt-auto">
                  <SlideInFromTop>
                    <div className="text-7xl text-white font-normal mb-2">
                      3x
                    </div>
                  </SlideInFromTop>
                  <SlideInFromTop>
                    <div className="text-lg text-white/80">
                      sales increased with Resonance
                    </div>
                  </SlideInFromTop>
                </div>
              </div>

              {/* Gen Machine Case Study */}

              <div className="flex flex-col cursor-pointer group">
                <FadeInBlur>
                  <div className="rounded-2xl overflow-hidden mb-6 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                    <img
                      src="https://vacationsaga.b-cdn.net/assets/img3.webp"
                      alt="Marketing Wire team member"
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                </FadeInBlur>
                <SlideInFromTop>
                  <h3 className="md:text-xl  lg:text-2xl text-lg text-white font-normal mb-6 leading-tight relative inline-block">
                    How Gen Machine Uses Automations to Grow
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                </SlideInFromTop>

                <div className="mt-auto">
                  <SlideInFromTop>
                    <div className="text-7xl text-white font-normal mb-2">
                      Zero
                    </div>
                  </SlideInFromTop>
                  <SlideInFromTop>
                    <div className="text-lg text-white/80">
                      negative reviews with Resonance
                    </div>
                  </SlideInFromTop>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <Button
                variant="ghost"
                className="text-white  bg-white/10 gap-2 text-lg h-12 px-6 rounded-full"
              >
                <Link className="w-5 h-5" />
                Read Clients Stories
                <span className="ml-1">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Three Simple Steps Section */}
      <section>
        <div className="relative my-20  overflow-hidden bg-primary_color">
          <div className="absolute inset-0">
            <Image
              src="https://vacationsaga.b-cdn.net/assets/corporate.jpg"
              alt="Business consultation"
              width={1920}
              height={1080}
              className="object-cover w-full h-full opacity-40"
              priority
            />
          </div>
          <div className="relative z-20 px-6 mx-auto max-w-7xl lg:px-8  flex flex-col justify-center">
            <div className="max-w-4xl m-auto sm:py-20 py-10">
              <CustomHeading
                className="text-center"
                heading="Three Simple Steps to Succeed at Investing"
              />
            </div>

            <div className="max-w-4xl mb-10  mx-auto space-y-4">
              {/* Step 1 */}
              <FadeInBlur>
                <div className="bg-[#1C1C1C] rounded-2xl p-6">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex sm:flex-row flex-col gap-x-2 items-start">
                      <div className="py-2">
                        <Map size={40} className=" text-secondary_color" />
                      </div>
                      <div className="">
                        <h3 className="text-xl text-white font-medium mb-2">
                          Planning the Roadmap
                        </h3>
                        <p className="text-gray-300">
                          Businesses buy products in large volumes to distribute
                          to consumers.
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                        Step 1
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInBlur>

              {/* Step 2 */}
              <FadeInBlur>
                <div className="bg-[#1C1C1C] rounded-2xl p-6">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex sm:flex-row flex-col gap-x-2 items-start">
                      <div className="py-2">
                        <Map size={40} className=" text-secondary_color" />
                      </div>
                      <div className="">
                        <h3 className="text-xl text-white font-medium mb-2">
                          Strategy Implementation
                        </h3>
                        <p className="text-gray-300">
                          Consumers buy products in smaller volumes suitable for
                          personal use.
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                        Step 2
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInBlur>

              {/* Step 3 */}
              <FadeInBlur>
                <div className="bg-[#1C1C1C] rounded-2xl p-6">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex sm:flex-row flex-col gap-x-2 items-start">
                      <div className=" py-2">
                        <GitBranch
                          size={40}
                          className=" text-secondary_color"
                        />
                      </div>
                      <div className="">
                        <h3 className="text-xl text-white font-medium mb-2">
                          Optimizing Through Empowerment
                        </h3>
                        <p className="text-gray-300">
                          There are relatively fewer businesses to market to
                          than direct consumers.
                        </p>
                      </div>
                    </div>

                    <div className="">
                      <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                        Step 3
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInBlur>
            </div>
          </div>
        </div>
      </section>
      {/* Client section */}
      <section className="max-w-7xl m-auto">
        <div className="my-20">
          <CustomHeading
            className="text-center mb-10"
            heading="Clients Stories"
          />
          {/* Card one */}
          <div className="  flex items-center justify-center  ">
            <div className="">
              <div className="grid md:grid-cols-2 gap-x-20 items-center">
                <div className="relative">
                  <div className=" overflow-hidden rounded-2xl">
                    <img
                      src="https://vacationsaga.b-cdn.net/assets/pehlabhai.webp"
                      alt="Marketing Consultant"
                      className=" aspect-square  object-cover"
                    />
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -left-8 top-4 text-[100px] leading-none text-gray-700 font-serif opacity-50">
                    “
                  </div>
                  <div className=" z-10">
                    <CustomPara
                      para="This template is so beautiful and has such wonderful new
                      options. It is updated often which gives me even more
                      quality. The support is the absolute best I've ever
                      had the pleasure of interacting with. Quick, courteous,
                      premium and extremely helpful!"
                    />

                    {/* Author Info */}
                    <FadeInBlur>
                      <div className="flex flex-col">
                        <div className="w-12 h-0.5 bg-white/20 mb-6"></div>
                        <div className="text-lg text-white font-medium">
                          Adam Peterson
                        </div>
                        <p className="mt-1 text-lg"> Marketing Consultant</p>
                      </div>
                    </FadeInBlur>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card Two */}
          <div className="  flex items-center justify-center ">
            <div className="">
              <div className="grid md:grid-cols-2 gap-x-20 items-center">
                <div className="relative">
                  <div className="absolute -left-8 top-4 text-[100px] leading-none text-gray-700 font-serif opacity-50">
                    “
                  </div>
                  <div className="relative z-10">
                    <CustomPara
                      className="md:text-4xl"
                      para="Optimization and structure are very good for SEO basics. A remarkable model, everything has been thought out with talent, the design, the various adaptations. Beautiful template, nice code and easy to customize."
                    />
                    <FadeInBlur>
                      <div className="flex flex-col">
                        <div className="w-12 h-0.5 bg-white/20 mb-6"></div>
                        <div className="text-lg text-white font-medium">
                          Jordan Harvey
                        </div>
                        <p className="mt-1 text-lg">SEO/SMO Expert</p>
                      </div>
                    </FadeInBlur>
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://vacationsaga.b-cdn.net/assets/doosrabhai.webp"
                      alt="Marketing Consultant"
                      className=" aspect-square   object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One more section will go here */}

      <section className="max-w-7xl m-auto p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full">
            <FadeInBlur>
              <CustomHeading heading="Our Blog" />
              <CustomPara para="Check the best marketing resources and the latest news about our company." />
            </FadeInBlur>
            <Button
              variant="ghost"
              className="text-white mt-8 bg-white/10 gap-2 text-lg h-12 px-6 rounded-full"
            >
              <Link className="w-5 h-5" />
              Read Clients Stories
              <span className="ml-1">→</span>
            </Button>
          </div>
          <div className="flex flex-col cursor-pointer group">
            <FadeInBlur>
              <div className="rounded-2xl overflow-hidden mb-6 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                <img
                  src="https://vacationsaga.b-cdn.net/assets/img2.webp"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </FadeInBlur>
            <SlideInFromTop>
              <h3 className="md:text-xl  lg:text-2xl text-lg text-white font-normal mb-6 leading-tight relative inline-block">
                How Surface Mobility Increased Sales 3X During
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </h3>
            </SlideInFromTop>
            <div className="mt-auto">
              <SlideInFromTop>
                <div className="text-7xl text-white font-normal mb-2">3x</div>
              </SlideInFromTop>
              <SlideInFromTop>
                <div className="text-lg text-white/80">
                  sales increased with Resonance
                </div>
              </SlideInFromTop>
            </div>
          </div>
          <div className="flex flex-col cursor-pointer group">
            <FadeInBlur>
              <div className="rounded-2xl overflow-hidden mb-6 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
                <img
                  src="https://vacationsaga.b-cdn.net/assets/img3.webp"
                  alt="Marketing Wire team member"
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </FadeInBlur>
            <SlideInFromTop>
              <h3 className="md:text-xl  lg:text-2xl text-lg text-white font-normal mb-6 leading-tight relative inline-block">
                How Gen Machine Uses Automations to Grow
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </h3>
            </SlideInFromTop>

            <div className="mt-auto">
              <SlideInFromTop>
                <div className="text-7xl text-white font-normal mb-2">Zero</div>
              </SlideInFromTop>
              <SlideInFromTop>
                <div className="text-lg text-white/80">
                  negative reviews with Resonance
                </div>
              </SlideInFromTop>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="max-w-7xl m-auto bg-red-600 py-20 rounded-lg">
          <div className="flex items-center mb-10  justify-center ">
            <img
              src="https://vacationsaga.b-cdn.net/assets/resonance.webp"
              alt="/"
            />
            <div>
              <p className="text-3xl text-center">
                Stay informed with <br />
                our weekly newsletter
              </p>
            </div>
          </div>
          <div className="max-w-2xl  flex gap-x-2 m-auto">
            <input className="w-full border px-4 focus:outline-none rounded-lg py-4" />
            <button className="p-4 bg-primary_color rounded-lg">
              SubscribeNow
            </button>
          </div>
          <p className="text-xs text-center mt-2">
            By sending the form you agree to the Terms & Conditions and Privacy
            Policy.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroPage;

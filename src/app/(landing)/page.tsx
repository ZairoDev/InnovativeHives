"use client";
import React from "react";
import Particles from "../../components/ui/particles";
import {
  ArrowRight,
  Check,
  CheckCircle,
  CheckCircle2,
  CurlyBraces,
  FileText,
  GitBranch,
  Link2,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Rocket,
  Search,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import CustomPara from "@/components/typo/Para";
import CustomHeading from "@/components/typo/Heading";
import Image from "next/image";
import FadeInBlur from "@/components/FadeInBlur";
import SlideInFromTop from "@/components/SlideInFromTop";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";

const HeroPage = () => {
  return (
    <>
      {/* HeroSection */}
      <section className="relative overflow-hidden mt-24  border-b border-neutral-800 ">
        <Particles
          className="absolute inset-0"
          quantity={1000}
          ease={80}
          color="#B7664A"
          refresh
        />
        <div className="relative min-h-screen">
          <div className="container mx-auto px-4  md:py-14 py-4">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-2">
                <CustomHeading
                  className="lg:text-6xl text-5xl"
                  heading="Global Marketing Consulting Agency"
                />
                <FadeInBlur>
                  <p className=" lg:text-3xl text-2xl mt-10  text-gray-300 mb-8">
                    We&apos;re a global marketing company delivering innovative
                    solutions to our clients.
                  </p>
                </FadeInBlur>
                <FadeInBlur>
                  <Button
                    variant="company"
                    className=" bg-primary_color   text-background_colour hover:bg-secondary_color rounded-xl  md:text-xl text-lg md:px-8 md:py-6 px-6 py-4 h-auto "
                  >
                    Get a Consultation
                  </Button>
                </FadeInBlur>
                <FadeInBlur>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="text-primary_color w-5 h-5" />
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="text-primary_color w-5 h-5" />
                      <span>Free 30 minute consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="text-primary_color w-5 h-5" />
                      <span>Free marketing report</span>
                    </div>
                  </div>
                </FadeInBlur>
              </div>
              <div className="relative  order-2 lg:order-1">
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
                    <div className="bg-white/10 backdrop-blur-sm  rounded-full text-white border flex gap-2 items-center py-2 px-4">
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
            <div className="flex  items-center z-50 mt-10 justify-center">
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

          <div className="relative z-20 px-6 mx-auto max-w-7xl lg:px-8  flex flex-col gap-y-10 justify-center">
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
                <Button className=" bg-white  mt-6 text-background_colour hover:bg-white/90 rounded-xl  md:text-xl text-lg md:px-8 md:py-6 px-6 py-4 h-auto ">
                  Get a Consultation
                </Button>
              </FadeInBlur>

              <div className=" mt-6 ml-1">
                <FadeInBlur>
                  <p className="mb-8 text-xl font-normal text-white">
                    Trusted by leading companies
                  </p>
                </FadeInBlur>
                <FadeInBlur>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-8">
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
                  relates to the end-user&apos;s needs and wants.
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
                <div className="w-24 h-24 rounded-full bg-primary_color flex items-center justify-center mb-6">
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
              <Shield className="w-5 h-5 mr-2 text-primary_color" />
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
                <Link2 className="w-5 h-5" />
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
      {/* I ahve make it better */}
      <section className="max-w-7xl m-auto">
        <div className="my-20">
          <CustomHeading
            className="text-center mb-10"
            heading="Clients Stories"
          />
          {/* Card one */}
          <FadeInBlur>
            <div className="  flex items-center justify-center  ">
              <div className="">
                <div className="grid md:grid-cols-2 gap-x-20 p-2 items-center">
                  <div className="relative">
                    <div className=" overflow-hidden rounded-2xl">
                      <img
                        src="https://vacationsaga.b-cdn.net/assets/pehlabhai.webp"
                        alt="Marketing Consultant"
                        className="md:max-w-md w-full md:hidden h-96 object-cover"
                      />
                      <img
                        src="https://vacationsaga.b-cdn.net/assets/pehlabhai.webp"
                        alt="Marketing Consultant"
                        className="md:max-w-md hidden md:block"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-20 -top-20 text-[400px]  leading-none text-gray-700 font-serif opacity-50">
                      “
                    </div>
                    <div className=" z-10">
                      <CustomPara
                        className="lg:text-3xl sm:text-2xl md:text-2xl text-2xl leading-8 "
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
          </FadeInBlur>
          {/* Card Two */}
          <FadeInBlur>
            <div className="p-4">
              <div className="flex md:flex-row flex-col justify-between ">
                <div className="relative w-full order-2 md:order-1 mt-8 md:mt-0">
                  <div className="absolute -left-20 -top-20 text-[400px]  leading-none text-gray-700 font-serif opacity-50">
                    “
                  </div>
                  <div className="md:max-w-lg w-full">
                    <CustomPara
                      className="lg:text-3xl sm:text-2xl md:text-2xl text-2xl leading-8 "
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

                {/* Image - Order 1 on mobile, 2 on desktop */}
                <div className="relative flex-1 order-1 md:order-2">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src="https://vacationsaga.b-cdn.net/assets/doosrabhai.webp"
                      alt="Marketing Consultant"
                      className="md:max-w-md md:hidden w-full h-96 object-cover"
                    />
                    <img
                      src="https://vacationsaga.b-cdn.net/assets/doosrabhai.webp"
                      alt="Marketing Consultant"
                      className="md:max-w-md hidden md:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeInBlur>
        </div>
      </section>
      {/* I have to make it better  */}
      <section>
        <div className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="https://vacationsaga.b-cdn.net/assets/corporate2.jpg"
              alt="Marketing consultation meeting"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(183,102,74,0) 0%, rgba(183,102,74,0.7) 50%, rgba(183,102,74,1) 100%)",
            }}
          />
          {/* Content */}
          <div className="relative min-h-screen">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 max-w-3xl px-8 md:px-16">
              <FadeInBlur>
                <h1 className="md:text-5xl lg:text-6xl  sm:text-5xl text-3xl">
                  Marketing
                  <span className="relative inline-block">
                    Jumpstart
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
                  for Your Business
                </h1>
              </FadeInBlur>
              <CustomPara
                para=" The marketing audit is generally conducted by a third person,
                not a member of an organization."
              ></CustomPara>

              <FadeInBlur>
                <Button
                  variant="company"
                  className=" bg-white  my-6 text-background_colour hover:bg-white/90 rounded-xl  md:text-xl text-lg md:px-8 md:py-6 px-6 py-4 h-auto "
                >
                  Get a Consultation
                </Button>
              </FadeInBlur>

              <FadeInBlur>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Business to business",
                    "Business to customer",
                    "Non-profit business",
                    "Ecommerce",
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-2">
                      <div className="rounded-full bg-primary_color p-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white lg:text-xl  text-lg">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeInBlur>
            </div>
          </div>
        </div>
      </section>
      {/* Our blog section */}
      <section className="">
        <div className=" py-20 p-2 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr,2fr] gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <CustomHeading heading="Our Blog" />
                <CustomPara
                  para="Check the best marketing resources and the latest news about
                  our company."
                />
                <Button
                  variant="outline"
                  className="group bg-gray-900/50  text-white border-gray-800 rounded-full pl-4 pr-5 py-6 flex items-center gap-2"
                >
                  <Link2 className="w-4 h-4" />
                  <span>Read All Articles</span>
                </Button>
              </div>

              {/* Right Column - Blog Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* First Blog Card */}
                <FadeInBlur>
                  <Card className="bg-background_colour border-none  overflow-hidden">
                    <div className="relative h-48 md:h-64">
                      <Image
                        src="https://vacationsaga.b-cdn.net/assets/img2.webp"
                        alt="Content Marketing"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="py-2 px-0">
                      <CardTitle className="text-xl md:text-2xl text-white">
                        Content Marketing Steps That Will Help You to Grow Your
                        Business
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 py-2 px-0">
                      <p className="text-gray-400">
                        The macro-environment, over which a firm holds little
                        control, consists of a variety of external factors that
                        manifest on a large scale.
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">
                          February 13, 2022
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs bg-primary_color text-gray-300">
                          Articles
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInBlur>

                {/* Second Blog Card */}
                <FadeInBlur>
                  <Card className=" border-none bg-background_colour  overflow-hidden">
                    <div className="relative h-48 md:h-64">
                      <Image
                        src="https://vacationsaga.b-cdn.net/assets/img3.webp"
                        alt="Marketing Trends"
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader className="py-2 px-0">
                      <CardTitle className="text-xl md:text-2xl text-white">
                        Top Five Trends for Small Investment Companies Marketing
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 py-2 px-0">
                      <p className="text-gray-400">
                        The micro-environment, over which a firm holds a greater
                        amount control, typically includes Employees, Suppliers
                        and the Media and marketing.
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500">
                          February 11, 2023
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs bg-primary_color text-gray-300">
                          Tutorials
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeInBlur>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* One more section will go here */}
      <FadeInBlur>
        <section className=" p-2 ">
          <div className="max-w-7xl m-auto  bg-gradient-to-l from-[#2D271A] to-[#2A1B20] py-10 rounded-lg">
            <div className="flex items-center sm:fle-row flex-col mb-10  justify-center ">
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
            <div className="max-w-3xl p-2  flex md:flex-row flex-col gap-2 m-auto">
              <input className="w-full  bg-transparent border px-4 focus:outline-none rounded-lg py-4" />
              <Button
                variant="company"
                className=" bg-primary_color  text-background_colour hover:bg-secondary_color rounded-xl  md:text-xl text-lg md:px-8 md:py-6 px-6 py-4 h-auto "
              >
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs p-2 text-center mt-2">
              By sending the form you agree to the Terms & Conditions and
              Privacy Policy.
            </p>
          </div>
        </section>
      </FadeInBlur>
      {/* Contact form section is here */}
      <FadeInBlur>
        <section className="">
          <div className=" py-20 relative">
            <div className="max-w-4xl mx-auto ">
              <CustomHeading
                className="text-center mb-6"
                heading="Let's have a conversation"
              />
              <CustomPara
                className="text-center mb-8"
                para="We're open to talking to good people. Just say hello, and we'll start productive cooperation. Start your own success story."
              />
            </div>

            <div className="w-full absolute top-20 opacity-35">
              <img
                className="w-full h-auto object-contain"
                src="https://vacationsaga.b-cdn.net/assets/decoration-4.svg"
                alt="Decorative pattern"
              />
            </div>
          </div>

          <div className="p-2">
            <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-12 gap-8">
              {/* Left Column - Contact Info (30%) */}
              <Card className="lg:col-span-4 bg-primary_color text-white border-0 w-full">
                <CardContent className="p-8 space-y-12">
                  {/* Address Section */}
                  <div className="flex items-start  gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2 border-b pb-2">
                      <FadeInBlur>
                        <h3 className="text-xl font-semibold">Address</h3>
                      </FadeInBlur>
                      <FadeInBlur>
                        <p className="text-white/90">
                          Envato Pty Ltd, PO Box 16122 Collins Street, West
                          Victoria.
                        </p>
                      </FadeInBlur>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2 border-b pb-2">
                      <FadeInBlur>
                        <h3 className="text-xl font-semibold">Email</h3>
                      </FadeInBlur>
                      <FadeInBlur>
                        <p className="text-white/90">ibthemes21@gmail.com</p>
                      </FadeInBlur>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2 border-b pb-2">
                      <FadeInBlur>
                        <h3 className="text-xl font-semibold">Phone</h3>
                      </FadeInBlur>
                      <FadeInBlur>
                        <p className="text-white/90">+1 837 652 8800</p>
                      </FadeInBlur>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="lg:col-span-8 border md:p-5 p-1 border-neutral-800 bg-background_colour">
                <CardHeader>
                  <CustomHeading
                    className="text-white lg:text-4xl md:text-3xl sm:text-2xl text-xl"
                    heading="We'd love to hear from you"
                  />
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <FadeInBlur>
                        <label htmlFor="name" className="text-lg text-gray-400">
                          Name
                        </label>
                      </FadeInBlur>
                      <input className="w-full text-white border-neutral-800 bg-background_colour  border px-4 focus:outline-none rounded-lg py-4" />
                    </div>
                    <div className="space-y-2">
                      <FadeInBlur>
                        <label htmlFor="name" className="text-lg text-gray-400">
                          Email
                        </label>
                      </FadeInBlur>
                      <input className="w-full text-white border-neutral-800 bg-background_colour  border px-4 focus:outline-none rounded-lg py-4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <FadeInBlur>
                      <label
                        htmlFor="message"
                        className="text-sm text-gray-400"
                      >
                        Message
                      </label>
                    </FadeInBlur>
                    <textarea
                      id="message"
                      placeholder="Enter your message"
                      className="w-full text-white py-4 bg-background_colour border-neutral-800 min-h-40 border px-4 focus:outline-none rounded-lg "
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-400">
                        All the fields are required. By sending the form you
                        agree to the{" "}
                        <span className="underline cursor-pointer mr-1">
                          Terms & Conditions
                        </span>
                        and{" "}
                        <span className="underline cursor-pointer">
                          Privacy Policy
                        </span>
                        .
                      </p>
                    </div>

                    <div>
                      <Button
                        variant="company"
                        className=" bg-primary_color   text-background_colour hover:bg-secondary_color rounded-xl  md:text-xl text-lg md:px-8 md:py-6 px-6 py-4 h-auto "
                      >
                        Get a Consultation
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </FadeInBlur>
      {/* Footer Section is here */}
      <Footer />
    </>
  );
};

export default HeroPage;

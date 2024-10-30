import { ArrowRight, Star } from "lucide-react";
import React from "react";
import CustomHeading from "./typo/Heading";
import CustomPara from "./typo/Para";
import FadeInBlur from "./FadeInBlur";
import { Button } from "./ui/button";

const ReviewSection = () => {
  return (
    <div className="">
      <div className="h-screen  max-w-7xl mx-auto mt-20">
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
    </div>
  )
};

export default ReviewSection;

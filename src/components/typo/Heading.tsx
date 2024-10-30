import React from "react";
import FadeInBlur from "../FadeInBlur";

interface CustomHeadingProps {
  heading: string;
  className?: string; // Optional className prop for custom styling
}

const CustomHeading = ({ heading, className = "" }: CustomHeadingProps) => {
  return (
    <div className="">
      <h1
        className={`md:text-5xl lg:text-6xl px-2 sm:text-5xl text-3xl ${className}`}
      >
        <FadeInBlur>{heading}</FadeInBlur>
      </h1>
    </div>
  );
};

export default CustomHeading;

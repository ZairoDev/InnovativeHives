
import React from "react";
import FadeInBlur from "../FadeInBlur";


interface CustomParaProps {
  para: string;
  className?: string; // Optional className prop for custom styling
}

const CustomPara = ({ para, className = "" }: CustomParaProps) => {
  return (
    <div className="mt-10">
      <div className="max-w-3xl  m-auto">
        <h1
          className={`md:text-xl  lg:text-2xl text-lg ${className}`}
        >
          <FadeInBlur>{para}</FadeInBlur>
        </h1>
      </div>
    </div>
  );
};

export default CustomPara;

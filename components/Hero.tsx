import React from "react";
import Image from "next/image";
import Headings from "./Headings";
function Hero() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8 lg:pr-16">
        <Headings.H1>Hi there! I'm Tri.</Headings.H1>
        <Headings.H2>
          I'm a web developer in Saigon. I make open-source projects and write
          about code and life. I like running, sci-fi, and gaming.
        </Headings.H2>
      </div>
      <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
        <Image src="/ME.png" width={176} height={176} alt="Me" />
      </div>
    </div>
  );
}

export default Hero;

"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/VkPzzHz4/Bg-for-nav.jpg')] h-screen bg-cover px-10 flex flex-col  text-center justify-center">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          "We produce food for Mice",
          1000,
          "We produce food for Hamsters",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        speed={50}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />

      <p className="text-white italic">welcome to</p>
      <p className="uppercase text-white font-extrabold text-8xl -tracking-tighter">
        Ambrosia
      </p>

      <TypeAnimation
        sequence={[
          "A",
          500,
          "AM", //  Continuing previous Text
          500,
          "AMB",
          500,
          "AMBR",
          500,
          "AMBRO",
          500,
          "AMBROS",
          500,
          "AMBROSI",
          500,
          "AMBROSIA"
        ]}
        style={{ fontSize: "96px", fontWeight: "bold", color: blue;}}
        repeat={Infinity}
      />

      <p className="text-white italic">
        Making The Delicious food for 20 years <br />
        For Book Online Or inquire Call +880 1773231112
      </p>
    </div>
  );
};

export default Banner;

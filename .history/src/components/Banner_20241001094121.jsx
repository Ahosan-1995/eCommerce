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
          "One Two", //  Continuing previous Text
          500,
          "One Two Three",
          500,
          "One Two",
          500,
          "One",
          500,
          "",
          500,
        ]}
        style={{ fontSize: "2em" }}
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

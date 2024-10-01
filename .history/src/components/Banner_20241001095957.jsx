
import React from "react";


const Banner = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/VkPzzHz4/Bg-for-nav.jpg')] h-screen bg-cover px-10 flex flex-col  text-center justify-center">
      

      <p className="text-white italic">welcome to</p>
      <p className="uppercase text-white font-extrabold text-8xl -tracking-tighter">
        Ambrosia
      </p>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          "We are the excellence of Freshness",
          1000,
          "We are the excellence of Purity",
          1000,
          "We are the excellence of Authenticity",
          1000,
          "We are the excellence of Consistency",
          1000,
        ]}
        speed={50}
        style={{ fontSize: "2em", fontWeight: "bold", color: "black" }}
        repeat={Infinity}
      />

      {/* <TypeAnimation
        sequence={[
          "A",
          200,
          "AM", //  Continuing previous Text
          200,
          "AMB",
          200,
          "AMBR",
          200,
          "AMBRO",
          200,
          "AMBROS",
          200,
          "AMBROSI",
          200,
          "AMBROSIA"
        ]}
        style={{ fontSize: "96px", fontWeight: "bold", color: "white"}}
        repeat={Infinity}
      /> */}

      <p className="text-white italic">
        Making The Delicious food for 20 years <br />
        For Book Online Or inquire Call +880 1773231112
      </p>
    </div>
  );
};

export default Banner;

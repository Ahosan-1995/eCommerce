import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/VkPzzHz4/Bg-for-nav.jpg')] h-screen bg-cover px-10 flex flex-col items-center" >
      <p className="text-white italic">welcome to</p>
      <p className="uppercase text-white font-extrabold text-8xl -tracking-tighter">Ambrosia</p>
      <p className="text-white italic">Making The Delicious food for 20 years <br />
      For Book Online Or inquire Call +880 1773231112</p>
    </div>
  );
};

export default Banner;

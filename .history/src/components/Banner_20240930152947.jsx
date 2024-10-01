import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/VkPzzHz4/Bg-for-nav.jpg')] h-screen bg-cover">
      <p>welcome to</p>
      <p className="uppercase text-white font-extrabold text-4xl">Ambrosia</p>
      <p>Making The Delicious Premium Food Since 1990 <br />
      Book Online Or Call (1800)456-6743</p>
    </div>
  );
};

export default Banner;

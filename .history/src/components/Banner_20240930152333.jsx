import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div bg-[url('/img/hero-pattern.svg')]>
      <Image
        className=""
        src="https://i.postimg.cc/VkPzzHz4/Bg-for-nav.jpg"
        width="1200"
        height="100"
        alt="banner"
      />
    </div>
  );
};

export default Banner;

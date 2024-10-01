import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="px-10">
      <Image
        className=""
        src="https://i.postimg.cc/VkPzzHz4/Bg-for-nav.jpg"
        width="1"
        height="100"
        alt="banner"
      />
    </div>
  );
};

export default Banner;

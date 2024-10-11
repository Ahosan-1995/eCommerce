import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col mb-10 mt-5">
      <p className="text-center text-4xl font-extrabold mb-3">About Us</p>
      <div className="flex text-white">
        <div className="w-full bg-[#001f3f]">
          <p>Our Mission</p>
          <p>
            A meal designed <br /> to be explored <br />
            and experienced <br /> in the moment
          </p>
        </div>
        <div className="w-full relative h-64">
          <Image
            className="rounded object-cover"
            src="https://i.postimg.cc/Kzj2065c/slider3.jpg"
            alt="image"
            layout="fill"          // Set layout to fill
            objectFit="cover"      // Use objectFit cover
            
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

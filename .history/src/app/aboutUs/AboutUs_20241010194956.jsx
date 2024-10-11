import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col mb-10 mt-5 px-10 ">
        <p className="text-center text-4xl font-extrabold mb-3">About Us</p>
        <div className="flex text-white bg-[rgb(0,31,63)] rounded-2xl">
          <div className="w-full flex flex-col justify-between p-10">
            <p className="text-sm">Our Mission</p>
            <p className="text-xl font-bold">
              A meal designed <br /> to be explored <br />
              and experienced <br /> in the moment
            </p>
          </div>
          <div className="w-full relative h-96 ">
            <Image
              className="rounded-br-2xl rounded-tr-2xl object-cover"
              src="https://i.postimg.cc/Kzj2065c/slider3.jpg"
              alt="image"
              layout="fill" // Set layout to fill
              objectFit="cover" // Use objectFit cover
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;

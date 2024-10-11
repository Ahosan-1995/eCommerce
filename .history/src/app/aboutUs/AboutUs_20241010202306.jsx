import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col mb-40 mt-5 px-10 ">
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
        <div className="">
          <div className="relative p-5 bg-white">
            <div className="relative">
              <p className="mb-4">
                Immerse yourself in an experience that <br /> transcends the
                ordinary
              </p>
              <p className="absolute right-20 top-0 w-[60%] text-gray-700 leading-relaxed">
                In a world where the long- and short-term effects of climate
                change pose major <br />
                challenges for farmers, the need for regenerative food systems
                has never been more <br />
                important. That's why we have made a promise to do more for the
                planet, by taking less. <br />
                Our plant-forward menu means that we are already on average 30%
                less carbon <br />
                intensive than the average American meal.
              </p>
            </div>
          </div>

          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

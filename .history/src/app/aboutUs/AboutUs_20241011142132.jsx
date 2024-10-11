"use client";
import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const AboutUs = () => {
  return (
    <ParallaxProvider>
      <div>
        <div className="flex flex-col mb-40 mt-5 px-40 ">
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
          <div className="relative">
            <div className="text-left">
              <p className="mt-10 mb-5 text-2xl font-bold">
                Immerse yourself in an experience that <br /> transcends the
                ordinary
              </p>
              <p className="absolute left-20">
                In a world where the long- and short-term effects of climate
                change pose major <br /> challenges for farmers, the need for
                regenerative food systems has never been more <br />
                important. Thats why we have made a promise to do more for the
                planet, by taking less. <br /> Our plant-forward menu means that
                we are already on average 30% less carbon <br /> intensive than
                the average American meal.
              </p>
            </div>
          </div>
          <div>
            <div className="flex mt-60 justify-center gap-2">
              <Image
                className="rounded"
                src="https://i.postimg.cc/j2zzkwsn/About1.jpg"
                alt="image"
                width={300}
                height={100}
              />
              <Image
                className="rounded"
                src="https://i.postimg.cc/MZRbG4yZ/About2.jpg"
                alt="image"
                width={300}
                height={100}
              />
              <Parallax speed={20}>
                <div className="card shadow-lg h-96">
                  <p className="text-5xl mb-5">About</p>
                  <p className="text-5xl font-black mb-5">
                    <span className="bg-[#001f3f] text-white">OUR</span>STORY
                  </p>
                  <p>
                    In a world where the long- and short-term effects of climate change pose major challenges for farmers, the need for regenerative food systems has never been more important. <br />
                    Thats why we have made a promise to do more for the planet, by taking less. Our plant-forward menu means that we are already on average 30% less carbon intensive than the average American meal.
                  </p>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default AboutUs;

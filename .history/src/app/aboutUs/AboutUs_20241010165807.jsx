import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <p>About Us</p>
      <div className="flex">
        <div className="w-full">
          <p>Our Mission</p>
          <p>
            A meal designed <br /> to be explored <br />
            and experienced <br /> in the moment
          </p>
        </div>
        <div className="w-full">
          <Image
            className="rounded"
            src="https://i.postimg.cc/Kzj2065c/slider3.jpg"
            alt="image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

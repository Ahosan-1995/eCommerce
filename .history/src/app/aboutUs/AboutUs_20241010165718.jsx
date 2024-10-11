import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex">
      <p>About Us</p>
      <div>
        <div>
          <p>Our Mission</p>
          <p>
            A meal designed <br /> to be explored <br />
            and experienced <br /> in the moment
          </p>
        </div>
        <div>
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

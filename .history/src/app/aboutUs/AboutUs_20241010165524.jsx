import React from "react";

const AboutUs = () => {
  return (
    <div>
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
            className="rounded-3xl"
            src="https://i.postimg.cc/Bvq6tNKG/LogoW.png"
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

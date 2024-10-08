import Image from "next/image";
import React from "react";

const OurSetup = () => {
  return (
    <div className="flex flex-col items-center content-center">
      <div className="text-center mt-10 mb-5">
        <p className="text-3xl font-bold">Our Setup</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet
          molestiae <br />
          id exercitationem vitae nobis quo? Reiciendis animi cumque odit
          reprehenderit? <br />
          Modi earum ducimus quo quasi. Saepe ullam pariatur maiores?
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-10">
        <div className="">
          <Image
            className=""
            src="https://i.postimg.cc/cJsZnggn/slider1.jpg"
            alt="image"
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <Image
            className=""
            src="https://i.postimg.cc/R0XmQSKb/slider2.jpg"
            alt="image"
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <Image
            className=""
            src="https://i.postimg.cc/G2SH1Xsv/4.jpg"
            alt="image"
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <Image
            className=""
            src="https://i.postimg.cc/G2pHNW9c/3.jpg"
            alt="image"
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <Image
            className=""
            src="https://i.postimg.cc/cJsZnggn/slider1.jpg"
            alt="image"
            width={300}
            height={300}
          />
        </div>
        <div className="">
          <Image
            className=""
            src="https://i.postimg.cc/jjtW6wbn/1.jpg"
            alt="image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default OurSetup;

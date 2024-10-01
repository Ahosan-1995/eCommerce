import Image from "next/image";
import React from "react";

const Signature = () => {
  return (
    <div className="mb-5 mt-10 flex flex-col justify-center items-center ">
      <p className="uppercase text-2xl font-semibold text-center">
        I never really found anything that interested <br /> me until I started
        cooking
      </p>
      <section >
        <p>OUR FOUNDER AHOSAN HABIB</p>
        <Image
          src="https://i.postimg.cc/CLPwDhGr/Signature.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </section>
    </div>
  );
};

export default Signature;

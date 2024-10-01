import Image from 'next/image';
import React from 'react';

const Signature = () => {
    return (
        <div className="mb-5 mt-10">
            <p className="uppercase text-2xl font-semibold text-center">I never really found anything that interested <br /> me until I started cooking</p>
            <p>OUR FOUNDER AHOSAN HABIB</p>
            <p>https://i.postimg.cc/CLPwDhGr/Signature.png</p>
            <Image
                src="https://i.postimg.cc/Bvq6tNKG/LogoW.png"
                alt="Logo"
                width={100}
                height={100}
              />
        </div>
    );
};

export default Signature;
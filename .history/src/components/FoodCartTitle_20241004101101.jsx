import React from 'react';

const FoodCartTitle = () => {
    return (
        <div>
             <div className="mb-5 mt-10 flex flex-col justify-center items-center ">
            <p className="uppercase text-2xl font-semibold text-center">I never really found anything that interested <br /> me until I started cooking</p>
            <p className="mt-5">OUR FOUNDER AHOSAN HABIB</p>
            <Image
                src="https://i.postimg.cc/CLPwDhGr/Signature.png"
                alt="Logo"
                width={100}
                height={100}
              />
        </div>
        </div>
    );
};

export default FoodCartTitle;
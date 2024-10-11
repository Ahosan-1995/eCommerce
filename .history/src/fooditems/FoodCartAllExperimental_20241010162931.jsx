import Image from "next/image";
import React from "react";

const FoodCartAllExperimental = ({ menu, name }) => {
  console.log("Food Card experimental", menu);
  return (
    <div className=" py-5">
      <div className="flex h-60">
        <div className="w-full rounded-br-lg  bg-[#001f3f] text-center content-center text-3xl font-bold text-white">{name}</div>
        <div className="w-full rounded-bl-lg  bg-[#001f3f]"></div>
      </div>
      <br />
      <hr></hr>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 px-40">
        {menu && menu.length > 0 ? (
          menu.map((sMenu) => (
            <div key={sMenu._id} className="card  shadow-xl ">
              <div className="flex flex-col justify-center items-center content-center">
                <figure  className="px-5 pt-5 ">
                  <Image
                    src={sMenu.image}
                    alt="Logo"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl font-bold">{sMenu.name}</h2>
                  <p>{sMenu.description}</p>
                  <div className="card-actions mt-5">
                    <button className="btn bg-[#001f3f] text-white hover:text-black">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No menu items available</p>
        )}
      </div>
    </div>
  );
};

export default FoodCartAllExperimental;

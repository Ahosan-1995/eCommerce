import Image from "next/image";
import React from "react";

const FoodCartAllExperimental = ({ menu, name }) => {
  console.log("Food Card experimental", menu);
  return (
    <div className="px-40 py-5">
      <p>{name}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {menu && menu.length > 0 ? (
          menu.map((sMenu) => (
            <div key={sMenu._id} className="card bg-base-100 shadow-xl ">
              <div className="flex flex-col justify-center items-center content-center">
                <figure  className="px-5 pt-5 ">
                  <Image
                    src={sMenu.image}
                    alt="Logo"
                    width={200}
                    height={100}
                    // layout="fixed"
                    // objectFit="cover"
                    className="rounded-lg"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-2xl font-semibold text-red-500">{sMenu.name}</h2>
                  <p>{sMenu.description}</p>
                  <div className="card-actions mt-10">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                  <p className='text-b'>Hiiiiiii</p>
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

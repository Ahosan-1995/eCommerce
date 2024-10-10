import Image from "next/image";
import React from "react";

const FoodCartAllExperimental = ({ menu, name }) => {
  console.log("Food Card experimental", menu);
  return (
    <div className="px-40 py-5">
      <p>{name}</p>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
        {menu && menu.length > 0 ? (
          menu.map((sMenu) => (
            <div key={sMenu._id} className="card  shadow-xl ">
              <div className="flex flex-col justify-center items-center content-center">
                <figure  className="px-5 pt-5 ">
                  <Image
                    src={sMenu.image}
                    alt="Logo"
                    width={200}
                    height={100}
                    className="rounded-lg"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl font-semibold text-red-700">{sMenu.name}</h2>
                  <p>{sMenu.description}</p>
                  <div className="card-actions mt-10">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                  <p className='text-4xl'>Hiaaaaaaaaaiiiiii</p>
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

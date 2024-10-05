import Image from "next/image";
import React from "react";

const FoodCartAllExperimental = ({ menu, name }) => {
  console.log("Food Card experimental", menu);
  return (
    // <div>
    //   <p>{name}</p>
    //   {menu.map((M) => (
    //     <div key={M._id}>
    //       <div className="mb-5 mt-10 flex flex-col justify-center items-center">
    //         <p className="uppercase text-2xl font-semibold text-center">
    //           {M.name}
    //         </p>
    //         <p className="mt-5">{M.description}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="">
      <p>{name}</p>
      <div className="grid grid-cols-3">
        {menu && menu.length > 0 ? (
          menu.map((sMenu) => (
            <div key={sMenu._id} className="card bg-base-100 w-96 shadow-xl ">
              <div className="flex flex-col justify-center items-center content-center">
                <figure className="px-10 pt-10">
                  <Image
                    src={sMenu.image} // Use dynamic image URL
                    alt="Logo"
                    width={300}
                    height={300}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{sMenu.name}</h2>{" "}
                  {/* Use dynamic name */}
                  <p>{sMenu.description}</p> {/* Use dynamic description */}
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
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

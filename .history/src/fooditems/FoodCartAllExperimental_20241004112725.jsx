import Image from "next/image";
import React from "react";

const FoodCartAllExperimental = ({ bangladeshiFoodItems, name }) => {
  console.log("Food Card experimental", bangladeshiFoodItems);
  return (
    <div key={M._id} className="card bg-base-100 w-96 shadow-xl">
      {bangladeshiFoodItems.map((M) => (
        <div>
          <figure className="px-10 pt-10">
            <Image
              src={M.image} // Use dynamic image URL
              alt="Logo"
              width={300}
              height={300}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{M.name}</h2> {/* Use dynamic name */}
            <p>{M.description}</p> {/* Use dynamic description */}
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCartAllExperimental;

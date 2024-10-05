import React from "react";

const FoodCartAllExperimental = (menu) => {
  return (
    <div>
      {menu.map((M) => (
        <div key={M._id}>
          <div className="mb-5 mt-10 flex flex-col justify-center items-center">
            <p className="uppercase text-2xl font-semibold text-center">
              {M.title}
            </p>
            <p className="mt-5">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCartAllExperimental;

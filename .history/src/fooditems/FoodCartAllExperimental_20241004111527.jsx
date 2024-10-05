import React from "react";

const FoodCartAllExperimental = ({ menu, name }) => {
    console.log(menu)
  return (
    <div>
      <p>{name}</p>
      {menu.map((M) => (
        <div key={M._id}>
          <div className="mb-5 mt-10 flex flex-col justify-center items-center">
            <p className="uppercase text-2xl font-semibold text-center">
              {M.name}
            </p>
            <p className="mt-5">{M.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCartAllExperimental;

import React from "react";

const FoodCartAllExperimental = ({ menu, name }) => {
    console.log("Food Card experimental",menu);
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
    <div>
        <p>{name}</p>
        {
            {menu.map((M) => {
                if (M.category === "Soft Drinks") {
                  return (
                    <div key={M._id} className="card bg-base-100 w-96 shadow-xl">
                      
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
                          <h2 className="card-title">{M.name}</h2>{" "}
                          {/* Use dynamic name */}
                          <p>{M.description}</p> {/* Use dynamic description */}
                          <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
        }
    </div>
  );
};

export default FoodCartAllExperimental;

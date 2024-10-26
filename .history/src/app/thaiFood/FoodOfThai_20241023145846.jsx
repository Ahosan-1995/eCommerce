import React from 'react';

const FoodOfThai = () => {
    return (
        <div>
            
        </div>
    );
};

export default FoodOfThai;





import Image from "next/image";
import React from "react";

const getMenus = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/menus", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();


    return data;

  } catch (error) {
    console.error("Error fetching menus:", error);
  }
};

const FoodOfSoftDrinks = async () => {
  const { menu } = (await getMenus()) || {};


  return (
    <div>
      <div className="bg-[url('https://i.postimg.cc/m2X8ptnF/Bangladeshi-7.jpg')] h-[500px] bg-cover px-10 flex flex-col  text-center justify-center mt-10 ">
        <p className="text-white italic text-2xl -tracking-tighter">
          welcome to
        </p>
        <p className="uppercase text-white font-extrabold lg:text-8xl -tracking-tighter">
        Soft Drinks
        </p>

        <p className="text-white italic">
          If you have a food allergy, intolerance or sensitivity, please speak
          to your server about ingredients in our <br /> dishes before you order
          your meal.aaaaaa
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-20">
        {menu.map((menu) =>
          menu.category === "Soft Drinks" ? (
            <div key={menu._id} className="card  shadow-xl ">
              <div className="flex flex-col justify-center items-center content-center ">
                <figure className="px-5 pt-5 ">
                  <Image
                    src={menu.image}
                    alt="Logo"
                    width={400}
                    height={200}
                    className="rounded-lg"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="text-xl font-bold">{menu.name}</h2>
                  <p>{menu.description}</p>
                  <div className=" mt-5  flex lg:flex-row justify-between w-full">
                    <button className="btn bg-[#001f3f] text-white hover:text-black">
                      Price: {menu.price}
                    </button>
                    <button className="btn bg-[#001f3f] text-white hover:text-black">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default FoodOfSoftDrinks;

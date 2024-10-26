import Image from "next/image";
import React from "react";


const getMenus = async () => {
    let data = await fetch('http://localhost:3000/api/menus')
    let menu = await data.json();
    let filteredMenu=menu.filter(menu=>menu.category==="bangla")

  };

const Bfood = () => {
  return (
    <div className="mx-auto px-40">
      <div className="bg-[url('https://i.postimg.cc/7hGqvF45/Bg-for-reservation.jpg')] h-[500px] bg-cover px-10 flex flex-col  text-center justify-center mt-10 ">
        <p className="text-white italic text-2xl -tracking-tighter">
          welcome to
        </p>
        <p className="uppercase text-white font-extrabold lg:text-8xl -tracking-tighter">
          Bangladeshi Food
        </p>

        <p className="text-white italic">
          If you have a food allergy, intolerance or sensitivity, please speak
          to your server about ingredients in our <br /> dishes before you order
          your meal.
        </p>
      </div>

      <div key={sMenu._id} className="card  shadow-xl ">
        <div className="flex flex-col justify-center items-center content-center">
          <figure className="px-5 pt-5 ">
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
            <div className=" mt-5  flex lg:flex-row justify-between w-full">
              <button className="btn bg-[#001f3f] text-white hover:text-black">
                Price: {sMenu.price}
              </button>
              <button className="btn bg-[#001f3f] text-white hover:text-black">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bfood;

import Image from "next/image";
import React from "react";






const Bfood = async() => {

  let data = await fetch('http://localhost:3000/api/menus')

  let posts = await data.json()
// console.log(posts);
  

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

      {
        posts.map(menu=>if(menu.category===""))
      }
      <p>Hi</p>
    </div>
  );
};

export default Bfood;

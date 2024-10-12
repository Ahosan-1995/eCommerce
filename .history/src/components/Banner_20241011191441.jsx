
import React from "react";
import TypeAnimate from "./TypeAnimate";


const Banner = () => {
  return (
    <div className="bg-[url('https://i.postimg.cc/QdQZTcWR/Bg-for-nav2-2.jpg')] h-screen bg-cover px-10 flex flex-col  text-center justify-center">
      

      <p className="text-white italic text-2xl -tracking-tighter">welcome to</p>
      <p className="uppercase text-white font-extrabold text-8xl -tracking-tighter">
        Ambrosia
      </p>
      <TypeAnimate></TypeAnimate>
      <p className="text-white italic">
        Making The Delicious food for 20 years <br />
        For Book Online Or inquire Call +880 1773231112
      </p>
    </div>
  );
};

export default Banner;

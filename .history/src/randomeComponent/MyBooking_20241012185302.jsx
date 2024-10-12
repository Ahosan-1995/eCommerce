import Image from "next/image";
import React from "react";

const MyBooking = () => {
  return (
      <div className="bg-[url('https://i.postimg.cc/7hGqvF45/Bg-for-reservation.jpg')] h-[500px] bg-cover px-10 flex flex-col  text-center justify-center">
        <p className="text-white italic text-2xl -tracking-tighter">
          welcome to
        </p>
        <p className="uppercase text-white font-extrabold text-8xl -tracking-tighter">
          Ambrosia Reservation
        </p>
        
        <p className="text-white italic">
        If you have a food allergy, intolerance or sensitivity, please speak to your server about ingredients in our <br /> dishes before you order your meal.
        </p>
      </div>
   
  );
};

export default MyBooking;

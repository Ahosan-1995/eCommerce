import Image from "next/image";
import React from "react";

const MyBooking = () => {
  return (
    <div>
      <div className="bg-[url('https://i.postimg.cc/7hGqvF45/Bg-for-reservation.jpg')] h-[500px] bg-cover px-10 flex flex-col  text-center justify-center mt-10">
        <p className="text-white italic text-2xl -tracking-tighter">
          welcome to
        </p>
        <p className="uppercase text-white font-extrabold text-8xl -tracking-tighter">
          Ambrosia Reservation
        </p>

        <p className="text-white italic">
          If you have a food allergy, intolerance or sensitivity, please speak
          to your server about ingredients in our <br /> dishes before you order
          your meal.
        </p>
      </div>

      <div>
        <div>
          <p>Book a Table</p>
          <p>Make a Reservation</p>
          <p>
            Make a reservation at Bouffe and secure your spot for an
            unforgettable dining <br />
            experience. Whether it is an intimate dinner, a special occasion, or
            a gathering with loved <br />
            ones, our attentive team will ensure every detail is taken care of.
          </p>
        </div>
        <div>
            <div>
                <p>DATE</p>
                <input type="date" name="" id="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;

import Image from "next/image";
import React from "react";

const MyBooking = () => {
    const time=
  return (
    <div className="mx-auto px-40">
      <div className="bg-[url('https://i.postimg.cc/7hGqvF45/Bg-for-reservation.jpg')] h-[500px] bg-cover px-10 flex flex-col  text-center justify-center mt-10 ">
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
            <div className="py-3">
                <p className="mb-2">DATE</p>
                <input type="date" name="date" id="001" className="border p-3 px-6"/>
            </div>
            <div className="py-3">
                <p className="mb-2">TIME</p>
                <input type="datetime" name="" id="" className="border p-3 px-6"/>
            </div>
            <div className="py-3">
                <p className="mb-2">SEATS</p>
                <input type="date" name="date" id="001" className="border p-3 px-6"/>
                <input type="datetime-local" name="" id="" />
            </div>
            <div className="py-3">
                <p className="mb-2">YOUR NAME</p>
                <input type="date" name="date" id="001" className="border p-3 px-6"/>
            </div>
            <div className="py-3">
                <p className="mb-2">EMAIL</p>
                <input type="date" name="date" id="001" className="border p-3 px-6"/>
            </div>
            <div className="py-3">
                <p className="mb-2">PHONE</p>
                <input type="date" name="date" id="001" className="border p-3 px-6"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;

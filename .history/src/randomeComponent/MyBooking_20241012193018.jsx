import Image from "next/image";
import React from "react";

const MyBooking = () => {
  const time = [
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];
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
        <div className="mt-10 mb-20 ">
          <div className="flex justify-between">
            <div className="">
              <p className="mb-2">DATE</p>
              <input
                type="date"
                name="date"
                id="001"
                className="border p-3 w-72"
              />
            </div>
            <div className="">
              <p className="mb-2">TIME</p>
              <select name="" className="border p-3  w-72">
                <option>11 AM</option>
                <option>12 PM</option>
                <option>1 PM</option>
                <option>2 PM</option>
                <option>3 PM</option>
                <option>4 PM</option>
                <option>5 PM</option>
                <option>6 PM</option>
                <option>7 PM</option>
                <option>8 PM</option>
                <option>9 PM</option>
                <option>10 PM</option>
                <option>11 PM</option>
              </select>
            </div>
            <div className="">
              <p className="mb-2">SEATS</p>
              <input type="number" className="border p-3  w-72" />
            </div>
          </div>
          <div className="flex justify-between mt-10">
            <div className="">
              <p className="mb-2">YOUR NAME</p>
              <input type="text" className="border p-3 w-72" />
            </div>
            <div className="">
              <p className="mb-2">EMAIL</p>
              <input type="email" className="border p-3 w-72" />
            </div>
            <div className="">
              <p className="mb-2">PHONE</p>
              <input type="text" className="border p-3 w-72" />
            </div>
          </div>
          <div className="mt-10">
            <p>Special Requests</p>
            <input type="text" className="w-full h-40 border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;

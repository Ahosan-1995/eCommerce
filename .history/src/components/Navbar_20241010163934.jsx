import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-[#001f3f] px-40">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-white bg-[#001f3f]"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a>Our Menu</a>
              <ul className="p-2">
                <li>
                  <a>Thai</a>
                </li>
                <li>
                  <a>Chaines</a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/aboutUs">About Us!</Link>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <Image
          className="rounded-3xl"
          src="https://i.postimg.cc/Bvq6tNKG/LogoW.png"
          alt="image"
          width={100}
          height={100}
        />
      </div>
      <div className="navbar-center hidden lg:flex text-white">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li className="relative group">
            <button>Our Menu</button>
            <ul className="p-2 mt-7 absolute hidden shadow-lg   group-hover:block  rounded ">
              <div className="flex items-center justify-center content-center">
                <li className="flex text-black bg-white">
                  <div className="flex flex-col justify-center items-center content-center">
                    <Image
                      className="rounded"
                      src="https://i.postimg.cc/vBFP7kNq/Bangladeshi-2.jpg"
                      alt="image"
                      width={100}
                      height={100}
                    />
                    <button className="font-bold rounded-md">
                    Bangladeshi Food
                    </button>
                  </div>
                </li>
                <li className="flex text-black bg-white">
                  <div className="flex flex-col justify-center items-center content-center">
                    <Image
                      className="rounded"
                      src="https://i.postimg.cc/1XzDDKs7/dessert-9.jpg"
                      alt="image"
                      width={100}
                      height={100}
                    />
                    <button className="font-bold rounded-md">
                    Dessert
                    </button>
                  </div>
                </li>
                <li className="flex text-black bg-white">
                  <div className="flex flex-col justify-center items-center content-center">
                    <Image
                      className="rounded"
                      src="https://i.postimg.cc/RhqnWVLj/Drinks-6.jpg"
                      alt="image"
                      width={100}
                      height={100}
                    />
                    <button className="font-bold rounded-md">
                    Soft Drinks
                    </button>
                  </div>
                </li>
                <li className="flex text-black bg-white">
                  <div className="flex flex-col justify-center items-center content-center">
                    <Image
                      className="rounded"
                      src="https://i.postimg.cc/mZ0QPCKj/thai-8.jpg"
                      alt="image"
                      width={100}
                      height={100}
                    />
                    <button className="font-bold rounded-md">
                    Thai Food
                    </button>
                  </div>
                </li>
                <li className="flex text-black bg-white">
                  <div className="flex flex-col justify-center items-center content-center">
                    <Image
                      className="rounded"
                      src="https://i.postimg.cc/cLftgzf4/fast-food-2.jpg"
                      alt="image"
                      width={100}
                      height={100}
                    />
                    <button className="font-bold rounded-md">
                    Fast Food
                    </button>
                  </div>
                </li>
               
                
                
              </div>
            </ul>
          </li>

          <li>
            <Link href="/aboutUs">About Us!</Link>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="border rounded-lg px-4 py-2 font-bold text-white">
          Reservation
        </button>
      </div>
    </div>
  );
};

export default Navbar;

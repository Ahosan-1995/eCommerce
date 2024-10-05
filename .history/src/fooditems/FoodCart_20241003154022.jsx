// "use client"
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
    console.log("Fetched data:", data); // Log the fetched data
    return data; // Make sure you're returning the actual data
  } catch (error) {
    console.error("Error fetching menus:", error);
  }
};

const FoodCart = async () => {
  const { menu } = await getMenus();
  console.log(menu);
  console.log("Hi");

  return (
    <div>
      {menu.map((M) => (
        <div key={m} className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src="https://i.postimg.cc/VkYJMxfZ/Drinks-1.jpg"
              alt="Logo"
              width={300}
              height={300}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCart;

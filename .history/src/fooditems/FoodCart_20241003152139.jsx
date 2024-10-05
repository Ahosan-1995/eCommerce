// "use client"
import Image from "next/image";
import React from "react";

const getMenus = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/menus', {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error('Failed to fetch');
    }
    return res.json();
  } catch (error) {
    console.log("error loading menus");
  }
};

const FoodCart = async () => {
  const { menus } = await getMenus();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {menus.map((menu, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <Image
              src={menu["image-url"]}
              alt={menu.name}
              width={300}
              height={300}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{menu.name}</h2>
            <p>{menu.description}</p>
            <p><strong>Price:</strong> ${menu.price}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCart;

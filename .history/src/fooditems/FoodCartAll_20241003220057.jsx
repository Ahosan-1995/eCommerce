import React from "react";
import FoodCart from "./FoodCart";

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

const FoodCartAll = async () => {
  const { menu } = await getMenus();
  console.log(menu);
  console.log("Hi");
  
  
  return (
  <div>
    <FoodCart menu={menu}></FoodCart>
  </div>
);
};

export default FoodCartAll;

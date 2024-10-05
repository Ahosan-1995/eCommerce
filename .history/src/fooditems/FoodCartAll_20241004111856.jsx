import React from "react";
import FoodCartAllExperimental from "./FoodCartAllExperimental";

const getMenus = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/menus", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    // console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching menus:", error);
  }
};

const FoodCartAll = async () => {
  const { menu } = await getMenus() || {};  // Ensure menu is an object or undefined

  console.log("Hi this is menu",menu);
  
  let content;

  if (menu && menu.length && menu?.category === "Soft Drinks") {
    content = <FoodCartAllExperimental menu={menu} name={"Soft Drinks"} />;
  } else {
    content = <p>No data available for Soft Drinks.</p>;
  }

  return <div>{content}</div>;
};

export default FoodCartAll;

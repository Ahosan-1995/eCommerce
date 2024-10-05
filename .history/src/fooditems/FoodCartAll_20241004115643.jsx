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
    return data;
  } catch (error) {
    console.error("Error fetching menus:", error);
  }
};

const FoodCartAll = async () => {
  const { menu } = await getMenus() || {};  // Ensure menu is an object or undefined

  console.log("Fetched menu:", menu);

  let content;

  if (Array.isArray(menu)) {
    const bangladeshiFoodItems = menu.filter(item => item.category === "Bangladeshi Food");
    const bangladeshiFoodItems = menu.filter(item => item.category === "Bangladeshi Food");
    const bangladeshiFoodItems = menu.filter(item => item.category === "Bangladeshi Food");
    const bangladeshiFoodItems = menu.filter(item => item.category === "Bangladeshi Food");

    if (bangladeshiFoodItems.length > 0) {
      content = (
        <FoodCartAllExperimental menu={bangladeshiFoodItems} name={"Bangladeshi Food"} />
      );
    } else {
      content = <p>No data available for Bangladeshi Food.</p>;
    }
  } else {
    content = <p>Menu data is not available or not an array.</p>;
  }

  return <div>{content}</div>;
};

export default FoodCartAll;

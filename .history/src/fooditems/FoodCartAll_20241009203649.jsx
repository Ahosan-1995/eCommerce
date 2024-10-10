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
  const { menu } = (await getMenus()) || {}; // Ensure menu is an object or undefined

  // console.log("Fetched menu:", menu);

  let content = [];

  if (Array.isArray(menu)) {
    // Filter items by category
    const bangladeshiFoodItems = menu.filter(
      (item) => item.category === "Bangladeshi Food"
    );
    const dessertItems = menu.filter((item) => item.category === "Dessert");
    const SoftDrinks = menu.filter((item) => item.category === "Soft Drinks");
    const ThaiFood = menu.filter((item) => item.category === "Thai Food");
    const FastFood = menu.filter((item) => item.category === "Fast Food");

    // Render both categories if they exist
    if (bangladeshiFoodItems.length > 0 && bangladeshiFoodItems.length) {
      content.push(
        <FoodCartAllExperimental
          key="BangladeshiFood"
          menu={bangladeshiFoodItems}
          name="Bangladeshi Food"
        />
      );
    }

    if (dessertItems.length > 0) {
      content.push(
        <FoodCartAllExperimental
          key="Dessert"
          menu={dessertItems}
          name="Dessert"
        />
      );
    }
    if (SoftDrinks.length > 0) {
      content.push(
        <FoodCartAllExperimental
          key="SoftDrinks"
          menu={SoftDrinks}
          name="Soft Drinks"
        />
      );
    }
    if (ThaiFood.length > 0) {
      content.push(
        <FoodCartAllExperimental
          key="ThaiFood"
          menu={ThaiFood}
          name="Thai Food"
        />
      );
    }
    if (FastFood.length > 0 ) {
      content.push(
        <FoodCartAllExperimental
          key="FastFood"
          menu={FastFood}
          name="Fast Food"
        />
      );
    }
  } else {
    content = <p>Menu data is not available</p>;
  }
  
  return <div>{content}</div>; // Render all content
};

export default FoodCartAll;

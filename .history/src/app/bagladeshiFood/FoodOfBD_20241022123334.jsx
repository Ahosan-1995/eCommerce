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
    let menus = data[0].filter(data => data.category === "Bangladeshi Food");
    return data;
  } catch (error) {
    console.error("Error fetching menus:", error);
  }
};

const FoodOfBD = async() => {

  const { menu } = (await getMenus()) || {};

  return (
    <div>
      <div className="bg-[url('https://i.postimg.cc/m2X8ptnF/Bangladeshi-7.jpg')] h-[500px] bg-cover px-10 flex flex-col  text-center justify-center mt-10 ">
        <p className="text-white italic text-2xl -tracking-tighter">
          welcome to
        </p>
        <p className="uppercase text-white font-extrabold lg:text-8xl -tracking-tighter">
          Bangladeshi Food
        </p>

        <p className="text-white italic">
          If you have a food allergy, intolerance or sensitivity, please speak
          to your server about ingredients in our <br /> dishes before you order
          your meal.aaaaaa
        </p>
      </div>
      {/* {
        menu.map(menu=>menu.category==="Bangladeshi Food"?<p key={menu._id}>Hi123</p>:"")
      } */}
      {
        menu.map(menu=>)
      }
    </div>
  );
};

export default FoodOfBD;

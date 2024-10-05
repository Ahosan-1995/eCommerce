import Image from "next/image";
import React from "react";

const getMenus = async()=>{
  try {
    const res = await fetch('http://localhost:3000/api/menus',{
      cache:"no-store",
    });
    if(!res.ok){
      throw new Error('Failed to fetch');
    }
    return res.json();
  } 
  catch (error) {
    console.log(error);
  }
}

const FoodCart = async() => {

  const {menus} = await getMenus();
  console.log(menus);
    
  return (
    <div>
      {
        menus.map(menu=>
          <p key=>Hi</p>
        )
      }
    </div>
  );
};

export default FoodCart;

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

const FoodCart = () => {

  const {menus} = get
    
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
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
  );
};

export default FoodCart;

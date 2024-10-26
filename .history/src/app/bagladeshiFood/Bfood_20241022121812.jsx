import Image from "next/image";
import React from "react";






const Bfood = async() => {

  let data = await fetch('http://localhost:3000/api/menus')

  let posts = await data.json()
// console.log(posts);
  

  return (
    <div className="mx-auto px-40">
      
      {
        posts.map(post=>post.category=="Bangladeshi Food"?<p>Hi</p>:"")
      }
    </div>
  );
};

export default Bfood;

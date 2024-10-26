import Image from "next/image";
import React from "react";






const Bfood = async() => {


  

  return (
    <div className="mx-auto px-40">
      
      {
        posts.map(post=>post.category=="Bangladeshi Food"?<p>Hi</p>:"")
      }
    </div>
  );
};

export default Bfood;

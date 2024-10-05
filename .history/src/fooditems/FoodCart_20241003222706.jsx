// "use client"
import Image from "next/image";
import React from "react";

// const getMenus = async() => {
//   try {
//     const res = await fetch('http://localhost:3000/api/menus', {
//       cache: "no-store",
//     });
    
//     if (!res.ok) {
//       throw new Error('Failed to fetch');
//     }
    
//     const data = await res.json();
//     console.log('Fetched data:', data); // Log the fetched data
//     return data; // Make sure you're returning the actual data
    
//   } catch (error) {
//     console.error('Error fetching menus:', error);
//   }
// }

const FoodCart = async(menu) => {

  // const {menu} = await getMenus();
  // console.log(menu);
  // console.log('Hi');

  console.log("hiiiiiiiiiiiii", menu);
    
  return (
   <div>
    {
      menu.map(M=> ⨯ src\fooditems\FoodCart.jsx (33:9) @ map
      ⨯ TypeError: menu.map is not a function
         at FoodCart (./src/fooditems/FoodCart.jsx:34:17)
         at stringify (<anonymous>)
     digest: "2600265263"
       31 |
       32 |   return (
     > 33 |    menu.map((M)=><div></div>)
          |         ^
       34 |   );
       35 | };)
    }
   </div>
  );
};

export default FoodCart;

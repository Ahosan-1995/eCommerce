import Banner from "@/components/Banner";
import Signature from "@/components/Signature";
import Slider from "@/components/Slider";
import FoodCart from "@/fooditems/FoodCart";



export default async function Home() {

  let data = await fetch('../components/foodItems.json')
  let posts = await data.json()
  return (
    <div className="">
      
      <Banner></Banner>
      <Signature></Signature>
      <Slider ></Slider>      
      <FoodCart></FoodCart>
      
    </div>
  );
}

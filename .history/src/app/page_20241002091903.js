import Banner from "@/components/Banner";
import Signature from "@/components/Signature";
import Slider from "@/components/Slider";
import FoodCart from "@/fooditems/FoodCart";



export default function Home() {

  let data = await fetch('https://api.vercel.app/blog')
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

import Banner from "@/components/Banner";
import Signature from "@/components/Signature";
import Slider from "@/components/Slider";
import FoodCart from "@/fooditems/FoodCart";



export default async function Home() {


  return (
    <div className="">
      
      <Banner></Banner>
      <Signature></Signature>
      <Slider ></Slider>      
      <FoodCart></FoodCart>
      
    </div>
  );
}

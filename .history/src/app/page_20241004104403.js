import Banner from "@/components/Banner";
import Signature from "@/components/Signature";
import Slider from "@/components/Slider";
import FoodCart from "@/fooditems/FoodCart";
import FoodCartAll from "@/fooditems/FoodCartAll";
import OurSetup from "@/fooditems/OurSetup";



export default async function Home() {


  return (
    <div className="">
      
      <Banner></Banner>
      <Signature></Signature>
      <OurSetup></OurSetup>
      <Slider ></Slider>      
      <FoodCart></FoodCart>
      <FoodCartAll></FoodCartAll>
      
    </div>
  );
}

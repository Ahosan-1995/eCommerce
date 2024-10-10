import Banner from "@/components/Banner";
import Signature from "@/components/Signature";
import Slider from "@/components/Slider";
import Slider2 from "@/components/Slider2";
import FoodCartAll from "@/fooditems/FoodCartAll";
import OurSetup from "@/fooditems/OurSetup";



export default async function Home() {


  return (
    <div className="">
      
      <Banner></Banner>
      <Signature></Signature>
      <OurSetup></OurSetup>
      <Slider ></Slider>
      <Slider2       
      <FoodCartAll></FoodCartAll>
      
    </div>
  );
}

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      
      <Slider ></Slider>
      <Footer></Footer>
    </div>
  );
}

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Signature from "@/components/Signature";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      
      <Banner></Banner>
      <Signature></Signature>
      <Slider ></Slider>
      <Footer></Footer>
    </div>
  );
}

import Image from "next/image";
import NavBar from "./components/navBar";

import Carasoule from "./components/carasoule";
import Gpus from "./components/gpu";
import Qualities from "./components/qualities";
import PriceCalculator from "./components/priceCalculator";
import ContactUs from "./components/contactUs";
import HeroSection from "./components/heroSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="">
      <div className="container flex flex-col justify-center mx-auto px-8 gap-4">
        <NavBar />
        <HeroSection />
      </div>
      <Carasoule />
      <div className="container flex flex-col justify-center mx-auto p-8 gap-4">
        <Gpus />
        <Qualities />
        <PriceCalculator />
      </div>
      <div className="w-full bg-blue-100">
        <div className="container flex flex-col justify-center mx-auto p-8 gap-8">
          <ContactUs />
          <div className="border-b-2 border-gray-400"></div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

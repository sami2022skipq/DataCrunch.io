import Image from "next/image";

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
      <div className="container flex flex-col justify-center mx-auto px-16 gap-4">
        <HeroSection />
      </div>
      <div className="hidden md:block mt-4">
        <Carasoule />
      </div>
      <div className="container flex flex-col justify-center mx-auto p-8 gap-6 md:gap-14">
        <Gpus />
        <Qualities />
        <PriceCalculator />
      </div>
      <div className="w-full bg-[#f5f9f9]">
        <div className="container flex flex-col justify-center mx-auto p-8 gap-8">
          <ContactUs />
          <div className="border-b border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}

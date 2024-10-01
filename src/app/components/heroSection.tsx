import React from "react";
import invidia from "@/assets/nvedia1.webp";
import Image from "next/image";

function HeroSection() {
  return (
    <div className=" grid grid-cols-2">
      <div className="col-span-1 pt-12 flex flex-col gap-4 items-start">
        <div className=" max-w-md border border-gray-500 rounded-lg px-4 py-1 my-2 text-black font-medium">
          Utilizing 100% renewable energy
          <span className="underline text-[#707070] px-4">View more</span>
        </div>

        <div className="text-7xl font-bold">The ML Cloud</div>
        <div className="text-[#707070] text-lg">
          Premium dedicated GPU servers and clusters
        </div>
        <div className="text-[#707070] text-lg">Model inference services</div>
        <button className="px-4 py-2 bg-[#245866] rounded-lg text-white font-semibold ">
          Get Started
        </button>
        <div className=" text-[#707070]">Easy sign up . Pay as you go</div>
      </div>
      <div className="col-span-1 pt-12">
        <Image src={invidia} alt="Invidia" />
      </div>
    </div>
  );
}

export default HeroSection;

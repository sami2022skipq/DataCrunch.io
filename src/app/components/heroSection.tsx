import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import invidia from "@/assets/nvedia1.webp";
import { LuSprout } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className=" grid grid-cols-2">
      <div className="col-span-2 lg:col-span-1 pt-12 flex flex-col gap-4 md:gap-8 md:items-start max-md:items-center ">
        <div className="max-md:hidden flex space-x-2  max-w-md border border-gray-500 rounded-lg px-4 py-1 my-2 text-black font-medium">
          <span className="text-lg text-[#245866]">
            <LuSprout />
          </span>
          <span>Utilizing 100% renewable energy</span>
          <Link href="#" className="underline text-[#707070] px-4">
            View more
          </Link>
        </div>

        <div className=" text-4xl md:text-6xl font-bold">The ML Cloud</div>
        <div className="text-[#707070] md:text-lg font-semibold max-md:text-center">
          <p>Premium dedicated GPU servers and clusters</p>
          <p>Model inference services</p>
        </div>
        <button className="max-w-40 px-4 py-2 bg-[#245866] text-lg hover:bg-gray-500 transition duration-300 rounded-lg text-white font-semibold items-center ">
          <div className="flex items-center">
            <span>Get Started</span>

            <span className="ml-2">
              <FaArrowRight />
            </span>
          </div>
        </button>
        <div className=" text-[#707070]">Easy sign up . Pay as you go</div>
      </div>
      <div className=" hidden lg:block col-span-1 pt-12">
        <Image src={invidia} alt="Invidia" className="object-cover" />
      </div>
    </div>
  );
}

export default HeroSection;

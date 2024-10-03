"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import dataCrunchLogo from "@/assets/dataCrunchIO.svg";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-white w-full border-b border-gray-300">
      <nav className=" container mx-auto flex justify-between items-baseline- px-4 md:px-8 py-2 md:py-4 ">
        <Image
          src={dataCrunchLogo}
          alt="DataCrunch.io Logo"
          className="w-40 md:w-60 object-contain cursor-pointer"
        />

        <div className="hidden lg:flex space-x-6 text-[#707070] font-medium items-end  text-lg ">
          <Link href="#" className="hover:underline">
            GPU Cloud
          </Link>
          <Link href="#" className="hover:underline">
            Clusters
          </Link>
          <Link href="#" className="hover:underline">
            Inference
          </Link>
          <Link href="#" className="hover:underline">
            Blog
          </Link>
          <Link href="#" className="hover:underline">
            API
          </Link>
          <Link href="#" className="hover:underline">
            Docs
          </Link>
        </div>

        <div className=" flex justify-center space-x-4 font-semibold text-[#707070] max-lg:hidden lg:block">
          <Link href="#" className=" hover:text-gray-700">
            Login
          </Link>
          <Link
            href="#"
            className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-teal-900"
          >
            Sign up
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl lg:hidden focus:outline-none z-60"
        >
          <IoMdMenu />
        </button>
        {/* Mobile Dropdown Menu */}
      </nav>
      {/* {isOpen && ( */}
      <div
        className={`lg:hidden overflow-hidden  transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 container mx-auto justify-center md:justify-start font-medium text-[#707070] py-2 px-4 md:px-8">
          <Link href="#" className="hover:underline">
            GPU Cloud
          </Link>
          <Link href="#" className="hover:underline">
            Clusters
          </Link>
          <Link href="#" className="hover:underline">
            Inference
          </Link>
          <Link href="#" className="hover:underline">
            Blog
          </Link>
          <Link href="#" className="hover:underline">
            API
          </Link>
          <Link href="#" className="hover:underline">
            Docs
          </Link>

          <div className="mx-auto items-center space-x-4 font-semibold text-[#707070]">
            <Link href="#" className=" hover:text-gray-700">
              Login
            </Link>
            <Link
              href="#"
              className="px-4 py-2 bg-teal-800 text-white rounded-lg hover:bg-[#245866]"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

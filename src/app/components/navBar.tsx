import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <div className=" flex justify-center items-center gap-4 h-12 w-full bg-[#1A1A20]">
        <div className=" text-gray-300">
        Available Soon
        </div>
        <div className="text-lg text-white">
        NVIDIA® H200 clusters
        </div>
        <div className="text-gray-300 underline">
        Pre-order-now
        </div>
      </div>
      <nav className="flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="DataCrunch.io Logo" className="w-6 h-6" />
          <span className="text-xl font-bold text-teal-800">DataCrunch.io</span>
        </div>

        <div className="hidden md:flex space-x-6 text-[#707070] font-medium  text-lg  ">
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

        <div className="flex items-center space-x-4 font-semibold text-[#707070]">
          <Link href="#" className=" hover:text-gray-700">
            Login
          </Link>
          <Link
            href="#"
            className="px-4 py-2 bg-teal-800 text-white rounded-xl hover:bg-teal-900"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  );
}

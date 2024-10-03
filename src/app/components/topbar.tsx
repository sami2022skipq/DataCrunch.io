import Link from "next/link";
import { TbServerCog } from "react-icons/tb";

function Topbar() {
  return (
    <div  className=" flex flex-col md:flex-row justify-center items-center p-2 gap-2 w-full bg-[#1A1A20]">
        <div className=" text-gray-300">Available Soon</div>
        <div className=" flex space-x-2 items-center ">
          <span className="text-xl text-teal-600">
            <TbServerCog />
          </span>
          <span className="md:text-lg text-white">
            NVIDIA<span className="align-super text-xs">®</span> H200 clusters
          </span>
        </div>
        <Link href="#" className="text-gray-300 underline ">
          Pre-order-now
        </Link>
      </div>
  )
}

export default Topbar
import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
import { RiShieldStarLine } from "react-icons/ri";

function Qualities() {
  const qualities = [
    {
      icon: "",
      heading: "Fast",
      text: "Dedicated hardware for max speed and security",
    },
    {
      heading: "Productive",
      text: "Start, stop, hibernate instantly via the dashboard or API",
    },
    {
      heading: "Expert support",
      text: "Engineers are available via chat on the dashboard",
    },
    { heading: "Protected", text: "DataCrunch is ISO27001 certified" },
  ];

  return (
    <div>
      <div className=" grid grid-cols-4 gap-y-4">
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col  text-center gap-4 px-8 md:border-r border-gray-300">
          <div className="text-5xl h-20 mx-auto text-[#4b7a8a]">
            <BsLightningCharge />
          </div>
          <h3 className="text-2xl font-semibold">Fast</h3>
          <p className="  text-[#707070] text-lg">
            Dedicated hardware for max speed and security
          </p>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col  text-center gap-4 px-8 lg:border-r border-gray-300">
          <div className="text-5xl h-20 mx-auto text-[#4b7a8a]">
            <MdOutlineRocketLaunch />
          </div>
          <h3 className="text-2xl font-semibold">Productive</h3>
          <p className="  text-[#707070] text-lg">
            Start, stop, hibernate instantly via the dashboard or API
          </p>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col  text-center gap-4 px-8 md:border-r border-gray-300">
          <div className="text-5xl h-20 mx-auto text-[#4b7a8a]">
            <FaHeadset />
          </div>
          <h3 className="text-2xl font-semibold">Expert support</h3>
          <p className="  text-[#707070] text-lg">
            Engineers are available via chat on the dashboard
          </p>
        </div>
        <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col  text-center gap-4 px-8 ">
          <div className="text-5xl h-20 mx-auto text-[#4b7a8a]">
            <RiShieldStarLine />
          </div>
          <h3 className="text-2xl font-semibold">Protected</h3>
          <p className="  text-[#707070] text-lg">
            DataCrunch is ISO27001 certified
          </p>
        </div>
      </div>
    </div>
  );
}

export default Qualities;

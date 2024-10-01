import React from "react";

function Qualities() {
  const qualities = [
    { icon:"",
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
        {qualities.map((item) => (
          <div className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col justify-center text-center gap-4 px-8 border-r-2 border-gray-400">
            <div className="">{item?.icon}</div>
            <div className="text-2xl font-semibold">{item?.heading}</div>
            <div className="  text-[#707070] text-xl">{item?.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qualities;

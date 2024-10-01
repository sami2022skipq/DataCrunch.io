import React from "react";

function PriceCalculator() {
  return (
    <div
      className="grid grid-cols-2 mb-8 gap-4
    "
    >
      <div className="col-span-2 lg:col-span-1 rounded-lg bg-blue-100 h-72"></div>
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-4 items-start justify-center">
        <p className="text-[#245866] text-lg font-semibold">
          All infrastructure powered by renewable energy
        </p>
        <h1 className="text-5xl font-semibold">High-end GPU instances</h1>
        <div className="flex flex-col gap-1">
          <p className="text-[#707070] text-lg font-semibold">
            Order and access your GPU in just minutes via our intuitive
            dashboard or API.
          </p>
          <p className="text-[#707070] text-lg font-semibold">
            Your machine is automatically setup according to your preferences
            and you receive access in a few minutes.
          </p>
        </div>
        <div className="flex gap-4 text-xl font-semibold">
          <button className="px-4 py-2 bg-[#245866] text-white rounded-lg transition duration-300 hover:bg-teal-900">
            Sign up
          </button>
          <button className="px-4 py-2 text-[#245866] hover:text-gray-400 transition duration-300 rounded-lg border-2 ">
            View all products
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceCalculator;

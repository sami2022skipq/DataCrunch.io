"use client";
import { SlGraph } from "react-icons/sl";
import Link from "next/link";
import React, { useState } from "react";

function PriceCalculator() {
  const [gpu] = useState([
    {
      name: "H100 SXM5 80GB",
      CPUs: 30,
      RAM: 120,
      GPU: 80,
      bestfor: [
        "Gargantuan ML models",
        "Multi-GPU training",
        "FP64 HPC",
        "NVLINK",
      ],
      "price-per-houre": 3.5,
      gups: [1, 2, 4, 8],
    },
    {
      name: "A100 SXM4 80GB",
      CPUs: 22,
      RAM: 120,
      GPU: 80,
      bestfor: [
        "Gargantuan ML models",
        "Multi-GPU training",
        "FP64 calculations",
        "NVLINK",
      ],
      "price-per-houre": 1.89,
      gups: [1, 2, 4, 8],
    },
    {
      name: "A100 SXM4 40GB",
      CPUs: 22,
      RAM: 120,
      GPU: 80,
      bestfor: [
        "Gargantuan ML models",
        "Multi-GPU training",
        "FP64 calculations",
        "NVLINK",
      ],
      "price-per-houre": 1.29,
      gups: [1, 2, 4, 8],
    },
    {
      name: "NVidia L40S",
      CPUs: 20,
      RAM: 60,
      GPU: 48,
      bestfor: [
        "Large ML models",
        "32-16-8 bit operations",
        "Single-GPU training",
      ],
      "price-per-houre": 1.36,
    },
    {
      name: "NVidia RTX6000 Ada 48GB",
      CPUs: 10,
      RAM: 60,
      GPU: 48,
      bestfor: [
        "Large ML models",
        "32-16-8 bit operations",
        "Single-GPU training",
      ],
      "price-per-houre": 1.19,
      gups: [1, 2, 4, 8],
    },
    {
      name: "NVidia RTX A6000 48GB",
      CPUs: 10,
      RAM: 60,
      GPU: 48,
      bestfor: ["Large ML models", "FP32 calculations", "Single-GPU training"],
      "price-per-houre": 1.01,
      gups: [1, 2, 4, 8],
    },
    {
      name: "NVidia Tesla V100 16GB",
      CPUs: 6,
      RAM: 23,
      GPU: 16,
      bestfor: [
        "Small ML models",
        "Multi-GPU training",
        "FP64 calculations",
        "NVLINK",
      ],
      "price-per-houre": 0.39,
      gups: [1, 2, 4, 8],
    },
    {
      name: "CPU Node",
      CPUs: 1,
      RAM: 4,
      GPU: 0,
      bestfor: ["Running services", "API server", "Data transfers"],
      "price-per-houre": 0.04,
      gups: [4, 8, 16, 32, 64, 96, 120, 180, 360],
    },
  ]);
  const [selectedModel, setselectedModel] = useState(gpu[0]);
  const [selectedButton, setSelectedButton] = useState(1);
  const [pricingType, setPricingType] = useState("on-demand");
  // handeling selection
  const handleSelectChange = (e: any) => {
    const selectedName = e.target.value;
    const selectedRecord = gpu.find((g) => g.name === selectedName); // Find the record based on selected name
    //@ts-ignore'
    setselectedModel(selectedRecord); // Update the state with the selected record
  };

  const handlePricingTypeChange = (type: any) => {
    setPricingType(type);
  };
  const handleGpuCountChange = (count: any) => {
    setSelectedButton(count);
  };

  const getPricing = () => {
    let basePrice = selectedModel["price-per-houre"];
    switch (pricingType) {
      case "on-demand":
        return basePrice;
      case "daily":
        return (basePrice * 24).toFixed(2); // Assuming 24 hours for a day
      case "monthly":
        return (basePrice * 24 * 30).toFixed(2); // 30 days
      case "yearly":
        return (basePrice * 24 * 365).toFixed(2); // 365 days
      default:
        return basePrice;
    }
  };

  return (
    <div className="col-span-2 lg:col-span-1 rounded-lg gap-4 bg-[#f5f9f9] p-8">
      <h3 className="text-[#353535] font-semibold text-center mb-4">
        Price Calculator
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div
          className={` ${
            selectedModel.name === "CPU Node"
              ? "col-span-2"
              : "col-span-2 md:col-span-1"
          } `}
        >
          <div className="mb-4">
            <label
              className="block text-[#707070] text-sm font-bold mb-2"
              htmlFor="option"
            >
              GPU models
            </label>
            <select
              onChange={handleSelectChange}
              id="option"
              className="px-2 py-1 text-[#707070] bg-white border border-gray-300 rounded-md shadow-sm  "
            >
              {gpu.map((option) => (
                <option key={option.name} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-[#707070] text-sm font-bold mb-2"
              htmlFor="option"
            >
              Number of GPUs
            </label>
            <div className=" w-full felx space-x-2">
              {selectedModel.gups?.map((num) => (
                <button
                  key={num}
                  onClick={() => setSelectedButton(num)}
                  className={`px-3 py-1 bg-white rounded-lg
                    ${
                      selectedButton === num
                        ? "border-2 border-gray-950"
                        : "border"
                    }
                    border-gray-400 focus:border-2 focus:border-gray-600`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Gpu output */}
        <div className="col-span-2 md:col-span-1 w-full h-28 bg-white rounded-lg px-4 py-2 flex flex-col">
          <span className="text-sm font-semibold mb-2">{`${selectedButton}x ${selectedModel.name}`}</span>
          <span className="text-sm font-medium text-[#707070]">{`${
            selectedButton * selectedModel.CPUs
          } CPUs`}</span>
          <span className="text-sm font-medium text-[#707070]">{`${
            selectedButton * selectedModel.RAM
          } GB RAM`}</span>
          <span className="text-sm font-medium text-[#707070]">{`${
            selectedButton * selectedModel.GPU
          } GB GPU RAM`}</span>
        </div>
      </div>
      <div className="w-full border border-gray-300 my-3"></div>
      <div className="w-full flex flex-col gap-3">
        <label htmlFor="tags" className=" text-sm  font-medium">
          This Setup is best for:
        </label>
        <div className="">
          {selectedModel?.bestfor?.map((item) => (
            <button className=" text-xs px-2 py-1 border border-[#585858] rounded-lg mr-2 mb-1">
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* Price Section */}
      <div className="mt-4">
        {/* Pricing type selector (On-demand, daily, monthly, yearly) */}
        {/* <div> */}
          {/* <button onClick={() => handlePricingTypeChange("on-demand")}>
            On-demand
          </button>
          <button onClick={() => handlePricingTypeChange("daily")}>
            Daily
          </button>
          <button onClick={() => handlePricingTypeChange("monthly")}>
            Monthly
          </button>
          <button onClick={() => handlePricingTypeChange("yearly")}>
            Yearly
          </button>
        </div> */}

        <div>
          <h2 className=" my-4 text-4xl text-[#353535] text-center mx-auto font-semibold">{`$${getPricing()}/h`}</h2>
        </div>

        {/* Number of GPUs selection */}
        {/* <div className="flex space-x-2">
          {selectedModel.gups?.map((count) => (
            <button
              key={count}
              className={`${
                selectedButton === count
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => handleGpuCountChange(count)}
            >
              {count} GPUs
            </button>
          ))}
        </div> */}
        <div className="mx-auto border border-gray-300 px-2 py-1 rounded-lg flex space-x-2 justify-center">
          <span className="text-xl">
            <SlGraph />
          </span>
          <span>Save up to 49% with Dynamic Pricing</span>
          <Link href="#" className="underline hidden md:block">
            View more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PriceCalculator;

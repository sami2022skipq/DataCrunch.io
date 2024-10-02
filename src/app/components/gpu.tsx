import React from "react";

import gupinstance from "@/assets/gpu-instance.webp";
import clusters from "@/assets/cluster.webp";
import serverless from "@/assets/serverless.webp";
import h100 from "@/assets/h100cluster.webp";
import Image from "next/image";

function Gpus() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-3 lg:col-span-1  bg-gray-900 rounded-lg">
        <div className="p-8 flex flex-col gap-2 justify-center items-center">
          <div className="">
            <Image
              src={gupinstance}
              alt="GPU instance"
              className="max-h-44 object-scale-down"
            />
          </div>
          <div className=" text-white text-lg font-semibold">GPU Instances</div>
          <p
            className="text-gray-400 font-semibold
           text-center text-wrap"
          >
            On-demand and long-term instances on DataCrunch infrastructure
          </p>

          <button className="px-2 py-1 font-semibold bg-slate-500 rounded-lg transition duration-300 text-white hover:bg-slate-700 hover:text-gray-300">
            View more
          </button>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-1  bg-gray-900 rounded-lg">
        <div className="p-8 flex flex-col gap-2 justify-center items-center">
          <div className="">
            <Image
              src={clusters}
              alt="GPU Clusters"
              className="max-h-44 object-scale-down"
            />
          </div>
          <div className=" text-white text-lg font-semibold">GPU Clusters</div>
          <p
            className="text-gray-400 font-semibold
           text-center text-wrap"
          >
            Custom built GPU clusters, managed by DataCrunch with custom
            software stack
          </p>

          <button className="px-2 py-1 font-semibold bg-slate-500 rounded-lg transition duration-300 text-white hover:bg-slate-700 hover:text-gray-300">
            View more
          </button>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-1  bg-gray-900 rounded-lg">
        <div className="p-8 flex flex-col gap-2 justify-center items-center">
          <div className="">
            <Image
              src={serverless}
              alt="Serverless inference"
              className="max-h-44 object-scale-down"
            />
          </div>
          <div className=" text-white text-lg font-semibold">
            Serverless inference
          </div>
          <p
            className="text-gray-400 font-semibold
           text-center text-wrap"
          >
            Autoscaling and low-cost deployment for your models with zero setup
          </p>

          <button className="px-2 py-1 font-semibold bg-slate-500 rounded-lg transition duration-300 text-white hover:bg-slate-700 hover:text-gray-300">
            View more
          </button>
        </div>
      </div>
      <div className="col-span-3  bg-gray-900 rounded-lg">
        <div className="p-8 grid grid-cols-2  gap-2 justify-center items-center">
          <div className=" col-span-2 lg:col-span-1 ">
            <Image
              src={h100}
              alt="Serverless inference"
              className="object-scale-down mx-auto"
            />
          </div>
          <div className=" col-span-2 lg:col-span-1 flex flex-col justify-center max-lg:text-center max-lg:items-center lg:justify-start gap-4">
              <div className=" text-white text-xl font-semibold">
                H100 clusters
              </div>
              <div className=" text-white text-lg font-semibold mb-4">
                At the forefront of digital intelligence
              </div>
            <div className="flex flex-col justify-start text-gray-400  max-md:text-sm font-semibold gap-1 mb-2">
              <p>
                Our clusters exclusively use the NVIDIA H100 SXM5 80GB NVLINK
                modules. Contact us for more information.
              </p>
              <p>
                Via NVLINK, the H100 achieves a chip-to-chip interconnect
                bandwidth of 900GB/s and leverages a 3200gbit/s InfiniBand™
                interconnect.
              </p>
              <p>Contact us for more information.</p>
            </div>

            
            <button className="w-32 px-2 py-1 font-semibold bg-slate-500 rounded-lg transition duration-300 text-white hover:bg-slate-700 hover:text-gray-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gpus;

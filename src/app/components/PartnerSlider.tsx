import React from "react";
import Image from "next/image";

import soney from "@/assets/soney.svg";
import nex from "@/assets/nex.svg";
import korea from "@/assets/korea.svg";
import harvard from "@/assets/harvard.svg";
import nexx from "@/assets/nexx.svg";
import blackForest from "@/assets/black-forest.svg";
import freepik from "@/assets/freepik.svg";
import manifest from "@/assets/manifest.svg";
import mit from "@/assets/mit.svg";
import findable from "@/assets/findable.svg";

const PartnerSlider = () => {
  const partners = [
    {
      name: "NEX",
      srcColor: nexx,
    },
    {
      name: "Soney",
      srcColor: soney,
    },
    {
      name: "Harvard",
      srcColor: harvard,
    },
    {
      name: "NEC",
      srcColor: nex,
    },
    {
      name: "Korea",
      srcColor: korea,
    },
    {
      name: "MIT",
      srcColor: mit,
    },
    {
      name: "Findable",
      srcColor: findable,
    },
    {
      name: "Black Forest Labs",
      srcColor: blackForest,
    },
    {
      name: "ManifestAI",
      srcColor: manifest,
    },
    // {
    //   name: "Freeipk",
    //   srcColor: freepik,
    // },
  ];

  return (
    <div className="overflow-hidden py-8">
      <div className="slider flex items-center space-x-12 animate-scroll ">
        {partners.map((partner) => (
          <div key={partner.name} className="group">
            <Image
              src={partner.srcColor}
              alt={partner.name}
              height={80}
              width={160}
              className="svg-icon transition h-[80px] duration-300 opacity-50 hover:filter-none hover:opacity-100 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerSlider;

"use client";

import React from "react";
import Image from "next/image";

const AProposVision: React.FC = () => {
  const karaba = require("../../public/apropos/karaba.png");

  return (
    <div className="mx-24 my-10">
      <div className="grid grid-cols-12 gap-10 my-6">
        <div className="col-span-6">
          <h2 className="text-3xl mb-7">
            OUR <span className="block">VISION</span>
          </h2>
          <div className="min-h-48 bg-vision_color  mb-40 rounded-3xl">
            <p className="p-5  leading-[55px]">
              Nous nous engageons à promouvoir la transparence, l'efficacité et
              l'impact durable dans toutes nos initiatives, tout en favorisant
              des partenariats solides et inclusifs.
            </p>
          </div>
          <div className="min-h-48 bg-vision_color mt-56 rounded-3xl">
            <p className="p-5 leading-[55px]">
              Nous nous engageons à promouvoir la transparence, l'efficacité et
              l'impact durable dans toutes nos initiatives, tout en favorisant
              des partenariats solides et inclusifs.
            </p>
          </div>
        </div>
        <div className="col-span-6">
          <p className="text-center text-3xl mb-12">
            Pour une Afrique des possibles
          </p>
          <Image
            src={karaba}
            height={100}
            width={500}
            alt="karaba et kirikou"
          />
        </div>
      </div>

      {/* Button Section (Centered Below Sections) */}
    </div>
  );
};

export default AProposVision;

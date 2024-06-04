"use client";

import React from "react";
import Image from "next/image";

const AProposNotreOasis = () => {
  const style = {
    fontFamily: "'Swanky and Moo Moo', cursive",
    lineHeight: "3",
  };

  return (
    <div className="h-screen grid grid-cols-12 gap-4 mx-24 my-10 mt-16">
      <div className="col-span-6 mx-auto">
        <h2 className="text-5xl mb-24">Notre Oasis</h2>
        <p className="text-6xl tracking-wider mb-28" style={style}>
          Pour une <span className="block">Afrique des</span> possibles
        </p>
        <button className="h-10 rounded-full bg-color_border_stats text-white text-base font-bold px-4 hover:bg-amber-500">
          Rejoignez-Nous
        </button>
      </div>
      <div className="col-span-6">
        <Image
          src="/apropos/femme_tambour.png"
          height={800}
          width={1000}
          alt="Femme tambour"
        />
      </div>
    </div>
  );
};

export default AProposNotreOasis;

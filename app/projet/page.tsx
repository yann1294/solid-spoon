"use client";

import React from "react";
import Projets from "@/components/projets/Projets";

const Page: React.FC = () => {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: "url('/motif_background.png')" }}
    >
      <Projets />
    </div>
  );
};

export default Page;

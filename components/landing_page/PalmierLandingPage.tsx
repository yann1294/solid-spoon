"use client";

import React from "react";
import PalmierLandingPage1 from "./PalmierLandingPage1";
import PalmierLandingPage2 from "./PalmierLandingPage2";
import PalmierLandingPage3 from "./PalmierLandingPage3";

const PalmierLandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <main className="">
        <PalmierLandingPage1 />
        <div style={{ height: "5vh" }} />
        <PalmierLandingPage2 />
        <div style={{ height: "5vh" }} />
        <PalmierLandingPage3 />
      </main>
    </div>

    /*
    <>
      <PalmierLandingPage1 />
      <PalmierLandingPage2 />
      <PalmierLandingPage3 />
    </> */
  );
};

export default PalmierLandingPage;

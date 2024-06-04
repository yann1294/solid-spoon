"use client";

import React from "react";
import Image from "next/image";

const PalmierLandingPage1: React.FC = () => {
  const img1 = require("../../public/image1.jpg");
  const background_image = require("../../public/motif_background.png");

  return (
    <section
      className="bg-cover h-screen grid grid-cols-12 gap-4"
      style={{ backgroundImage: "url('/motif_background.png')" }}
    >
      <div className=" col-span-5 ">
        <div style={{ flex: "1", backgroundColor: "", height: "45%" }}>
          {/* Content for the first inner div */}
          <p
            className="text-5xl text-justify text-pretty  font-bold  py-20 px-8 mt-10 mx-20 "
            style={{
              fontFamily: "'Swanky and Moo Moo', cursive",
              lineHeight: "1.3",
            }}
          >
            Partenaire du <span className="text-green-700"> changement</span>{" "}
            pour un impact durable{" "}
            <span className="text-green-700"> en Afrique</span>
          </p>
        </div>
        <div style={{ height: "15vh" }} />
        <div
          style={{
            flex: "1",
            backgroundColor: "",
            height: "25%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="px-1 py-1 rounded-full bg-white border-4 border-green-800 font-bold mr-2 hover:border-amber-500">
            <button className="h-10 rounded-full bg-green-800 text-white text-base font-bold px-4 hover:bg-amber-500">
              Rejoignez-Nous
            </button>
          </div>
          <div className="px-1 py-1 rounded-full bg-white border-4 border-amber-500 font-bold hover:border-green-800">
            <button className="h-10 rounded-full bg-amber-500 text-white text-base font-bold px-4 hover:bg-green-800">
              Faire Un Don
            </button>
          </div>
        </div>
      </div>
      <div className=" col-span-7 ">
        <div style={{ width: "790px" }}>
          <Image
            src="/imageFirst.png"
            height={800}
            width={1000}
            alt="Bonne maman"
          />
        </div>
      </div>
    </section>

    /*
    <div>
      <Image src={background_image} quality={100} alt="Background image" />
      <div className="max-w-7xl mx-auto px-4 py-2 flex">
        <div className="bg-navBarColor">
          <p
            className="text-4xl font-bold   items-center
                py-10 px-10 mt-20 mx-20
                space-x-10 leading-normal

                "
          >
            Partenaire du changement pour un impact durable en Afrique
          </p>
          <div className="hidden md:flex items-center justify-center">
            <div className="rounded-full border-2 border-green-500 p-5 mr-4 bg-white">
              <button
                className="bg-topBarColor text-white text-xs font-bold px-2 py-2
            hover:bg-transparent hover:border-green-500 border-2
            transition duration-300 hover:text-black p-2
            rounded-full"
              >
                REJOIGNEZ-NOUS
              </button>
            </div>
            <div className="rounded-full border-2 border-green-500 bg-white p-4">
              <button
                className="bg-rejoignezNous text-white text-base font-bold
            hover:bg-transparent hover:border-green-500 border-2
            transition duration-300 hover:text-black p-2
            rounded-full"
              >
                FAIRE UN DON
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src={img1} height={700} width={1000} alt="Bonne maman" />
        </div>
      </div>
    </div> */
  );
};

export default PalmierLandingPage1;

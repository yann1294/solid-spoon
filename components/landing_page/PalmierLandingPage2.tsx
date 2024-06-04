"use client";

import React, { useState } from "react";
import Image from "next/image";

const PalmierLandingPage2: React.FC = () => {
  const image_2_landing_page = require("../../public/image2_landing_page.jpg");
  const image_2_landing_page1 = require("../../public/MEREEE.png");
  const correctImage = require("../../public/BellesDames.jpg");
  const degradeeEnsemble = require("../../public/degradee ensemble.png");

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleButtonClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const buttonStyles = () => {
    return {
      width: "full",
      height: "64",
      transition: "all 0.3s ease",
    };
  };

  return (
    <section
      className=" bg-cover h-screen "
      style={{ backgroundImage: "url('/motif_background.png')" }}
    >
      <div
        className=" px-20   "
        style={{ backgroundImage: "url('/Rectangle585.png')" }}
      >
        <div style={{ maxWidth: "1200px" }}>
          <Image
            src="/MEREEE.png"
            layout="responsive"
            width={1000}
            height={10}
            alt="Bonne maman"
          />
        </div>
      </div>
      <div className=" mt-2.5  flex justify-center items-center ">
        <h2
          className=" text-5xl text-justify font-bold "
          style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}
        >
          Ensemble
        </h2>
      </div>
      <div className=" px-6 mt-6  bg-[#EDEDCB]/70 border border-transparent ring ring-blur ring-white">
        <div className="px-1 py-1  bg-white mt-4 ml-20 mr-0 rounded-full border-[6px] w-[994px] h-[75px] border-[#B9DEC3]">
          <div className="px-4 py-0.5 rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
            <p>
              Nous soutenons des projets innovants en Afrique, visant à
              améliorer les conditons de vies des populations locales tout en
              préservant et en régénérant les écosystèmes.{" "}
            </p>
          </div>
        </div>
        <div className="px-1 py-1 bg-white mt-3 ml-20 mr-2 rounded-full border-[6px] w-[994px] h-[75px] border-[#B9DEC3]">
          <div className="px-4 py-0.5 rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
            <p>
              Nous créons des projets de développement innovants, façonnons
              l’avenir et inspirons le changement positif pour un impact durable
              en Afrique.{" "}
            </p>
          </div>
        </div>
        <div className="px-1 py-1 bg-white mt-3 ml-20 mr-2 mb-8 rounded-full border-[6px] w-[994px] h-[75px] border-[#B9DEC3]">
          <div className="px-4 py-0.5 rounded-full bg-[#B9DEC3] w-[100%] h-[100%]">
            <p>
              Nous nous engageons à promouvoir la transparence, l’efficacité et
              l’impact durable dans toutes nos initiatives, tout en favorisant
              des partenariats solides et inclusifs.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
    /*
    <div className="bg-landing-page-2">
      <div
        className="bg-degradee-ensemble mx-auto max-w-[80rem] px-2
            flex justify-center items-center  align-items-start"
      >
        <div className="w-full h-full flex justify-center items-center mr-8">
          <div className="ml-24 mb-2 p-[24px]  rounded-full">
            <Image
              src={image_2_landing_page1}
              height={10}
              width={1000}
              alt="Bonnes mamans"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="rotate-0 tracking-[0.315rem] text-center font-bold leading-[2px] text-[45px] text-black mt-8 mb-4">
          Ensemble
        </h1>

        <div className="bg-bckg-btns-ensemble mt-10  space-y-8">
          <div className="rounded-full border-[4px] w-[962px] h-[73px] border-[#88e0a0]">
            <p
              className="bg-white rounded-full py-2 px-6  relative overflow-hidden"
              style={buttonStyles()}
            >
              <span className="absolute top-2 left-2 right-2 bottom-2 bg-[#B9DEC3] border-[24px] border-[#88e0a0] rounded-full"></span>
              <span className="relative z-10 text-lg">
                Nous soutenons des projets innovants en Afrique, visant à
                améliorer les conditons de vies des populations locales tout en
                préservant et en régénérant les écosystèmes
              </span>
            </p>
          </div>

          <div className="rounded-full border-[4px] w-[962px] h-[73px] border-[#88e0a0]">
            <p
              className="bg-white rounded-full py-2 px-6  relative overflow-hidden"
              style={buttonStyles()}
            >
              <span className="absolute top-2 left-2 right-2 bottom-2 bg-[#B9DEC3] border-[12px] border-[#88e0a0] rounded-full"></span>
              <span className="relative z-10 text-lg">
                Nous créons des projets de développement innovants, façonnons
                l’avenir et inspirons le changement positif pour un impact
                durable en Afrique
              </span>
            </p>
          </div>

          <div className="rounded-full border-[4px] w-[962px] h-[73px] border-[#88e0a0]">
            <p
              className="bg-white rounded-full py-2 px-6  relative overflow-hidden"
              style={buttonStyles()}
            >
              <span className="absolute top-2 left-2 right-2 bottom-2 bg-[#B9DEC3] border-[12px] border-[#88e0a0] rounded-full"></span>
              <span className="relative z-10 text-lg">
                Nous nous engageons à promouvoir la transparence, l’efficacité
                et l’impact durable dans toutes nos initiatives, tout en
                favorisant des partenariats solides et inclusifs
              </span>
            </p>
          </div>
        </div>
      </div>
    </div> */
  );
};

export default PalmierLandingPage2;

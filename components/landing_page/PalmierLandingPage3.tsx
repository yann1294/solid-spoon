import React from "react";
import Image from "next/image";

const PalmierLandingPage3: React.FC = () => {
  const fille_souriante = require("../../public/fille_sourire.png");
  const enfant_au_dos = require("../../public/femme_enfant_au_dos.png");

  return (
    <>
      <section className="mt-15">
        <div className="px-1 py-1 bg-white mt-12 ml-0 mr-0 rounded-full border-[2px] h-[94px] w-full border-[#B9DEC3]">
          <div className="h-full flex justify-center items-center space-x-40 rounded-full bg-[#B9DEC3] w-[100%]">
            <p className="text-xl">
              <span className="text-amber-500 font-bold text-2xl">200+</span>
              <br /> Enfants scolarisés
            </p>
            <p className="text-xl">
              <span className="text-amber-500 font-bold text-2xl">30+</span>
              <br /> Partenaires
            </p>
            <p className="text-xl">
              <span className="text-amber-500 font-bold text-2xl">4+</span>
              <br /> Pays
            </p>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className=" mt-0 mb-10 flex justify-center items-center ">
          <h2
            className=" text-5xl text-justify font-bold py-7 "
            style={{ fontFamily: "'Swanky and Moo Moo', cursive" }}
          >
            Donnez vie à nos projets
          </h2>
        </div>
        <div
          className="bg-cover bg-center h-screen w-full"
          style={{
            backgroundImage: "url('bckGdS3.png')",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex justify-evenly py-14 mt-2">
            <div
              className="max-w-sm m-2 overflow-hidden rounded shadow-lg"
              style={{ maxWidth: "420px" }}
            >
              <Image
                className="w-full"
                src="/fille_souriante.jpg"
                layout="responsive"
                width={1000}
                height={10}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 bg-[#EDEDCB]">
                <div className="mb-2 text-xl font-bold">Card title</div>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus, dolores?
                </p>
              </div>
            </div>
            <div
              className="max-w-sm m-2 overflow-hidden rounded shadow-lg"
              style={{ maxWidth: "420px" }}
            >
              <Image
                className="w-full"
                src="/enfant_au_dos.jpg"
                layout="responsive"
                width={1000}
                height={10}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 bg-[#EDEDCB]">
                <div className="mb-2 text-xl font-bold">Card title</div>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus, dolores?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

    /*
    <div className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex items-center justify-center space-x-40  mb-10 mt-10 bg-backgroundStatistic px-4 py-4 gap-x-6 rounded-full">
        <p className="items-center text-xl">
          <span className="block text-statisticLandingPage font-bold text-2xl">
            200+
          </span>{" "}
          Enfants scolarises
        </p>
        <p className="items-center text-xl">
          <span className="block text-statisticLandingPage font-bold text-2xl">
            30+
          </span>{" "}
          Partenaires
        </p>
        <p className="items-center text-xl">
          <span className="block text-statisticLandingPage font-bold text-2xl">
            4+
          </span>{" "}
          Pays
        </p>
      </div>
      <h2 className="flex items-center justify-center text-4xl mb-10 font-bold">
        Donnez vie à nos projets
      </h2>
      <div className="flex items-center justify-center mt-20 mb-20 ">
        <div className="mr-20">
          <Image
            src={fille_souriante}
            height={100}
            width={200}
            alt="Fille souriante"
            className="rounded-full border-x-8 border-[#447f4cc1]"
          />
        </div>
        <div>
          <Image
            src={enfant_au_dos}
            height={100}
            width={200}
            alt="Maman avec enfant au dos"
            className="rounded-full border-x-8 border-[#447f4cc1]"
          />
        </div>
      </div>
    </div> */
  );
};

export default PalmierLandingPage3;

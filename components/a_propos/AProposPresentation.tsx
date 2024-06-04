import React from "react";
import Image from "next/image";

const AProposPresentation: React.FC = () => {
  const video_fille_souriante = require("../../public/apropos/fille_s.jpg");
  //const video_fille = String(video_fille_souriante);

  const styleTitle = { fontFamily: "Swanky and Moo Moo" };
  return (
    <div className="grid grid-cols-12 gap-4 mx-24 mt-16 min-h-screen bgcolor_apropos_presentation">
      <div className="col-span-12 m-auto">
        <Image
          src={video_fille_souriante}
          height={100}
          width={1000}
          alt="video fille souriante"
        />
      </div>
      {/*
      <div className="col-span-4">
        <p className="text-center text-3xl mb-12"> Palmier, notre oasis</p>
        <div className="grid grid-cols-3 p-5">
          <div>
            <MdPeopleAlt style={style} />
            <p className="mt-10 text-xl">
              +100 <span className="block">Students</span>
            </p>
          </div>
          <div>
            <BiWorld style={style} />

            <p className="mt-10 text-xl">
              +77 <span className="block">Firms</span>
            </p>
          </div>
          <div>
            <IoMdBookmarks style={style} />
            <p className="mt-10 text-xl">
              +449 <span className="block">Stages</span>
            </p>
          </div>
          <div className="flex mt-24">
            <div className="mr-16 ml-16">
              <IoMdBookmarks style={style} />
              <p className="mt-10 text-xl">
                +190 <span className="block">center</span>
              </p>
            </div>
            <div>
              <MdPeopleAlt style={style} />
              <p className="mt-10 text-xl">
                +89 <span className="block">partenaires</span>
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Button Section (Centered Below Sections) */}

      <div className="col-span-12">
        <h2
          className="text-6xl text-center"
          style={{
            fontFamily: "'Swanky and Moo Moo', cursive",
            lineHeight: "1.3",
          }}
        >
          Palmier
        </h2>
        <p className="text-3xl text-center mt-4 p-2 mx-24">
          Joignez-vous à nous dans notre mission de soutien au développement en
          Afrique. Votre engagement est essentiel pour concrétiser des projets
          porteurs de transformations. Ensemble, façonnons un avenir plus
          prometteur.
        </p>
      </div>
    </div>
  );
};

export default AProposPresentation;

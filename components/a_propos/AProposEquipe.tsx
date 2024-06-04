import React from "react";

import Image from "next/image";

const AProposEquipe: React.FC = () => {
  const membre1 = require("../../public/apropos/arianna_equipe.png");
  const membre2 = require("../../public/apropos/arianna_equipe2.png");

  return (
    <div className="grid grid-cols-12 gap-4 mx-24 min-h-48 my-10 mt-16">
      <div className="col-span-12 text-center text-3xl">
        <h3>Je suis parce que nous sommes UBUNTU</h3>
      </div>
      <div className="col-span-3 p-5">
        <Image src={membre1} height={100} width={500} alt="karaba et kirikou" />
        <p className="bg-bgcolor_equipe mt-3 w-auto h-12"></p>
      </div>
      <div className="col-span-3 p-5">
        <Image src={membre2} height={100} width={500} alt="karaba et kirikou" />
        <p className="bg-bgcolor_equipe mt-3 w-auto h-12"></p>
      </div>

      <div className="col-span-3 p-5">
        <Image src={membre1} height={100} width={500} alt="karaba et kirikou" />
        <p className="bg-bgcolor_equipe mt-3 w-auto h-12"></p>
      </div>
      <div className="col-span-3 p-5">
        <Image src={membre2} height={100} width={500} alt="karaba et kirikou" />
        <p className="bg-bgcolor_equipe mt-3 w-auto h-12"></p>
      </div>
    </div>
  );
};

export default AProposEquipe;

import React from "react";

const AProposValeurs: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-4 mx-24 min-h-48 my-10 mt-16">
      <h3 className="col-span-12 text-center text-3xl">Nos valeurs</h3>
      <div className="bg-yellow-400 col-span-4 p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          ligula sit amet fringilla sagittis.
        </p>
      </div>
      <div className="bg-yellow-600 col-span-4 p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          ligula sit amet fringilla sagittis.
        </p>
      </div>

      <div className="bg-yellow-800 col-span-4 p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
          ligula sit amet fringilla sagittis.
        </p>
      </div>
    </div>
  );
};

export default AProposValeurs;

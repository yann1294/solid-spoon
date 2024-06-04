"use client";

import React from "react";
import Image from "next/image";

const ProjetDetaille = () => {
  const style_background = {
    backgroundImage: "url('/projets/background_intro.png')",

    height: 500,
    width: "100%",
  };

  const style_intro = {
    width: 400,
    height: 400,
  };

  return (
    <div
      className="
        h-screen
        grid
        grid-cols-12

        mx-24 my-10 mt-16
        "
    >
      <div
        className="col-span-12 ml-5 mt-10   bg-no-repeat bg-cover"
        style={style_background}
      >
        <div
          style={style_intro}
          className="h-60 w-80 mt-24 absolute right-24 rounded-t-lg"
        >
          <Image
            src="/projets/image_une_maman.jpg"
            layout="fill"
            alt="Bonne maman"
          />
        </div>
      </div>
      <div className="col-span-12 text-center">
        <h2 className="mt-16 font-bold text-2xl">Description</h2>
        <p className="p-5 pl-24 pr-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          condimentum eros. Aliquam erat volutpat. In eu odio vel turpis
          ullamcorper feugiat. Praesent tempor sed lorem eu faucibus. Donec sem
          risus, tincidunt a nunc at, rhoncus interdum nunc. Donec non tellus
          nec augue tristique ornare vel in leo.
        </p>
      </div>
    </div>
  );
};

export default ProjetDetaille;

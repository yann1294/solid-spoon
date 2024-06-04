"use client";

import React from "react";

const ProjetIntro = () => {
  return (
    <div
      className="bg-green-100

            grid
            grid-cols-12
            mx-24 my-10 mt-16
            p-3
            "
    >
      <div
        className="col-span-12"
        style={{
          backgroundImage: "url('/projets/filles_discussions2.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "400px",
        }}
      >
        <p className="text-5xl mt-36 ml-24 text-center text-white font-bold">
          Save the children
          <span className="block mt-4">Invest in our Future generation</span>
        </p>
      </div>
      <div className="col-span-12 text-center py-1.5 mt-8">
        <h2 className="font-bold mb-8 text-2xl">
          Des projets sur toute l'Afrique pour le bien de tous
        </h2>
        <p className="p-5 pl-24 pr-24 leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
          condimentum eros. Aliquam erat volutpat. In eu odio vel turpis
          ullamcorper feugiat. Praesent tempor sed lorem eu faucibus. Donec sem
          risus, tincidunt a nunc at, rhoncus interdum nunc. Donec non tellus
          nec augue tristique ornare vel in leo. Nunc vel enim libero. Proin non
          ipsum in metus viverra blandit. Fusce eget erat mi. Sed tincidunt sem
          velit, sit amet accumsan odio porta at. Sed posuere ipsum vel rhoncus
          viverra. Praesent sodales, dolor eu gravida ornare, diam urna suscipit
          felis, ut mollis libero mi et ex.
        </p>
        <button
          type="button"
          className="h-10 rounded-full bg-amber-500
               text-white
               text-base
               font-bold
               py-2 px-4
               gap-x-2
               inline-flex
               hover:bg-green-800"
        >
          LIRE PLUS
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjetIntro;

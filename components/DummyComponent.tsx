"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import axios from "axios";

import type { InferGetStaticPropsType, GetStaticProps } from "next";

export const getStaticProps = (async (context: any) => {
  const res = await fetch("http://127.0.0.1:1337/api/projects?populate=*");
  console.log(res);
  const data = await res.json();
  console.log(data);
  return { props: { data } };
}) satisfies GetStaticProps<{
  data: any;
}>;

const DummyComponent = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);

  return (
    <div>
      <h2>What is wrong here !!! {data}</h2>
      <h1>TEST</h1>
    </div>
  );
};

export default DummyComponent;

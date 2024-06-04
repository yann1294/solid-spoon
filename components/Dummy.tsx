import React from "react";
import axios from "axios";
import DummyComponent from "./DummyComponent";
import Image from "next/image";

import { imageReducer } from "./utils";

// export async function getStaticProps() {
//   const res = await fetch("https://victorious-presence-b58d5caead.strapiapp.com/api/projects?populate=*");
//   const data = await res.json();
//   return { props: { data } };
// }

async function getData() {
  // Get the API token from environment variables
  const apiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  // Check if the token is available
  if (!apiToken) {
    throw new Error('API token is not defined in the environment variables');
  }

  // Make the fetch request with the Authorization header
  const res = await fetch("https://victorious-presence-b58d5caead.strapiapp.com/api/projects?populate=*", {
    headers: {
      'Authorization': `Bearer ${apiToken}`
    }
  });

  // Check if the response is successful
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // Parse and return the JSON data
  return await res.json();
}


async function Dummy() {
  const results = await getData();
  //console.log(results.data[0].attributes.Title);
  //console.log(results.data[1].attributes.cover.data.attributes.name);
  var image_api = "https://victorious-presence-b58d5caead.strapiapp.com";
  const image =
    image_api + results.data[0].attributes.cover.data.attributes.url;

  const imag = image.toString();
  //console.log("Url image ", image);

  const imageR = imageReducer(results.data[0].attributes.cover);
  const source = imageR.url;
  //console.log(source);

  return (
    <div>
      <h1>Projects</h1>
      <p>{results.data[1].attributes.Title}</p>
      <p>{results.data[0].attributes.Title}</p>
      <Image src={source} height={800} width={1000} alt="Bonne maman" />
      {/*<Image src={source} height={800} width={1000} alt="Bonne maman" />*/}
    </div>
  );
}

export default Dummy;

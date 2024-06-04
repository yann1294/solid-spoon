const assetsBaseUrl = process.env.STRAPI_ASSETS_BASE_URL;

export const imageReducer = (imageField: any) => {
  const fields = imageField.data.attributes;

  return {
    url: `${assetsBaseUrl}${fields.url}`,
    height: fields.height,
    width: fields.width,
    contentType: fields.mime,
  };
};

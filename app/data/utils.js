// function to transform the data from the response into an array 
//   of the "attribute" items as objects containing their ids
export function formatStrapiResponseData(responseJson) {
  return responseJson.data.map((item) => ({
    ...item.attributes,
    id: item.id,
  }));
}

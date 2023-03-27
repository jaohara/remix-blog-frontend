import apiRoute from "./api";

import { formatStrapiResponseData } from "./utils";

export async function getPosts() {
  const postsRoute = `${apiRoute}/posts`;

  console.log(`getPosts: attempting to fetch from ${postsRoute}...`);

  const postsData = fetch(`${apiRoute}/posts`)
    .then((res) => res.json())
    .then((json) => {
      console.log("getPosts: response received: ", json);
      return formatStrapiResponseData(json);
    })
    .catch((err) => {
      console.error("getPosts: error fetching posts: ", err);
    });

  return postsData;
}

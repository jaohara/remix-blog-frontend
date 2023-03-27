import { useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import { getPosts } from "../data/posts";

export async function loader() {
  const posts = await getPosts();
  return posts;
}

export default function Index() {
  const posts = useLoaderData();

  useEffect(() => {
    console.log("Index: posts changed: ", posts);
  }, [posts])

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>

      </ul>
    </div>
  );
}

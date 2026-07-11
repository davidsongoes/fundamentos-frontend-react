import Posts from "@/app/components/aula-3/Posts";
import { Suspense } from "react";

export default function Page() {
  const getPosts = async () => {
    const data = await fetch("https://api.vercel.app/blog");
    const posts = await data.json();
    return posts;
  };

  const posts = getPosts();

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Posts posts={posts} />
    </Suspense>
  );
}

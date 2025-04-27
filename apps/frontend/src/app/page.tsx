import { Posts } from "@/components/Posts";
import { getPosts } from "@/lib/actions/postActions";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Posts posts={posts} />
    </main>
  );
}

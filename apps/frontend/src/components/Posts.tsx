import { Post } from "@/lib/types/modelTypes";
import Image from "next/image";
import Link from "next/link";

export const Posts = (props: { posts: Post[] }) => {
  return (
    <section className="flex flex-col gap-4 my-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-10">Posts</h2>

        {/* posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {props.posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <div className="relative w-full h-40 rounded-none overflow-hidden bg-white mb-4">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-full object-cover rounded-none"
                  fill
                />
              </div>

              <div className="px-4 mb-4 flex flex-col">
                <span className="text-xs text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
                <h3 className="text-lg font-bold mb-3">
                  {post.title.slice(0, 20)}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {post.content.slice(0, 100)}...
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs text-indigo-500 underline justify-self-end mt-auto uppercase font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

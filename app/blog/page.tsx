import { BlogList } from "./list";
import { blog, getPostsMetadata } from "@/lib/source";

export default async function Page() {
  const posts = await getPostsMetadata(blog.getPages());

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Blog</h1>
      <BlogList posts={posts} />
    </section>
  );
}

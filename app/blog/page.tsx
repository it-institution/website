import { Suspense } from "react";
import { BlogList, BlogListFallback } from "./list";

// import { BlogSearch, BlogSearchFallback } from "./search";
import { createLoader, parseAsString, SearchParams } from "nuqs/server";
import { blog, getPostsMetadata } from "@/lib/source";

const blogSearchParams = {
  q: parseAsString.withDefault(""),
};

const loadSearchParams = createLoader(blogSearchParams);

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q: query } = await loadSearchParams(searchParams);

  const posts = await getPostsMetadata(blog.getPages());

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Blog</h1>
      <Suspense fallback={<BlogListFallback posts={posts} />}>
        <BlogList posts={posts} />
      </Suspense>
    </section>
  );
}

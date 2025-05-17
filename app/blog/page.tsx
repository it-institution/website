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

  // TODO: FIXME
  // const locale = "ko";

  const posts = getPostsMetadata(blog.getPages());

  return (
    <section>
      <Suspense fallback={<BlogListFallback posts={posts} />}>
        <BlogList posts={posts} />
      </Suspense>
    </section>
  );
}

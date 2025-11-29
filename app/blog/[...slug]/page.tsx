import { Callout } from "fumadocs-ui/components/callout";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody } from "fumadocs-ui/page";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blog, getPostMetadata } from "@/lib/source";
import { cn, formatDateLong } from "@/lib/utils";

export async function generateStaticParams() {
  return blog.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string[] }>;
}) {
  const { locale, slug } = await params;
  const page = blog.getPage(slug, locale);
  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const post = blog.getPage(slug) as
    | import("@/lib/source").BlogPost
    | undefined;
  const posts = blog.getPages() as import("@/lib/source").BlogPost[];

  posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  if (!post) {
    notFound();
  }

  const MDX = post.data.body;

  const postMetadata = getPostMetadata(post);

  type PostWithNavigation = (typeof posts)[0] & {
    previous: (typeof posts)[0] | null;
    next: (typeof posts)[0] | null;
  };

  const postsIndex = posts.reduce<Record<string, PostWithNavigation>>(
    (acc, blogPost, index) => {
      acc[blogPost.slugs.join("/")] = {
        ...blogPost,
        previous: posts[index - 1] || null,
        next: posts[index + 1] || null,
      };
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-white pt-32 pb-12 font-sans text-black selection:bg-[#0070f3] selection:text-white">
      <div className="relative mx-auto min-h-[calc(100vh-10rem)] max-w-5xl border border-neutral-200 border-solid px-4">
        {/* Background Grid Layer (Lines) - Simplified to just the outer box (handled by container border) or just 2 lines if requested. 
            User said "Grid vertical lines 2 only, exactly general rectangle form". 
            The container already has `border border-solid`. 
            If I remove the internal lines here, we just have the outer box. 
        */}
        <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,768px)_1fr]">
          {/* Removing internal borders to achieve "General Rectangle" with only 2 vertical lines (the outer ones) */}
          <div className="hidden h-full lg:block" />
          <div className="h-full" />
          <div className="hidden h-full lg:block" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,768px)_1fr]">
          <div className="hidden lg:block" /> {/* Left Spacer */}
          {/* Center Column Content */}
          <div className="flex flex-col px-6 py-12 lg:px-12">
            {/* Back Link - Top Center of the Grid */}
            <div className="mb-16 flex justify-center">
              <Link
                className="inline-flex items-center gap-2 font-medium text-neutral-500 text-sm transition-colors hover:text-black"
                href="/blog"
              >
                <svg
                  aria-label="Back to blog"
                  fill="none"
                  height="16"
                  role="img"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                Blog
              </Link>
            </div>

            {/* Article Header */}
            <header className="mb-16 text-center">
              <h1 className="mb-8 font-bold text-[32px] text-black leading-[1.1] tracking-tighter">
                <Link
                  className="text-black no-underline decoration-none"
                  href={post.url}
                  style={{ textDecoration: "none" }}
                >
                  {post.data.title}
                </Link>
              </h1>

              {/* Author Profile */}
              <div className="mb-8 flex justify-center">
                <Link
                  className="group flex flex-col items-center gap-2"
                  href={postMetadata.author.githubUrl || "#"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    alt={postMetadata.author.nickname ?? "author avatar"}
                    className="rounded-full border border-neutral-200"
                    height={24}
                    src={postMetadata.author.avatarUrl || "/favicon.ico"}
                    width={24}
                  />
                  <span className="font-medium text-neutral-600 text-sm opacity-0 transition-opacity group-hover:opacity-100">
                    {postMetadata.author.name}
                  </span>
                </Link>
              </div>

              {/* Metadata Row */}
              <div className="flex items-center justify-between border-neutral-100 border-t pt-6 font-medium text-neutral-500 text-sm">
                <div className="flex items-center gap-6">
                  {/* Read Time */}
                  <div className="flex items-center gap-2">
                    <svg
                      aria-label="Read time"
                      fill="none"
                      height="16"
                      role="img"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>4 min read</span>
                  </div>

                  {/* Copy URL */}
                  <button
                    className="flex cursor-pointer items-center gap-2 text-blue-600 hover:underline"
                    type="button"
                  >
                    <svg
                      aria-label="Copy URL"
                      fill="none"
                      height="16"
                      role="img"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                    <span>Copy URL</span>
                  </button>
                </div>

                {/* Date */}
                <time dateTime={new Date(post.data.date).toISOString()}>
                  {formatDateLong(post.data.date)}
                </time>
              </div>
            </header>

            {/* Article Content */}
            <DocsBody className="prose prose-neutral prose-lg max-w-none prose-img:rounded-lg prose-pre:border prose-pre:border-neutral-200 prose-code:bg-transparent prose-pre:bg-neutral-100 prose-code:font-normal prose-headings:font-bold prose-strong:font-semibold prose-code:text-pink-600 prose-headings:text-black prose-p:text-neutral-800 prose-pre:text-black prose-strong:text-black prose-p:leading-7 prose-headings:tracking-tight prose-a:no-underline prose-headings:no-underline prose-code:before:content-[''] prose-code:after:content-[''] hover:prose-a:underline [&_h1_a]:no-underline hover:[&_h1_a]:no-underline [&_h2_a]:no-underline hover:[&_h2_a]:no-underline [&_h3_a]:no-underline hover:[&_h3_a]:no-underline [&_h4_a]:no-underline hover:[&_h4_a]:no-underline [&_h5_a]:no-underline hover:[&_h5_a]:no-underline [&_h6_a]:no-underline hover:[&_h6_a]:no-underline">
              <MDX
                components={{
                  ...defaultMdxComponents,
                  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
                    <Image
                      {...(props as React.ComponentProps<typeof Image>)}
                      alt={props.alt || "image"}
                      className="rounded-lg border border-neutral-200"
                      src={(props.src as string) || ""}
                    />
                  ),
                  Tab,
                  Tabs,
                  Callout,
                  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
                    const { href, children, ...rest } = props;
                    const isExternal = href?.startsWith("http");
                    return (
                      <Link
                        className={cn(
                          "no-underline hover:underline",
                          isExternal
                            ? "text-blue-600 decoration-blue-600"
                            : "text-black"
                        )}
                        href={href || "#"}
                        {...rest}
                      >
                        {children}
                      </Link>
                    );
                  },
                }}
              />
            </DocsBody>

            {/* Navigation */}
            <nav className="mt-24 border-neutral-200 border-t border-solid pt-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {postsIndex[post.slugs.join("/")].previous ? (
                  <Link
                    className="group block"
                    href={`${postsIndex[post.slugs.join("/")].previous?.url}`}
                  >
                    <div className="mb-2 font-medium text-neutral-500 text-sm transition-colors group-hover:text-black">
                      ← Previous
                    </div>
                    <div className="font-bold text-black text-lg decoration-2 underline-offset-2 group-hover:underline">
                      {postsIndex[post.slugs.join("/")].previous?.data.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {postsIndex[post.slugs.join("/")].next ? (
                  <Link
                    className="group block text-right"
                    href={`${postsIndex[post.slugs.join("/")].next?.url}`}
                  >
                    <div className="mb-2 font-medium text-neutral-500 text-sm transition-colors group-hover:text-black">
                      Next →
                    </div>
                    <div className="font-bold text-black text-lg decoration-2 underline-offset-2 group-hover:underline">
                      {postsIndex[post.slugs.join("/")].next?.data.title}
                    </div>
                  </Link>
                ) : null}
              </div>
            </nav>
          </div>
          <div className="hidden lg:block" /> {/* Right Spacer */}
        </div>
      </div>
    </div>
  );
}

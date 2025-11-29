import { blog, getPostMetadata } from "@/lib/source";

import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody } from "fumadocs-ui/page";
import { cn, formatDateLong } from "@/lib/utils";
import Link from "next/link";

import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Callout } from "fumadocs-ui/components/callout";
import Image from "next/image";

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
  if (!page) notFound();

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

  const post = blog.getPage(slug) as import("@/lib/source").BlogPost | undefined;
  const posts = blog.getPages() as Array<import("@/lib/source").BlogPost>;

  posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  if (!post) notFound();

  const MDX = post.data.body;

  const postMetadata = getPostMetadata(post);

  type PostWithNavigation = (typeof posts)[0] & {
    previous: (typeof posts)[0] | null;
    next: (typeof posts)[0] | null;
  };

  const postsIndex = posts.reduce<Record<string, PostWithNavigation>>(
    (acc, post, index) => {
      acc[post.slugs.join("/")] = {
        ...post,
        previous: posts[index - 1] || null,
        next: posts[index + 1] || null,
      };
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#0070f3] selection:text-white pt-32 pb-12 px-4">
      <div className="max-w-[1200px] mx-auto relative border border-solid border-neutral-200 min-h-[calc(100vh-10rem)]">

        {/* Background Grid Layer (Lines) - Simplified to just the outer box (handled by container border) or just 2 lines if requested. 
            User said "Grid vertical lines 2 only, exactly general rectangle form". 
            The container already has `border border-solid`. 
            If I remove the internal lines here, we just have the outer box. 
        */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,768px)_1fr] pointer-events-none z-0">
          {/* Removing internal borders to achieve "General Rectangle" with only 2 vertical lines (the outer ones) */}
          <div className="hidden lg:block h-full" />
          <div className="h-full" />
          <div className="hidden lg:block h-full" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,768px)_1fr]">
          <div className="hidden lg:block" /> {/* Left Spacer */}

          {/* Center Column Content */}
          <div className="px-6 py-12 lg:px-12 flex flex-col">

            {/* Back Link - Top Center of the Grid */}
            <div className="flex justify-center mb-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-black transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66667 12.6667L2 8.00004M2 8.00004L6.66667 3.33337M2 8.00004L14 8.00004"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Blog
              </Link>
            </div>

            {/* Article Header */}
            <header className="mb-16 text-center">
              <h1 className="text-[32px] font-bold tracking-tighter text-black leading-[1.1] mb-8">
                {post.data.title}
              </h1>

              {/* Author Profile */}
              <div className="flex justify-center mb-8">
                <Link
                  href={postMetadata.author.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <Image
                    src={postMetadata.author.avatarUrl || "/favicon.ico"}
                    alt={postMetadata.author.nickname ?? "author avatar"}
                    width={24}
                    height={24}
                    className="rounded-full border border-neutral-200"
                  />
                  <span className="text-sm font-medium text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    {postMetadata.author.name}
                  </span>
                </Link>
              </div>

              {/* Metadata Row */}
              <div className="flex items-center justify-between text-sm text-neutral-500 font-medium border-t border-neutral-100 pt-6">
                <div className="flex items-center gap-6">
                  {/* Read Time */}
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>4 min read</span>
                  </div>

                  {/* Copy URL */}
                  <button className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            <DocsBody className="prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black prose-p:text-neutral-800 prose-p:leading-7 prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-strong:text-black prose-code:text-pink-600 prose-code:bg-transparent prose-code:font-normal prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-neutral-100 prose-pre:text-black prose-pre:border prose-pre:border-neutral-200 prose-img:rounded-lg">
              <MDX
                components={{
                  ...defaultMdxComponents,
                  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
                    <Image
                      {...(props as any)}
                      src={(props.src as string) || ""}
                      alt={props.alt || "image"}
                      className="rounded-lg border border-neutral-200"
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
                        href={href || "#"}
                        className={cn(
                          "no-underline hover:underline",
                          isExternal ? "text-blue-600" : "text-black"
                        )}
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
            <nav className="mt-24 pt-12 border-t border-dashed border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {postsIndex[post.slugs.join("/")].previous ? (
                  <Link
                    href={`${postsIndex[post.slugs.join("/")].previous?.url}`}
                    className="group block"
                  >
                    <div className="text-sm font-medium text-neutral-500 mb-2 group-hover:text-black transition-colors">
                      ← Previous
                    </div>
                    <div className="text-lg font-bold text-black group-hover:underline decoration-2 underline-offset-2">
                      {postsIndex[post.slugs.join("/")].previous?.data.title}
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {postsIndex[post.slugs.join("/")].next && (
                  <Link
                    href={`${postsIndex[post.slugs.join("/")].next?.url}`}
                    className="group block text-right"
                  >
                    <div className="text-sm font-medium text-neutral-500 mb-2 group-hover:text-black transition-colors">
                      Next →
                    </div>
                    <div className="text-lg font-bold text-black group-hover:underline decoration-2 underline-offset-2">
                      {postsIndex[post.slugs.join("/")].next?.data.title}
                    </div>
                  </Link>
                )}
              </div>
            </nav>
          </div>

          <div className="hidden lg:block" /> {/* Right Spacer */}
        </div>
      </div>
    </div>
  );
}

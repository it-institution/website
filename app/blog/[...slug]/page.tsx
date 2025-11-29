import { blog, getPostMetadata } from "@/lib/source";

import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody } from "fumadocs-ui/page";
import { cn, formatDateLong } from "@/lib/utils";
import Link from "next/link";

import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { Callout } from "fumadocs-ui/components/callout";
import Image from "next/image";
import Container from "@/components/container";

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
    <Container className="max-w-4xl">
      {/* Back Link */}
      <div className="mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black transition-colors group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-16 pb-12 border-b-2 border-neutral-200">
        <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight mb-8">
          {post.data.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center gap-6">
          <Link
            href={postMetadata.author.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <Image
              src={postMetadata.author.avatarUrl || "/favicon.ico"}
              alt={postMetadata.author.nickname ?? "author avatar"}
              width={40}
              height={40}
              className="rounded-full border-2 border-neutral-300 group-hover:border-black transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-black group-hover:underline">
                {postMetadata.author.name || "Unknown Author"}
              </span>
              <time
                dateTime={new Date(post.data.date).toISOString()}
                className="text-sm text-neutral-500"
              >
                {formatDateLong(post.data.date)}
              </time>
            </div>
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <DocsBody className="prose prose-neutral prose-xl max-w-none prose-headings:font-bold prose-headings:text-black prose-headings:tracking-tight prose-p:text-neutral-700 prose-p:leading-relaxed prose-a:text-black prose-a:font-medium prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:decoration-black prose-strong:text-black prose-strong:font-bold prose-code:text-black prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-pre:bg-neutral-900 prose-pre:text-white prose-img:rounded-xl prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-neutral-600">
        <MDX
          components={{
            ...defaultMdxComponents,
            img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
              <Image
                {...(props as any)}
                src={(props.src as string) || ""}
                alt={props.alt || "image"}
                className="rounded-xl border-2 border-neutral-200 shadow-md"
              />
            ),
            Tab,
            Tabs,
            Callout,
            a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
              const { href, children, ...rest } = props;
              return (
                <Link
                  href={href || "#"}
                  className="text-black font-medium underline decoration-2 underline-offset-2 hover:decoration-black transition-all"
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
      <nav className="mt-24 pt-12 border-t-2 border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {postsIndex[post.slugs.join("/")].previous ? (
            <Link
              href={`${postsIndex[post.slugs.join("/")].previous?.url}`}
              className="group bg-white border-2 border-neutral-200 rounded-lg p-6 transition-all hover:border-black hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </div>
              <h3 className="text-xl font-bold text-black group-hover:text-neutral-700 transition-colors line-clamp-2">
                {postsIndex[post.slugs.join("/")].previous?.data.title}
              </h3>
            </Link>
          ) : (
            <div></div>
          )}
          {postsIndex[post.slugs.join("/")].next && (
            <Link
              href={`${postsIndex[post.slugs.join("/")].next?.url}`}
              className="group bg-white border-2 border-neutral-200 rounded-lg p-6 transition-all hover:border-black hover:shadow-lg text-right"
            >
              <div className="flex items-center justify-end gap-2 text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                Next
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black group-hover:text-neutral-700 transition-colors line-clamp-2">
                {postsIndex[post.slugs.join("/")].next?.data.title}
              </h3>
            </Link>
          )}
        </div>
      </nav>
    </Container>
  );
}

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
    <Container className="max-w-3xl">
      <div className="mb-12">
        <Link
          href="/blog"
          className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8 inline-block"
        >
          ← Back to Blog
        </Link>
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight">
            {post.data.title}
          </h1>
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <Link
              href={postMetadata.author.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 group"
            >
              <Image
                src={postMetadata.author.avatarUrl || "/favicon.ico"}
                alt={postMetadata.author.nickname ?? "author avatar"}
                width={24}
                height={24}
                className="rounded-full border border-neutral-200"
              />
              <span className="group-hover:text-neutral-900 transition-colors font-medium">
                {postMetadata.author.name || "Unknown Author"}
              </span>
            </Link>
            <span>•</span>
            <time dateTime={new Date(post.data.date).toISOString()}>
              {formatDateLong(post.data.date)}
            </time>
          </div>
        </div>
      </div>

      <DocsBody className="prose prose-neutral prose-lg max-w-none prose-headings:font-bold prose-headings:text-neutral-900 prose-p:text-neutral-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
        <MDX
          components={{
            ...defaultMdxComponents,
            img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
              <Image
                {...(props as any)}
                src={(props.src as string) || ""}
                alt={props.alt || "image"}
                className="rounded-xl border border-neutral-100 shadow-sm"
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
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  {...rest}
                >
                  {children}
                </Link>
              );
            },
          }}
        />
      </DocsBody>

      <div className="mt-20 pt-10 border-t border-neutral-100">
        <div className="flex justify-between gap-8">
          {postsIndex[post.slugs.join("/")].previous ? (
            <Link
              href={`${postsIndex[post.slugs.join("/")].previous?.url}`}
              className="flex-1 group text-left"
            >
              <span className="block text-sm text-neutral-400 mb-1 group-hover:text-neutral-600 transition-colors">
                Previous Post
              </span>
              <span className="block text-lg font-medium text-neutral-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {postsIndex[post.slugs.join("/")].previous?.data.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
          {postsIndex[post.slugs.join("/")].next && (
            <Link
              href={`${postsIndex[post.slugs.join("/")].next?.url}`}
              className="flex-1 group text-right"
            >
              <span className="block text-sm text-neutral-400 mb-1 group-hover:text-neutral-600 transition-colors">
                Next Post
              </span>
              <span className="block text-lg font-medium text-neutral-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {postsIndex[post.slugs.join("/")].next?.data.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
}

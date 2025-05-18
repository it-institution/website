import { blog, getPostMetadata } from "@/lib/source";

import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody } from "fumadocs-ui/page";
import { cn, formatDateLong } from "@/lib/utils";
import Link from "next/link";

import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Callout } from "fumadocs-ui/components/callout";
import { TOCItemType } from "fumadocs-core/server";
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
    // openGraph: {
    //   title: page.data.title,
    //   description: page.data.description,
    //   url: page.url,
    //   images: [
    //     {
    //       url: `${page.url}/og.png`,
    //       width: 1200,
    //       height: 630,
    //     },
    //   ],
    // },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  // const locale = "ko";

  const post = blog.getPage(slug);
  const posts = blog.getPages();

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
    <Container>
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors"
      >
        ← 블로그 목록으로
      </Link>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-200">
          {post.data.title}
        </h1>
        <h3 className="text-muted-foreground text-sm">
          {post.data.description}
        </h3>
        <Link
          href={postMetadata.author.githubUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center gap-2 group"
          aria-label={postMetadata.author.name || "작성자"}
        >
          <Image
            src={postMetadata.author.avatarUrl || "/favicon.ico"}
            alt={postMetadata.author.nickname ?? "author avatar"}
            width={32}
            height={32}
            className="rounded-full border border-gray-200 dark:border-gray-700 group-hover:scale-105 transition-transform"
          />
          <p className="text-sm text-muted-foreground group-hover:text-primary">
            {postMetadata.author.name || "Unknown Author"}
          </p>
        </Link>
        <div className="my-4 h-[0.5px] w-full bg-neutral-200 dark:bg-neutral-600" />
      </div>
      <DocsBody>
        <div style={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
          <MDX
            className="mdx"
            components={{
              ...defaultMdxComponents,
              img: (props) => <Image {...props} alt={props.alt || "image"} />,
              Tab,
              Tabs,
              Callout,
              a: (props) => {
                const { href, children, ...rest } = props;
                return (
                  <Link
                    href={href}
                    className="text-primary hover:bg-secondary/100 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                    {...rest}
                  >
                    {children}
                  </Link>
                );
              },
            }}
          />
        </div>
      </DocsBody>
      <section className="mt-32">
        <div className="text-muted-foreground mb-8 flex flex-row items-center gap-2 text-sm">
          <div className="flex gap-2">
            <span>작성일:</span>
            <time dateTime={new Date(post.data.date).toISOString()}>
              {formatDateLong(post.data.date)}
            </time>
          </div>
          {post.data.lastModified && <span className="mx-2">•</span>}
          {post.data.lastModified && (
            <div className="flex gap-2">
              <span>최종 수정일:</span>
              <time dateTime={new Date(post.data.lastModified).toISOString()}>
                {formatDateLong(post.data.lastModified)}
              </time>
            </div>
          )}
          {post.data.draft && <span className="mx-2">•</span>}
          {post.data.draft && <span className="text-red-500">Draft</span>}
        </div>
        <hr className="my-8" />
        <div className="mb-8 flex flex-col items-center justify-center">
          <h2 className="opacity-60 text-lg font-semibold">
            이전 글 / 다음 글
          </h2>
        </div>
        <div className="flex justify-between">
          {postsIndex[post.slugs.join("/")].previous ? (
            <Link
              href={`${postsIndex[post.slugs.join("/")].previous?.url}`}
              className="text-primary hover:bg-blue-50 dark:hover:bg-blue-900 rounded-md px-2 py-1 transition-colors"
            >
              ← {postsIndex[post.slugs.join("/")].previous?.data.title}
            </Link>
          ) : (
            <div></div>
          )}
          {postsIndex[post.slugs.join("/")].next && (
            <Link
              href={`${postsIndex[post.slugs.join("/")].next?.url}`}
              className="text-primary hover:bg-blue-50 dark:hover:bg-blue-900 rounded-md px-2 py-1 transition-colors"
            >
              {postsIndex[post.slugs.join("/")].next?.data.title} →
            </Link>
          )}
        </div>
      </section>
    </Container>
  );
}

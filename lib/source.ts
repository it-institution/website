import { docs, meta } from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
import authors from "@/content/author.json";

export const blog = loader({
  // i18n: {
  //   defaultLanguage: "ko",
  //   languages: ["ko", "en"],
  // },
  baseUrl: "/blog",
  source: toFumadocsSource(docs, meta),
});

export type blogListType = ReturnType<typeof blog.getPages>;
export type blogType = ReturnType<typeof blog.getPage>;

// Custom type for blog posts with extended schema
export type BlogPost = NonNullable<blogType> & {
  data: {
    date: Date;
    draft: boolean;
    author: string;
    body: React.FC<{
      components?: Record<string, React.ComponentType<unknown>>;
    }>;
  };
};

export type postMetadataType = {
  url: string;
  title: string;
  description?: string;
  draft: boolean;
  date: Date;
  author: authorType;
};

export type authorType = {
  name: string;
  nickname: string;
  githubUrl: string;
  avatarUrl: string;
};

export function getPostMetadata(post: BlogPost | undefined): postMetadataType {
  const emptyData = {
    url: "",
    title: "",
    description: "",
    draft: false,
    date: new Date(),
    author: {
      name: "",
      nickname: "",
      githubUrl: "",
      avatarUrl: "",
    } as authorType,
  };

  if (!post) {
    console.error("Post not found");

    return emptyData;
  }

  // Load author data from content/author.json
  let author: authorType | undefined;
  try {
    author = authors.find((a) => a.nickname === post.data.author);
  } catch (error) {
    console.error(post.url, "Error loading author data:", error);
    return emptyData;
  }

  if (!author) {
    console.error(post.url, "Author not found");
    return emptyData;
  }

  return {
    url: post.url,
    title: post.data.title ?? "",
    description: post.data.description ?? "",
    draft: post.data.draft,
    date: post.data.date,
    author,
  };
}

export function getPostsMetadata(posts: BlogPost[]): postMetadataType[] {
  return posts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .map((post) => getPostMetadata(post));
}

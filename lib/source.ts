import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import fs from "fs";
import path from "path";

export const blog = loader({
  // i18n: {
  //   defaultLanguage: "ko",
  //   languages: ["ko", "en"],
  // },
  baseUrl: "/blog",
  source: createMDXSource(docs, meta),
});

export type blogListType = ReturnType<typeof blog.getPages>;
export type blogType = ReturnType<typeof blog.getPage>;

export type postMetadataType = {
  url: string;
  title: string;
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

export async function getPostMetadata(
  post: blogType
): Promise<postMetadataType> {
  const emptyData = {
    url: "",
    title: "",
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
    const authorJsonPath = path.join(process.cwd(), "content", "author.json");
    const authors: authorType[] = JSON.parse(
      fs.readFileSync(authorJsonPath, "utf-8")
    );
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
    title: post.data.title,
    draft: post.data.draft,
    date: post.data.date,
    author: author,
  };
}

export async function getPostsMetadata(
  posts: blogListType
): Promise<postMetadataType[]> {
  return Promise.all(
    posts
      .sort((a, b) => {
        return b.data.date.getTime() - a.data.date.getTime();
      })
      .map((post) => {
        return getPostMetadata(post);
      })
  );
}

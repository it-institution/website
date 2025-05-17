import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

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
      nickname: "",
      githubUrl: "",
      avatarUrl: "",
    } as authorType,
  };

  if (!post) {
    console.error("Post not found");

    return emptyData;
  }

  // https://api.github.com/users/{post.data.author}
  let author: any;
  try {
    const response = await fetch(`https://api.github.com/users/${post.data.author}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch author data: ${response.status} ${response.statusText}`);
    }
    author = await response.json();
  } catch (error) {
    console.error(post.url, "Error fetching author data:", error);
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
    author: {
      nickname: author?.name,
      githubUrl: author?.html_url,
      avatarUrl: author?.avatar_url,
    } as authorType,
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

"use client";

import Link from "next/link";
import { cn, formatDate, formatYear } from "@/lib/utils";

import { postMetadataType } from "@/lib/source";

// 간단한 Badge 컴포넌트
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-700 dark:text-gray-200">
      {children}
    </span>
  );
}

export function BlogList({ posts }: { posts: postMetadataType[] }) {
  // 바로 posts 사용
  const yearList = posts.reduce(
    (acc: Record<string, postMetadataType[]>, post) => {
      const year = formatYear(post.date);
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    },
    {}
  );

  const itemStyles =
    "group-hover/year:opacity-100! group-hover/post:bg-secondary/100 group-hover/list:opacity-60 rounded-md";

  return (
    <div className="group/list">
      {posts.length === 0 ? (
        <div className="py-12 text-center text-gray-400 flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-2"
            width="32"
            height="32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>아직 게시글이 없습니다.</p>
        </div>
      ) : (
        Object.keys(yearList)
          .reverse()
          .map((year) => (
            <div
              key={year}
              className="group/year flex flex-col gap-2 border-t py-8 last-of-type:border-b sm:flex-row"
            >
              <div className="w-24">
                <h2 className="group-hover/year:bg-secondary/100 w-fit rounded-md px-2 opacity-60 text-lg font-semibold">
                  {year}
                </h2>
              </div>
              <ul className="w-full space-y-3">
                {yearList[year].map((post: postMetadataType) => (
                  <li
                    key={post.url}
                    className="group/post flex justify-between items-center space-x-4"
                  >
                    <Link href={post.url} aria-label={post.title}>
                      <span
                        className={cn(
                          itemStyles,
                          "inline box-decoration-clone px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                        )}
                      >
                        {post.title}
                      </span>
                    </Link>
                    {post.draft ? (
                      <Badge>Draft</Badge>
                    ) : (
                      <div
                        className={cn(
                          itemStyles,
                          "h-fit text-nowrap text-xs text-gray-500 dark:text-gray-400"
                        )}
                      >
                        {formatDate(post.date)}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))
      )}
    </div>
  );
}

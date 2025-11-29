"use client";

import Link from "next/link";
import { cn, formatDate, formatYear } from "@/lib/utils";

import { postMetadataType } from "@/lib/source";

// 간단한 Badge 컴포넌트
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 border border-neutral-200">
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

  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-neutral-900 mb-4">Blog</h1>
        <p className="text-neutral-500">
          기술적인 고민과 배움을 기록합니다.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-20 text-center text-neutral-400 flex flex-col items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto opacity-20"
            width="48"
            height="48"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <p className="font-medium">아직 게시글이 없습니다.</p>
        </div>
      ) : (
        Object.keys(yearList)
          .reverse()
          .map((year) => (
            <div key={year} className="relative pl-8 md:pl-0 mb-16 last:mb-0">
              <div className="hidden md:block absolute left-[-80px] top-0">
                <span className="text-2xl font-bold text-neutral-200 font-mono">
                  {year}
                </span>
              </div>
              <div className="md:hidden mb-6">
                <span className="text-xl font-bold text-neutral-900 border-b-2 border-neutral-100 pb-1">
                  {year}
                </span>
              </div>
              <ul className="space-y-8 border-l border-neutral-100 pl-8 md:border-l-0 md:pl-0">
                {yearList[year].map((post: postMetadataType) => (
                  <li key={post.url} className="group relative">
                    <Link href={post.url} className="block group">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-neutral-500">
                          <time dateTime={new Date(post.date).toISOString()}>
                            {formatDate(post.date)}
                          </time>
                          {post.draft && <Badge>Draft</Badge>}
                        </div>
                        {post.description && (
                          <p className="text-neutral-500 leading-relaxed mt-1 group-hover:text-neutral-600 transition-colors">
                            {post.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
      )}
    </div>
  );
}

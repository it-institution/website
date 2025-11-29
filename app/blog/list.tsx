"use client";

import Link from "next/link";
import { cn, formatDate, formatYear } from "@/lib/utils";

import { postMetadataType } from "@/lib/source";

// Modern Badge component
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-md bg-neutral-900 px-3 py-1 text-xs font-semibold text-white tracking-wide uppercase">
      {children}
    </span>
  );
}

export function BlogList({ posts }: { posts: postMetadataType[] }) {
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
    <div className="max-w-4xl mx-auto py-20 px-6">
      {/* Header Section */}
      <div className="mb-24">
        <h1 className="text-6xl md:text-7xl font-bold text-black mb-6 tracking-tight leading-none">
          Blog
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
          기술적인 고민과 배움을 기록합니다.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="py-32 text-center flex flex-col items-center gap-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto opacity-10"
            width="64"
            height="64"
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
          <p className="text-lg font-medium text-neutral-400">아직 게시글이 없습니다.</p>
        </div>
      ) : (
        Object.keys(yearList)
          .reverse()
          .map((year) => (
            <div key={year} className="mb-20 last:mb-0">
              {/* Year Header */}
              <div className="mb-12 pb-8 border-b-2 border-black">
                <span className="text-5xl font-bold text-black tracking-tight">
                  {year}
                </span>
              </div>

              {/* Posts Grid */}
              <div className="space-y-6">
                {yearList[year].map((post: postMetadataType) => (
                  <Link
                    key={post.url}
                    href={post.url}
                    className="block group"
                  >
                    <article className="relative bg-white border-2 border-neutral-200 rounded-lg p-8 transition-all duration-200 hover:border-black hover:shadow-lg">
                      {/* Draft Badge */}
                      {post.draft && (
                        <div className="absolute top-4 right-4">
                          <Badge>Draft</Badge>
                        </div>
                      )}

                      {/* Post Header */}
                      <div className="flex flex-col gap-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight group-hover:text-neutral-700 transition-colors">
                          {post.title}
                        </h2>

                        {/* Date */}
                        <time
                          dateTime={new Date(post.date).toISOString()}
                          className="text-sm font-medium text-neutral-500 uppercase tracking-wider"
                        >
                          {formatDate(post.date)}
                        </time>

                        {/* Description */}
                        {post.description && (
                          <p className="text-base text-neutral-600 leading-relaxed mt-2">
                            {post.description}
                          </p>
                        )}
                      </div>

                      {/* Read More Indicator */}
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-black group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          ))
      )}
    </div>
  );
}

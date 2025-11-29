"use client";

import { RiRssFill, RiSearchLine } from "@remixicon/react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { postMetadataType } from "@/lib/source";
import { cn } from "@/lib/utils";

export function BlogList({ posts }: { posts: postMetadataType[] }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Search Bar - Top Right */}
        <div className="mb-8 flex justify-end">
          <div className="flex items-center gap-2">
            <div className="relative">
              <RiSearchLine className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-neutral-400" />
              <input
                className="h-8 rounded-full border border-neutral-300 bg-white pr-3 pl-9 text-neutral-900 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
                placeholder="Search posts"
                style={{ width: "164px" }}
                type="search"
              />
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 bg-white transition-colors hover:bg-neutral-50">
                    <RiRssFill className="h-4 w-4 text-neutral-600" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>soon...</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Blog Grid */}
        {posts.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-medium text-lg text-neutral-400">
              아직 게시글이 없습니다.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 overflow-hidden border border-neutral-200 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: postMetadataType, index: number) => {
              const isLastColumn = index % 3 === 2;

              return (
                <div
                  className={cn(
                    "border-neutral-200",
                    !isLastColumn && "lg:border-r"
                  )}
                  key={post.url}
                >
                  <Link className="group block" href={post.url}>
                    <article className="p-8">
                      {/* Date */}
                      <time
                        className="mb-3 block text-neutral-500 text-sm"
                        dateTime={new Date(post.date).toISOString()}
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>

                      {/* Title */}
                      <h2 className="mb-3 font-semibold text-neutral-900 text-xl leading-tight">
                        {post.title}
                      </h2>

                      {/* Description */}
                      {post.description && (
                        <p className="mb-4 line-clamp-3 text-neutral-600 text-sm leading-relaxed">
                          {post.description}
                        </p>
                      )}

                      {/* Author */}
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            alt={post.author.name}
                            src={post.author.avatarUrl}
                          />
                          <AvatarFallback className="bg-neutral-200 text-neutral-700 text-xs">
                            {post.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-neutral-500 text-sm">
                          {post.author.name}
                        </span>
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}

            {/* Fill empty cells to maintain grid structure */}
            {Array.from({ length: (3 - (posts.length % 3)) % 3 }).map(
              (_, index) => {
                const cellIndex = posts.length + index;
                const isLastColumn = cellIndex % 3 === 2;

                return (
                  <div
                    className={cn(
                      "border-neutral-200",
                      !isLastColumn && "lg:border-r"
                    )}
                    key={`empty-${index}`}
                  >
                    <div className="min-h-[200px] p-8" />
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
}

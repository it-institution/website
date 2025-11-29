"use client";

import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { postMetadataType } from "@/lib/source";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RiRssFill, RiSearchLine } from "@remixicon/react";

export function BlogList({ posts }: { posts: postMetadataType[] }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Bar - Top Right */}
        <div className="flex justify-end mb-8">
          <div className="flex items-center gap-2">
            <div className="relative">
              <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="search"
                placeholder="Search posts"
                className="h-8 pl-9 pr-3 bg-white border border-neutral-300 rounded-full text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400"
                style={{ width: '164px' }}
              />
            </div>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="w-8 h-8 rounded-full bg-white border border-neutral-300 hover:bg-neutral-50 transition-colors flex items-center justify-center">
                    <RiRssFill className="w-4 h-4 text-neutral-600" />
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
            <p className="text-lg font-medium text-neutral-400">
              아직 게시글이 없습니다.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-neutral-200 rounded-lg overflow-hidden">
            {posts.map((post: postMetadataType, index: number) => {
              const isLastColumn = (index % 3) === 2;

              return (
                <div
                  key={post.url}
                  className={cn(
                    "border-neutral-200",
                    !isLastColumn && "lg:border-r"
                  )}
                >
                  <Link href={post.url} className="block group">
                    <article className="p-8">
                      {/* Date */}
                      <time
                        dateTime={new Date(post.date).toISOString()}
                        className="text-sm text-neutral-500 mb-3 block"
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </time>

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-neutral-900 mb-3 leading-tight">
                        {post.title}
                      </h2>

                      {/* Description */}
                      {post.description && (
                        <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                          {post.description}
                        </p>
                      )}

                      {/* Author */}
                      <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                          <AvatarImage
                            src={post.author.avatarUrl}
                            alt={post.author.name}
                          />
                          <AvatarFallback className="bg-neutral-200 text-neutral-700 text-xs">
                            {post.author.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-neutral-500">
                          {post.author.name}
                        </span>
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}

            {/* Fill empty cells to maintain grid structure */}
            {Array.from({ length: (3 - (posts.length % 3)) % 3 }).map((_, index) => {
              const cellIndex = posts.length + index;
              const isLastColumn = (cellIndex % 3) === 2;

              return (
                <div
                  key={`empty-${index}`}
                  className={cn(
                    "border-neutral-200",
                    !isLastColumn && "lg:border-r"
                  )}
                >
                  <div className="p-8 min-h-[200px]"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

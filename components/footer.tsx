import { RiGithubFill } from "@remixicon/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 w-full border-gray-200 border-t bg-white py-6 text-gray-500 text-sm dark:border-gray-700 dark:bg-black dark:text-gray-400">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row">
            <span>
              © {new Date().getFullYear()} IT Institute. All rights reserved.
            </span>
            <span className="hidden sm:block">•</span>
            <Link href="mailto:contact@inst.it.kr">contact@inst.it.kr</Link>
          </div>
          <div className="mt-4 flex items-center gap-4 md:mt-0">
            <Link href="https://github.com/it-institution">
              <RiGithubFill className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

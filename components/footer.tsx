import Link from "next/link";

import { RiGithubFill } from "@remixicon/react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-sm py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>
              © {new Date().getFullYear()} IT Institute. All rights reserved.
            </span>
            <span className="hidden sm:block">•</span>
            <Link href="mailto:contact@inst.it.kr" className="hover:underline">
              contact@inst.it.kr
            </Link>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link
              href="https://github.com/it-institution"
              className="hover:underline"
            >
              <RiGithubFill className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

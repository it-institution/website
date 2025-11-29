"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoImg from "@/assets/rt.png";

const navItems = [
  { href: "/blog", label: "블로그" },
  { href: "http://discord.inst.it.kr/", label: "가입하기" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size on initial load and window resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initially
    checkIsMobile();

    // Add event listener
    window.addEventListener("resize", checkIsMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="-translate-x-1/2 fixed top-6 left-1/2 z-50 rounded-full border border-black/5 bg-white shadow-sm backdrop-blur-md transition-all duration-300 dark:bg-white/90">
      <div className="flex items-center justify-between gap-6 px-6 py-2">
        <Link href="/">
          <Image alt="Logo" height={30} src={logoImg} width={30} />
        </Link>

        {/* Mobile hamburger menu */}
        <button
          aria-label="Toggle menu"
          className="flex h-8 w-8 flex-col items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-0.5 w-6 rounded bg-gray-700 ${
              isMenuOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`my-1 block h-0.5 w-6 rounded bg-gray-700 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-gray-700 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Desktop navigation */}
        <div className="ml-8 hidden gap-4 md:flex">
          {navItems.map((item, index) => (
            <div className="flex items-center" key={item.href}>
              {index === navItems.length - 1 && (
                <span className="mx-2 text-gray-300">|</span>
              )}
              <Link
                className="rounded px-2 py-1 font-medium text-gray-700 transition-colors hover:text-gray-900"
                href={item.href}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg">
          <div className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                className="border-gray-100 border-b px-2 py-3 font-medium text-gray-700 last:border-0 hover:text-gray-900"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import Link from "next/link";
import logoImg from "@/assets/rt.png";
import Image from "next/image";
import { useState, useEffect } from "react";

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
    <nav className="w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-6 px-4 py-3">
        <Link href="/">
          <Image
            src={logoImg}
            alt="Logo"
            width={30}
            height={30}
          />
        </Link>

        {/* Mobile hamburger menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`bg-gray-700 dark:bg-gray-200 block h-0.5 w-6 rounded ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          ></span>
          <span
            className={`bg-gray-700 dark:bg-gray-200 block h-0.5 w-6 rounded my-1 ${isMenuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`bg-gray-700 dark:bg-gray-200 block h-0.5 w-6 rounded ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          ></span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 font-medium px-2 py-1 rounded"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 font-medium px-2 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0"
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

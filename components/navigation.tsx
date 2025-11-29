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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white dark:bg-white/90 backdrop-blur-md border border-black/5 rounded-full shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between gap-6 px-6 py-2">
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
            className={`bg-gray-700 block h-0.5 w-6 rounded ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          ></span>
          <span
            className={`bg-gray-700 block h-0.5 w-6 rounded my-1 ${isMenuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`bg-gray-700 block h-0.5 w-6 rounded ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          ></span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4 ml-8">
          {navItems.map((item, index) => (
            <div key={item.href} className="flex items-center">
              {index === navItems.length - 1 && (
                <span className="mx-2 text-gray-300">|</span>
              )}
              <Link
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium px-2 py-1 rounded transition-colors"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-white rounded-2xl border border-black/5 shadow-lg overflow-hidden">
          <div className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium px-2 py-3 border-b border-gray-100 last:border-0"
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

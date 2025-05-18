"use client";

import Link from "next/link";
import logoImg from "@/assets/rt.png";
import Image from "next/image";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/about", label: "학회 소개" },
  { href: "/projects", label: "프로젝트" },
  { href: "/blog", label: "블로그" },
  { href: "/gallery", label: "갤러리" },
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
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-6 px-4 py-3">
        <Link href="/" className="group">
          <Image
            src={logoImg}
            alt="Logo"
            width={30}
            height={30}
            className="transition-transform duration-700"
            style={{
              animationPlayState: "paused",
            }}
            onMouseEnter={(e) => {
              const img = e.currentTarget;
              // Prevent multiple triggers if already spinning
              if (img.dataset.isSpinning === "true") return;
              img.dataset.hoverTimeout = window
                .setTimeout(() => {
                  img.dataset.isSpinning = "true";
                  img.style.animation = "spin 1s cubic-bezier(0.22,1,0.36,1) 1";
                  setTimeout(() => {
                    img.style.animation = "";
                    img.dataset.isSpinning = "false";
                  }, 1000);
                }, 1000)
                .toString();
            }}
            onMouseLeave={(e) => {
              const img = e.currentTarget;
              // Cancel timeout only if not spinning
              if (
                img.dataset.isSpinning !== "true" &&
                img.dataset.hoverTimeout
              ) {
                clearTimeout(Number(img.dataset.hoverTimeout));
                img.dataset.hoverTimeout = "";
              }
              // Do not stop animation if spinning
            }}
            onClick={(e) => {
              const img = e.currentTarget;
              if (img.dataset.isSpinning === "true") return;
              img.dataset.isSpinning = "true";
              img.style.animation = "spin 1s cubic-bezier(0.22,1,0.36,1) 1";
              setTimeout(() => {
                img.style.animation = "";
                img.dataset.isSpinning = "false";
              }, 1000);
            }}
            tabIndex={0}
            onBlur={(e) => {
              // Do nothing, allow spin to finish
            }}
          />
          <style jsx global>{`
            @keyframes spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </Link>

        {/* Mobile hamburger menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`bg-gray-700 dark:bg-gray-200 block h-0.5 w-6 rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`bg-gray-700 dark:bg-gray-200 block h-0.5 w-6 rounded my-1 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`bg-gray-700 dark:bg-gray-200 block h-0.5 w-6 rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4 ml-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-2 py-1 rounded transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-md">
          <div className="flex flex-col px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-2 py-3 border-b border-gray-100 dark:border-gray-800 last:border-0 transition-colors"
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

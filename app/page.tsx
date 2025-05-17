import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-black">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8 py-16">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-4xl font-bold text-center">IT Institution</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          Welcome to the IT Institution website. Explore our blog and resources.
        </p>
        <Link
          href="/blog"
          className="inline-block rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-white shadow hover:bg-primary/90 transition-colors"
        >
          블로그 바로가기
        </Link>
      </div>
    </main>
  );
}

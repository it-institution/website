import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white dark:bg-black">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8 py-16">
        <h1 className="text-4xl font-bold text-center">IT Institution</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300">
          Welcome to the IT Institution website. Explore our blog and resources.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          블로그 바로가기
        </Link>
      </div>
    </main>
  );
}

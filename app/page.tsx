import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-[#f7f8fa] dark:bg-[#18181b]">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8 py-16">
        <h1 className="text-4xl font-extrabold text-center tracking-tight text-blue-900 dark:text-blue-200 drop-shadow">
          IT Institution
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-xl">
          Welcome to the IT Institution website. Explore our blog and resources.
        </p>
        <Link
          href="/blog"
          className="px-6 py-3 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          블로그 바로가기
        </Link>
      </div>
    </main>
  );
}

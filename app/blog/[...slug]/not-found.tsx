export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="mx-auto text-gray-400 dark:text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h1 className="text-2xl font-bold">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-500 dark:text-gray-400">
        존재하지 않는 글이거나, 삭제된 글입니다.
      </p>
      <a
        href="/blog"
        className="mt-4 inline-block px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        블로그 홈으로
      </a>
    </section>
  );
}

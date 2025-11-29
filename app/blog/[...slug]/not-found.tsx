export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <svg
        className="mx-auto text-gray-400 dark:text-gray-600"
        fill="none"
        height="48"
        stroke="currentColor"
        viewBox="0 0 24 24"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
      <h1 className="font-bold text-2xl">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-500 dark:text-gray-400">
        존재하지 않는 글이거나, 삭제된 글입니다.
      </p>
      <a
        className="mt-4 inline-block rounded bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
        href="/blog"
      >
        블로그 홈으로
      </a>
    </section>
  );
}

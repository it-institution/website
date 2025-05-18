import Container from "@/components/container";

export default function Projects() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-200">
        프로젝트
      </h1>
      <ul className="space-y-4">
        <li className="border rounded p-4 bg-white/80 dark:bg-gray-800">
          <b>동아리 홈페이지 개발</b>
          <p className="text-gray-600 dark:text-gray-300">
            Next.js, TailwindCSS로 동아리 공식 홈페이지를 개발 중입니다.
          </p>
        </li>
        <li className="border rounded p-4 bg-white/80 dark:bg-gray-800">
          <b>라즈베리파이 IoT 프로젝트</b>
          <p className="text-gray-600 dark:text-gray-300">
            라즈베리파이와 센서를 활용한 스마트 환경 모니터링 시스템.
          </p>
        </li>
        <li className="border rounded p-4 bg-white/80 dark:bg-gray-800">
          <b>보안 CTF 준비반</b>
          <p className="text-gray-600 dark:text-gray-300">
            정보보안 CTF 대회 참가를 위한 문제 풀이 및 실습.
          </p>
        </li>
      </ul>
    </Container>
  );
}

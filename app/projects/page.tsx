import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "취약점 자동 분석 도구",
      category: "사이버 보안",
      description:
        "오픈소스 소프트웨어의 취약점을 자동으로 스캔하고 분석하는 도구. 정적 분석과 동적 분석을 결합하여 높은 정확도의 결과를 제공합니다.",
      technologies: ["Python", "Docker", "ElasticSearch", "React"],
      image:
        "https://placehold.co/800x450/3b82f6/FFFFFF/png?text=취약점+분석+도구",
      status: "진행중",
      github: "https://github.com/it-institution/vulnscan",
    },
    {
      title: "클라우드 네이티브 CI/CD 파이프라인",
      category: "클라우드 인프라",
      description:
        "쿠버네티스 기반의 완전 자동화된 CI/CD 파이프라인. 코드 변경부터 배포까지 전 과정을 추적하고 자동화합니다.",
      technologies: ["Kubernetes", "ArgoCD", "Terraform", "GitHub Actions"],
      image:
        "https://placehold.co/800x450/3b82f6/FFFFFF/png?text=Cloud+Native+CI/CD",
      status: "완료",
      github: "https://github.com/it-institution/k8s-cicd",
    },
    {
      title: "분산 시스템 모니터링 대시보드",
      category: "클라우드 인프라",
      description:
        "대규모 마이크로서비스 환경을 위한 실시간 모니터링 및 알림 시스템. 시스템 장애를 예측하고 신속하게 대응할 수 있도록 도와줍니다.",
      technologies: ["Grafana", "Prometheus", "Go", "React"],
      image:
        "https://placehold.co/800x450/3b82f6/FFFFFF/png?text=모니터링+대시보드",
      status: "진행중",
      github: "https://github.com/it-institution/monitor-dash",
    },
    {
      title: "IT 학회 커뮤니티 포털",
      category: "웹 개발",
      description:
        "학회 회원들을 위한 지식 공유 및 커뮤니케이션 플랫폼. 기술 블로그, 프로젝트 쇼케이스, 학습 자료 아카이브 기능을 통합 제공합니다.",
      technologies: ["Next.js", "TailwindCSS", "Cloudflare", "Prisma"],
      image:
        "https://placehold.co/800x450/3b82f6/FFFFFF/png?text=커뮤니티+포털",
      status: "진행중",
      github: "https://github.com/it-institution/website-cf",
    },
    {
      title: "AI 기반 코드 리뷰 어시스턴트",
      category: "소프트웨어 개발",
      description:
        "기계학습 모델을 활용한 자동 코드 리뷰 시스템. 코드 품질, 보안 취약점, 성능 최적화 관련 제안을 자동으로 제공합니다.",
      technologies: ["Python", "TensorFlow", "GPT-4", "GitHub API"],
      image: "https://placehold.co/800x450/3b82f6/FFFFFF/png?text=AI+코드+리뷰",
      status: "계획중",
      github: "https://github.com/it-institution/ai-code-reviewer",
    },
    {
      title: "제로트러스트 네트워크 솔루션",
      category: "사이버 보안",
      description:
        "현대적인 제로트러스트 보안 아키텍처 구현 솔루션. 사용자 신원, 디바이스 상태, 네트워크 컨텍스트를 분석해 접근 권한을 동적으로 부여합니다.",
      technologies: ["Rust", "WebAssembly", "OpenID Connect", "Envoy"],
      image:
        "https://placehold.co/800x450/3b82f6/FFFFFF/png?text=제로트러스트+네트워크",
      status: "계획중",
      github: "https://github.com/it-institution/zerotrust",
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-blue-600 dark:bg-blue-900 text-white py-16">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">프로젝트</h1>
            <div className="w-20 h-1 bg-white rounded-full mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl">
              IT 학회에서 진행하는 다양한 프로젝트를 소개합니다. 회원들의
              전문성을 활용한 실질적인 결과물을 만들어 나가고 있습니다.
            </p>
          </div>
        </Container>
      </div>

      {/* Project Categories */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-[61px] z-10">
        <Container size="lg" className="py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "전체",
              "사이버 보안",
              "소프트웨어 개발",
              "클라우드 인프라",
              "웹 개발",
            ].map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </div>

      {/* Projects Grid */}
      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    {project.category}
                  </span>
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-md ${
                      project.status === "완료"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                        : project.status === "진행중"
                          ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
                          : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <Link
                    href={project.github}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </Link>
                  <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium text-sm">
                    자세히 보기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 dark:bg-blue-800 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            프로젝트에 참여하고 싶으신가요?
          </h3>
          <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
            IT 학회는 항상 새로운 아이디어와 기술에 열려있습니다. 회원들의
            자발적인 참여로 더 의미 있는 결과물을 만들어 갑니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              참여 문의하기
            </Link>
            <Link
              href="https://github.com/it-institution"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700/50 hover:bg-blue-700/70 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/20"
            >
              GitHub 방문하기
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

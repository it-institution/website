import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black dark:bg-black text-white py-20">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left space-y-6 md:max-w-lg">
              <div className="inline-block px-3 py-1 rounded-full bg-gray-800 text-white text-sm font-medium mb-2">
                IT 특성화고 전문가 모임
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <span className="text-white">
                  IT 학회
                </span>
                <br />각 분야 전문가들의 모임
              </h1>
              <p className="text-lg md:text-xl text-gray-300">
                IT 특성화고에서의 기초를 다지고 현업의 전문가로 성장한 우리들의
                기술 교류와 네트워킹 커뮤니티
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                <Link
                  href="/blog"
                  className="bg-white text-black px-6 py-3 rounded-lg font-medium"
                >
                  블로그 보기
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-sm aspect-square">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <Image
                    src="https://placehold.co/800x800/000000/FFFFFF/png?text=IT+학회"
                    alt="IT 학회"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              학회의 핵심 원칙
            </h2>
            <div className="w-20 h-1.5 bg-black dark:bg-white rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              IT 학회는 단순한 친목 모임을 넘어, 실질적인 기술 역량 강화와 의미
              있는 성과 창출을 추구합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "실사구시",
                description: "실제적인 적용과 현실성을 중요하게 생각합니다.",
              },
              {
                title: "전문성 심화",
                description:
                  "각자의 업무 영역을 넘어, 관심 기술 분야에 대한 깊이 있는 탐구를 through해 전문성을 키워나갑니다.",
              },
              {
                title: "지식 공유 및 시너지 창출",
                description:
                  "각자의 현업 경험과 학습 내용을 적극적으로 공유하고, 다양한 관점을 융합하여 더 큰 시너지를 만듭니다.",
              },
              {
                title: "지속 성장 지향",
                description:
                  "빠르게 발전하는 IT 트렌드에 뒤처지지 않도록 꾸준히 학습하고, 새로운 기술과 도전에 열린 자세를 갖습니다.",
              },
              {
                title: "유연한 참여와 존중",
                description:
                  "현업으로 바쁜 회원들의 상황을 고려하여 유연한 참여 방식을 모색하고, 서로의 시간과 의견을 존중합니다.",
              },
              {
                title: "윤리적 실천",
                description:
                  "습득한 IT 지식과 기술을 윤리적으로 사용하며, 법적, 윤리적 테두리를 준수합니다.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4">
                  <span className="text-black dark:text-white text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Tracks */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              주요 활동 트랙
            </h2>
            <div className="w-20 h-1.5 bg-black dark:bg-white rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              회원들의 관심사와 전문성을 고려하여 다음 트랙들을 중심으로 활동을
              전개합니다.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "차세대 사이버 보안 및 윤리적 해킹",
                image:
                  "https://placehold.co/800x450/000000/FFFFFF/png?text=사이버+보안",
                description:
                  "최신 사이버 위협에 대한 심층 분석 및 대응 전략을 연구하고, 실전과 유사한 환경에서의 공방 훈련을 통해 최고 수준의 보안 전문가로 성장합니다.",
                activities: [
                  "국내외 유명 CTF 대회(DEF CON, HITCON 등) 팀 참가 및 상위권 도전",
                  "최신 공격 기법(예: AI 기반 공격, 클라우드 환경 보안 위협) 및 방어 전략 연구/발표",
                  "실제 기업 환경을 가정한 레드팀/블루팀 시뮬레이션",
                  "취약점 분석 및 제로데이 연구",
                  "보안 자동화 도구 개발 또는 오픈소스 보안 프로젝트 기여",
                ],
              },
              {
                title: "현대적 소프트웨어 개발 및 아키텍처",
                image:
                  "https://placehold.co/800x450/000000/FFFFFF/png?text=소프트웨어+개발",
                description:
                  "현재 직무에서 사용하지 않는 새로운 프로그래밍 언어, 프레임워크, 아키텍처를 학습하고, 실제 서비스를 개발하며 기술 스택을 확장합니다.",
                activities: [
                  "새로운 기술 스택(예: Rust, Go, Kotlin, Svelte, FastAPI)을 활용한 포트폴리오 프로젝트 개발",
                  "마이크로서비스 아키텍처, 이벤트 기반 아키텍처, 도메인 주도 설계 등 고급 설계 패턴 연구 및 적용",
                  "데브옵스 문화 및 CI/CD 파이프라인 구축, 쿠버네티스 기반 배포 자동화 심층 스터디",
                  "AI/ML 기술을 접목한 지능형 애플리케이션 개발",
                  "대규모 트래픽 처리를 위한 시스템 설계 및 성능 최적화 연구",
                ],
              },
              {
                title: "지능형 인프라 및 클라우드 네이티브 운영",
                image:
                  "https://placehold.co/800x450/000000/FFFFFF/png?text=클라우드+인프라",
                description:
                  "클라우드 환경을 중심으로 자동화되고 안정적인 인프라 구축 및 운영 능력을 배양하고, 최신 네트워크 기술 및 서버 관리 기법을 습득합니다.",
                activities: [
                  "쿠버네티스, Istio, Prometheus 등 클라우드 네이티브 프로젝트 심층 스터디 및 실제 환경 구축/운영",
                  "코드형 인프라 (예: Terraform, Ansible)를 활용한 인프라 자동화 및 관리 효율화",
                  "하이브리드/멀티 클라우드 환경 구축 및 운영 전략 연구",
                  "제로 트러스트 네트워크 아키텍처 설계 및 구현",
                  "대규모 시스템 운영을 위한 사이트 신뢰성 엔지니어링(SRE) 원칙 및 사례 연구",
                ],
              },
            ].map((track, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 items-center"
              >
                <div
                  className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={track.image}
                      alt={track.title}
                      width={800}
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div
                  className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {track.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {track.description}
                  </p>
                  <div className="space-y-2">
                    {track.activities.map((activity, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="min-w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center mt-1">
                          <span className="text-black dark:text-white text-sm">
                            {i + 1}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {activity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Methods */}
      <section className="py-16 bg-white dark:bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              활동 방식
            </h2>
            <div className="w-20 h-1.5 bg-black dark:bg-white rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              다양한 방식으로 지속적인 학습과 교류를 이어갑니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "정기/비정기 스터디 및 세미나",
                description:
                  "월 1~2회 특정 주제(기술, 논문, 서적 등)에 대한 심층 스터디 또는 발표 세션 진행. 회원들이 현업에서 얻은 경험이나 새로운 기술 정보를 공유하는 '라이트닝 토크' 운영.",
              },
              {
                title: "프로젝트 기반 학습",
                description:
                  "2~4개월 단위로 팀을 구성하여 실제 결과물(소프트웨어, 시스템, 연구 보고서 등)을 목표로 프로젝트 진행. 프로젝트 아이디어는 회원들의 자율적인 제안과 논의를 통해 선정.",
              },
              {
                title: "실전 훈련 및 워크숍",
                description:
                  "CTF 문제 공동 풀이, 모의 해킹/방어 훈련, 코드랩, 라이브 코딩 세션 등. 필요시 외부 전문가 초빙 또는 유료 강의 공동 수강.",
              },
              {
                title: "온라인 협업 및 자료 아카이빙",
                description:
                  "Slack/Discord 등 커뮤니케이션 채널, Notion/Wiki 등 문서 관리, GitHub 등 코드 저장소 적극 활용. 스터디 자료, 프로젝트 산출물, 회의록 등을 체계적으로 기록하여 지식 자산화.",
              },
            ].map((method, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black dark:bg-black text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            IT 전문가로서 함께 성장해요
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            특성화고 시절의 열정을 이어받아, 현업에서의 전문성을 한층 더
            끌어올리고, 서로에게 든든한 기술적 동반자가 되어주는 공간에
            함께하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="bg-white text-black px-8 py-4 rounded-lg font-medium"
            >
              블로그 구경하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white py-32 text-neutral-900">
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="space-y-8 text-center md:max-w-xl md:text-left">
              <div className="mb-4 inline-block rounded-full border border-neutral-200 bg-neutral-100 px-4 py-1.5 font-medium text-neutral-800 text-sm">
                IT 특성화고 전문가 모임
              </div>
              <h1 className="font-bold text-5xl text-neutral-900 leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                IT 학회
                <br />
                <span className="font-medium text-4xl text-neutral-500 md:text-5xl lg:text-6xl">
                  전문가들의 모임
                </span>
              </h1>
              <p className="text-neutral-600 text-xl leading-relaxed">
                IT 특성화고에서의 기초를 다지고 현업의 전문가로 성장한 우리들의
                기술 교류와 네트워킹 커뮤니티
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4 md:justify-start">
                <Link
                  className="rounded-full bg-neutral-900 px-8 py-4 font-medium text-white transition-colors hover:bg-neutral-800"
                  href="/blog"
                >
                  블로그 보기
                </Link>
              </div>
            </div>
            <div className="relative aspect-square w-full max-w-md">
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl shadow-neutral-200/50">
                <div className="flex h-full w-full items-center justify-center bg-neutral-50">
                  <Image
                    alt="IT 학회"
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                    height={800}
                    src="https://placehold.co/800x800/f5f5f5/171717/png?text=IT+Society"
                    width={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-20 flex flex-col items-center text-center">
            <h2 className="mb-6 font-bold text-3xl text-neutral-900 md:text-4xl">
              학회의 핵심 원칙
            </h2>
            <p className="max-w-2xl text-lg text-neutral-600">
              IT 학회는 단순한 친목 모임을 넘어, 실질적인 기술 역량 강화와 의미
              있는 성과 창출을 추구합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "실사구시",
                description: "실제적인 적용과 현실성을 중요하게 생각합니다.",
              },
              {
                title: "전문성 심화",
                description:
                  "각자의 업무 영역을 넘어, 관심 기술 분야에 대한 깊이 있는 탐구를 통해 전문성을 키워나갑니다.",
              },
              {
                title: "지식 공유",
                description:
                  "각자의 현업 경험과 학습 내용을 적극적으로 공유하고, 다양한 관점을 융합하여 더 큰 시너지를 만듭니다.",
              },
              {
                title: "지속 성장",
                description:
                  "빠르게 발전하는 IT 트렌드에 뒤처지지 않도록 꾸준히 학습하고, 새로운 기술과 도전에 열린 자세를 갖습니다.",
              },
              {
                title: "존중과 배려",
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
                className="group rounded-2xl border border-neutral-100 bg-white p-8 transition-all duration-300 hover:border-neutral-200 hover:shadow-lg hover:shadow-neutral-100/50"
                key={index}
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 font-bold text-neutral-900 text-sm">
                  {index + 1}
                </div>
                <h3 className="mb-3 font-bold text-neutral-900 text-xl">
                  {principle.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity Tracks */}
      <section className="bg-neutral-50 py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-20 flex flex-col items-center text-center">
            <h2 className="mb-6 font-bold text-3xl text-neutral-900 md:text-4xl">
              주요 활동 트랙
            </h2>
            <p className="max-w-2xl text-lg text-neutral-600">
              회원들의 관심사와 전문성을 고려하여 다음 트랙들을 중심으로 활동을
              전개합니다.
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                title: "사이버 보안 및 윤리적 해킹",
                image:
                  "https://placehold.co/800x450/f5f5f5/171717/png?text=Cyber+Security",
                description:
                  "최신 사이버 위협에 대한 심층 분석 및 대응 전략을 연구하고, 실전과 유사한 환경에서의 공방 훈련을 통해 최고 수준의 보안 전문가로 성장합니다.",
                activities: [
                  "국내외 유명 CTF 대회 팀 참가 및 상위권 도전",
                  "최신 공격 기법 및 방어 전략 연구/발표",
                  "실제 기업 환경을 가정한 레드팀/블루팀 시뮬레이션",
                  "취약점 분석 및 제로데이 연구",
                ],
              },
              {
                title: "소프트웨어 개발 및 아키텍처",
                image:
                  "https://placehold.co/800x450/f5f5f5/171717/png?text=Software+Dev",
                description:
                  "현재 직무에서 사용하지 않는 새로운 프로그래밍 언어, 프레임워크, 아키텍처를 학습하고, 실제 서비스를 개발하며 기술 스택을 확장합니다.",
                activities: [
                  "새로운 기술 스택을 활용한 포트폴리오 프로젝트 개발",
                  "마이크로서비스, 이벤트 기반 아키텍처 등 고급 설계 패턴 연구",
                  "데브옵스 문화 및 CI/CD 파이프라인 구축",
                  "대규모 트래픽 처리를 위한 시스템 설계 및 성능 최적화",
                ],
              },
              {
                title: "인프라 및 클라우드 네이티브",
                image:
                  "https://placehold.co/800x450/f5f5f5/171717/png?text=Cloud+Infra",
                description:
                  "클라우드 환경을 중심으로 자동화되고 안정적인 인프라 구축 및 운영 능력을 배양하고, 최신 네트워크 기술 및 서버 관리 기법을 습득합니다.",
                activities: [
                  "쿠버네티스, Istio 등 클라우드 네이티브 프로젝트 심층 스터디",
                  "Terraform, Ansible을 활용한 인프라 자동화",
                  "하이브리드/멀티 클라우드 환경 구축 및 운영 전략 연구",
                  "대규모 시스템 운영을 위한 SRE 원칙 및 사례 연구",
                ],
              },
            ].map((track, index) => (
              <div
                className="flex flex-col items-center gap-12 lg:flex-row"
                key={index}
              >
                <div
                  className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="overflow-hidden rounded-2xl shadow-neutral-200/50 shadow-xl">
                    <Image
                      alt={track.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                      height={450}
                      src={track.image}
                      width={800}
                    />
                  </div>
                </div>
                <div
                  className={`w-full lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <h3 className="mb-4 font-bold text-2xl text-neutral-900">
                    {track.title}
                  </h3>
                  <p className="mb-8 text-neutral-600 leading-relaxed">
                    {track.description}
                  </p>
                  <div className="space-y-3">
                    {track.activities.map((activity, i) => (
                      <div className="flex items-start gap-3" key={i}>
                        <div className="mt-2.5 h-1.5 min-w-1.5 rounded-full bg-neutral-300" />
                        <p className="text-neutral-600 text-sm">{activity}</p>
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
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-20 flex flex-col items-center text-center">
            <h2 className="mb-6 font-bold text-3xl text-neutral-900 md:text-4xl">
              활동 방식
            </h2>
            <p className="max-w-2xl text-lg text-neutral-600">
              다양한 방식으로 지속적인 학습과 교류를 이어갑니다
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "스터디 및 세미나",
                description:
                  "월 1~2회 특정 주제에 대한 심층 스터디 또는 발표 세션 진행. 현업 경험이나 새로운 기술 정보를 공유하는 '라이트닝 토크' 운영.",
              },
              {
                title: "프로젝트",
                description:
                  "2~4개월 단위로 팀을 구성하여 실제 결과물을 목표로 프로젝트 진행. 아이디어는 회원들의 자율적인 제안과 논의를 통해 선정.",
              },
              {
                title: "실전 훈련",
                description:
                  "CTF 문제 공동 풀이, 모의 해킹/방어 훈련, 코드랩, 라이브 코딩 세션 등. 필요시 외부 전문가 초빙 또는 유료 강의 공동 수강.",
              },
              {
                title: "아카이빙",
                description:
                  "Slack/Discord 등 커뮤니케이션 채널, Notion/Wiki 등 문서 관리. 스터디 자료, 프로젝트 산출물 등을 체계적으로 기록하여 지식 자산화.",
              },
            ].map((method, index) => (
              <div
                className="rounded-2xl border border-neutral-100 bg-neutral-50 p-10"
                key={index}
              >
                <h3 className="mb-4 font-bold text-neutral-900 text-xl">
                  {method.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-neutral-100 border-t bg-white py-32">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="mb-8 font-bold text-3xl text-neutral-900 md:text-4xl">
            IT 전문가로서 함께 성장해요
          </h2>
          <p className="mb-12 text-neutral-600 text-xl leading-relaxed">
            특성화고 시절의 열정을 이어받아, 현업에서의 전문성을 한층 더
            끌어올리고, 서로에게 든든한 기술적 동반자가 되어주는 공간에
            함께하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              className="rounded-full bg-neutral-900 px-10 py-4 font-medium text-white transition-colors hover:bg-neutral-800"
              href="http://discord.inst.it.kr/"
            >
              가입하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

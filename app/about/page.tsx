import Container from "@/components/container";
import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-blue-600 dark:bg-blue-900 text-white py-16">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IT 학회 소개
            </h1>
            <div className="w-20 h-1 bg-white rounded-full mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl">
              IT 특성화고등학교에서 해킹, 개발, 네트워크, 서버 운영의 기초를
              다지고 현재 각자의 분야에서 전문가로 활동하고 있는 졸업생들의
              모임입니다.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container>
        <div className="flex flex-col md:flex-row gap-12 py-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
              우리 학회에 대해
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                'IT 학회'는 IT 특성화고등학교에서 해킹, 개발, 네트워크, 서버
                운영의 기초를 다지고 현재 각자의 분야에서 전문가로 활동하고 있는
                졸업생들의 모임입니다.
              </p>
              <p>
                우리는 학교에서 배운 지식과 현업에서의 경험을 바탕으로, 끊임없이
                변화하는 IT 환경에 발맞춰 전문성을 심화하고, 기술적 통찰력을
                공유하며, 서로의 성장을 지원하는 것을 목표로 합니다.
              </p>
              <p>
                본 학회는 단순한 친목 모임을 넘어, 실질적인 기술 역량 강화와
                의미 있는 성과 창출을 추구합니다.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">
              학회 핵심 원칙
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
              ].map((principle, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-400">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">
              학회 참여 및 기여
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ul>
                <li>
                  <strong>적극적인 참여:</strong> 모든 회원은 학회 활동에
                  주도적으로 참여하고, 자신의 지식과 경험을 기꺼이 나눕니다.
                </li>
                <li>
                  <strong>존중과 배려:</strong> 바쁜 직장 생활 속에서 참여하는
                  만큼, 서로의 시간과 상황을 존중하고 배려합니다.
                </li>
                <li>
                  <strong>목표 공유 및 책임감:</strong> 프로젝트나 스터디 진행
                  시 공동의 목표를 명확히 하고, 각자 맡은 역할에 책임감을
                  갖습니다.
                </li>
                <li>
                  <strong>피드백 문화:</strong> 건설적이고 긍정적인 피드백을
                  통해 함께 성장하는 문화를 만들어갑니다.
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100">
              윤리 강령
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                본 학회의 모든 회원은 습득한 IT 지식과 기술을 윤리적으로
                사용하며, 특히 사이버 보안 관련 활동 시 법적, 윤리적 테두리를
                절대 넘지 않을 것을 약속합니다. (예: 허가받지 않은 시스템 접근
                금지, 정보통신망법 등 관련 법규 준수)
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="sticky top-24">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                  활동 방식
                </h3>
                <ul className="space-y-3">
                  {[
                    "정기/비정기 스터디 및 세미나",
                    "프로젝트 기반 학습",
                    "실전 훈련 및 워크숍",
                    "온라인 협업 및 자료 아카이빙",
                    "네트워킹 및 정보 교류",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="min-w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mt-1">
                        <span className="text-blue-600 dark:text-blue-400 text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl overflow-hidden mb-8">
                <Image
                  src="https://placehold.co/600x800/3b82f6/FFFFFF/png?text=IT+학회+활동"
                  alt="IT 학회 활동 이미지"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                />
              </div>

              <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">학회 가입 문의</h3>
                <p className="mb-6">
                  IT 분야에서 전문성을 갖추고 함께 성장하고 싶으신 분들은
                  언제든지 문의해 주세요.
                </p>
                <a
                  href="mailto:contact@inst.it.kr"
                  className="block w-full bg-white text-blue-600 hover:bg-blue-50 py-3 text-center rounded-lg font-medium"
                >
                  이메일로 문의하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

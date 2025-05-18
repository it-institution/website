import Container from "@/components/container";

export default function About() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-200">
        동아리 소개
      </h1>
      <p className="mb-4 text-lg text-gray-700 dark:text-gray-200">
        저희 <b>컴퓨터 동아리</b>는 IT와 컴퓨터에 관심 있는 학생들이 모여 다양한
        프로젝트와 학습, 교류를 하는 곳입니다.
        <br />
        프로그래밍, 네트워크, 보안, 하드웨어 등 다양한 분야에 도전하며 함께
        성장하고 있습니다.
      </p>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
        <li>정기 스터디 및 세미나</li>
        <li>동아리 자체 프로젝트 진행</li>
        <li>IT 관련 대회 참가</li>
        <li>선후배 멘토링</li>
        <li>친목 활동 및 네트워킹</li>
      </ul>
    </Container>
  );
}

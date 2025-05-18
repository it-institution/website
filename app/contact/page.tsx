import Container from "@/components/container";

export default function Contact() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-200">
        문의
      </h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">
            이름
          </label>
          <input
            id="name"
            name="name"
            className="w-full border rounded px-3 py-2"
            placeholder="이름을 입력하세요"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="message">
            문의 내용
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border rounded px-3 py-2"
            rows={4}
            placeholder="문의 내용을 입력하세요"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors"
        >
          보내기
        </button>
      </form>
    </Container>
  );
}

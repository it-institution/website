import Container from "@/components/container";

export default function Gallery() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-200">
        갤러리
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
          사진1
        </div>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
          사진2
        </div>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
          사진3
        </div>
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500">
          사진4
        </div>
      </div>
    </Container>
  );
}

import Container from "@/components/container";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <h1 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-200">
        IT Institution
      </h1>
      <p className="mb-8 text-lg text-gray-700 dark:text-gray-200">
        Welcome to the IT Institution website. Explore our blog and resources.
      </p>
    </Container>
  );
}

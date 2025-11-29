import Container from "@/components/container";
import { blog, getPostsMetadata } from "@/lib/source";
import { BlogList } from "./list";

export default function Page() {
  const posts = getPostsMetadata(
    blog.getPages() as import("@/lib/source").BlogPost[]
  );

  return (
    <Container>
      <BlogList posts={posts} />
    </Container>
  );
}

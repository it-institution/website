import { BlogList } from "./list";
import { blog, getPostsMetadata } from "@/lib/source";
import Container from "@/components/container";

export default function Page() {
  const posts = getPostsMetadata(blog.getPages());

  return (
    <Container>
      <BlogList posts={posts} />
    </Container>
  );
}

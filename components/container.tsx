import { ReactNode } from "react";

/**
 * A unified container for page content, enforcing consistent layout and spacing.
 * Usage: <Container>...</Container>
 */
export default function Container({ children }: { children: ReactNode }) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-12">
      {children}
    </section>
  );
}

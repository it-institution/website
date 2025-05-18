import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A unified container for page content, enforcing consistent layout and spacing.
 * Usage: <Container>...</Container>
 * Usage with size: <Container size="md">...</Container>
 */
export default function Container({
  children,
  size = "lg",
  className,
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl",
  };

  return (
    <section
      className={cn(
        "mx-auto flex flex-col gap-8 px-4 py-12",
        sizes[size],
        className
      )}
    >
      {children}
    </section>
  );
}

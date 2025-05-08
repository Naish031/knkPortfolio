import { cn } from "@/lib/utils";

type BoundedProps = {
  children: React.ReactNode;
  className?: string;
  yPadding?: "sm" | "base" | "lg" | "none";
  as?: React.ElementType;
};

export default function Bounded({
  children,
  className,
  yPadding = "base",
  as: Component = "section",
}: BoundedProps) {
  const yPaddingClasses =
    yPadding === "none"
      ? ""
      : yPadding === "sm"
      ? "py-2"
      : yPadding === "lg"
      ? "py-6"
      : "py-5";

  return (
    <Component className={cn("mx-auto max-w-screen-xxxl px-5", yPaddingClasses, className)}>
      {children}
    </Component>
  );
}

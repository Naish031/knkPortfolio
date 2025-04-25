import { cn } from "@/lib/utils";

export default function Bounded({
  children,
  className,
  yPadding = "base",
}: {
  children: React.ReactNode;
  className?: string;
  yPadding?: "sm" | "base" | "lg";
}) {
  const yPaddingClasses =
    yPadding === "sm"
      ? "py-2"
      : yPadding === "lg"
      ? "py-6"
      : "py-5";

  return (
    <div className={cn("mx-auto max-w-screen-xxxl px-5", yPaddingClasses, className)}>
      {children}
    </div>
  );
}

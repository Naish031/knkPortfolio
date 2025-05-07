import { cn } from "@/lib/utils";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        "text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl",
        className,
      )}
    >
      {text}
    </h1>
  );
};

export default Title;

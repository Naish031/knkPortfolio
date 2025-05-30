"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  HTMLMotionProps,
} from "framer-motion";

type AnimatedLinkProps = HTMLMotionProps<"a"> & {
  children: React.ReactNode;
  className?: string;
};

const AnimatedLink = React.forwardRef<HTMLAnchorElement, AnimatedLinkProps>(
  ({ className, children, href, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.a
        ref={ref}
        href={href}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? `${radius}px` : "0px"} circle at ${mouseX}px ${mouseY}px,
              #5f0f4e,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className={cn(
          "group/link block rounded-lg p-[2px] transition duration-300",
          className,
        )}
        {...props}
      >
        <span className="flex h-10 w-full items-center rounded-md bg-[#fff7ff] px-3 py-2 text-sm font-semibold text-[#5f0f4e]">
          {children}
        </span>
      </motion.a>
    );
  },
);

AnimatedLink.displayName = "AnimatedLink";

export { AnimatedLink };

"use client";
import * as React from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const AnimatedLink = React.forwardRef<HTMLAnchorElement, AnimatedLinkProps>(
  ({ className, children, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent<HTMLDivElement>) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        // style={{
        //   background: useMotionTemplate`
        //     radial-gradient(
        //       ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        //       #3b82f6,
        //       transparent 80%
        //     )
        //   `,
        // }}
        className="group/link inline-block rounded-lg p-[2px] transition duration-300"
      >
        <a
          ref={ref}
          className={cn(
            `inline-block rounded-md bg-[#F5F5F5] px-4 py-2 text-sm text-black shadow-input transition duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 group-hover/link:shadow-none`,
            className,
          )}
          {...props}
        >
          {children}
        </a>
      </motion.div>
    );
  },
);

AnimatedLink.displayName = "AnimatedLink";

export { AnimatedLink };

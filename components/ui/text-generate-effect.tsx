"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.4,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 }); 

  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration || 0.8,
          delay: stagger(0.15),
          type: "spring",
          bounce: 0.4,
          stiffness: 100,
          restDelta: 0.001,
          restSpeed: 0.001,
          ease: "easeInOut",
        },
      );
    }
  }, [isInView, animate, duration, filter]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="leading-snug text-black opacity-0"
          style={{
            filter: filter ? "blur(3px)" : "none",
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("font-medium", className)} ref={containerRef}>
      <div className="mt-4">
        <div className="text-xl tracking-wide text-black md:text-2xl xl:text-3xl">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};


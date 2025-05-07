
"use client";

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Company {
  id: string;
  name: string;
  logo: string;
  heading: string;
  description: string;
  backgroundImage: string;
}

interface CompanyCardProps {
  company: Company;
  selected: boolean;
  onClick: () => void;
  index: number;
  isMobile?: boolean;
}

export default function CompanyCard({
  company,
  selected,
  onClick,
  index,
  isMobile = false,
}: CompanyCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      cardControls.start("visible");
      setTimeout(() => imageControls.start("visible"), 400);
    }
  }, [isInView]);

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.15, duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={boxVariants}
      initial="hidden"
      animate={cardControls}
      className="w-full"
    >
      {/* Card */}
      <div
        onClick={onClick}
        className={`flex cursor-pointer items-center justify-center gap-4 rounded-lg p-8 shadow-md transition-all duration-300 ${
          selected ? "bg-[#5f0f4e] text-white" : "bg-pink-50"
        } ${!isMobile ? "hover:scale-105" : ""}`}
      >
        <Image src={company.logo} alt={company.name} width={55} height={55} />
        <p className="text-xl">{company.name}</p>
      </div>

      {/* Image and Description (conditionally rendered) */}
      {selected && (
        <motion.div
          className="relative mt-4 w-full overflow-hidden rounded-lg"
          initial="hidden"
          animate={imageControls}
          variants={imageVariants}
        >
          <div
            className={`relative w-full overflow-hidden rounded-lg ${
              isMobile ? "aspect-[9/12]" : "aspect-[16/9]"
            }`}
          >
            <Image
              src={company.backgroundImage}
              alt=""
              fill
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </div>
          <div
            className={`absolute ${
              isMobile ? "top-3" : "left-4 top-4"
            } w-full max-w-md rounded-lg border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur-sm`}
          >
            <p className="mb-4 text-sm text-black md:text-base">
              {company.description}
            </p>
            <button className="rounded-lg border border-black px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white md:text-base">
              Learn More
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

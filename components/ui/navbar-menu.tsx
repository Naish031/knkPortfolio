"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  icon,
  className,
  href,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  const renderContent = () => (
    <div className="relative">
      <motion.div
        transition={{ duration: 0.3 }}
        className={cn(
          "group flex w-[84px] cursor-pointer items-center justify-center text-black hover:font-semibold hover:text-[#5f0f4e]",
          className,
        )}
        onClick={(e) => {
          if (children) {
            e.preventDefault();
            setActive(active === item ? null : item);
          }
        }}
      >
        {item}
        {icon && (
          <ChevronDownIcon
            className={cn(
              "ml-1 h-4 w-4 text-gray-500 transition-transform duration-200",
              active === item && "rotate-180",
              "group-hover:rotate-180",
              "group-hover:text-[#5f0f4e]",
            )}
          />
        )}
      </motion.div>

      {children && active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute left-0 top-[calc(100%_+_1.2rem)] pt-2"
          onMouseEnter={() => setActive(item)}
          // onMouseLeave={() => setActive(null)}
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="overflow-hidden rounded-2xl border border-black/[0.2] bg-white shadow-xl backdrop-blur-sm"
          >
            <motion.div layout className="h-full w-max p-1.5">
              {children}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="relative" onMouseEnter={() => setActive(item)}>
      {renderContent()}
    </Link>
  ) : (
    <div className="relative" onMouseEnter={() => setActive(item)}>
      {renderContent()}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex items-center justify-between space-x-4 bg-white py-4"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  href,
  src,
}: {
  title: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex gap-2">
      <Image
        src={src}
        width={30}
        height={30}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
        priority
      />
      <div>
        <h4 className="mb-1 text-sm font-medium text-black">{title}</h4>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a {...rest} className="text-neutral-700 hover:text-black">
      {children}
    </a>
  );
};

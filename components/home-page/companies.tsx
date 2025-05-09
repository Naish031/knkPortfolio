"use client";

import Image from "next/image";
import Title from "../common/title";
import Bounded from "../common/bounded";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useAnimation, useInView } from "motion/react";

const companies = [
  {
    id: "kktek",
    name: "K&K Tek",
    logo: "/assets/logos/knkLogo.png",
    heading: "Specialists in Civil and MEP Solutions",
    description:
      "Specialists in Civil and MEP Solutions K&K TEK is dedicated to delivering top-notch civil, mechanical, electrical, and plumbing (MEP) services for commercial and industrial markets...",
    backgroundImage:
      "https://framerusercontent.com/images/Vcmw0Pke9RK5hnXnDCWsBFzEDc.jpg",
    // backgroundImage: "/assets/images/homepage/constructionSite.png",
  },
  {
    id: "kza",
    name: "KZA",
    logo: "/assets/logos/kzLogo.png",
    heading: "Experts in MEP Consultancy and Design",
    description:
      "Experts in MEP Consultancy and Design. Since 2020, K&Z Associates has been a trusted name in MEP design and consultancy...",
    backgroundImage:
      "https://framerusercontent.com/images/IUEoy5DmZnBD6y5dWRgJGhiQM.jpg",
    // backgroundImage: "/assets/images/homepage/machineVehicle.png",
  },
  {
    id: "kktameer",
    name: "K&K Tameer",
    logo: "/assets/logos/TAMEER.png",
    heading: "Shaping the Future of Construction",
    description:
      "Shaping the Future of Construction. K&K Tameer is set to revolutionize the construction industry...",
    backgroundImage:
      "https://framerusercontent.com/images/kowsLNxnpQclOQJjDCjUkZkX0yw.jpg",
    // backgroundImage: "/assets/images/homepage/laptop.png",
  },
];

export default function Companies() {
  const [selectedCompany, setSelectedCompany] = useState("kktek");
  const [isChanging, setIsChanging] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const titleControls = useAnimation();
  const boxControls = useAnimation();
  const imageControls = useAnimation();

  useEffect(() => {
    if (isInView && !isChanging) {
      titleControls.start("visible");
      boxControls.start("visible");
      imageControls.start("visible");
    }
  }, [isInView, selectedCompany, isChanging, titleControls, boxControls, imageControls]);

  const handleCompanyChange = (id: string) => {
    setIsChanging(true);
    setTimeout(() => {
      setSelectedCompany(id);
      setIsChanging(false);
    }, 300);
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-white" ref={ref}>
      <Bounded>
        <div className="flex flex-col gap-8">
          {/* Title */}
          <motion.div
            initial="hidden"
            animate={titleControls}
            variants={titleVariants}
          >
            <Title text="Our Companies" className="font-medium" />
          </motion.div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                variants={boxVariants}
                custom={index}
                initial="hidden"
                animate={boxControls}
                className="relative w-full"
              >
                <div
                  className={cn(
                    "flex cursor-pointer items-center justify-center gap-4 rounded-lg bg-pink-50 p-8 shadow-md transition-colors duration-300",
                    selectedCompany === company.id && "bg-[#5f0f4e] text-white",
                  )}
                  onClick={() => handleCompanyChange(company.id)}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={55}
                    height={55}
                    priority
                  />
                  <p className="text-xl">{company.name}</p>
                </div>
                <AnimatePresence mode="wait">
                  {selectedCompany === company.id && (
                    <motion.div
                      className="relative mt-4 w-full overflow-hidden rounded-lg"
                      initial="hidden"
                      animate={imageControls}
                      variants={imageVariants}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="relative aspect-[9/12] w-full overflow-hidden rounded-lg">
                        <Image
                          src={company.backgroundImage}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw"
                          className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="absolute top-3 w-full max-w-md rounded-lg border border-gray-200 bg-white/90 p-3 shadow-lg sm:p-5">
                        <p className="mb-4 whitespace-pre-line text-sm text-black md:text-base">
                          {company.description}
                        </p>
                        <button className="rounded-lg border border-black px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white md:text-base">
                          Learn More
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:flex-col">
            <div className="flex justify-between gap-8">
              {companies.map((company, index) => (
                <motion.div
                  key={company.id}
                  variants={boxVariants}
                  custom={index}
                  initial="hidden"
                  animate={boxControls}
                  className="w-full"
                >
                  <div
                    className={cn(
                      "flex cursor-pointer items-center justify-center gap-4 rounded-lg bg-pink-50 p-8 shadow-md transition-all duration-300 hover:scale-105",
                      selectedCompany === company.id &&
                        "bg-[#5f0f4e] text-white",
                    )}
                    onClick={() => handleCompanyChange(company.id)}
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={55}
                      height={55}
                      priority
                    />
                    <p className="text-xl">{company.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {selectedCompany && (
              <motion.div
                key={selectedCompany}
                className="relative mt-8 w-full rounded-lg"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={
                      companies.find((c) => c.id === selectedCompany)
                        ?.backgroundImage || ""
                    }
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </div>
                <div className="absolute left-4 top-4 w-full max-w-md rounded-lg border border-gray-200 bg-white/90 p-6 shadow-lg backdrop-blur-sm">
                  <p className="mb-4 whitespace-pre-line text-black">
                    {
                      companies.find((c) => c.id === selectedCompany)
                        ?.description
                    }
                  </p>
                  <button className="rounded-lg border border-black px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Learn More
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Bounded>
    </section>
  );
}

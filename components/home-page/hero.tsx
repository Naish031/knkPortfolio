"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import Bounded from "../common/bounded";

const Hero = () => {

  const images = [
    "/assets/images/homepage/heroOne.png",
    "/assets/images/homepage/heroTwo.png",
    "/assets/images/homepage/heroThree.png",
  ];

  return (
    <Bounded className="relative" yPadding="lg">
      <ImagesSlider className="h-[40rem] rounded-lg" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex size-full flex-col items-start justify-end"
        >
          <div className="m-2.5 hidden rounded-lg bg-[#5f0f4e] px-4 py-2.5 text-white shadow-lg backdrop-blur-sm md:m-4 md:block md:px-6 md:py-4 xl:px-10">
            <motion.p className="py-4 text-left text-xl font-bold md:text-4xl">
              Where expertise <br /> meets excellence
            </motion.p>
          </div>
        </motion.div>
      </ImagesSlider>
      <div className="m-2.5 block rounded-lg bg-[#5f0f4e] px-4 py-2.5 text-white shadow-lg backdrop-blur-sm md:m-4 md:hidden md:px-6 md:py-4 xl:px-10">
        <motion.p className="py-4 text-left text-2xl font-semibold md:text-4xl">
          Where expertise{" "}
          <span className="block sm:inline"> meets excellence</span>
        </motion.p>
      </div>
    </Bounded>
  );
};

export default Hero;

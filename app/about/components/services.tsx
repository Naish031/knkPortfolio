"use client";

import { motion } from "framer-motion";
import { companies } from "@/data/companies";
import { CompanySlug } from "@/data/companies";
import { useScroll } from "framer-motion";

export default function Services({
  companySlug,
}: {
  companySlug: CompanySlug;
}) {
  const services = companies[companySlug]?.services?.list;
  const heading = companies[companySlug]?.services?.heading;
  const { scrollYProgress } = useScroll();
  const scrollY = scrollYProgress.get();
  console.log("scrollYProgress", scrollY);
  // const scrollYPercentage = Math.round(scrollY * 100);
  // const scrollYPercentageString = `${scrollYPercentage}%`;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col py-12 lg:flex-row lg:justify-between lg:gap-20">
      <div className="mb-8 flex flex-col gap-4 lg:w-1/2">
        <h2 className="mb-4 text-3xl font-semibold text-[#5f0f4e]">
          {heading}
        </h2>
        <p className="text-gray-600">
          {companies[companySlug]?.services?.description}
        </p>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="grid grid-cols-1 gap-6 lg:w-1/2"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -5 }}
            className="rounded-lg border border-gray-100 bg-[#fff7ff] p-8 shadow-md"
          >
            <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#5f0f4e] p-4 text-xl text-white">
              {service.icon}
            </div>
            <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

// DeepSeek Animation
// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { companies } from "@/data/companies";
// import { CompanySlug } from "@/data/companies";
// import { useRef } from "react";

// export default function Services({
//   companySlug,
// }: {
//   companySlug: CompanySlug;
// }) {
//   const services = companies[companySlug]?.services?.list;
//   const heading = companies[companySlug]?.services?.heading;
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   return (
//     <section
//       className="flex flex-col py-12 lg:flex-row lg:justify-between lg:gap-20"
//       ref={containerRef}
//     >
//       <div className="mb-8 flex flex-col gap-4 lg:w-1/2">
//         <h2 className="mb-4 text-3xl font-bold text-[#5f0f4e]">{heading}</h2>
//         <p className="text-gray-600">
//           {companies[companySlug]?.services?.description}
//         </p>
//       </div>

//       <div className="relative grid grid-cols-1 gap-6 lg:w-1/2">
//         {services.map((service, index) => {
//           const y = useTransform(
//             scrollYProgress,
//             [0, 1],
//             [100 * (services.length - index), -100 * index],
//           );

//           const opacity = useTransform(
//             scrollYProgress,
//             [index * 0.2, index * 0.2 + 0.2],
//             [0, 1],
//           );

//           const scale = useTransform(
//             scrollYProgress,
//             [index * 0.2, index * 0.2 + 0.2],
//             [0.9, 1],
//           );

//           return (
//             <motion.div
//               key={index}
//               style={{
//                 y,
//                 opacity,
//                 scale,
//                 zIndex: services.length - index,
//               }}
//               className="rounded-lg border border-gray-100 bg-[#fff7ff] p-8 shadow-md"
//             >
//               <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full bg-[#5f0f4e] p-4 text-xl text-white">
//                 {service.icon}
//               </div>
//               <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

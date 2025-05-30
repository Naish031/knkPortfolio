// "use client";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "motion/react";
// import React, { useEffect, useState } from "react";

// export const ImagesSlider = ({
//   images,
//   children,
//   overlay = true,
//   overlayClassName,
//   className,
//   autoplay = true,
//   direction = "right",
// }: {
//   images: string[];
//   children: React.ReactNode;
//   overlay?: React.ReactNode;
//   overlayClassName?: string;
//   className?: string;
//   autoplay?: boolean;
//   direction?: "right" | "left" | "up" | "down";
// }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [loadedImages, setLoadedImages] = useState<string[]>([]);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === images.length ? 0 : prevIndex + 1,
//     );
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
//     );
//   };

//   useEffect(() => {
//     loadImages();
//   }, []);

//   const loadImages = () => {
//     setLoading(true);
//     const loadPromises = images.map((image) => {
//       return new Promise((resolve, reject) => {
//         const img = new Image();
//         img.src = image;
//         img.onload = () => resolve(image);
//         img.onerror = reject;
//       });
//     });

//     Promise.all(loadPromises)
//       .then((loadedImages) => {
//         setLoadedImages(loadedImages as string[]);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Failed to load images", error));
//   };
//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "ArrowRight") {
//         handleNext();
//       } else if (event.key === "ArrowLeft") {
//         handlePrevious();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     // autoplay
//     let interval: any;
//     if (autoplay) {
//       interval = setInterval(() => {
//         handleNext();
//       }, 5000);
//     }

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       clearInterval(interval);
//     };
//   }, []);

//   const slideVariants = {
//     initial: {
//       scale: 0,
//       opacity: 0,
//     },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.645, 0.045, 0.355, 1.0],
//       },
//     },
//     upExit: {
//       opacity: 1,
//       x: "-150%",
//       transition: {
//         duration: 1,
//       },
//     },
//     downExit: {
//       opacity: 1,
//       x: "150%",
//       transition: {
//         duration: 1,
//       },
//     },
//   };

//   const areImagesLoaded = loadedImages.length > 0;

//   return (
//     <div
//       className={cn(
//         "relative flex h-full w-full items-center justify-center overflow-hidden",
//         className,
//       )}
//       style={{
//         perspective: "1000px",
//       }}
//     >
//       {areImagesLoaded && children}
//       {areImagesLoaded && overlay && (
//         <div
//           className={cn("absolute inset-0 z-40 bg-black/10", overlayClassName)}
//         />
//       )}

//       {areImagesLoaded && (
//         <AnimatePresence>
//           {!loadedImages[currentIndex] && (
//             <div
//               className={cn(
//                 "absolute inset-0 animate-pulse bg-gray-200 transition-opacity duration-700",
//                 loading && "opacity-0",
//               )}
//             />
//           )}
//           <motion.img
//             key={currentIndex}
//             src={loadedImages[currentIndex]}
//             initial="initial"
//             animate="visible"
//             exit={direction === "right" ? "upExit" : "downExit"}
//             variants={slideVariants}
//             className={cn(
//               "image absolute inset-0 !m-0 h-full w-full object-cover object-center",
//               loading ? "opacity-100" : "opacity-0",
//             )}
//           />
//         </AnimatePresence>
//       )}
//     </div>
//   );
// };

"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "right",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "right" | "left" | "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1,
    );
    setImageLoaded(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
    );
    setImageLoaded(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext();
      else if (event.key === "ArrowLeft") handlePrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    let interval: any;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay]);

  const slideVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
    >
      {children}
      {overlay && (
        <div
          className={cn("absolute inset-0 z-40 bg-black/10", overlayClassName)}
        />
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 z-10 h-full w-full"
        >
          {!imageLoaded && (
            <div className="absolute inset-0 z-0 animate-pulse bg-gray-300" />
          )}
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            fill
            className={cn(
              "object-cover object-center transition-opacity duration-700",
              imageLoaded ? "opacity-100" : "opacity-0",
            )}
            onLoad={() => setImageLoaded(true)}
            sizes="100vw"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

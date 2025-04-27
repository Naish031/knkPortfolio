"use client";

import Image from "next/image";
import Title from "../common/title";
import Bounded from "../common/bounded";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function Companies() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(
    "k&k-tek",
  );
  const [isInView, setIsInView] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCompanyChange = (id: string) => {
    setIsChanging(true);
    setTimeout(() => {
      setSelectedCompany(id);
      setIsChanging(false);
    }, 300);
  };

  const companies = [
    {
      id: "k&k-tek",
      name: "K&K Tek",
      logo: "/assets/logos/knkLogo.png",
      heading: "Specialists in Civil and MEP Solutions",
      description:
        "Specialists in Civil and MEP Solutions K&K TEK is dedicated to delivering top-notch civil, mechanical, electrical, and plumbing (MEP) services for commercial and industrial markets. From HVAC systems to firefighting solutions, our expertise ensures safe, efficient, and sustainable environments. Our mission is to provide unparalleled engineering excellence while meeting international safety standards..",
      backgroundImage:
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "kza",
      name: "KZA",
      logo: "/assets/logos/kzLogo.png",
      heading: "Experts in MEP Consultancy and Design",
      description:
        "Experts in MEP Consultancy and Design. Since 2020, K&Z Associates has been a trusted name in MEP design and consultancy. We offer tailored solutions in HVAC, plumbing, fire protection, and project management. Known for innovation and sustainability, K&Z Associates provides optimized designs that cater to diverse sectors, including healthcare, education, and high-rise buildings.",
      backgroundImage:
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "k&k-tameer",
      name: "K&K Tameer",
      logo: "/assets/logos/TAMEER.png",
      heading: "Shaping the Future of Construction",
      description:
        "Shaping the Future of Construction. K&K Tameer is set to revolutionize the construction industry by bringing cutting-edge solutions to residential, commercial, and industrial spaces. Our focus will be on delivering excellence, adhering to global standards, and transforming ideas into reality. Stay tuned as we build a new legacy!",
      backgroundImage:
        "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-white" ref={sectionRef}>
      <Bounded>
        <div className="flex flex-col gap-8">
          <Title text="Our Companies" />

          {/* Mobile Layout */}
          <div className="flex flex-col gap-8 md:hidden">
            {companies.map((company, index) => (
              <div
                key={company.id}
                className={cn(
                  "relative w-full transition-all duration-500 ease-out",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={cn(
                    "flex cursor-pointer items-center justify-center gap-4 rounded-lg bg-pink-50 p-8 shadow-md transition-colors duration-300",
                    selectedCompany === company.id && "bg-[#5f0f4e] text-white",
                  )}
                  onClick={() => setSelectedCompany(company.id)}
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={55}
                    height={55}
                    priority
                    className="transition-opacity duration-500"
                  />
                  <p className="text-2xl">{company.name}</p>
                </div>

                {selectedCompany === company.id && (
                  <div className="relative mt-4 w-full overflow-hidden rounded-lg">
                    <div className="relative aspect-[9/12] w-full">
                      <Image
                        src={company.backgroundImage}
                        alt=""
                        fill
                        className="object-cover transition-opacity duration-500"
                      />
                    </div>
                    <div className="absolute top-4 m-2 rounded-lg border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
                      <p className="mb-4 whitespace-pre-line text-sm text-black md:text-base">
                        {company.description}
                      </p>
                      <button className="rounded-lg border border-black px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white md:text-base">
                        Learn More
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:flex-col">
            <div className="flex justify-between gap-8">
              {companies.map((company, index) => (
                <div
                  key={company.id}
                  className={cn(
                    "w-full transition-all duration-500 ease-out",
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-5 opacity-0",
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={cn(
                      "flex cursor-pointer items-center justify-center gap-4 rounded-lg bg-pink-50 p-8 shadow-md transition-all duration-300 hover:scale-[1.02]",
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
                      className="transition-opacity duration-500"
                    />
                    <p className="text-2xl">{company.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {selectedCompany && (
              <div
                className={cn(
                  "relative mt-8 w-full rounded-lg transition-opacity duration-300",
                  isChanging ? "opacity-0" : "opacity-100",
                )}
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={
                      companies.find((c) => c.id === selectedCompany)
                        ?.backgroundImage || ""
                    }
                    alt=""
                    fill
                    className={cn(
                      "object-cover transition-opacity duration-500",
                      isInView ? "opacity-100" : "opacity-0",
                    )}
                    quality={100}
                  />
                </div>
                <div className="absolute left-4 top-4 w-full max-w-md rounded-lg border border-gray-200 bg-white/90 p-6 shadow-lg backdrop-blur-sm">
                  <p className="mb-4 whitespace-pre-line text-black">
                    {
                      companies.find((c) => c.id === selectedCompany)
                        ?.description
                    }
                  </p>
                  <button className="rounded-lg border border-black px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white md:text-base">
                    Learn More
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Bounded>
    </section>
  );
}

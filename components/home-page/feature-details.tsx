import { companyProjectsInfo } from "@/constants/whyUs";
import React from "react";
import { Container, Section } from "../craft";

const FeatureDetails = () => {
  return (
    <Container>
      <Section
        className="not-prose relative mb-6 h-full w-full bg-cover bg-center px-4 md:mb-12 md:px-8"
        style={{
          backgroundImage: "url('assets/images/whyUs/whyUsBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      >
        <Container className="flex flex-col gap-6 !p-0 md:gap-16 lg:gap-24 xl:gap-32">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            We succeed <br /> with teamwork.
          </h2>

          {/* Overlay Content */}
          <div className="z-30 grid w-full gap-2 md:grid-cols-2 xl:grid-cols-4">
            {companyProjectsInfo.map(({ number, title }, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-between gap-2 rounded-2xl border border-[#0B9443] bg-black bg-opacity-50 p-4 shadow-md"
              >
                <p className="text-4xl font-bold text-white">{number}</p>
                <p className="text-md text-[#0B9443]">{title}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Container>
  );
};

export default FeatureDetails;

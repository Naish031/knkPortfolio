import { companyProjectsInfo } from "@/constants/whyUs";
import React from "react";
import { Container, Section } from "../craft";
import { Button } from "../ui/button";
import Link from "next/link";

const FeatureDetails = () => {
  return (
    <Container>
      <Section
        className="mb-6 md:mb-12 px-4 md:px-8 bg-cover bg-center relative w-full h-full not-prose"
        style={{
          backgroundImage: "url('assets/images/whyUs/whyUsBg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
        }}
      >
        <Container className="!p-0 flex flex-col gap-6 md:gap-16 lg:gap-24 xl:gap-32">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              We succeed <br /> with teamwork.
            </h2>
            <Link href="#contact">
              <Button
                className="w-fit rounded-full font-normal text-lg min-w-[142px] h-[64px] md:min-w-[180px] md:h-[80px]"
                size={"lg"}
                variant={"default"}
              >
                Contact
              </Button>
            </Link>
          </div>
          {/* Overlay Content */}
          <div className="w-full z-30 grid md:grid-cols-2 xl:grid-cols-4 gap-2">
            {companyProjectsInfo.map(({ number, title }, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-start justify-between gap-2 bg-black bg-opacity-50 p-4 rounded-2xl shadow-md border border-[#0B9443]"
              >
                <p className="text-4xl font-bold text-white ">{number}</p>
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

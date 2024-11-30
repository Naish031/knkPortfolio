"use client";

// React and Next.js imports
import { useState } from "react";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";
import Title from "@/components/common/title";
import Link from "next/link";

const Contact = () => {
  return (
    <Section
      className="px-4 md:px-8 lg:px-12 bg-cover bg-center no-prose"
      style={{
        backgroundImage: "url('/assets/images/contactBackgroundImage.png')",
      }}
      id="contact"
    >
      <Container className="flex flex-col items-center gap-6 p-6 text-center max-w-[1220px]">
        <div className="flex flex-col items-start justify-start gap-4 md:gap-8">
          <Title
            text="Your Trusted MEP Partner"
            className="text-white lg:!text-6xl !font-bold !mb-0"
          />
          <p className="text-left text-lg text-white md:text-3xl lg:text-5xl">
            Innovative mechanical, electrical, and plumbing solutions for every
            project.
          </p>

          <Link href="mailto:naish031@gmail.com">
            <Button className="min-w-40 xl:max-w-48 bg-[#0B9443] hover:bg-[#0B9443]/80 rounded-full py-8 max-h-16 text-white font-medium text-lg md:text-2xl xl:max-h-20">
              Contact
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;

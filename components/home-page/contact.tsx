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
      className="no-prose bg-cover bg-center px-4 md:px-8 lg:px-12"
      style={{
        backgroundImage: "url('/assets/images/contactBackgroundImage.png')",
      }}
      id="contact"
    >
      <Container className="flex max-w-[1220px] flex-col items-center gap-6 p-6 text-center">
        <div className="flex flex-col items-start justify-start gap-4 md:gap-8">
          <Title
            text="Your Trusted MEP Partner"
            className="!mb-0 !font-bold text-white lg:!text-6xl"
          />
          <p className="text-left text-lg text-white md:text-3xl lg:text-5xl">
            Innovative mechanical, electrical, and plumbing solutions for every
            project.
          </p>

          <Link href="mailto:naish031@gmail.com">
            <Button className="max-h-16 min-w-40 rounded-full bg-[#0B9443] py-8 text-lg font-medium text-white hover:bg-[#0B9443]/80 md:text-2xl xl:max-h-20 xl:max-w-48">
              Contact
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;

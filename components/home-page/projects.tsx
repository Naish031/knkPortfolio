"use client";

// React and Next.js imports
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// UI component imports
import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Title from "../common/title";

// Data imports
import { featuredProjects, tabs } from "@/constants/featuredProjects";
import type { TabItem } from "@/constants/featuredProjects";

type SelectedTab = TabItem["value"];

const FeaturedProjects = () => {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>("allProjects");

  // Filter projects based on the selected tab
  const filteredProjects = featuredProjects.filter((project) =>
    selectedTab === "allProjects"
      ? true
      : project.categories.includes(selectedTab)
  );

  // Limit the number of projects to display
  const displayedProjects =
    selectedTab === "allProjects"
      ? filteredProjects.slice(0, 4)
      : filteredProjects;

  return (
    <Section className="border-t border-gray-200" id="featured-projects">
      <Container>
        <Title text="Featured Projects" className="text-center" />

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12 mb-10">
          {tabs.map((tab) => (
            <Button
              key={tab.value}
              size="lg"
              className={`w-[142px] h-[64px] rounded-full text-base ${
                selectedTab === tab.value
                  ? "bg-black text-white font-medium cursor-pointer hover:dark:bg-[#0B9443]"
                  : "bg-white text-black font-normal cursor-pointer hover:bg-[#0B9443] hover:text-white"
              }`}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="grid items-stretch gap-4 md:gap-8 lg:gap-12 md:grid-cols-2">
          {/* Render filtered projects */}
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <div
                key={project.title}
                className="not-prose flex flex-col items-center justify-center gap-1 overflow-hidden relative"
              >
                <div className="w-full relative md:w-full h-auto aspect-[8/6]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={350}
                    height={350}
                    className="object-cover absolute inset-0 h-full w-full"
                    style={{
                      borderRadius: "30px",
                    }}
                  />
                </div>
                <div className="absolute top-4 left-4 rounded-2xl bg-white py-1 w-28 md:max-w-32">
                  <p className="text-black text-center text-sm">{project.location}</p>
                </div>

                <h3 className="w-full text-left text-xl md:text-2xl font-medium mt-1">
                  {project.title}
                </h3>
              </div>
            ))
          ) : (
            <p className="col-span-2 text-center text-lg font-medium">
              Currently, there are no projects listed.
            </p>
          )}
        </div>

        {/* All Projects Button */}
        <div className="flex justify-center mt-10">
          <Link href="/projects">
            <Button
              size="lg"
              className="bg-transparent text-black py-6 px-12 rounded-full dark:text-white text-lg md:text-xl border hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black border-black/10 dark:border-white min-h-[64px] md:min-h-[70px]"
            >
              All Projects
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedProjects;

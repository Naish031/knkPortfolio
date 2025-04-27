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
      : project.categories.includes(selectedTab),
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
        <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {tabs.map((tab) => (
            <Button
              key={tab.value}
              size="lg"
              className={`h-[64px] w-[142px] rounded-full text-base ${
                selectedTab === tab.value
                  ? "cursor-pointer bg-black font-medium text-white"
                  : "cursor-pointer bg-white font-normal text-black hover:bg-[#0B9443] hover:text-white"
              }`}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="grid items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Render filtered projects */}
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <div
                key={project.title}
                className="not-prose relative flex flex-col items-center justify-center gap-1 overflow-hidden"
              >
                <div className="group relative aspect-[8/6] h-auto w-full overflow-hidden rounded-[30px] md:w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={350}
                    height={350}
                    className="absolute inset-0 h-full w-full rounded-[30px] object-cover"
                  />
                  {/* Hover effect details */}
                  <div className="absolute inset-0 flex translate-y-full flex-col items-start justify-end rounded-[30px] bg-black/50 p-4 text-white transition-transform duration-700 ease-in-out group-hover:translate-y-0">
                    <div className="flex items-center">
                      <Image
                        src={project.details.contractCost.icon}
                        alt="Contract Cost"
                        className="mr-2 h-4 w-4"
                        width={16}
                        height={16}
                      />
                      <span>{project.details.contractCost.value}</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={project.details.height.icon}
                        alt="Height"
                        className="mr-2 h-4 w-4"
                        width={16}
                        height={16}
                      />
                      <span>{project.details.height.value}</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={project.details.time.icon}
                        alt="Time"
                        className="mr-2 h-4 w-4"
                        width={16}
                        height={16}
                      />
                      <span>{project.details.time.value}</span>
                    </div>
                    {/* Display type of work with a single icon */}
                    <div className="flex items-center">
                      <Image
                        src={project.details.typeOfWorkIcon}
                        alt="Type of Work"
                        className="mr-2 h-4 w-4"
                        width={16}
                        height={16}
                      />
                      <span>{project.details.typeOfWork.join(", ")}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 top-4 w-28 rounded-2xl bg-white py-1 md:max-w-32">
                  <p className="text-center text-sm text-black">
                    {project.location}
                  </p>
                </div>

                <h3 className="mt-1 w-full text-left text-xl font-medium text-black md:text-2xl">
                  {project.title}
                </h3>
              </div>
            ))
          ) : (
            <p className="col-span-2 text-center text-lg font-medium text-black">
              Currently, there are no projects listed.
            </p>
          )}
        </div>

        {/* All Projects Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/projects">
            <Button
              size="lg"
              className="min-h-[64px] rounded-full border border-black/10 bg-transparent px-12 py-6 text-lg text-black hover:bg-black hover:text-white md:min-h-[70px] md:text-xl"
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

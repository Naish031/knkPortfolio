"use client";

// React and Next.js imports
import { useState } from "react";
import Image from "next/image";

// UI component imports
import { Container, Section } from "@/components/craft";
import Title from "@/components/common/title";

// Data imports
import { featuredProjects } from "@/constants/featuredProjects";
import type { TabItem } from "@/constants/featuredProjects";

type SelectedTab = TabItem["value"];

const AllProjects = () => {
  const [selectedTab, setSelectedTab] = useState<SelectedTab>("allProjects");

  // Filter projects based on the selected tab
  const filteredProjects = featuredProjects.filter((project) =>
    selectedTab === "allProjects"
      ? true
      : project.categories.includes(selectedTab),
  );

  return (
    <Section className="border-t border-gray-200" id="all-projects">
      <Container>
        <Title
          text="All Projects"
          className="mb-10 ml-2 mt-5 text-left font-semibold"
        />

        <div className="grid items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Render filtered projects */}
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
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
                  <p className="text-center text-xs text-black">
                    {project.location}
                  </p>
                </div>

                <h3 className="mt-1 w-full text-left text-xl font-medium md:text-2xl">
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
      </Container>
    </Section>
  );
};

export default AllProjects;

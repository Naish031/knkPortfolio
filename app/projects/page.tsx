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
      : project.categories.includes(selectedTab)
  );

  return (
    <Section className="border-t border-gray-200" id="all-projects">
      <Container>
        <Title text="All Projects" className="text-left ml-2 font-semibold mt-5 mb-10" />

        <div className="grid items-stretch gap-4 md:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Render filtered projects */}
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.title}
                className="not-prose flex flex-col items-center justify-center gap-1 overflow-hidden relative"
              >
                <div className="w-full group overflow-hidden relative md:w-full h-auto aspect-[8/6] rounded-[30px]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={350}
                    height={350}
                    className="object-cover absolute inset-0 h-full w-full rounded-[30px]"
                  />
                  {/* Hover effect details */}
                  <div className="absolute inset-0 bg-black/50 rounded-[30px] flex flex-col items-start justify-end text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                    <div className="flex items-center">
                      <Image
                        src={project.details.contractCost.icon}
                        alt="Contract Cost"
                        className="w-4 h-4 mr-2"
                        width={16}
                        height={16}
                      />
                      <span>{project.details.contractCost.value}</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={project.details.height.icon}
                        alt="Height"
                        className="w-4 h-4 mr-2"
                        width={16}
                        height={16}
                      />
                      <span>{project.details.height.value}</span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src={project.details.time.icon}
                        alt="Time"
                        className="w-4 h-4 mr-2"
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
                        className="w-4 h-4 mr-2"
                        width={16}
                        height={16}
                      />
                      <span>{project.details.typeOfWork.join(", ")}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 rounded-2xl bg-white py-1 w-28 md:max-w-32">
                  <p className="text-black text-center text-xs">
                    {project.location}
                  </p>
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
      </Container>
    </Section>
  );
};

export default AllProjects;

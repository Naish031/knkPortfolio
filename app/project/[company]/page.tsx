import Bounded from "@/components/common/bounded";
import Title from "@/components/common/title";
import { FocusCards } from "@/components/ui/focus-cards";
import { projects, type ProjectImage, type ProjectSlug } from "@/data/projects";

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    company: slug,
  }));
}

export default function ProjectsPage({
  params,
}: {
  params: { company: ProjectSlug };
}) {
  const companyProject = projects[params.company];

  if (params.company === "kktameer") {
    return (
      <Bounded>
        <Title
          text={companyProject.heading}
          className="my-4 text-xl font-medium md:text-3xl"
        />
        <div className="flex h-[45vh] w-full items-center justify-center">
          <h1 className="text-3xl md:text-5xl">
            Currently there are no projects available for K&K Tameer
          </h1>
        </div>
      </Bounded>
    );
  }

  return (
    <Bounded>
      <div className="relative flex flex-col-reverse md:flex-row md:items-start md:gap-12">
        <div className="w-full flex-1 md:order-1">
          <Title
            text={companyProject.heading}
            className="my-6 text-xl font-medium md:text-2xl"
          />

          <div className="mx-auto max-w-screen-xxl">
            <FocusCards
              cards={companyProject.images.map((image: ProjectImage) => ({
                title: image.title ?? "",
                location: image.location ?? "",
                projectType: image.projectType ?? "",
                src: image.src ?? "",
              }))}
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
}

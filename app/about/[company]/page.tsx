import Bounded from "@/components/common/bounded";
import { BackgroundLines } from "@/components/ui/background-lines";

import { companies, CompanySlug } from "@/data/companies";
import { ArrowBigDown } from "lucide-react";
import Image from "next/image";
import Services from "../components/services";
import ImageWithSkeleton from "@/components/common/image-skeleton";

export async function generateStaticParams() {
  return Object.keys(companies).map((slug) => ({
    company: slug,
  }));
}

export default function CompanyPage({
  params,
}: {
  params: { company: CompanySlug };
}) {
  const company = companies[params.company];

  if (params.company == "kktameer") {
    return (
      <Bounded>
        <h1 className="mt-6 text-xl font-medium text-black md:text-3xl">
          {company.title}
        </h1>
        <div className="relative flex h-[65vh] w-full items-center justify-center overflow-hidden">
          <BackgroundLines className="flex w-full flex-col items-center justify-center px-4">
            <div className="relative aspect-[16/9] w-full max-w-2xl overflow-hidden">
              <Image
                src={company.image}
                alt={company.title}
                width={200}
                height={150}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          </BackgroundLines>
        </div>
      </Bounded>
    );
  }

  return (
    <section>
      <Bounded>
        <section className="relative flex flex-col-reverse md:flex-row md:items-start md:gap-12">
          <div className="w-full flex-1 md:order-1">
            <h1 className="my-6 text-xl font-medium text-black md:text-3xl">
              {company.title}
            </h1>
            <div className="max-w-3xl text-lg text-gray-600">
              {company.content}
            </div>
            <div className="mt-8 flex flex-col gap-4 text-gray-600">
              {Object.entries(company.subheadings).map(([heading, content]) => (
                <div key={heading}>
                  <h2 className="text-xl font-semibold text-[#5f0f4e]">
                    {heading}
                  </h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex w-full flex-1 overflow-hidden md:order-2">
            <div className="relative aspect-[16/9] w-full max-w-[860px] overflow-hidden rounded-xl md:aspect-[1/1]">
              <ImageWithSkeleton
                src={company.image}
                alt={company.title}
                width={1200}
                height={800}
                className="transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>
        </section>

        <section>
          <Services companySlug={params.company} />
        </section>
      </Bounded>
    </section>
  );
}

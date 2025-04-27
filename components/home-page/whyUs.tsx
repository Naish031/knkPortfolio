// Layout
import { Section, Container } from "@/components/craft";

import { featureSet, companyDetails } from "@/constants/whyUs";

import Image from "next/image";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: (
      <Image
        src={featureSet[0].icon}
        alt={featureSet[0].title}
        width={30}
        height={30}
        className="h-6 w-6"
      />
    ),
    title: featureSet[0].title,
    description: featureSet[0].description,
    cta: "Learn More",
  },
  {
    icon: (
      <Image
        src={featureSet[1].icon}
        alt={featureSet[1].title}
        width={30}
        height={30}
        className="h-6 w-6"
      />
    ),
    title: featureSet[1].title,
    href: "/",
    description: featureSet[1].description,
    cta: "Learn More",
  },
];
const WhyUs = () => {
  return (
    <Section
      className="not-prose flex h-full flex-col gap-6 !pb-0"
      id="chooseUs"
    >
      <Container className="!pb-0">
        <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-2">
          {/* Image Div also grid column 1 */}
          <div className="h-full w-full">
            {/* image container */}
            <div className="relative aspect-[7/5] h-full w-full overflow-hidden">
              <Image
                src={"/assets/images/whyUs/highRiseBuilding.png"}
                alt="sky rise building"
                fill
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          {/* Featured Text Div and also grid column second */}
          <div className="my-auto mt-6 w-full xl:mt-0">
            <div className="border-primary rounded-2xl border-4 p-2.5">
              {/* Why US? & Description */}
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl font-bold text-black md:text-6xl">
                  {companyDetails.title}
                </h2>
                <p className="text-xl font-normal text-black opacity-70 md:text-2xl">
                  {companyDetails.description}
                </p>
              </div>
              <div className="mt-3 grid gap-6 rounded-2xl md:mt-6 md:grid-cols-2">
                {featureText.map(({ icon, title, description }, index) => (
                  <div
                    className="flex flex-col justify-between gap-6 rounded-3xl border bg-black bg-opacity-5 p-6 transition-all hover:-mt-2 hover:mb-2"
                    key={index}
                  >
                    <div className="grid gap-4">
                      {icon}
                      <h4 className="text-primary text-lg font-semibold">
                        {title}
                      </h4>
                      <p className="text-base font-normal leading-relaxed text-gray-700 opacity-75">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyUs;

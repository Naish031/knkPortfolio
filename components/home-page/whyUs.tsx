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
      className="not-prose flex flex-col gap-6 h-full !pb-0"
      id="chooseUs"
    >
      <Container className="!pb-0">
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-3">
          {/* Image Div also grid column 1 */}
          <div className="w-full h-full">
            {/* image container */}
            <div className="relative w-full h-full aspect-[7/5] overflow-hidden">
              <Image
                src={"/assets/images/whyUs/highRiseBuilding.png"}
                alt="sky rise building"
                fill
                loading="lazy"
                className="object-cover absolute inset-0 w-full h-full"
                style={{
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>

          {/* Featured Text Div and also grid column second */}
          <div className="mt-6 xl:mt-0 w-full my-auto">
            <div className="border-4 border-primary p-2.5 rounded-2xl">
              {/* Why US? & Description */}
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl md:text-6xl font-bold">
                  {companyDetails.title}
                </h2>
                <p className="text-xl md:text-2xl font-normal opacity-70">
                  {companyDetails.description}
                </p>
              </div>
              <div className="mt-3 grid gap-6 md:mt-6 md:grid-cols-2 rounded-2xl">
                {featureText.map(
                  ({ icon, title, description }, index) => (
                    <div
                      className="flex flex-col bg-opacity-5 bg-black justify-between gap-6 rounded-3xl border p-6 transition-all hover:-mt-2 hover:mb-2"
                      key={index}
                    >
                      <div className="grid gap-4">
                        {icon}
                        <h4 className="text-lg font-semibold text-primary">
                          {title}
                        </h4>
                        <p className="text-base leading-relaxed font-normal opacity-75">
                          {description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyUs;

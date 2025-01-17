// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section } from "@/components/craft";
import { Button } from "../ui/button";

// Asset imports
import heroBg from "@/public/assets/images/heroBg.png";

// Data imports
import heroData from "@/constants/hero";

const Hero = () => {
  return (
    <Section className="flex flex-col items-center justify-center py-10 sm:py-14">
      {/* <Container> */}
      <div className="max-w-[95%] mx-auto">
        <div className="relative not-prose mb-8 w-full overflow-hidden ">
          <div className="max-h-[688px] w-full relative aspect-[10/14] md:aspect-[12/11] lg:aspect-[16/9] overflow-hidden rounded-[31px]">
            <Image
              className="h-full w-full object-cover object-center"
              priority
              src={heroBg}
              // width={1216}
              // height={688}
              // fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="hero image"
              placeholder="blur"
              style={{
                borderRadius: "20px",
              }}
            />
          </div>

          <div className="absolute bottom-20 left-4 md:bottom-4 md:left-4 z-20">
            <Balancer className="text-3xl md:text-5xl font-bold text-white">
              {heroData.imageText}
              <br />
              {heroData.imageText2}
            </Balancer>
          </div>

          <div className="absolute bottom-7 left-4 md:bottom-10 md:right-4 md:left-auto z-20">
            <Button
              asChild
              className="w-fit rounded-full font-normal"
              size={"lg"}
              variant={"default"}
            >
              <Link className="not-prose" href="#contact">
                {heroData.button.text}
              </Link>
            </Button>
          </div>
        </div>

        <h3 className="text-muted-foreground lg:max-w-[90%] xl:max-w-[85%] xxl:max-w-[92%] mx-auto">
          <Balancer className="text-3xl text-black md:text-4xl lg:text-5xl text-left lg:leading-tight">
            {heroData.description}
          </Balancer>
        </h3>
      </div>
      {/* </Container> */}
    </Section>
  );
};

export default Hero;

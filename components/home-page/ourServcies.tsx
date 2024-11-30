// UI component imports
import { Container, Section } from "@/components/craft";

import Title from "../common/title";

import AccordionComponent from "@/components/ui/accordion";

const OurServcies = () => {
  return (
    <Section id="ourServices">
      <Container className="!pb-0">
        <Title text="Our services" className="text-center" />

        <div className="w-full flex flex-col gap-6 px-2 border-t border-gray-200">
          <AccordionComponent />
        </div>
      </Container>
    </Section>
  );
};

export default OurServcies;

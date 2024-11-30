import { Main, Section } from "@/components/craft";
import FeatureDetails from "@/components/home-page/feature-details";

import OurServcies from "@/components/home-page/ourServcies";
import WhyUs from "@/components/home-page/whyUs";
import Footer from "@/components/home-page/footer";
import Hero from "@/components/home-page/hero";
import FeaturedProjects from "@/components/home-page/projects";
import Contact from "@/components/home-page/contact";

export default function Home() {
  return (
    <Main>
      <Section>
        <Hero />
        <FeaturedProjects />
        <OurServcies />
        <WhyUs />
        <FeatureDetails />
        <Contact />
        <Footer />
      </Section>
    </Main>
  );
}

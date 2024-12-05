import { Main, Section } from "@/components/craft";

import Hero from "@/components/home-page/hero";
import FeaturedProjects from "@/components/home-page/projects";
import OurServcies from "@/components/home-page/ourServcies";
import WhyUs from "@/components/home-page/whyUs";
import FeatureDetails from "@/components/home-page/feature-details";
import Contact from "@/components/home-page/contact";
import Footer from "@/components/home-page/footer";

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

import { Main, Section } from "@/components/craft";

import Hero from "@/components/home-page/hero";
import Footer from "@/components/home-page/footer";
import About from "@/components/home-page/about";

export default function Home() {
  return (
    <Main>
      <section>
        <Hero />
        <About />
        {/* <Servcies /> */}
        <Footer />
      </section>
    </Main>
  );
}

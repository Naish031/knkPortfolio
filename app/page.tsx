import Hero from "@/components/home-page/hero";
import Footer from "@/components/home-page/footer";
import About from "@/components/home-page/about";
import Companies from "@/components/home-page/companies";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
        <About />
        <Companies />
        <Footer />
      </section>
    </main>
  );
}

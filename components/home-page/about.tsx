import Bounded from "../common/bounded";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function About() {
  return (
    <section className="py-12 md:py-20 bg-white text-black">
      <Bounded>
        <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-2xl mx-auto text-left mb-12 md:mb-16">
            <TextGenerateEffect
              words={`Discover the powerhouse behind innovative engineering, construction, and consultancy solutions. The K&K Group brings together three dynamic companies, each excelling in its specialized domain. Explore our companies below to find the right fit for your needs.`}
            />
          </div>

          {/* Stats - Desktop (Horizontal) */}
          <div className="lg:w-1/2 grid grid-cols-2 w-full gap-4 h-min relative overflow-visible justify-center grid-rows-2 ">
            {[
              { value: "5+", label: "Years of Experience" },
              { value: "13+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center text-[#5f0f4e] p-8 bg-pink-50 rounded-lg w-full shadow-lg justify-center items-center flex flex-col gap-3 last:col-span-2"
              >
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
}

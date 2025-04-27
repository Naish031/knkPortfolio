import Bounded from "../common/bounded";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function About() {
  return (
    <section className="bg-white py-12 text-black md:py-20">
      <Bounded>
        <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-8">
          {/* Text Content */}
          <div className="mx-auto mb-12 max-w-2xl text-left md:mb-16 lg:w-1/2">
            <TextGenerateEffect
              words={`Discover the powerhouse behind innovative engineering, construction, and consultancy solutions. The K&K Group brings together three dynamic companies, each excelling in its specialized domain. Explore our companies below to find the right fit for your needs.`}
            />
          </div>

          {/* Stats - Desktop (Horizontal) */}
          <div className="relative grid h-min w-full grid-cols-2 grid-rows-2 justify-center gap-4 overflow-visible lg:w-1/2">
            {[
              { value: "5+", label: "Years of Experience" },
              { value: "13+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center justify-center gap-3 rounded-lg bg-pink-50 p-8 text-center text-[#5f0f4e] shadow-lg last:col-span-2"
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

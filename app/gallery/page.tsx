import Bounded from "@/components/common/bounded";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { cards, cardsTwo, cardsThree, cardsFour } from "@/data/galleryCards";

const allSections = [
  { id: "section-1", title: "", cards: cards },
  { id: "section-2", title: "Serena Peshawar", cards: cardsTwo },
  { id: "section-3", title: "Serena Hunza", cards: cardsThree },
  { id: "section-4", title: "Pakistan Cadet College", cards: cardsFour },
];

export default function Gallery() {
  return (
    <Bounded>
      {allSections.map((section, idx) => (
        <section
          key={section.id}
          className={`mt-${idx === 0 ? "0" : "12"} flex h-screen w-full flex-col items-start justify-center overflow-scroll overflow-y-auto py-6`}
        >
          <h1 className="mb-4 text-2xl uppercase text-black">
            {section.title}
          </h1>

          <LayoutGrid cards={section.cards} />
        </section>
      ))}
    </Bounded>
  );
}

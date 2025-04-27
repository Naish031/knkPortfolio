import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import Image from "next/image";

import { accordionItems } from "@/constants/ourServices";
import Balancer from "react-wrap-balancer";

export default function AccordionComponent() {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {accordionItems.map((item, index) => (
        <Accordion.Item
          value={`item-${index + 1}`}
          key={index}
          className="my-4"
        >
          <Accordion.Trigger className="w-full font-bold">
            <div className="my-2 flex w-full items-center justify-between">
              <Balancer className="text-left text-xl text-black">
                {item.title}
              </Balancer>
              <div className="cursor-pointer rounded-lg bg-[#E6E6E6] p-2">
                <Plus
                  className="transform text-black transition-transform duration-300 data-[state=open]:rotate-45"
                  aria-hidden
                />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content>
            <div className="mb-5 flex max-h-max flex-col items-start justify-between gap-4 lg:flex-row">
              <p className="w-full text-xl font-medium text-black lg:leading-normal xl:w-1/2 xl:text-[20px] xl:leading-relaxed">
                {item.text}
              </p>
              <div className="relative aspect-[4/2] h-auto w-full xl:w-1/2">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="absolute inset-0 !m-0 h-full w-full object-contain !p-0"
                />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

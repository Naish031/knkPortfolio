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
            <div className="w-full flex items-center justify-between my-2 ">
              <Balancer className="text-xl text-left text-black dark:text-white">
                {item.title}
              </Balancer>
              <div className="bg-[#E6E6E6] p-2 rounded-lg cursor-pointer">
                <Plus
                  className="transition-transform duration-300 transform data-[state=open]:rotate-45 dark:text-black"
                  aria-hidden
                />
              </div>
            </div>
          </Accordion.Trigger>

          <Accordion.Content>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-5 max-h-max">
              <p className="w-full xl:w-1/2 text-xl xl:text-[20px] lg:leading-normal xl:leading-relaxed font-medium text-black dark:text-white">
                {item.text}
              </p>
              <div className="w-full xl:w-1/2 h-auto relative aspect-[4/2]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-contain absolute inset-0 h-full w-full !m-0 !p-0"
                />
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

"use client";

import { ChevronDownIcon } from "lucide-react";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

export default function DropdownMenu({ title }: { title: string }) {
  const dropdownItems = [
    {
      name: "K&K Tek",
      href: "/k&k-tek",
      logo: "/assets/logos/knkLogo.png",
      altText: "K&K Tek Logo",
    },
    {
      name: "KZA",
      href: "/kza",
      logo: "/assets/logos/kzLogo.png",
      altText: "KZA Logo",
    },
    {
      name: "K&K Tameer",
      href: "/k&k-tameer",
      logo: "/assets/logos/TAMEER.png",
      altText: "K&K Tameer Logo",
    },
  ];

  return (
    <Menu as="div" className="relative z-[999]">
      {({ open }) => (
        <div
          className="relative"
          onMouseEnter={() =>
            document.dispatchEvent(
              new KeyboardEvent("keydown", { key: "Enter" }),
            )
          }
          onMouseLeave={() =>
            document.dispatchEvent(
              new KeyboardEvent("keydown", { key: "Escape" }),
            )
          }
        >
          <Menu.Button className="group flex items-center py-2 hover:font-semibold hover:text-[#5f0f4e]">
            <span className="mr-1">{title}</span>
            <ChevronDownIcon
              className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""} group-hover:rotate-180 group-hover:text-[#5f0f4e]`}
            />
          </Menu.Button>
          <Menu.Items className="absolute left-0 top-full mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="p-1">
              {dropdownItems.map((item) => (
                <Menu.Item key={item.href}>
                  {({ active }) => (
                    <div
                      className={`flex cursor-pointer items-center gap-2 p-1 ${active ? "bg-[#5f0f4e]/10" : ""}`}
                    >
                      <Image
                        src={item.logo}
                        alt={item.altText}
                        width={30}
                        height={30}
                        className="rounded-lg border-b border-slate-400 bg-gray-50 p-0.5"
                      />
                      <Link
                        href={item.href}
                        className={`group flex w-full items-center rounded-md px-4 py-2 text-sm ${active ? "text-[#5f0f4e]" : "text-gray-900"}`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </div>
      )}
    </Menu>
  );
}

// <Menu.Button className="group flex items-center py-2 hover:font-semibold hover:text-[#5f0f4e]">
//   <span className="mr-1">{title}</span>
//   <ChevronDownIcon className="ui-open:rotate-180 h-4 w-4 text-gray-500 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#5f0f4e]" />
// </Menu.Button>
// <Menu.Items className="absolute left-0 top-full mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
//   <div className="p-1">
//     {dropdownItems.map((item) => (
//       <Menu.Item key={item.href}>
//         {({ active }) => (
//           <div className="flex cursor-pointer items-center gap-2 p-1 text-gray-900">
//             <Image
//               src={item.logo}
//               alt={item.altText}
//               width={30}
//               height={30}
//               className="rounded-lg border-b border-slate-400 bg-gray-50 p-0.5"
//             />
//             <Link
//               href={item.href}
//               className="group flex w-full items-center rounded-md px-4 py-2 text-sm"
//             >
//               {item.name}
//             </Link>
//           </div>
//         )}
//       </Menu.Item>
//     ))}
//   </div>
// </Menu.Items>

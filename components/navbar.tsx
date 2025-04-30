"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Example from "./ui/menu";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed inset-x-0 z-50 mx-auto w-full", className)}>
      <Menu setActive={setActive}>
        <div>
          <h1 className="text-xl font-bold text-[#5f0f4e]">K&K Associates</h1>
        </div>

        <div className="relative md:hidden">
          <Example />
        </div>

        <div className="hidden items-center gap-x-4 md:flex lg:gap-x-6 lg:text-lg">
          <MenuItem setActive={setActive} active={null} item="Home" />
          <MenuItem setActive={setActive} active={active} item="About" icon>
            <div className="grid grid-cols-1 gap-2.5 p-1.5 text-sm">
              <ProductItem
                title="K&K Tek"
                href="/about/kktek"
                src="/assets/logos/knkLogo.png"
              />
              <ProductItem
                title="KZA"
                href="/about/kza"
                src="/assets/logos/kzLogo.png"
              />
              <ProductItem
                title="K&K Tameer"
                href="/about/kktameer"
                src="/assets/logos/TAMEER.png"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Projects" icon>
            <div className="grid grid-cols-1 gap-2.5 p-1.5 text-sm">
              <ProductItem
                title="K&K Tek"
                href="/k&k-tek"
                src="/assets/logos/knkLogo.png"
              />
              <ProductItem
                title="KZA"
                href="/kza"
                src="/assets/logos/kzLogo.png"
              />
              <ProductItem
                title="K&K Tameer"
                href="/k&k-tameer"
                src="/assets/logos/TAMEER.png"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={null} item="Gallery" />
          <MenuItem setActive={setActive} active={null} item="Contact" />

          <Link href="https://www.knkassociates.com" target="_blank">
            <button className="rounded-lg bg-[#5f0f4e] px-5 py-3 text-white transition-colors duration-200 hover:bg-[#5f0f4e]/80">
              Employee Login
            </button>
          </Link>
        </div>
      </Menu>
    </div>
  );
}

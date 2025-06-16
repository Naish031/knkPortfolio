"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNav from "../nav/mobile-nav";
import Bounded from "../common/bounded";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed inset-x-0 z-[9999] mx-auto w-full shadow-input",
        className,
      )}
    >
      <Bounded yPadding="none">
        <Menu setActive={setActive}>
          <div>
            <h1 className="whitespace-nowrap text-base font-semibold text-[#5f0f4e]">
              K&K Associates
            </h1>
          </div>

          <div className="relative md:hidden">
            <MobileNav />
          </div>

          <div className="hidden items-center gap-x-4 md:flex lg:gap-x-6 lg:text-lg">
            <MenuItem
              setActive={setActive}
              active={null}
              item="Home"
              href="/"
            />
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
            <MenuItem
              setActive={setActive}
              active={active}
              item="Projects"
              icon
            >
              <div className="grid grid-cols-1 gap-2.5 p-1.5 text-sm">
                <ProductItem
                  title="K&K Tek"
                  href="/project/kktek"
                  src="/assets/logos/knkLogo.png"
                />
                <ProductItem
                  title="KZA"
                  href="/project/kza"
                  src="/assets/logos/kzLogo.png"
                />
                <ProductItem
                  title="K&K Tameer"
                  href="/project/kktameer"
                  src="/assets/logos/TAMEER.png"
                />
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={null}
              item="Gallery"
              href="/gallery"
            />
            <MenuItem
              setActive={setActive}
              active={null}
              item="Contact"
              href="/contact"
            />

            <Link href="https://www.knkassociates.com" target="_blank">
              <button className="rounded-lg bg-[#5f0f4e] px-5 py-3 text-white transition-colors duration-200 hover:bg-[#5f0f4e]/80">
                Employee Login
              </button>
            </Link>
          </div>
        </Menu>
      </Bounded>
    </div>
  );
}


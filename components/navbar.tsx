"use client";

import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import { NavigationMenuLink } from "./ui/navigation-menu";
import { SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { DialogModal } from "./ui/DialogModal";
// import ModeToggle from "./mode-toggle";

export function NavBar() {
  const [isTameerOpen, setIsTameerOpen] = React.useState(false);

  return (
    <div className="fixed z-[50] flex w-full min-w-full items-center justify-center p-1">
      <div className="relative flex w-[95%] justify-between rounded-xl border border-white border-opacity-20 bg-white bg-opacity-10 p-2 shadow-lg backdrop-blur-lg backdrop-filter md:w-[720px] lg:w-[960px] xl:w-[1100px] xxl:w-[1220px]">
        <Dialog>
          <SheetTrigger className="p-1 transition">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
                <MenuIcon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4 hidden items-center md:flex">
                <span className="text-lg font-semibold">
                  KnkTek Construction
                </span>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="mt-1 max-h-[365px] !max-w-[300px] rounded-3xl border-none bg-[#0B9443]"
          >
            <div className="z-[99] mt-[4.5rem] flex flex-col">
              <DialogClose asChild>
                <Link
                  href="/"
                  className="flex w-full items-center justify-around border-t border-white/50 py-1.5"
                >
                  <span className="w-1/5 text-center text-base text-white/50">
                    01
                  </span>
                  <Button
                    variant="ghost"
                    className="w-4/5 !justify-start rounded-none text-xl text-white hover:!bg-[#0B9443]/90 hover:text-white"
                  >
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link
                  href="#featured-projects"
                  className="flex w-full items-center justify-around border-t border-white/50 py-1.5"
                >
                  <span className="w-1/5 text-center text-base text-white/50">
                    02
                  </span>
                  <Button
                    variant="ghost"
                    className="w-4/5 !justify-start rounded-none text-xl text-white hover:!bg-[#0B9443]/90 hover:text-white"
                  >
                    Featured Projects
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link
                  href="#ourServices"
                  className="flex w-full items-center justify-around border-t border-white/50 py-1.5"
                >
                  <span className="w-1/5 text-center text-base text-white/50">
                    03
                  </span>
                  <Button
                    variant="ghost"
                    className="w-4/5 !justify-start rounded-none text-xl text-white hover:!bg-[#0B9443]/90 hover:text-white"
                  >
                    Our Services
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link
                  href="#chooseUs"
                  className="flex w-full items-center justify-around border-t border-white/50 py-1.5"
                >
                  <span className="w-1/5 text-center text-base text-white/50">
                    04
                  </span>
                  <Button
                    variant="ghost"
                    className="w-4/5 !justify-start rounded-none text-xl text-white hover:!bg-[#0B9443]/90 hover:text-white"
                  >
                    Why Us?
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link
                  href="#contact"
                  className="flex w-full items-center justify-around border-b border-t border-white/50 py-1.5"
                >
                  <span className="w-1/5 text-center text-base text-white/50">
                    05
                  </span>
                  <Button
                    variant="ghost"
                    className="w-4/5 !justify-start rounded-none text-xl text-white hover:!bg-[#0B9443]/90 hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </DialogClose>
              {/* <div className="absolute bottom-2 left-3">
                <ModeToggle />
              </div> */}
            </div>
          </SheetContent>
        </Dialog>

        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" className="px-0.5">
              <Image
                src={"/assets/logos/kzLogo.png"}
                alt="logo"
                priority
                width={65}
                height={39}
                className="aspect-[5/2] object-contain"
              />
              {/* <span className="ml-1 text-[8px] lg:text-xs">KZA</span> */}
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="px-0.5">
              <Image
                src={"/assets/logos/knkLogo.png"}
                alt="logo"
                priority
                width={65}
                height={39}
                className="aspect-[5/2] object-contain"
              />
              {/* <span className="ml-1 text-[8px] lg:text-xs">KNK</span> */}
            </Button>
          </Link>

          <Button
            variant="ghost"
            className="px-0.5"
            onClick={() => setIsTameerOpen(true)}
          >
            <Image
              src={"/assets/logos/TAMEER.png"}
              alt="logo"
              priority
              width={45}
              height={29}
              className="aspect-[5/2] object-contain"
            />
          </Button>

          <DialogModal
            title="Coming Soon"
            description="TAMEER section is under development. Stay tuned for updates!"
            isOpen={isTameerOpen}
            onClose={() => setIsTameerOpen(false)}
          />

          {/* <div className="max-[825px]:hidden">
            <ModeToggle />
          </div> */}
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

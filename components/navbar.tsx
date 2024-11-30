"use client";
import { cn } from "@/lib/utils";
import { BookOpen, MenuIcon } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Dialog, DialogClose } from "./ui/dialog";
import { Button } from "./ui/button";
import {
  //   NavigationMenu,
  NavigationMenuLink,
  //   NavigationMenuList,
} from "./ui/navigation-menu";
// import ModeToggle from "../mode-toggle"
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import ModeToggle from "./mode-toggle";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-1 z-[50]">
      <div className="flex justify-between md:w-[720px] lg:w-[960px] xl:w-[1100px] xxl:w-[1220px] w-[95%] border dark:border-zinc-900 dark:bg-black bg-opacity-10 relative backdrop-filter backdrop-blur-lg bg-white border-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <Dialog>
          <SheetTrigger className="p-1 transition">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center dark:bg-white">
                <MenuIcon className="text-white dark:text-black w-6 h-6 " />
              </div>
              <div className="hidden md:flex items-center ml-4">
                <span className="text-lg font-semibold dark:text-white">
                  KnkTek Construction
                </span>
              </div>
            </div>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="mt-1 bg-[#0B9443] max-h-[400px] max-w-[300px] rounded-3xl border-none"
          >
            {/* <SheetHeader> 
               <SheetTitle className="text-white">
                KnkTek Construction.
              </SheetTitle> 
               <SheetDescription className="text-white">
                Scale and launch products with expert developers, on-demand, at
                a flat monthly fee
              </SheetDescription> 
             </SheetHeader> */}
            <div className="flex flex-col space-y-3 mt-[4.5rem] z-[99] hover:!bg-[#0B9443]/90">
              <DialogClose asChild>
                <Link href="/" className="">
                  <Button
                    variant="ghost"
                    className="w-full border-t border-white/50 rounded-none text-white"
                  >
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#featured-projects">
                  <Button
                    variant="ghost"
                    className="w-full border-t border-white/50 rounded-none text-white"
                  >
                    Featured Projects
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#ourServices">
                  <Button
                    variant="ghost"
                    className="w-full border-t border-white/50 rounded-none text-white"
                  >
                    Our Services
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#chooseUs">
                  <Button
                    variant="ghost"
                    className="w-full border-t border-white/50 rounded-none text-white"
                  >
                    Why Us?
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="#contact">
                  <Button
                    variant="ghost"
                    className="w-full border-t border-b border-white/50 rounded-none text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </DialogClose>
              {/* <ModeToggle  /> */}
            </div>
          </SheetContent>
        </Dialog>

        <div className="flex items-center gap-2 ">
          <Link href="/">
            <Button variant="ghost" className="px-0.5">
              <Image
                src={"/assets/logos/K&ZLogo.png"}
                alt="logo"
                width={45}
                height={29}
                className="object-contain aspect-[5/2] "
              />
              <span className="ml-">KZA</span>
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="px-0.5">
              <Image
                src={"/assets/logos/KnkLogo.png"}
                alt="logo"
                width={45}
                height={29}
                className="object-contain aspect-[5/2] "
              />
              <span className="ml-">KNK</span>
            </Button>
          </Link>
          <div className="max-[825px]:hidden">
            <ModeToggle />
          </div>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

{
  /* <NavigationMenu>
          <NavigationMenuList className="max-[825px]:hidden ">
            <Link href="/" className="pl-2">
              <div className="flex justify-center items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center dark:bg-white">
                  <MenuIcon className="text-white dark:text-black w-6 h-6" />
                </div>
                <h1 className="ml-4 font-bold hidden lg:flex">
                  KnkTek Construction.
                </h1>
              </div>
            </Link>
          </NavigationMenuList>
        </NavigationMenu> */
}
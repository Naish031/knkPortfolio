import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"ghost"}
          size={"zero"}
          className="bg-transparent md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="mb-4 whitespace-nowrap text-base font-semibold text-[#5f0f4e]">
            K&K Associates
          </SheetTitle>
          <SheetDescription className="border-t border-gray-400 pt-2 text-sm text-muted-foreground"></SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="border-b border-gray-400 py-2.5">
            <SheetClose asChild>
              <Link href="/" className="text-left">
                <Label className="text-left">Home</Label>
              </Link>
            </SheetClose>
          </div>
          <div className="grid gap-4 border-b border-gray-400 py-2.5">
            <Label className="text-left">About</Label>
            <div className="grid grid-cols-1 gap-2.5 py-1.5 pl-2 text-sm">
              <SheetClose asChild>
                <Link href="/about/kktek" className="flex items-center gap-2">
                  <Image
                    src="/assets/logos/knkLogo.png"
                    width={30}
                    height={30}
                    alt="kktek"
                    className="shrink-0 rounded-md shadow-2xl"
                    priority
                  />
                  <Label>K&K Tek</Label>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about/kza" className="flex items-center gap-2">
                  <Image
                    src="/assets/logos/kzLogo.png"
                    width={30}
                    height={30}
                    alt="kza"
                    className="shrink-0 rounded-md shadow-2xl"
                    priority
                  />
                  <Label>KZA</Label>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/about/kktameer"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/assets/logos/TAMEER.png"
                    width={30}
                    height={30}
                    alt="kktameer"
                    className="shrink-0 rounded-md shadow-2xl"
                    priority
                  />
                  <Label>K&K Tameer</Label>
                </Link>
              </SheetClose>
            </div>
          </div>

          <div className="grid gap-4 border-b border-gray-400 py-2.5">
            <Label className="text-left">Projects</Label>
            <div className="grid grid-cols-1 gap-2.5 py-1.5 pl-2 text-sm">
              <SheetClose asChild>
                <Link href="/project/kktek" className="flex items-center gap-2">
                  <Image
                    src="/assets/logos/knkLogo.png"
                    width={30}
                    height={30}
                    alt="kktek"
                    className="shrink-0 rounded-md shadow-2xl"
                    priority
                  />
                  <Label>K&K Tek</Label>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/project/kza" className="flex items-center gap-2">
                  <Image
                    src="/assets/logos/kzLogo.png"
                    width={30}
                    height={30}
                    alt="kza"
                    className="shrink-0 rounded-md shadow-2xl"
                    priority
                  />
                  <Label>KZA</Label>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/project/kktameer"
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/assets/logos/TAMEER.png"
                    width={30}
                    height={30}
                    alt="kktameer"
                    className="shrink-0 rounded-md shadow-2xl"
                    priority
                  />
                  <Label>K&K Tameer</Label>
                </Link>
              </SheetClose>
            </div>
          </div>
          <div className="border-b border-gray-400 py-2.5">
            <SheetClose asChild>
              <Link href="/gallery">
                <Label className="text-left">Gallery</Label>
              </Link>
            </SheetClose>
          </div>
          <div className="border-b border-gray-400 py-2.5">
            <SheetClose asChild>
              <Link href="/contact">
                <Label className="text-left">Contact</Label>
              </Link>
            </SheetClose>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Link href="https://www.knkassociates.com" target="_blank">
              <Button
                type="button"
                className="rounded-lg bg-[#5f0f4e] px-5 py-3 text-white transition-colors duration-200 hover:bg-[#5f0f4e]/80"
              >
                Employee Login
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

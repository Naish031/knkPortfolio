// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "../craft";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto p-6 sm:p-8">
      <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr] mt-6 xl:mt-10 border-t border-t-[#00000010] pt-10">
        <div className="grid gap-6">
          <Link href="/">
            K&K TEK
            {/* <Image
                src={Logo}
                alt="Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              /> */}
          </Link>

          <Balancer className="text-muted-foreground">
            K&K TEK Apartment 6, 3rd Floor, The Cottage Building Block C, Bahria
            Springs North, Bahria Town Phase 7, Rawalpindi
          </Balancer>
        </div>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <h5>T: +92-310-3169998</h5>
          <h5>F: 051-5707222</h5>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/privacy-policy">ceo@kktek.org</Link>
          <Link href="/terms-of-service">info@kzassociates.net</Link>
        </div>
      </Container>
      <div className="flex justify-center items-center border-t border-t-[#00000010] pt-4">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} K&K TEK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

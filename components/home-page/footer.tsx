import Link from "next/link";
import Bounded from "../common/bounded";

export default function Footer() {
  return (
    <footer>
      <Bounded>
        <div className="rounded-lg bg-[#fff7ff] p-8">
          <div className="flex flex-1 flex-col gap-8">
            <Link
              href="/"
              className="text-xl font-semibold text-[#5f0f4e] no-underline"
            >
              K&K Associates
            </Link>

            <div className="flex flex-col gap-2 text-black">
              <p>
                3rd Floor, Apartment 6, C Block The Cottage, Bahria Springs,
                North Phase 7, Bahria Town, Rawalpindi
              </p>
              <p>051-5707222</p>
              <div className="flex flex-col gap-2 lg:flex-row lg:gap-10 lg:text-right xl:text-left">
                <p className="lg:min-w-64 xl:min-w-96">info@kzassociates.net</p>
                <p className="lg:min-w-64 xl:min-w-96">info@kktek.org</p>
                <p className="lg:min-w-64 xl:min-w-96">info@kktameer.com</p>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </footer>
  );
}

//  <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr] mt-6 xl:mt-10 border-t border-t-[#00000010] pt-10">
//         <div className="grid gap-6">
//           <Link href="/">K&K TEK</Link>

//           <Balancer className="text-muted-foreground">
//             K&K TEK Apartment 6, 3rd Floor, The Cottage Building Block C, Bahria
//             Springs North, Bahria Town Phase 7, Rawalpindi
//           </Balancer>
//         </div>
//         <div className="flex flex-col gap-2 text-muted-foreground">
//           {/* <h5>T: +92-310-3169998</h5> */}
//           <h5>F: 051-5707222</h5>
//         </div>
//         <div className="flex flex-col gap-2">
//           {/* <Link href="/privacy-policy">ceo@kktek.org</Link> */}
//           <Link href="/terms-of-service">info@kzassociates.net</Link>
//         </div>
//   </Container>
//       <div className="flex justify-center items-center border-t border-t-[#00000010] pt-4">
//         <p className="text-muted-foreground">
//           © {new Date().getFullYear()} K&K TEK. All rights reserved.
//         </p>
//       </div>

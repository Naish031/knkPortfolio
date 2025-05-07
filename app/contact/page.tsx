import Bounded from "@/components/common/bounded";
import SignupFormDemo from "@/components/sign-up";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <Bounded>
      <h1 className="my-4 text-3xl font-medium text-[#5f0f4e]">Contact Us</h1>
      <div className="flex flex-col-reverse justify-between gap-8 md:flex-row md:gap-12">
        <div className="order 2 flex w-full flex-1 flex-col gap-4 md:order-1 md:mt-8 md:w-1/2">
          <ul className="mt-8 flex flex-col gap-2">
            <li>
              3rd Floor, Apartment 6, C Block The Cottage, Bahria Springs, North
              Phase 7, Bahria Town, Rawalpindi
            </li>
            <li>051-5707222</li>
            <li>info@kktek.org</li>
            <li>info@kzassociates.net</li>
            <li>info@kktameer.com</li>
          </ul>

          <SignupFormDemo />
        </div>
        <div className="order-1 flex w-full flex-1 md:order-2 md:w-1/2">
          <div className="relative aspect-[16/9] w-full max-w-[860px] overflow-hidden">
            <Image
              src={
                "https://framerusercontent.com/images/xrDHqtmWXUz4VpjAo4p1lHqA4.jpg"
              }
              alt="Contact Us"
              fill
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
}

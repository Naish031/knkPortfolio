import Bounded from "@/components/common/bounded";
import SignupFormDemo from "@/components/sign-up";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <Bounded>
      <h1 className="my-4 text-3xl font-medium text-[#5f0f4e]">Contact Us</h1>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-12">
        <div className="mt-8 flex w-full flex-1 flex-col gap-4 md:order-2 md:w-1/2">
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
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Contact Us"
              fill
              className="absolute inset-0 h-full w-full object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
}

//  <form className="mt-8 flex flex-col gap-4">
//    <div className="flex gap-4">
//      <div>
//        <label
//          htmlFor="name"
//          className="sr-only block text-sm font-medium text-gray-700"
//        >
//          Name
//        </label>
//        <input
//          type="text"
//          id="name"
//          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5f0f4e] focus:ring-[#5f0f4e] sm:text-sm"
//          required
//        />
//      </div>
//      <div>
//        <label
//          htmlFor="email"
//          className="sr-only block text-sm font-medium text-gray-700"
//        >
//          Email
//        </label>
//        <input
//          type="email"
//          id="email"
//          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5f0f4e] focus:ring-[#5f0f4e] sm:text-sm"
//          required
//        />
//      </div>
//    </div>
//    <div className="mb-4">
//      <label
//        htmlFor="message"
//        className="sr-only block text-sm font-medium text-gray-700"
//      >
//        Message
//      </label>
//      <textarea
//        id="message"
//        rows={4}
//        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#5f0f4e] focus:ring-[#5f0f4e] sm:text-sm"
//        required
//      ></textarea>
//    </div>
//    <button
//      type="submit"
//      className="inline-flex items-center rounded-md border border-transparent bg-[#5f0f4e] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#5f0f4e]/80 focus:outline-none focus:ring-2 focus:ring-[#5f0f4e] focus:ring-offset-2"
//    >
//      Submit
//    </button>
//  </form>;

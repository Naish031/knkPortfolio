import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/navbar";
import Footer from "@/components/home-page/footer";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KnkTek Portfolio",
  description: "Constructions and Builders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={"scroll-smooth antialiased focus:scroll-auto"}
    >
      <body className={urbanist.className}>
        <Navbar />
        <div className="pt-[70px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

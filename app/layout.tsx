import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./_provider";
import { Layout } from "@/components/craft";
import Navbar from "@/components/navbar";
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
    <Layout>
      <body className={urbanist.className}>
        {/* <ThemeProvider
          attribute="class"
          // defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
        <Navbar />
        <div className="pt-16">{children}</div>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </Layout>
  );
}

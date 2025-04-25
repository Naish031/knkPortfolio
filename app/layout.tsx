import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "./_provider";
import { Layout } from "@/components/craft";
import Nav from "@/components/nav";

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
        {/* <NavBar /> */}
        <Nav />
        {children}
        {/* </ThemeProvider> */}
      </body>
    </Layout>
  );
}

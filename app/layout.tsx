import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { ThemeProvider } from "./_provider";
import { Layout } from "@/components/craft";

const interTight = Inter_Tight({ subsets: ["latin"] });

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
      <body className={interTight.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </Layout>
  );
}

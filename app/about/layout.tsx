import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About - KnkTek Construction | KnkTek Builders | KnkTek Real Estate",
  description:
    "Discover the vision, commitment, and expertise of KnkTek Construction, KnkTek Builders, and KnkTek Real Estate. Learn more about our services and our promise of excellence.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

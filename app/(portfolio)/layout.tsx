import type { Metadata } from "next";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export const metadata: Metadata = {
  verification: {
    google: "5iLbMyn9rbcr7W0jGboTgC482cHrQBZK0rILTI9Hgm8",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <StairTransition />
      <PageTransition>{children}</PageTransition>
    </>
  );
}

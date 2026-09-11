import type { Metadata } from "next";
import PageHeader from "@/components/portfolio/pageHeader";
import PortfolioGrid from "@/components/portfolio/portfolioGrid";
import CtaBanner from "@/components/home/ctaBanner";

export const metadata: Metadata = {
  title: "Portfolio | TickTan Limited",
  description:
    "A selection of design, construction and project management work delivered by TICKTAN Limited for corporate clients across Lagos.",
};

export default function Portfolio() {
  return (
    <>
      <PageHeader />
      <PortfolioGrid />
      <CtaBanner />
    </>
  );
}

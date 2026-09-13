import type { Metadata } from "next";
import PageHeader from "@/components/portfolio/pageHeader";
import PortfolioGrid from "@/components/portfolio/portfolioGrid";
import CtaBanner from "@/components/home/ctaBanner";
import { getProjects, getProjectTags } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Portfolio | TickTan Limited",
  description:
    "A selection of design, construction and project management work delivered by TICKTAN Limited for corporate clients across Lagos.",
};

export default async function Portfolio() {
  const [projects, tags] = await Promise.all([
    getProjects(),
    getProjectTags(),
  ]);

  return (
    <>
      <PageHeader />
      <PortfolioGrid projects={projects} tags={tags} />
      <CtaBanner />
    </>
  );
}

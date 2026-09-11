import type { Metadata } from "next";
import PageHeader from "@/components/about/pageHeader";
import CompanyStory from "@/components/about/companyStory";
import VisionMission from "@/components/about/visionMission";
import CoreValues from "@/components/about/coreValues";
import Team from "@/components/about/team";
import Philosophy from "@/components/about/philosophy";

export const metadata: Metadata = {
  title: "About Us | TickTan Limited",
  description:
    "TICKTAN Limited is a Lagos-based design, construction and project management consultancy for corporate clients.",
};

export default function About() {
  return (
    <>
      <PageHeader />
      <CompanyStory />
      <VisionMission />
      <CoreValues />
      <Team />
      <Philosophy />
    </>
  );
}

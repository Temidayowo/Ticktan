import type { Metadata } from "next";
import PageHeader from "@/components/services/pageHeader";
import ServicesList from "@/components/services/servicesList";
import Process from "@/components/services/process";
import CtaBanner from "@/components/home/ctaBanner";

export const metadata: Metadata = {
  title: "Services | TickTan Limited",
  description:
    "Design consultancy, building construction, project management, costing and art — full-service delivery from TICKTAN Limited.",
};

export default function Services() {
  return (
    <>
      <PageHeader />
      <ServicesList />
      <Process />
      <CtaBanner />
    </>
  );
}

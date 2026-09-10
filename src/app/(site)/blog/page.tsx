import type { Metadata } from "next";
import PageHeader from "@/components/blog/pageHeader";
import BlogGrid from "@/components/blog/blogGrid";
import CtaBanner from "@/components/home/ctaBanner";

export const metadata: Metadata = {
  title: "Blog | TickTan Limited",
  description:
    "Insights on design, construction, project management and costing from the TICKTAN Limited team.",
};

export default function Blog() {
  return (
    <>
      <PageHeader />
      <BlogGrid />
      <CtaBanner />
    </>
  );
}

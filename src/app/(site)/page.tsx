import Hero from "@/components/home/hero";
import WhatWeDo from "@/components/home/whatWeDo";
import FeaturedProjects from "@/components/home/featuredProjects";
import ClientLogos from "@/components/home/clientLogos";
import BlogPreview from "@/components/home/blogPreview";
import CtaBanner from "@/components/home/ctaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <FeaturedProjects />
      <ClientLogos />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}

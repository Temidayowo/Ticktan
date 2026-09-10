import type { Metadata } from "next";
import PageHeader from "@/components/contact/pageHeader";
import ContactSection from "@/components/contact/contactSection";

export const metadata: Metadata = {
  title: "Contact Us | TickTan Limited",
  description:
    "Get in touch with TICKTAN Limited for design, construction and project management enquiries in Lagos, Nigeria.",
};

export default function Contact() {
  return (
    <>
      <PageHeader />
      <ContactSection />
    </>
  );
}

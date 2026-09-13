import "server-only";
import { prisma } from "@/lib/prisma";

const DEFAULT_SETTINGS = {
  id: "singleton",
  companyName: "Ticktan Limited",
  tagline: null as string | null,
  contactEmail: "info@ticktan.com",
  contactPhone: null as string | null,
  contactAddress: "Lagos, Nigeria",
  twitterUrl: null as string | null,
  linkedinUrl: null as string | null,
  instagramUrl: null as string | null,
  facebookUrl: null as string | null,
  updatedAt: new Date(),
};

export async function getSiteSettings() {
  const settings = await prisma.siteSettings.findUnique({
    where: { id: "singleton" },
  });
  return settings ?? DEFAULT_SETTINGS;
}

import "server-only";
import { prisma } from "@/lib/prisma";

export function getTeamMembers() {
  return prisma.teamMember.findMany({
    orderBy: { order: "asc" },
  });
}

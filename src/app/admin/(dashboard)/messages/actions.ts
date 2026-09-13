"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requireAdminSession } from "@/lib/require-admin";

export async function markMessageRead(id: string) {
  await requireAdminSession();
  await prisma.contactMessage.update({
    where: { id },
    data: { read: true },
  });
  revalidatePath("/admin/messages");
}

export async function deleteMessage(id: string) {
  await requireAdminSession();
  await prisma.contactMessage.delete({ where: { id } });
  revalidatePath("/admin/messages");
}

import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteTeamMember } from "./actions";
import ConfirmSubmitButton from "@/components/admin/confirm-submit-button";

export default async function AdminTeamPage() {
  const members = await prisma.teamMember.findMany({
    orderBy: { order: "asc" },
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-navy">Team</h1>
        <Link
          href="/admin/team/new"
          className="rounded-lg bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral/80"
        >
          Add team member
        </Link>
      </div>

      {members.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-muted-foreground shadow-sm">
          No team members yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
            >
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-gray-100">
                {member.photoUrl && (
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-navy">
                  {member.name}
                </p>
                <p className="truncate text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <Link
                  href={`/admin/team/${member.id}`}
                  className="rounded-lg px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-gray-100"
                >
                  Edit
                </Link>
                <form action={deleteTeamMember.bind(null, member.id)}>
                  <ConfirmSubmitButton
                    confirmMessage={`Remove "${member.name}" from the team?`}
                    className="rounded-lg px-3 py-1.5 text-sm font-medium text-destructive transition-colors hover:bg-red-50"
                  >
                    Delete
                  </ConfirmSubmitButton>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

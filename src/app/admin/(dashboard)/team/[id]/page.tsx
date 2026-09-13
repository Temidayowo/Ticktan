import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import TeamMemberForm from "@/components/admin/team-member-form";
import { updateTeamMember } from "../actions";

type EditTeamMemberPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditTeamMemberPage({
  params,
}: EditTeamMemberPageProps) {
  const { id } = await params;
  const member = await prisma.teamMember.findUnique({ where: { id } });

  if (!member) {
    notFound();
  }

  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">Edit team member</h1>
      <TeamMemberForm
        action={updateTeamMember.bind(null, member.id)}
        submitLabel="Save changes"
        defaultValues={{
          name: member.name,
          role: member.role,
          experience: member.experience,
          credentials: member.credentials,
          photoUrl: member.photoUrl,
        }}
      />
    </div>
  );
}

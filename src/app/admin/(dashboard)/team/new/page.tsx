import TeamMemberForm from "@/components/admin/team-member-form";
import { createTeamMember } from "../actions";

export default function NewTeamMemberPage() {
  return (
    <div className="flex max-w-2xl flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">Add team member</h1>
      <TeamMemberForm action={createTeamMember} submitLabel="Add team member" />
    </div>
  );
}

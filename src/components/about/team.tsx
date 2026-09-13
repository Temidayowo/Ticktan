import Image from "next/image";
import PlaceholderImage from "../ui/placeholder-image";
import { getTeamMembers } from "@/lib/data/team";

const Team = async () => {
  const team = await getTeamMembers();

  if (team.length === 0) {
    return null;
  }

  return (
    <section id="team" className="bg-gray-50">
      <div className="px-auto max-w-7xl mx-6 py-16 sm:mx-12 sm:py-20 md:mx-16 md:py-24 lg:mx-32">
        <p className="text-sm font-semibold uppercase tracking-wider text-coral">
          Our Team
        </p>
        <h2 className="mt-4 max-w-xl text-2xl font-extrabold text-navy md:text-3xl">
          The people behind every delivery
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(({ id, name, role, experience, credentials, photoUrl }) => (
            <div
              key={id}
              className="flex flex-col gap-4 overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              {photoUrl ? (
                <div className="relative aspect-square w-full">
                  <Image src={photoUrl} alt={name} fill className="object-cover" />
                </div>
              ) : (
                <PlaceholderImage className="aspect-square w-full" />
              )}
              <div className="flex flex-col gap-1 p-6 pt-0">
                <h3 className="text-base font-bold text-navy">{name}</h3>
                <span className="text-sm font-semibold text-coral">
                  {role}
                </span>
                <span className="mt-2 text-xs text-muted-foreground">
                  {experience} experience · {credentials}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

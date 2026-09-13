import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [
    totalPosts,
    draftPosts,
    totalProjects,
    totalTeamMembers,
    unreadMessages,
  ] = await Promise.all([
    prisma.post.count(),
    prisma.post.count({ where: { status: "DRAFT" } }),
    prisma.project.count(),
    prisma.teamMember.count(),
    prisma.contactMessage.count({ where: { read: false } }),
  ]);

  const stats = [
    { label: "Blog posts", value: totalPosts, href: "/admin/blog" },
    { label: "Drafts", value: draftPosts, href: "/admin/blog" },
    { label: "Portfolio projects", value: totalProjects, href: "/admin/portfolio" },
    { label: "Team members", value: totalTeamMembers, href: "/admin/team" },
    { label: "Unread messages", value: unreadMessages, href: "/admin/messages" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="mt-2 text-3xl font-bold text-navy">{stat.value}</p>
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/admin/blog/new"
          className="rounded-lg bg-coral px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral/80"
        >
          New blog post
        </Link>
        <Link
          href="/admin/portfolio/new"
          className="rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/80"
        >
          New project
        </Link>
      </div>
    </div>
  );
}

import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { logout } from "@/lib/auth-actions";
import AdminShell from "@/components/admin/admin-shell";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return (
    <AdminShell userEmail={session.user.email ?? ""} onSignOut={logout}>
      {children}
    </AdminShell>
  );
}

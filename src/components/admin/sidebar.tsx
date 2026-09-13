"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaEnvelope,
  FaGauge,
  FaNewspaper,
  FaGear,
  FaBuilding,
  FaUsers,
} from "react-icons/fa6";

const links = [
  { href: "/admin", label: "Dashboard", icon: FaGauge, exact: true },
  { href: "/admin/blog", label: "Blog", icon: FaNewspaper },
  { href: "/admin/portfolio", label: "Portfolio", icon: FaBuilding },
  { href: "/admin/team", label: "Team", icon: FaUsers },
  { href: "/admin/messages", label: "Messages", icon: FaEnvelope },
  { href: "/admin/settings", label: "Settings", icon: FaGear },
];

type SidebarProps = {
  onNavigate?: () => void;
};

const Sidebar = ({ onNavigate }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex h-full w-64 shrink-0 flex-col gap-1 overflow-y-auto border-r border-border bg-white p-4 md:w-56">
      <span className="mb-4 px-2 font-sora text-lg font-bold text-navy">
        Ticktan Admin
      </span>
      {links.map(({ href, label, icon: Icon, exact }) => {
        const active = exact ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              active
                ? "bg-navy text-white"
                : "text-muted-foreground hover:bg-gray-100 hover:text-navy"
            }`}
          >
            <Icon className="size-4" />
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Sidebar;

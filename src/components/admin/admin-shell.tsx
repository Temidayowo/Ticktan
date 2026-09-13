"use client";

import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import Sidebar from "./sidebar";

type AdminShellProps = {
  userEmail: string;
  onSignOut: () => void;
  children: React.ReactNode;
};

const AdminShell = ({ userEmail, onSignOut, children }: AdminShellProps) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (!navOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navOpen]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {navOpen && (
        <div
          aria-hidden="true"
          onClick={() => setNavOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out md:static md:z-auto md:translate-x-0 ${
          navOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar onNavigate={() => setNavOpen(false)} />
        {navOpen && (
          <button
            type="button"
            onClick={() => setNavOpen(false)}
            aria-label="Close menu"
            className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-gray-100 md:hidden"
          >
            <FaXmark className="size-4" />
          </button>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-border bg-white px-4 py-3 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => setNavOpen(true)}
              aria-label="Open menu"
              className="flex size-9 shrink-0 items-center justify-center rounded-lg text-navy transition-colors hover:bg-gray-100 md:hidden"
            >
              <FaBars className="size-4.5" />
            </button>
            <span className="truncate text-sm text-muted-foreground">
              <span className="hidden sm:inline">Signed in as </span>
              <span className="font-medium text-navy">{userEmail}</span>
            </span>
          </div>
          <form action={onSignOut} className="shrink-0">
            <button
              type="submit"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-gray-100 hover:text-navy"
            >
              Sign out
            </button>
          </form>
        </header>
        <main className="min-w-0 flex-1 overflow-x-hidden p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminShell;

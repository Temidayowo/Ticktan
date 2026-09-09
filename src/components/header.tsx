"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "About" },
  { href: "#", label: "Services" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const animatedLinkClasses =
    "relative inline-block text-white transition-colors hover:text-white/80 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 after:content-[''] hover:after:w-full";

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-navy px-6 py-5 md:px-16 md:py-6 lg:px-32">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-sora text-2xl font-bold text-white md:text-3xl"
        >
          Ticktan
        </Link>

        <nav
          className="hidden gap-7 text-white md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map(({ href, label }) => (
            <Link key={label} href={href} className={animatedLinkClasses}>
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <FaXmark className="size-6" />
          ) : (
            <FaBars className="size-6" />
          )}
        </button>
      </div>

      <nav
        className={`grid text-white transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr] pt-6 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col gap-5 overflow-hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="text-lg"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

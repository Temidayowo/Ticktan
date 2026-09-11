"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaBars, FaBuilding, FaXmark } from "react-icons/fa6";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
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
          className="flex items-center gap-2.5 font-sora text-2xl font-bold text-white md:text-3xl"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-coral text-white">
            <FaBuilding className="size-4.5" />
          </span>
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

        <div className="hidden items-center gap-7 md:flex">
          <Link href="/contact" className={animatedLinkClasses}>
            Contact
          </Link>
          <Link
            href="/get-a-quote"
            className="group inline-flex items-center gap-2 rounded-xl bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-coral/80"
          >
            Get a Quote
            <FaArrowRight className="size-3.5 shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

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
          {[...navLinks, { href: "/contact", label: "Contact" }].map(
            ({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-lg"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )
          )}
          <Link
            href="/get-a-quote"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-coral px-5 py-2.5 text-sm font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Get a Quote
            <FaArrowRight className="size-3.5 shrink-0" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

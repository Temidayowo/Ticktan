"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "design-consultancy", label: "Design Consultancy" },
  { id: "building-construction", label: "Building Construction" },
  { id: "project-management", label: "Project Management" },
  { id: "costing", label: "Costing" },
  { id: "art", label: "Art" },
];

const ServicesNav = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.getBoundingClientRect().height);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--services-nav-offset",
      `${headerHeight + 57}px`
    );
  }, [headerHeight]);

  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="sticky z-30 w-full border-b border-border bg-white/95 backdrop-blur-sm"
      style={{ top: headerHeight }}
      aria-label="Services sections"
    >
      <div className="px-auto max-w-7xl mx-6 flex gap-6 overflow-x-auto py-4 sm:mx-12 md:mx-16 lg:mx-32 [&::-webkit-scrollbar]:hidden">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`shrink-0 whitespace-nowrap text-sm font-semibold transition-colors ${
              activeId === id
                ? "text-coral"
                : "text-muted-foreground hover:text-navy"
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default ServicesNav;

"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  title: string;
};

type ActiveSectionNavProps = {
  sections: Section[];
};

export default function ActiveSectionNav({ sections }: ActiveSectionNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0) return;

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  const activeSection =
    sections.find((section) => section.id === activeId) ?? sections[0];

  return (
    <div>
      <div className="mb-6 border-l-2 border-[#dc2626] bg-white/[0.03] px-3 py-3">
        <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#dc2626]" />
          CURRENT SECTION
        </p>
        <p aria-live="polite" className="text-sm font-medium leading-5 text-white">
          {activeSection?.title ?? "Documentation"}
        </p>
      </div>

      <nav aria-label="On this page">
        <ul className="space-y-3">
          {sections.map((section) => {
            const active = section.id === activeId;

            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active ? "location" : undefined}
                  className={`doc-anchor block border-l-2 pl-3 text-sm transition-colors ${
                    active
                      ? "border-[#dc2626] font-medium text-white"
                      : "border-transparent text-gray-400 hover:text-[#dc2626]"
                  }`}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

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
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const scrollRoot = document.querySelector<HTMLElement>("[data-doc-scroll-root]");
    if (!scrollRoot || sections.length === 0) return;

    const sectionElements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);

    if (sectionElements.length === 0) return;

    const updateActiveSection = () => {
      const rootTop = scrollRoot.getBoundingClientRect().top;
      const activationPoint = rootTop + 140;

      let currentSection = sectionElements[0];

      for (const section of sectionElements) {
        if (section.getBoundingClientRect().top <= activationPoint) {
          currentSection = section;
        } else {
          break;
        }
      }

      const isAtBottom =
        scrollRoot.scrollTop + scrollRoot.clientHeight >= scrollRoot.scrollHeight - 4;

      if (isAtBottom) {
        currentSection = sectionElements[sectionElements.length - 1];
      }

      setActiveSection(currentSection.id);
    };

    updateActiveSection();

    scrollRoot.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      scrollRoot.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sections]);

  return (
    <nav aria-label="On this page">
      <ul className="space-y-3">
        {sections.map((section) => {
          const active = section.id === activeSection;

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
  );
}

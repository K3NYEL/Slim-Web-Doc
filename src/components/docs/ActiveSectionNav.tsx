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

    setActiveSection(sectionElements[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections[0]) {
          setActiveSection((visibleSections[0].target as HTMLElement).id);
        }
      },
      {
        root: scrollRoot,
        rootMargin: "-96px 0px -70% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const isAtBottom =
        scrollRoot.scrollTop + scrollRoot.clientHeight >= scrollRoot.scrollHeight - 4;

      if (isAtBottom) {
        setActiveSection(sectionElements[sectionElements.length - 1].id);
      }
    };

    scrollRoot.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      scrollRoot.removeEventListener("scroll", handleScroll);
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

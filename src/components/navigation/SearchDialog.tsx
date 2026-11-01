"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { docPages } from "../../content/docs";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return docPages.slice(0, 5);
    return docPages.filter((page) =>
      [page.title, page.description, ...page.sections.map((section) => section.title)].some((value) =>
        value.toLowerCase().includes(normalized),
      ),
    );
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-sm text-gray-400 transition-colors hover:border-[#dc2626] hover:text-white"
        aria-label="Search documentation"
      >
        <Search size={16} />
        <span className="hidden lg:inline">Search</span>
        <kbd className="hidden border border-white/10 px-1.5 py-0.5 text-[10px] lg:inline">Ctrl K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 px-4 pt-[12vh]" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}>
          <div role="dialog" aria-modal="true" aria-label="Search documentation" className="w-full max-w-2xl border border-white/15 bg-[#111] shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 p-4">
              <Search size={19} className="text-gray-500" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search guides, runtime and APIs..."
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
              />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close search" className="text-gray-500 hover:text-white"><X size={18} /></button>
            </div>
            <div className="max-h-[55vh] overflow-y-auto p-2">
              {results.length > 0 ? results.map((page) => (
                <Link key={page.slug} href={`/docs/${page.slug}`} onClick={() => { setOpen(false); setQuery(""); }} className="block border border-transparent p-4 hover:border-[#dc2626]/60 hover:bg-white/[0.03]">
                  <span className="block text-sm font-semibold text-white">{page.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-gray-500">{page.description}</span>
                </Link>
              )) : <p className="p-6 text-sm text-gray-500">No documentation pages match your search.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

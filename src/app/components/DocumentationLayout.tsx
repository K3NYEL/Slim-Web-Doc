import type { ReactNode } from "react";
import Link from "next/link";
import NavBar from "./NavBar";
import PageLoading from "./PageLoading";
import { docNavigation } from "../lib/docs";

type DocumentationLayoutProps = {
  children: ReactNode;
  activePath: string;
  sections?: { id: string; title: string }[];
};

export default function DocumentationLayout({
  children,
  activePath,
  sections = [],
}: DocumentationLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#090909] text-white">
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>

      <div className="mx-auto grid w-full max-w-[1600px] flex-1 grid-cols-1 xl:grid-cols-[240px_minmax(0,1fr)_220px]">
        <aside className="motion-enter-left hidden border border-r-2 border-gray-700 px-5 py-8 xl:block">
          <h1 className="mb-6 text-xs uppercase tracking-[0.18em] text-white">Documentation</h1>
          <nav aria-label="Documentation sidebar" className="space-y-8">
            {docNavigation.map((group) => (
              <section key={group.label}>
                <h2 className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-gray-500">{group.label}</h2>
                <ul className="space-y-1">
                  {group.items.map((item) => {
                    const active = item.href === activePath;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={`doc-nav-link block border-2 px-3 py-2 text-sm transition-colors ${active ? "border-[#dc2626] text-white" : "border-transparent text-gray-400 hover:text-[#dc2626]"}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </nav>
        </aside>

        <main className="motion-enter min-w-0 px-6 py-10 sm:px-10 lg:px-14">
          <details className="mb-8 border border-white/10 xl:hidden">
            <summary className="cursor-pointer px-4 py-3 text-sm text-gray-300 transition-colors hover:text-white">
              Browse documentation
            </summary>
            <nav aria-label="Mobile documentation navigation" className="grid gap-5 border-t border-white/10 p-4 sm:grid-cols-2">
              {docNavigation.map((group) => (
                <section key={group.label}>
                  <h2 className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-gray-500">{group.label}</h2>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} aria-current={item.href === activePath ? "page" : undefined} className={item.href === activePath ? "text-sm text-white" : "text-sm text-gray-400 hover:text-[#dc2626]"}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </nav>
          </details>
          <PageLoading>{children}</PageLoading>
        </main>

        <aside className="motion-enter-right hidden border border-l-2 border-gray-700 px-5 py-8 xl:block">
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-gray-500">On this page</p>
          {sections.length > 0 ? (
            <nav aria-label="On this page">
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="doc-anchor text-sm text-gray-400 transition-colors hover:text-[#dc2626]">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : (
            <p className="text-sm leading-6 text-gray-500">Select a section from the documentation sidebar.</p>
          )}
        </aside>
      </div>

      <footer className="border-t-2 border-gray-700 px-6 py-6 text-center text-xs text-gray-500" />
    </div>
  );
}

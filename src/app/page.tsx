import Link from "next/link";
import DocumentationLayout from "../components/docs/DocumentationLayout";
import ContentPanel from "../components/ui/ContentPanel";

const overviewSections = [
  { id: "what-is-slim-executor", title: "What is Slim Executor?" },
  { id: "what-you-can-do", title: "What you can do" },
  { id: "documentation-map", title: "Documentation map" },
];

const featureCards = [
  { title: "Lua scripting", description: "Write and execute Lua scripts inside a Windows desktop application.", href: "/docs/lua-runtime" },
  { title: "UI integration", description: "Explore the UI, window, timer and canvas bindings exposed by the runtime.", href: "/docs/ui-controls" },
  { title: "Development workflow", description: "Create scripts, run them, inspect output and troubleshoot errors.", href: "/docs/quick-start" },
];

export default function Home() {
  return (
    <DocumentationLayout activePath="/" sections={overviewSections}>
      <div className="mb-10">
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-white/80 sm:text-4xl">Slim Executor Documentation</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
          Guides and technical notes for installing Slim Executor, writing Lua scripts, using its application bindings and understanding the runtime.
        </p>
      </div>

      <section id="what-is-slim-executor" className="scroll-mt-28 border-b border-white/10 pb-9">
        <h2 className="mb-4 text-xl font-semibold text-white">What is Slim Executor?</h2>
        <ContentPanel>

          <p className="max-w-3xl leading-7 text-gray-300">
            Slim Executor is a Windows desktop application built around an embedded Lua scripting runtime. It provides a workspace for creating and executing scripts, reviewing runtime output and experimenting with application-level interfaces from Lua.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-gray-400">
            The project combines a native application with a Lua runtime and UI bindings. Its purpose is to give developers a place to build, test and run scripts and interactive experiments without needing a separate Lua host for every test.
          </p>
        </ContentPanel>
      </section>

      <section id="what-you-can-do" className="scroll-mt-28 border-b border-white/10 py-9">
        <h2 className="mb-4 text-xl font-semibold text-white">What you can do</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {featureCards.map((card) => (
            <Link key={card.href} href={card.href} className="border border-white/10 p-5 transition-colors hover:border-[#dc2626]/70 hover:bg-white/[0.02]">
              <h3 className="mb-2 font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-6 text-gray-400">{card.description}</p>
              <span className="mt-5 inline-block text-xs font-medium text-[#dc2626]">Explore documentation →</span>
            </Link>
          ))}
        </div>
      </section>

      <section id="documentation-map" className="scroll-mt-28 py-9">
        <h2 className="mb-4 text-xl font-semibold text-white">Documentation map</h2>
        <p className="mb-5 max-w-3xl leading-7 text-gray-400">Start with installation and the quick-start guide, then continue to the runtime and UI topics. The reference is being expanded; where exact API signatures are not yet verified, the pages identify the relevant API area without inventing method names or arguments.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/docs/installation" className="border border-white/15 px-4 py-2 text-sm text-gray-200 hover:border-[#dc2626]">Installation</Link>
          <Link href="/docs/quick-start" className="border border-white/15 px-4 py-2 text-sm text-gray-200 hover:border-[#dc2626]">Quick Start</Link>
          <Link href="/docs/examples" className="border border-white/15 px-4 py-2 text-sm text-gray-200 hover:border-[#dc2626]">Examples</Link>
        </div>
      </section>
    </DocumentationLayout>
  );
}

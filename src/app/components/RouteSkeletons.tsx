import type { ReactNode } from "react";

function Bar({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`skeleton ${className}`} />;
}

function Group({ children }: { children: ReactNode }) {
  return <div className="skeleton-stagger space-y-3">{children}</div>;
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#090909] text-white" role="status" aria-label="Loading page" aria-busy="true">
      <span className="sr-only">Loading page...</span>
      <header className="border-b-2 border-gray-700 px-5 py-4 sm:px-8">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3"><Bar className="h-10 w-10 shrink-0" /><Bar className="h-4 w-40" /></div>
          <div className="hidden items-center gap-8 md:flex"><Bar className="h-3 w-12" /><Bar className="h-3 w-16" /><Bar className="h-3 w-14" /></div>
          <Bar className="hidden h-9 w-24 md:block" /><Bar className="h-10 w-10 md:hidden" />
        </div>
      </header>
      <div className="mx-auto grid min-h-[calc(100vh-145px)] w-full max-w-[1600px] grid-cols-1 xl:grid-cols-[240px_minmax(0,1fr)_220px]">
        <aside className="hidden border-r-2 border-gray-700 px-5 py-8 xl:block">
          <Bar className="mb-7 h-3 w-28" />
          <Group><Bar className="h-3 w-20" /><Bar className="h-8 w-full" /><Bar className="h-8 w-4/5" /><Bar className="h-8 w-11/12" /></Group>
          <Group><Bar className="mt-7 h-3 w-24" /><Bar className="h-8 w-full" /><Bar className="h-8 w-5/6" /></Group>
        </aside>
        <main className="min-w-0 px-6 py-10 sm:px-10 lg:px-14">{children}</main>
        <aside className="hidden border-l-2 border-gray-700 px-5 py-8 xl:block">
          <Bar className="mb-7 h-3 w-24" />
          <Group><Bar className="h-3 w-full" /><Bar className="h-3 w-4/5" /><Bar className="h-3 w-11/12" /></Group>
        </aside>
      </div>
      <footer className="border-t-2 border-gray-700 px-6 py-6"><Bar className="mx-auto h-3 w-44" /></footer>
    </div>
  );
}

function HomeSkeleton() {
  return <Shell><div className="space-y-12">
    <Group><Bar className="h-10 w-3/4 max-w-xl" /><Bar className="h-4 w-full max-w-2xl" /><Bar className="h-4 w-5/6 max-w-xl" /></Group>
    <Group><Bar className="h-6 w-56" /><Bar className="h-4 w-full" /><Bar className="h-4 w-11/12" /><Bar className="h-4 w-4/5" /></Group>
    <Group><Bar className="h-6 w-44" /><div className="grid gap-3 md:grid-cols-3"><Bar className="h-40 w-full" /><Bar className="h-40 w-full" /><Bar className="h-40 w-full" /></div></Group>
    <Group><Bar className="h-6 w-52" /><Bar className="h-4 w-full" /><Bar className="h-10 w-40" /></Group>
  </div></Shell>;
}

function VersionsSkeleton() {
  return <Shell><div className="space-y-10">
    <Group><Bar className="h-3 w-36" /><Bar className="h-10 w-64" /><Bar className="h-4 w-full max-w-2xl" /></Group>
    <Group><Bar className="h-6 w-48" /><Bar className="h-36 w-full" /></Group>
    <Group><Bar className="h-6 w-40" /><Bar className="h-4 w-full" /><Bar className="h-4 w-11/12" /><Bar className="h-4 w-4/5" /></Group>
    <Group><Bar className="h-6 w-56" /><Bar className="h-4 w-full" /><Bar className="h-4 w-5/6" /></Group>
  </div></Shell>;
}

function ContactSkeleton() {
  return <Shell><div className="space-y-10">
    <Group><Bar className="h-3 w-28" /><Bar className="h-10 w-72" /><Bar className="h-4 w-full max-w-2xl" /></Group>
    <Group><Bar className="h-6 w-48" /><div className="grid gap-3 md:grid-cols-2"><Bar className="h-36 w-full" /><Bar className="h-36 w-full" /></div></Group>
    <Group><Bar className="h-6 w-44" /><Bar className="h-4 w-full" /><Bar className="h-4 w-11/12" /><Bar className="h-12 w-44" /></Group>
    <Group><Bar className="h-6 w-52" /><Bar className="h-4 w-full" /><Bar className="h-4 w-5/6" /></Group>
  </div></Shell>;
}

function DocumentationSkeleton() {
  return <Shell><div className="space-y-10">
    <Group><Bar className="h-3 w-32" /><Bar className="h-10 w-3/4 max-w-lg" /><Bar className="h-4 w-full max-w-3xl" /></Group>
    <Group><Bar className="h-6 w-56" /><Bar className="h-4 w-full" /><Bar className="h-4 w-11/12" /><Bar className="h-4 w-4/5" /></Group>
    <Group><Bar className="h-6 w-44" /><Bar className="h-4 w-full" /><Bar className="h-4 w-10/12" /><Bar className="h-24 w-full max-w-3xl" /></Group>
    <Group><Bar className="h-6 w-52" /><Bar className="h-4 w-full" /><Bar className="h-4 w-5/6" /></Group>
  </div></Shell>;
}

export default function RouteSkeletons({ pathname }: { pathname: string }) {
  if (pathname === "/versions") return <VersionsSkeleton />;
  if (pathname === "/contacto") return <ContactSkeleton />;
  if (pathname.startsWith("/docs/")) return <DocumentationSkeleton />;
  return <HomeSkeleton />;
}

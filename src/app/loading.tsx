function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`skeleton ${className}`} />;
}

function SkeletonGroup({ children }: { children: React.ReactNode }) {
  return <div className="skeleton-stagger space-y-3">{children}</div>;
}

export default function Loading() {
  return (
    <div
      className="min-h-screen bg-[#090909] text-white"
      role="status"
      aria-label="Loading Slim Executor documentation"
      aria-busy="true"
    >
      <span className="sr-only">Loading documentation...</span>

      {/* Full-width navigation placeholder */}
      <header className="border-b-2 border-gray-700 px-5 py-4 sm:px-8">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 shrink-0" />
            <Skeleton className="h-4 w-40" />
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-14" />
          </div>
          <Skeleton className="h-9 w-24 hidden md:block" />
          <Skeleton className="h-10 w-10 md:hidden" />
        </div>
      </header>

      {/* Sidebar, page content and right-hand aside load as one complete shell */}
      <div className="mx-auto grid min-h-[calc(100vh-145px)] w-full max-w-[1600px] grid-cols-1 xl:grid-cols-[240px_minmax(0,1fr)_220px]">
        <aside className="hidden border-r-2 border-gray-700 px-5 py-8 xl:block">
          <Skeleton className="mb-7 h-3 w-28" />
          <SkeletonGroup>
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-4/5" />
            <Skeleton className="h-8 w-11/12" />
          </SkeletonGroup>
          <SkeletonGroup>
            <Skeleton className="mt-7 h-3 w-24" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-5/6" />
            <Skeleton className="h-8 w-4/5" />
          </SkeletonGroup>
          <SkeletonGroup>
            <Skeleton className="mt-7 h-3 w-16" />
            <Skeleton className="h-8 w-11/12" />
            <Skeleton className="h-8 w-3/4" />
          </SkeletonGroup>
        </aside>

        <main className="min-w-0 space-y-10 px-6 py-10 sm:px-10 lg:px-14">
          <SkeletonGroup>
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-10 w-3/4 max-w-xl" />
            <Skeleton className="h-4 w-full max-w-2xl" />
            <Skeleton className="h-4 w-5/6 max-w-xl" />
          </SkeletonGroup>

          <SkeletonGroup>
            <Skeleton className="h-6 w-56" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <Skeleton className="h-4 w-4/5" />
          </SkeletonGroup>

          <SkeletonGroup>
            <Skeleton className="h-6 w-44" />
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <Skeleton className="h-36 w-full" />
              <Skeleton className="h-36 w-full" />
              <Skeleton className="h-36 w-full" />
            </div>
          </SkeletonGroup>

          <SkeletonGroup>
            <Skeleton className="h-6 w-52" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-10/12" />
            <Skeleton className="h-10 w-36" />
          </SkeletonGroup>
        </main>

        <aside className="hidden border-l-2 border-gray-700 px-5 py-8 xl:block">
          <Skeleton className="mb-7 h-3 w-24" />
          <SkeletonGroup>
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-11/12" />
            <Skeleton className="h-3 w-3/4" />
          </SkeletonGroup>
        </aside>
      </div>

      <footer className="border-t-2 border-gray-700 px-6 py-6">
        <Skeleton className="mx-auto h-3 w-44" />
      </footer>
    </div>
  );
}

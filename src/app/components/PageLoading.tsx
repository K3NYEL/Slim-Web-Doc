"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageLoading({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 620);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (loading) {
    return (
      <div className="space-y-9" role="status" aria-label="Loading page" aria-busy="true">
        <span className="sr-only">Loading content...</span>
        <div className="skeleton-stagger space-y-4">
          <div className="skeleton h-3 w-32" />
          <div className="skeleton h-10 w-3/4 max-w-xl" />
          <div className="skeleton h-4 w-full max-w-2xl" />
          <div className="skeleton h-4 w-5/6 max-w-xl" />
        </div>
        <div className="skeleton-stagger space-y-5">
          <div className="skeleton h-7 w-56" />
          <div className="skeleton h-28 w-full" />
        </div>
        <div className="skeleton-stagger space-y-5">
          <div className="skeleton h-7 w-48" />
          <div className="grid gap-3 md:grid-cols-3">
            <div className="skeleton h-36" />
            <div className="skeleton h-36" />
            <div className="skeleton h-36" />
          </div>
        </div>
      </div>
    );
  }

  return <div className="content-reveal">{children}</div>;
}

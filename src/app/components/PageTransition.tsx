"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import PageSkeleton from "./PageSkeleton";

function isDocumentationSection(pathname: string) {
  return pathname.startsWith("/docs/");
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const previousPath = useRef<string | null>(null);
  const [readyPath, setReadyPath] = useState<string | null>(null);

  const isInternalDocsNavigation =
    previousPath.current !== null &&
    isDocumentationSection(previousPath.current) &&
    isDocumentationSection(pathname);

  useEffect(() => {
    const previous = previousPath.current;
    previousPath.current = pathname;

    // Moving between documentation sections should be immediate.
    // Keep the full-page skeleton for the initial visit and top-level page changes.
    if (previous && isDocumentationSection(previous) && isDocumentationSection(pathname)) {
      return;
    }

    const timer = window.setTimeout(() => setReadyPath(pathname), 720);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (readyPath !== pathname && !isInternalDocsNavigation) {
    return <PageSkeleton />;
  }

  return <div className="page-content-reveal">{children}</div>;
}

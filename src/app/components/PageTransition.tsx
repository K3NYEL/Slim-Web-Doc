"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import RouteSkeletons from "./RouteSkeletons";

function isDocumentationPath(pathname: string) {
  return pathname.startsWith("/docs/");
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const [readyPath, setReadyPath] = useState(pathname);

  const docsToDocsNavigation =
    isDocumentationPath(previousPath.current) && isDocumentationPath(pathname);
  const alreadyInsideDocumentation =
    isDocumentationPath(readyPath) && isDocumentationPath(pathname);

  useEffect(() => {
    if (previousPath.current === pathname) return;

    const previous = previousPath.current;
    previousPath.current = pathname;

    // Sidebar navigation between documentation pages is immediate.
    if (isDocumentationPath(previous) && isDocumentationPath(pathname)) return;

    const timer = window.setTimeout(() => setReadyPath(pathname), 560);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (readyPath !== pathname && !docsToDocsNavigation && !alreadyInsideDocumentation) {
    return <RouteSkeletons pathname={pathname} />;
  }

  return <div className="page-content-reveal">{children}</div>;
}

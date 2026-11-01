"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import PageSkeleton from "./PageSkeleton";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [readyPath, setReadyPath] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setReadyPath(pathname), 720);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (readyPath !== pathname) return <PageSkeleton />;
  return <div className="page-content-reveal">{children}</div>;
}

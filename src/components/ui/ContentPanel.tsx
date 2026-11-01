import type { ReactNode } from "react";

export default function ContentPanel({ children }: { children: ReactNode }) {
  return <div className="mt-6 flex flex-col gap-4 border-2 border-gray-700 p-6">{children}</div>;
}

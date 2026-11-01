"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Documentation route error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#090909] px-6 text-center text-white">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">The page could not be loaded. Try again or return to the documentation home.</p>
      <div className="mt-7 flex gap-3">
        <button type="button" onClick={() => reset()} className="bg-[#dc2626] px-5 py-3 text-sm font-semibold hover:bg-red-700">Try again</button>
        <Link href="/" className="border border-white/15 px-5 py-3 text-sm hover:border-[#dc2626]">Home</Link>
      </div>
    </main>
  );
}

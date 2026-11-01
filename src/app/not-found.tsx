import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#090909] px-6 text-center text-white">
      <p className="text-sm font-semibold tracking-[0.2em] text-[#dc2626]">404</p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">The documentation page you requested does not exist or may have moved.</p>
      <Link href="/" className="mt-7 border border-[#dc2626] px-5 py-3 text-sm hover:bg-[#dc2626]/10">Return to documentation</Link>
    </main>
  );
}

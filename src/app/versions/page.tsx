import Link from "next/link";
import { ArrowUpRight, Download, GitBranch, ShieldCheck } from "lucide-react";
import DocumentationLayout from "../../components/docs/DocumentationLayout";
import { siteConfig } from "../../config/site";

const sections = [
  { id: "current-release", title: "Stable releases" },
  { id: "release-policy", title: "Release policy" },
  { id: "update-process", title: "Updating Slim Executor" },
];

const releasesUrl = `${siteConfig.repositoryUrl}/releases`;

export const metadata = {
  title: "Versions & Releases | Slim Executor",
  description: "Find official stable Slim Executor releases, installers and release notes.",
};

export default function Versions() {
  return (
    <DocumentationLayout activePath="/versions" sections={sections}>
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#dc2626]">DOWNLOADS & RELEASES</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Versions & Releases</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
          Find official Slim Executor installers and review the changes included in each stable release.
        </p>
      </div>

      <section id="current-release" className="mb-10 scroll-mt-28 border-b border-white/10 pb-9">
        <div className="mb-5 flex items-center gap-3">
          <ShieldCheck className="text-[#dc2626]" size={22} />
          <h2 className="text-xl font-semibold">Stable releases</h2>
        </div>
        <div className="border border-white/10 bg-white/[0.02] p-6">
          <p className="text-sm leading-7 text-gray-300">
            The releases repository is the source of truth for the latest stable version. Open it to see the current release tag, publication date, installer assets, checksums when provided and changelog.
          </p>
          <Link href={releasesUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 bg-[#dc2626] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700">
            View official releases <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <section id="release-policy" className="mb-10 scroll-mt-28 border-b border-white/10 pb-9">
        <h2 className="mb-4 text-xl font-semibold">Release policy</h2>
        <ul className="max-w-3xl list-disc space-y-3 pl-5 text-sm leading-7 text-gray-400">
          <li>Use stable releases published in the official public releases repository.</li>
          <li>Prefer the Windows x64 Setup installer attached to the release.</li>
          <li>Read the release notes before installing an update.</li>
          <li>Do not treat development builds, temporary artifacts or unofficial mirrors as stable releases.</li>
        </ul>
      </section>

      <section id="update-process" className="scroll-mt-28">
        <h2 className="mb-4 text-xl font-semibold">Updating Slim Executor</h2>
        <p className="mb-4 max-w-3xl text-sm leading-7 text-gray-400">
          Slim Executor can check the public releases repository when you request an update check from the application. Review the version and release information before choosing to download or install it. The update check is user-initiated.
        </p>
        <Link href="/docs/installation" className="inline-flex items-center gap-2 text-sm text-[#dc2626] transition-colors hover:text-red-400">
          Read installation instructions <Download size={15} />
        </Link>
      </section>

      <div className="mt-12 border-t border-white/10 pt-6">
        <Link href={siteConfig.repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-white">
          <GitBranch size={14} /> Public releases repository <ArrowUpRight size={13} />
        </Link>
      </div>
    </DocumentationLayout>
  );
}

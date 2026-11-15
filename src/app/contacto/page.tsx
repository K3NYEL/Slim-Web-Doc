import Link from "next/link";
import { ArrowUpRight, Mail, Bug, MessageSquare } from "lucide-react";
import DocumentationLayout from "../../components/docs/DocumentationLayout";
import { siteConfig } from "../../config/site";

const sections = [
  { id: "support", title: "Support" },
  { id: "report-issue", title: "Report an issue" },
  { id: "before-contacting", title: "Before contacting us" },
];

export const metadata = {
  title: "Contact & Support | Slim Executor",
  description: "Find support and report issues related to Slim Executor.",
};

export default function Contacto() {
  return (
    <DocumentationLayout activePath="/contacto" sections={sections}>
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-[#dc2626]">SLIM EXECUTOR</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact & Support</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-400">
          Need help, found a problem, or want to share feedback? Use the channels below to get in touch with the project.
        </p>
      </div>

      <section id="support" className="mb-10 scroll-mt-28 border-b border-white/10 pb-9">
        <h2 className="mb-5 text-xl font-semibold">Support channels</h2>
        <div className="motion-stagger grid gap-3 md:grid-cols-2">
          <Link href={`${siteConfig.contactUrl}`} target="_blank" rel="noopener noreferrer" className="interactive-card border border-white/10 p-5 hover:border-[#dc2626]/70 hover:bg-white/2">
            <Mail className="mb-4 text-[#dc2626]" size={21} />
            <h3 className="font-semibold">Email</h3>
            <span className="mt-4 inline-flex items-center gap-2 text-xs text-gray-300">Send an email <ArrowUpRight size={14} /></span>
          </Link>
          <Link href={siteConfig.sourceRepositoryUrl} target="_blank" rel="noopener noreferrer" className="interactive-card border border-white/10 p-5 hover:border-[#dc2626]/70 hover:bg-white/2">
            <MessageSquare className="mb-4 text-[#dc2626]" size={21} />
            <h3 className="font-semibold">GitHub repository</h3>
            <p className="mt-2 text-sm text-gray-400">Review the project and its development history.</p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs text-gray-300">Open repository <ArrowUpRight size={14} /></span>
          </Link>
        </div>
      </section>

      <section id="report-issue" className="mb-10 scroll-mt-28 border-b border-white/10 pb-9">
        <h2 className="mb-4 text-xl font-semibold">Report an issue</h2>
        <p className="mb-5 max-w-3xl text-sm leading-7 text-gray-400">
          For reproducible bugs, use the GitHub issue tracker. Include the application version, Windows version, the steps that led to the problem and the complete error output. Remove private information before posting logs.
        </p>
        <Link href={`${siteConfig.sourceRepositoryUrl}/issues`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#dc2626]/60 px-4 py-3 text-sm text-white transition-colors hover:bg-[#dc2626]/10">
          <Bug size={16} /> Open issue tracker <ArrowUpRight size={15} />
        </Link>
      </section>

      <section id="before-contacting" className="scroll-mt-28">
        <h2 className="mb-4 text-xl font-semibold">Before contacting us</h2>
        <ul className="max-w-3xl list-disc space-y-2 pl-5 text-sm leading-7 text-gray-400">
          <li>Check that you are using a current stable release.</li>
          <li>Describe what you expected to happen and what happened instead.</li>
          <li>Include a minimal script if the issue is related to Lua execution.</li>
          <li>Never include passwords, access tokens or other private credentials in a report.</li>
        </ul>
      </section>
    </DocumentationLayout>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import { docPages } from "../../../content/docs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return docPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = docPages.find((entry) => entry.slug === slug);
  if (!page) return { title: "Page not found | Slim Executor Documentation" };
  return {
    title: `${page.title} | Slim Executor Documentation`,
    description: page.description,
  };
}

export default async function DocumentationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = docPages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  const currentIndex = docPages.findIndex((entry) => entry.slug === page.slug);
  const previousPage = currentIndex > 0 ? docPages[currentIndex - 1] : null;
  const nextPage = currentIndex < docPages.length - 1 ? docPages[currentIndex + 1] : null;

  return (
    <DocumentationLayout
      activePath={`/docs/${page.slug}`}
      sections={page.sections.map(({ id, title }) => ({ id, title }))}
    >
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{page.title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400">{page.description}</p>
      </div>

      <div className="space-y-10">
        {page.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-white/10 pb-9 last:border-0">
            <h2 className="mb-4 text-xl font-semibold text-white">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-3 max-w-3xl text-sm leading-7 text-gray-300">{paragraph}</p>
            ))}
            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-gray-300">
                {section.bullets.map((item) => <li key={item}>{item.startsWith("https://") ? <a href={item} target="_blank" rel="noreferrer" className="text-[#dc2626] hover:underline">{item}</a> : item}</li>)}
              </ul>
            )}
            {section.code && (
              <pre className="mt-5 max-w-3xl overflow-x-auto border border-white/10 bg-[#050505] p-4 text-sm leading-6 text-gray-200"><code>{section.code}</code></pre>
            )}
            {section.note && (
              <p className="mt-5 max-w-3xl border-l-2 border-[#dc2626] bg-white/[0.03] px-4 py-3 text-sm leading-6 text-gray-400">
                {section.note}
              </p>
            )}
          </section>
        ))}
      </div>

      <nav aria-label="Documentation pagination" className="mt-12 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
        {previousPage ? (
          <Link href={`/docs/${previousPage.slug}`} className="border border-2 border-gray-700 p-4 hover:border-[#dc2626]/70">
            <span className="block text-xs text-gray-500">Previous</span>
            <span className="mt-1 block text-sm text-white">← {previousPage.title}</span>
          </Link>
        ) : <span />}
        {nextPage && (
          <Link href={`/docs/${nextPage.slug}`} className="border-2 border-gray-700 p-4 text-right hover:border-[#dc2626]/70">
            <span className="block text-xs text-gray-500">Next</span>
            <span className="mt-1 block text-sm text-white">{nextPage.title} →</span>
          </Link>
        )}
      </nav>
    </DocumentationLayout>
  );
}

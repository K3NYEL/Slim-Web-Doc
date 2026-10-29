import Button from './components/buttons/Buttons';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      <section className="flex flex-row gap-8 min-h-screen bg-[#090909]">
        <aside className="h-100% w-64 shrink-0 border-r-2 border-gray-700 p-6">
          <h2 className="mb-6 text-lg font-bold">
            Documentation
          </h2>

          <nav aria-label="Documentation navigation">
            <h3 className="mb-3 text-xs font-semibold text-gray-500">
              GETTING STARTED
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#installation">Installation</a>
              </li>
              <li>
                <a href="#quick-start">Quick Start</a>
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xs font-semibold text-gray-500">
              DOCUMENTATION
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#lua-runtime">Lua Runtime</a>
              </li>
              <li>
                <a href="#lua-api">Lua API Reference</a>
              </li>
              <li>
                <a href="#ui-controls">UI Controls</a>
              </li>
              <li>
                <a href="#examples">Examples</a>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="min-w-0 flex-1 p-6 text-white">
          <h1 className="mb-4 flex items-center gap-2 text-3xl font-bold">
            Welcome to SlimDoc
          </h1>

          <p>
            SlimDoc is a lightweight documentation generator that helps you create beautiful and responsive documentation for your projects.
            With SlimDoc, you can easily write and organize your documentation using Markdown, and it will automatically generate a clean and user-friendly interface for your readers.
            Get started by exploring the features and customization options available in SlimDoc.
          </p>
          <div className="mt-6 flex gap-4 border-2 border-gray-700 p-6">
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>
        </section>
        <aside className="h-100% w-64 shrink-0 border-l-2 border-gray-700 p-6">
          <h2 className="text-lg font-semibold">
            Quick Links
          </h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-white">
                Examples
              </a>
            </li>
          </ul>
        </aside>
      </section>
      <footer className="bg-[#090909] border-t-2 border-gray-700 p-4 text-center text-white">
      </footer>
    </main>
  );
}

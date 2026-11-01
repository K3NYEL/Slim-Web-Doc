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
                <a href="#overview" className="text-white transition-colors hover:text-[#dc2626]">Overview</a>
              </li>
              <li>
                <a href="#installation" className="text-white transition-colors hover:text-[#dc2626]">Installation</a>
              </li>
              <li>
                <a href="#quick-start" className="text-white transition-colors hover:text-[#dc2626]">Quick Start</a>
              </li>
            </ul>

            <h3 className="mb-3 mt-6 text-xs font-semibold text-gray-500">
              DOCUMENTATION
            </h3>

            <ul className="space-y-2">
              <li>
                <a href="#lua" className="text-white transition-colors hover:text-[#dc2626]">Lua</a>
              </li>
              <li>
                <a href="#qt-interfaces" className="text-white transition-colors hover:text-[#dc2626]">Inferfaz Qt</a>
              </li>
              <li>
                <a href="#canvas-events" className="text-white transition-colors hover:text-[#dc2626]">Canvas and Events</a>
              </li>
              <li>
                <a href="#functions" className="text-white transition-colors hover:text-[#dc2626]">Functions</a>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="min-w-0 flex-1 p-6 text-white flex flex-col gap-3">
          <h1 className="text-gray-400 mb-4 flex items-center gap-2 text-3xl font-bold">
            Welcome to Slim Executor Documentation
          </h1>
          <h2 className="font-semibold text-[#dc2626]">
            WHAT IS SLIM EXECUTOR?
          </h2>
          <p className="text-gray-300">
            Slim Executor is a simple IDE 
          </p>
        </section>
        <aside className="h-100% w-64 shrink-0 border-l-2 border-gray-700 p-6">
          <h2 className="text-lg font-semibold">
            Quick Links
          </h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-[#dc2626]">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-[#dc2626]">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-gray-400 transition-colors hover:text-[#dc2626]">
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

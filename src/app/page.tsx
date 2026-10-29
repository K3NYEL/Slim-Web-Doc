import Button from './components/buttons/Buttons';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      <section className="flex flex-row gap-8 min-h-screen bg-[#090909]">
        <aside className="h-100% w-64 shrink-0 border-r-2 border-gray-700 p-4">
          <h2 className="text-lg font-semibold">
            Documentation
          </h2>
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
        </section>
      </section>
      <footer className="bg-[#090909] border-t-2 border-gray-700 p-4 text-center text-white">
        <p>&copy; 2024 SlimDoc. All rights reserved.</p>
      </footer>
    </main>
  );
}

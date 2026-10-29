import Button from './components/buttons/Buttons';
import NavBar from './components/NavBar';
import ActionButton from "./components/buttons/ActionButton";
// import Button from './components/buttons/Buttons';

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="max-w-4xl mx-auto p-6 text-white mb-4">
        <article className="mb-4">

        </article>
        <h1 className="text-3xl font-bold mb-4">Welcome to SlimDoc</h1>
        <p>
          SlimDoc is a lightweight documentation generator that helps you create beautiful and responsive documentation for your projects.
        </p>
        <p>
          With SlimDoc, you can easily write and organize your documentation using Markdown, and it will automatically generate a clean and user-friendly interface for your readers.
        </p>
        <p >
          Get started by exploring the features and customization options available in SlimDoc.
        </p>
        <ActionButton />
      </section>
    </main>
  );

}

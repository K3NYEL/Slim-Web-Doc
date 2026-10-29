import Button from './components/buttons/Buttons';
import NavBar from './components/NavBar';
import ActionButton from "./components/buttons/ActionButton";
import Image from "next/image";
import Logo from "@public/slim-executor-mark.svg";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="max-w-4xl mx-auto p-6 text-white mb-4">
        <article className="mb-4">

        </article>
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Image
            src={Logo}
            alt="Slim Executor Logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
          Welcome to SlimDoc
        </h1>
        <p>
          SlimDoc is a lightweight documentation generator that helps you create beautiful and responsive documentation for your projects.
        </p>
        <p>
          With SlimDoc, you can easily write and organize your documentation using Markdown, and it will automatically generate a clean and user-friendly interface for your readers.
        </p>
        <p >
          Get started by exploring the features and customization options available in SlimDoc.
        </p>
      </section>
    </main>
  );
}


export default function Version() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-3xl font-bold">Slim Executor</h1>
        <p className="text-lg text-gray-400">
          Current Version: <span className="font-semibold">v0.1.2+3</span>
        </p>
        <p className="text-gray-400">
          This is the latest stable release of Slim Executor. For more information, visit the{" "}
          <a
            href="https://github.com/K3NYEL/Slim-Executor-Releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub repository
          </a>
        </p>
      </div>
    </main>
  );
}
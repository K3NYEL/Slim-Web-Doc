const RepositoryLink = {
  url: "https://github.com/K3NYEL/Slim-Executor-Releases"
}

export type DocSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  code?: string;
  note?: string;
};

export type DocPage = {
  slug: string;
  title: string;
  description: string;
  sections: DocSection[];
};

export const docNavigation = [
  {
    label: "GETTING STARTED",
    items: [
      { label: "Overview", href: "/" },
      { label: "Installation", href: "/docs/installation" },
      { label: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    label: "CORE CONCEPTS",
    items: [
      { label: "Lua Runtime", href: "/docs/lua-runtime" },
      { label: "UI Controls", href: "/docs/ui-controls" },
      { label: "Windows", href: "/docs/windows" },
      { label: "Timers", href: "/docs/timers" },
      { label: "Canvas & Events", href: "/docs/canvas-events" },
    ],
  },
  {
    label: "REFERENCE",
    items: [
      { label: "Examples", href: "/docs/examples" },
      { label: "Troubleshooting", href: "/docs/troubleshooting" },
    ],
  },
];

export const docPages: DocPage[] = [
  {
    slug: "installation",
    title: "Installation",
    description: "Install Slim Executor on a supported Windows system and prepare it to run Lua scripts.",
    sections: [
      { id: "requirements", title: "Requirements", paragraphs: ["Slim Executor is distributed as a Windows desktop application. Use a current Windows installation and download the installer only from the official release repository."], bullets: ["Windows 10 or Windows 11 (64-bit).", "The official Slim Executor Setup installer.", "An internet connection when downloading the installer or checking for releases."] },
      { id: "download", title: "Download", paragraphs: ["Open the official public releases repository and choose the latest stable release. Download the Setup executable attached to that release. Avoid unofficial mirrors and development artifacts."], bullets: ["Official releases: " + RepositoryLink.url, "Choose the Windows x64 Setup installer.", "Keep the installer filename unchanged until the download completes."] },
      { id: "install", title: "Install and launch", paragraphs: ["Run the downloaded Setup executable and follow the installation prompts. When installation finishes, launch Slim Executor from its installed shortcut or application entry.", "Release contents and installation screens may change between versions. Follow the instructions included with the release you downloaded."] },
      { id: "updates", title: "Updates", paragraphs: ["Slim Executor includes an update-checking flow that can query the public releases repository. Checking for updates is user-initiated; review the offered version before choosing to download or install it."] },
    ],
  },
  {
    slug: "quick-start",
    title: "Quick Start",
    description: "A short path from opening Slim Executor to running your first Lua script.",
    sections: [
      { id: "open", title: "Open the application", paragraphs: ["Launch Slim Executor after installation. The application provides an editor and execution interface for working with Lua scripts. The exact arrangement can vary by release."] },
      { id: "create", title: "Create a script", paragraphs: ["Create a new Lua script in the project or file area, or use the editor provided by the application. Start with a small script so that errors are easy to identify."] },
      { id: "first-script", title: "Run a first script", paragraphs: ["Enter a simple Lua statement and use the application's run or execute control. Review the runtime output for the result or any reported error."], code: 'print("Hello from Slim Executor")' },
      { id: "iterate", title: "Make changes", paragraphs: ["Edit the script, run it again, and use the output to understand its behavior. If a script reports an error, check the line number and the API available in the installed version before changing the code."] },
    ],
  },
  {
    slug: "lua-runtime",
    title: "Lua Runtime",
    description: "Understand the Lua scripting environment embedded in Slim Executor.",
    sections: [
      { id: "overview", title: "Runtime overview", paragraphs: ["Slim Executor embeds a Lua runtime so scripts can be written and executed inside the desktop application. The runtime has been tested with Lua 5.5 in the project's development environment. The exact runtime version should be confirmed against the installed release."] },
      { id: "standard-library", title: "Available libraries", paragraphs: ["The application controls which standard-library features and host APIs are exposed to scripts. Do not assume every Lua standard library or operating-system function is available. For example, the application's runtime has been tested without the global os table being exposed."] },
      { id: "host-api", title: "Host API tables", paragraphs: ["The runtime has exposed application-facing tables including UiControl, ui, UiWindow, UiTimer and UiCanvas in development tests. These names identify API areas, not a guarantee that every method is available in every release."] },
      { id: "errors", title: "Runtime errors", paragraphs: ["When a script fails, Slim Executor reports an error and a Lua traceback when available. Use the reported line number to locate the failing expression. A method-call error such as an attempt to call a nil value usually means that the object does not provide that method in the current runtime."] },
    ],
  },
  {
    slug: "ui-controls",
    title: "UI Controls",
    description: "A starting point for working with the user-interface control bindings exposed to Lua.",
    sections: [
      { id: "overview", title: "Overview", paragraphs: ["Slim Executor provides UI-related bindings for scripts that need to interact with application controls. The UiControl and ui tables have been identified in runtime tests. Their exact members should be checked against the API in the installed build."] },
      { id: "compatibility", title: "Check method availability", paragraphs: ["Do not assume that a method exists because it appears in an example written for another framework. Check the documentation for the installed version and test one operation at a time."] },
      { id: "safe-pattern", title: "A careful development pattern", paragraphs: ["Begin with a basic Lua statement, then add one UI operation. Run the script after each change so that an unavailable method or incorrect argument can be isolated quickly."] },
    ],
  },
  {
    slug: "windows",
    title: "Windows",
    description: "Create and manage application windows through the window-related Lua bindings.",
    sections: [
      { id: "overview", title: "Overview", paragraphs: ["The UiWindow table is part of the window-related scripting surface identified in Slim Executor. Development testing confirmed that a window can be shown and remain open."] },
      { id: "lifecycle", title: "Window lifecycle", paragraphs: ["Window creation, configuration, visibility and closing behavior depend on the methods implemented by the installed version. Consult the matching API reference before using a specific method or argument list."] },
      { id: "testing", title: "Test incrementally", paragraphs: ["Start by creating one window and confirming that it appears. Add controls or drawing only after the basic window behavior works. This makes UI errors easier to diagnose."] },
    ],
  },
  {
    slug: "timers",
    title: "Timers",
    description: "An introduction to the UiTimer binding and time-based script behavior.",
    sections: [
      { id: "overview", title: "Overview", paragraphs: ["UiTimer is one of the application-facing tables identified in the Lua runtime. It is intended for timer-related UI or script behavior, but exact method names and callback signatures must be verified against the installed release."] },
      { id: "callbacks", title: "Callbacks and lifecycle", paragraphs: ["When using a timer, confirm how the current API starts, stops and delivers callbacks. Keep callbacks short and ensure that timers are stopped when their work is no longer needed."] },
      { id: "debugging", title: "Debugging", paragraphs: ["If a timer does not fire, verify that the timer was created successfully, that the callback is valid, and that the timer remains active for the expected lifetime."] },
    ],
  },
  {
    slug: "canvas-events",
    title: "Canvas & Events",
    description: "Explore the canvas-related bindings and event-driven interaction supported by the runtime.",
    sections: [
      { id: "canvas", title: "Canvas", paragraphs: ["UiCanvas is part of the Lua-facing API surface identified during development. It is associated with drawing or canvas-based UI work. The precise drawing methods, coordinate system and supported primitives depend on the installed version."] },
      { id: "events", title: "Events", paragraphs: ["Event support allows scripts to respond to user or UI activity when the relevant binding is available. Confirm each event name and callback signature from the API implemented by your build."] },
      { id: "coordinates", title: "Coordinates and rendering", paragraphs: ["Before building a complex visualization, verify the canvas dimensions, origin, scaling behavior and redraw lifecycle. Test a single primitive before adding axes, grids or interactive controls."] },
    ],
  },
  {
    slug: "examples",
    title: "Examples",
    description: "Small Lua examples and a workflow for adapting them to the current Slim Executor API.",
    sections: [
      { id: "hello", title: "Hello world", paragraphs: ["This example uses standard Lua output and does not depend on application-specific UI bindings."], code: 'print("Hello from Slim Executor")' },
      { id: "variables", title: "Variables and calculations", paragraphs: ["Use ordinary Lua expressions for calculations and inspect the result in the runtime output."], code: "local width = 12\nlocal height = 8\nlocal area = width * height\nprint(area)" },
      { id: "ui", title: "UI examples", paragraphs: ["For UI examples, use the documentation page matching the installed release. The names UiControl, ui, UiWindow, UiTimer and UiCanvas have been observed, but method signatures should not be guessed."] },
      { id: "adapt", title: "Adapting examples", paragraphs: ["Examples written for other Lua hosts may rely on unavailable globals or methods. Replace those dependencies only after confirming the equivalent Slim Executor API."] },
    ],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting",
    description: "Diagnose common script and runtime issues when working with Slim Executor.",
    sections: [
      { id: "nil-method", title: "Attempt to call a nil value", paragraphs: ["This usually means that the function or method is not available on the value being used. Check spelling, object type and whether the method exists in your installed version."] },
      { id: "nil-argument", title: "Unexpected nil argument", paragraphs: ["A function may be receiving nil where it expects a string, number or object. Check where the value is assigned and validate inputs before passing them to the API."] },
      { id: "missing-global", title: "Missing global or library", paragraphs: ["Slim Executor may intentionally omit some Lua globals or standard libraries. Do not assume APIs such as os or framework globals are available; use only documented runtime features."] },
      { id: "version", title: "Version differences", paragraphs: ["The available scripting API can change between releases. Confirm the application version and use examples written for that version. If an example fails, reduce it to the smallest reproducible script before reporting the issue."] },
      { id: "report", title: "Report an issue", paragraphs: ["When reporting a problem, include the Slim Executor version, a minimal script that reproduces the issue, the complete error message and the steps taken before the error occurred."] },
    ],
  },
];

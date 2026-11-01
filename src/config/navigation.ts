export type NavigationItem = {
  label: string;
  href: string;
};

export type NavigationGroup = {
  label: string;
  items: readonly NavigationItem[];
};

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Contacto", href: "/contacto" },
  { label: "Version", href: "/versions" },
] as const satisfies readonly NavigationItem[];

export const documentationNavigation = [
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
] as const satisfies readonly NavigationGroup[];

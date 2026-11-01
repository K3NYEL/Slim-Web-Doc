# Oficial Repo of Slim Executor Web Documentation

## Project structure

The application uses the Next.js App Router. Routes and route-specific files live in `src/app`, while reusable configuration, content and UI are kept outside the routing layer:

```text
src/
  app/                 # Routes, layouts and route-specific UI
  config/              # Site-wide settings and navigation
  content/             # Documentation data and content models
  components/          # Shared UI components
```

Add a documentation page by extending `src/content/docs.ts` and the navigation in `src/config/navigation.ts`. Keep URLs, repository links and contact details in `src/config/site.ts` instead of duplicating them in components.

## Development

```bash
npm run dev
npm run type-check
npm run lint
npm run build
```

## License 

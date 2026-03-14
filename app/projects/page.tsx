import Link from "next/link";

const projects = [
  {
    name: "js-jsx-snippets",
    tagline: "VSCode extension adopted by 1.2M+ developers",
    description:
      "A comprehensive collection of JavaScript and JSX snippets for VS Code that accelerates React development. Became one of the most popular React snippet extensions in the marketplace.",
    tags: ["TypeScript", "VS Code Extension", "React", "Open Source"],
    badge: "1.2M+ installs",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/skyran1278/js-jsx-snippets",
      },
      {
        label: "VS Code Marketplace",
        href: "https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets",
      },
    ],
  },
  {
    name: "stretchly-raycast",
    tagline: "Raycast extension for Pomodoro-style break reminders",
    description:
      "A Raycast extension that integrates with Stretchly to surface break reminders, skip or reset intervals, and manage work sessions — all from the Raycast launcher.",
    tags: ["TypeScript", "Raycast Extension", "Open Source"],
    badge: null,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/skyran1278/stretchly-raycast",
      },
      {
        label: "Raycast Store",
        href: "https://www.raycast.com/skyran/stretchly",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      <main className="flex flex-1 flex-col px-6 py-24 sm:px-16 max-w-3xl mx-auto w-full">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors mb-12 inline-block"
        >
          ← Back
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
          Projects
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-16">
          Open-source tools I&apos;ve built and shipped.
        </p>

        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-zinc-100 dark:border-zinc-800 p-8"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 font-mono">
                  {project.name}
                </h2>
                {project.badge && (
                  <span className="shrink-0 rounded-full bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="text-base font-medium text-zinc-600 dark:text-zinc-300 mb-3">
                {project.tagline}
              </p>
              <p className="text-sm leading-6 text-zinc-500 dark:text-zinc-400 mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2.5 py-0.5 text-xs text-zinc-500 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-900 dark:text-zinc-50 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-600 hover:decoration-zinc-900 dark:hover:decoration-zinc-50 transition-colors"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800 py-8 px-6 sm:px-16">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-6 text-sm text-zinc-400">
          <a
            href="https://github.com/skyran1278"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:cv@u-ran.com"
            className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            cv@u-ran.com
          </a>
        </div>
      </footer>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-950">
      <main className="flex flex-1 flex-col justify-center px-6 py-24 sm:px-16 max-w-3xl mx-auto w-full">
        {/* Hero */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest text-zinc-400 uppercase mb-4">
            Senior Software Engineer
          </p>
          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            You-Ran Nai
          </h1>
          <p className="text-xl leading-8 text-zinc-600 dark:text-zinc-400 max-w-xl">
            Product-minded engineer with 6+ years of experience building web
            platforms, C++ systems, and developer tools. Open-source author
            with 1.4M+ VSCode extension installs.
          </p>
        </div>

        {/* Highlights */}
        <ul className="mb-12 space-y-2 text-zinc-500 dark:text-zinc-400 text-base">
          <li className="flex items-center gap-2">
            <span className="text-zinc-300 dark:text-zinc-600">—</span>
            TypeScript · C++ · Python
          </li>
          <li className="flex items-center gap-2">
            <span className="text-zinc-300 dark:text-zinc-600">—</span>
            NestJS · GraphQL · React · PostgreSQL · AWS
          </li>
          <li className="flex items-center gap-2">
            <span className="text-zinc-300 dark:text-zinc-600">—</span>
            M.S. Structural Engineering, National Taiwan University
          </li>
        </ul>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-24">
          <a
            href="https://cv.u-ran.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-7 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            View Resume →
          </a>
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-7 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-800"
          >
            See Projects →
          </Link>
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

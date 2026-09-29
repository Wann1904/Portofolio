import { site } from '../data/site'

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>

          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft sm:text-base">
            {site.subtitleTags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-2">
                {i > 0 && <span className="text-ink-faint" aria-hidden="true">•</span>}
                {tag}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-prose text-balance text-base leading-relaxed text-ink-soft sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#repair-cases"
              className="rounded-md bg-hardware px-5 py-2.5 text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-md border border-base-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink-faint"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Diagnostic-style status panel — a small nod to the multimeter readouts
            this portfolio's subject spends time looking at. */}
        <div className="rounded-lg border border-base-line bg-base-panel p-5 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-base-line pb-3">
            <span className="text-ink-faint">status.log</span>
            <span className="flex items-center gap-1.5 text-software">
              <span className="h-1.5 w-1.5 rounded-full bg-software" aria-hidden="true" />
              active
            </span>
          </div>
          <dl className="mt-3 space-y-2.5">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink-faint">focus</dt>
              <dd className="text-right text-ink-soft">hardware + software</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink-faint">mode</dt>
              <dd className="text-right text-ink-soft">learning by doing</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink-faint">daily driver</dt>
              <dd className="text-right text-ink-soft">Linux</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-ink-faint">building</dt>
              <dd className="text-right text-ink-soft">Flutter apps</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

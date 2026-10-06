import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outlet Classification & Retail Performance Intelligence | Felix Ohemu",
  description:
    "A retail decision-support system combining a SharePoint application with a Python backend on Azure to classify outlets and guide commercial prioritisation.",
};

const businessUses = [
  ["Sales and field coverage", "Compare outlets and regions to decide where sales teams should spend time."],
  ["Merchandising and distribution", "Use outlet classifications to guide coverage and distribution priorities."],
  ["Promotional investment", "Explore where promotions and commercial resources should be concentrated."],
];

const lessons = [
  {
    number: "01",
    title: "Draw a clear boundary between platforms.",
    copy:
      "SharePoint remained the employee-facing application, while the Python backend handled classification logic and processing. That separation let each part focus on the work it was better suited to do.",
  },
    {
      number: "02",
    title: "Design analytics around decisions.",
    copy:
      "Classification is only useful when it helps answer questions about where sales, distribution, merchandising, or promotional effort should go.",
  },
  {
      number: "03",
    title: "Balance flexible scenarios with consistent rules.",
    copy:
      "Configurable parameters help teams explore alternatives, while controlled classification rules keep results interpretable and comparable.",
  },
];

export default function OutletClassificationCaseStudy() {
  return (
    <main className="page-frame">
      <article className="w-full pt-[98px]">
        <header className="relative overflow-hidden border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(244,234,215,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,234,215,0.06) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="site-shell relative py-12 sm:py-16 lg:py-20">
            <Link
              href="/#CaseStudies"
              className="mb-12 inline-flex min-h-10 items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#b8aa96] transition-colors hover:text-[#f4ead7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] sm:mb-16 sm:text-[10px]"
            >
              <span aria-hidden="true">←</span>
              Production case studies
            </Link>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.48fr)] lg:items-end lg:gap-16">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#9f917d] sm:text-[10px]">
                  <span className="text-[#d9673b]">03 / Production case study</span>
                  <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
                  <span>FMCG / retail intelligence</span>
                </div>

                <h1 className="max-w-[1000px] text-[clamp(2.8rem,6.4vw,6.9rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#f1e6d2]">
                  Outlet Classification &amp; Retail Performance Intelligence
                  <span className="text-[#d9673b]">.</span>
                </h1>

                <p className="mt-7 max-w-[740px] text-[15px] leading-7 text-[#c6b9a6] sm:text-base sm:leading-8 lg:text-[17px]">
                  A decision-support system for a network of more than 7,000
                  outlets, from large retailers to small kiosks in remote areas.
                  Hundreds of field reps uploaded data daily for commercial
                  analysis and prioritisation.
                </p>
              </div>

              <div className="border-y border-[#493f33] py-5 lg:mb-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  My contribution
                </p>
                <p className="mt-3 text-xl font-semibold text-[#f1e6d2] sm:text-2xl">
                  Python backend on Azure
                </p>
                <p className="mt-2 text-sm leading-6 text-[#b8aa96]">
                  Processing and classification business logic.
                </p>
              </div>
            </div>

            <dl className="mt-12 grid grid-cols-3 border-y border-[#493f33] sm:mt-16">
              {[
                ["7,000+", "outlets tracked"],
                ["Hundreds", "field reps"],
                ["Daily", "data uploads"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`py-5 sm:py-6 ${index > 0 ? "border-l border-[#493f33] pl-4 sm:pl-6" : "pr-4 sm:pr-6"}`}
                >
                  <dt className="text-[clamp(1.05rem,2.5vw,2rem)] font-black uppercase leading-none tracking-[-0.04em] text-[#f1e6d2]">
                    {value}
                  </dt>
                  <dd className="mt-2 font-mono text-[8px] uppercase leading-4 tracking-[0.16em] text-[#8f826f] sm:text-[9px]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 font-mono text-[8px] uppercase leading-5 tracking-[0.14em] text-[#746957] sm:text-[9px]">
              Production platform / contributed project
            </p>
          </div>
        </header>

        <section className="border-b border-[#a9967a] bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                  The business question
                </p>
                <h2 className="max-w-[640px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  Where should commercial teams focus?
                </h2>
              </div>

              <div className="space-y-5 text-[15px] leading-7 text-[#514637] sm:text-base sm:leading-8">
                <p>
                  A large outlet network can show where products are present,
                  but it does not automatically show which locations matter
                  most or where commercial effort is likely to be useful.
                </p>
                <p>
                  The tool helped teams compare outlet performance across
                  territories, identify strong and weak performers, and
                  investigate why results differed. This gave them a clearer
                  basis for deciding where limited commercial attention could
                  have the greatest value.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#a9967a] bg-[#f1e6d2] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-[850px] sm:mb-14">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                How the system works
              </p>
              <h2 className="text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                Classify, compare, prioritise.
              </h2>
              <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#5f5547] sm:text-base sm:leading-8">
                Users could apply defined classification rules or adjust
                available parameters to compare scenarios. The backend
                processed the data, then returned classifications, summaries,
                charts, and exportable results to SharePoint.
              </p>
              <p className="mt-4 max-w-[700px] border-l-2 border-[#b94725] pl-4 font-mono text-[9px] uppercase leading-6 tracking-[0.15em] text-[#746654] sm:text-[10px]">
                Classification cadence / Monthly · Quarterly · Biannual
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Set the scenario", "Use established business rules or adjust available parameters to model a commercial scenario."],
                ["Process the data", "SharePoint sends outlet data and the selected scenario to the Python service for classification."],
                ["Review the results", "Classifications return to SharePoint as summaries, charts, and exportable results."],
              ].map(([title, copy], index) => (
                <article key={title} className="border-t border-[#a9967a] pt-5">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#b94725]">0{index + 1}</p>
                  <h3 className="mt-4 text-lg font-bold uppercase leading-tight tracking-[-0.02em] sm:text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#625746]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  My contribution &amp; architecture
                </p>
                <h2 className="max-w-[660px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                  Extend SharePoint with a dedicated backend.
                </h2>
                <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#b8aa96] sm:text-base sm:leading-8">
                  I built the Python backend hosted on Azure. SharePoint
                  remained the internal application employees already used.
                  Through an API, it sent outlet data and the selected scenario
                  to the backend, which processed the data and returned the
                  classifications.
                </p>
              </div>

              <div className="border-t border-[#493f33]">
                {[
                  ["Internal application", "SharePoint UI, internal access, and user interaction"],
                  ["API boundary", "SharePoint sends outlet data and selected scenario to the backend"],
                  ["Processing service", "Python business logic and classification on Azure"],
                  ["Results", "Processed classifications returned to SharePoint for review and export"],
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-3 border-b border-[#493f33] py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-center">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#827664] sm:text-[9px]">{label}</p>
                    <p className="text-sm leading-6 text-[#e2d5c1] sm:text-[15px]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-px border border-[#493f33] bg-[#493f33] sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {businessUses.map(([title, copy]) => (
                <article key={title} className="bg-[#15130f] p-5 sm:p-6">
                  <h3 className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#d9673b] sm:text-[10px]">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#b8aa96]">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#a9967a] bg-[#eadfc9] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                  Commercial value
                </p>
                <h2 className="max-w-[620px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  From “what do we have?” to “where should we focus?”
                </h2>
              </div>

              <div className="space-y-5 text-[15px] leading-7 text-[#625746] sm:text-base sm:leading-8">
                <p>
                  Teams could spot high- and low-performing outlets, compare
                  regions, and investigate what was driving the differences.
                  They could then reduce attention on outlets that were not
                  improving and focus on stronger performers across regions.
                  The consistent results replaced repetitive spreadsheet
                  analysis and supported choices about sales coverage,
                  merchandising, distribution, and promotions. Commercial teams
                  remained responsible for the decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-[800px] sm:mb-14">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                What I learned
              </p>
              <h2 className="text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                Build toward the decision.
              </h2>
            </div>

            <div className="grid gap-px border border-[#493f33] bg-[#493f33] sm:grid-cols-2">
              {lessons.map((lesson) => (
                <article key={lesson.number} className="bg-[#15130f] p-5 sm:p-7 lg:p-9">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#d9673b]">{lesson.number}</p>
                  <h3 className="mt-4 max-w-[480px] text-xl font-bold uppercase leading-tight tracking-[-0.03em] text-[#f1e6d2] sm:text-2xl">
                    {lesson.title}
                  </h3>
                  <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#b8aa96] sm:text-[15px]">
                    {lesson.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:text-[10px]">
                Outlet Classification &amp; Retail Performance Intelligence
              </p>
              <p className="mt-2 text-sm text-[#514637]">Production case study / 03</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/case-studies/field-workforce"
                className="group inline-flex min-h-11 items-center gap-3 border border-[#776b5b] px-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#41372b] transition-colors hover:border-[#b94725] hover:text-[#17130f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b94725] sm:text-[10px]"
              >
                Previous case
                <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>
              </Link>
              <Link
                href="/#CaseStudies"
                className="group inline-flex min-h-11 items-center gap-3 border border-[#17130f] bg-[#17130f] px-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#f4ead7] transition-colors hover:border-[#b94725] hover:bg-[#b94725] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b94725] sm:text-[10px]"
              >
                All production cases
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}

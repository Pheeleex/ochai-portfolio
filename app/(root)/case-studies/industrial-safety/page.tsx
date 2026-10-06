import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Safety & Work Compliance Platform | Felix Ohemu",
  description:
    "A production safety and work compliance platform built for a multi-site oil and gas company, from incident reporting through authorization and close-out.",
};

const workflowStages = [
  {
    number: "01",
    title: "Incident / hazard",
    before:
      "Reports relied on emails and documents. Information could be incomplete, inconsistent, or difficult to retrieve later.",
    after:
      "A standardized report captures required information and gives each submission a clear status.",
  },
  {
    number: "02",
    title: "Work initiation",
    before:
      "Requests were prepared and reviewed manually. Missing details and incorrect dates led to avoidable follow-up.",
    after:
      "Validated requests can be linked to the incident or hazard that prompted the work.",
  },
  {
    number: "03",
    title: "Work authorization",
    before:
      "Employees and supervisors had to check manually that required approvals and preceding documents were in place.",
    after:
      "The workflow engine routes approvals and enforces required prerequisites before authorization can proceed.",
  },
  {
    number: "04",
    title: "Close-out",
    before:
      "Completion involved more documents and emails, with manual checks to confirm earlier stages were complete.",
    after:
      "Close-out stays connected to the authorization and follows a supervisor and HSE review path.",
  },
];

const systemFlow = [
  "Incident / hazard",
  "Work initiation",
  "Supervisor review",
  "Work authorization",
  "HSE review",
  "Close-out",
];

const architectureLayers = [
  { label: "Users", value: "Employees · Supervisors · HSE" },
  { label: "Frontend", value: "Next.js" },
  { label: "Backend", value: "Python · FastAPI" },
  { label: "Workflow", value: "Custom approval-routing engine" },
  { label: "Data", value: "Database details withheld" },
];

export default function IndustrialSafetyCaseStudy() {
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
                  <span className="text-[#d9673b]">01 / Production case study</span>
                  <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
                  <span>Oil & gas / company identity withheld</span>
                </div>

                <h1 className="max-w-[1000px] text-[clamp(2.8rem,6.4vw,6.9rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#f1e6d2]">
                  Industrial Safety &amp; Work Compliance Platform
                  <span className="text-[#d9673b]">.</span>
                </h1>

                <p className="mt-7 max-w-[740px] text-[15px] leading-7 text-[#c6b9a6] sm:text-base sm:leading-8 lg:text-[17px]">
                  A company-wide workflow for incident reporting, work initiation,
                  authorization, and close-out—built to replace paper slips,
                  email handoffs, and verbal follow-up.
                </p>
              </div>

              <div className="border-y border-[#493f33] py-5 lg:mb-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  My role
                </p>
                <p className="mt-3 text-xl font-semibold text-[#f1e6d2] sm:text-2xl">
                  Lead developer
                </p>
                <p className="mt-2 text-sm leading-6 text-[#b8aa96]">
                  Built the system end to end.
                </p>
              </div>
            </div>

            <dl className="mt-12 grid grid-cols-3 border-y border-[#493f33] sm:mt-16">
              {[
                ["~400", "system users"],
                ["4", "operating locations"],
                ["Daily", "production use"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`py-5 sm:py-6 ${index > 0 ? "border-l border-[#493f33] pl-4 sm:pl-6" : "pr-4 sm:pr-6"}`}
                >
                  <dt className="text-[clamp(1.45rem,3vw,2.5rem)] font-black uppercase leading-none tracking-[-0.04em] text-[#f1e6d2]">
                    {value}
                  </dt>
                  <dd className="mt-2 font-mono text-[8px] uppercase leading-4 tracking-[0.16em] text-[#8f826f] sm:text-[9px]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 font-mono text-[8px] uppercase leading-5 tracking-[0.14em] text-[#746957] sm:text-[9px]">
              Production deployment / provider and company identity withheld
            </p>
          </div>
        </header>

        <section className="relative overflow-hidden border-b border-[#a9967a] bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell relative py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                  The challenge
                </p>
                <h2 className="max-w-[640px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  Work moved on paper and word of mouth.
                </h2>
              </div>

              <div className="space-y-5 text-[15px] leading-7 text-[#514637] sm:text-base sm:leading-8">
                <p>
                  A supervisor received a paper authorization after an assessment,
                  used it as proof that work could proceed, then returned it for
                  stamping and filing when the job was complete. Other information
                  moved through emails, documents, and verbal coordination.
                </p>
                <p>
                  The process could get work done, but it was difficult to see
                  what had been requested, approved, completed, or was still
                  pending across the company. Finding a complete history also
                  took manual follow-up.
                </p>
              </div>
            </div>

            <div className="mt-12 border-y border-[#a9967a] bg-[#d7c5a8]/45 px-4 py-5 sm:mt-16 sm:px-6 sm:py-6">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:text-[10px]">
                Connected workflow
              </p>
              <div className="flex flex-wrap items-center gap-y-3">
                {systemFlow.map((step, index) => (
                  <div key={step} className="flex items-center">
                    <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#2f281f] sm:text-[10px]">
                      {step}
                    </span>
                    {index < systemFlow.length - 1 && (
                      <span aria-hidden="true" className="mx-2.5 text-[#b94725] sm:mx-4">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#a9967a] bg-[#f1e6d2] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-[850px] sm:mb-14">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                What changed
              </p>
              <h2 className="text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                One record from report to close-out.
              </h2>
              <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#5f5547] sm:text-base sm:leading-8">
                Each stage became part of a connected record, with structured
                information, visible status, and the right review path.
              </p>
            </div>

            <div className="divide-y divide-[#b6a58c] border-y border-[#b6a58c]">
              {workflowStages.map((stage) => (
                <article key={stage.number} className="py-8 sm:py-10">
                  <div className="grid gap-6 sm:grid-cols-[64px_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-8 lg:gap-12">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#b94725]">
                      {stage.number}
                    </span>
                    <h3 className="text-[clamp(1.6rem,2.8vw,2.8rem)] font-black uppercase leading-[0.95] tracking-[-0.04em]">
                      {stage.title}
                    </h3>
                    <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                      <div>
                        <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#8a7a64] sm:text-[9px]">
                          Before
                        </p>
                        <p className="text-sm leading-7 text-[#625746]">{stage.before}</p>
                      </div>
                      <div>
                        <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#b94725] sm:text-[9px]">
                          In the platform
                        </p>
                        <p className="text-sm leading-7 text-[#41372b]">{stage.after}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  Architecture &amp; controls
                </p>
                <h2 className="max-w-[660px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                  A purpose-built workflow engine.
                </h2>
                <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#b8aa96] sm:text-base sm:leading-8">
                  I built the application end to end, including a workflow engine
                  that routed approvals and enforced the required order of work.
                  Role-based access rules controlled which actions were available
                  to employees, supervisors, and HSE reviewers.
                </p>
              </div>

              <div className="border-t border-[#493f33]">
                {architectureLayers.map((layer) => (
                  <div
                    key={layer.label}
                    className="grid gap-3 border-b border-[#493f33] py-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:items-center"
                  >
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#827664] sm:text-[9px]">
                      {layer.label}
                    </p>
                    <p className="text-sm text-[#e2d5c1] sm:text-[15px]">{layer.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {[
                ["Approval routing", "Requests followed the configured supervisor and HSE review path."],
                ["Prerequisite checks", "Work authorization could not proceed before the required work initiation was approved."],
                ["Image evidence", "Images could be stored with records to support reporting and work history."],
              ].map(([title, copy]) => (
                <div key={title} className="border border-[#493f33] bg-[#15130f] p-5 sm:p-6">
                  <h3 className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#d9673b] sm:text-[10px]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#b8aa96]">{copy}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 font-mono text-[8px] uppercase leading-5 tracking-[0.14em] text-[#746957] sm:text-[9px]">
              Database and deployment provider withheld for confidentiality.
            </p>
          </div>
        </section>

        <section className="border-b border-[#a9967a] bg-[#eadfc9] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                  Operational outcomes
                </p>
                <h2 className="max-w-[620px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  Clearer work. Less chasing.
                </h2>
              </div>

              <div className="grid gap-px border border-[#a9967a] bg-[#a9967a] sm:grid-cols-2">
                {[
                  ["Company-wide visibility", "Teams could see what was pending, approved, active, or complete across operating locations."],
                  ["More complete records", "Standardized reports and linked stages made investigations and historical retrieval easier."],
                  ["Less administrative follow-up", "Validation and status visibility reduced avoidable checking, corrections, and email chasing."],
                  ["Stronger process control", "Required approval order no longer depended only on employees remembering each step."],
                ].map(([title, copy]) => (
                  <article key={title} className="bg-[#eadfc9] p-5 sm:p-6 lg:p-7">
                    <h3 className="text-lg font-bold uppercase leading-tight tracking-[-0.02em] sm:text-xl">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#625746]">{copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-[900px] border-l border-[#b94725] pl-4 text-sm leading-7 text-[#625746] sm:text-[15px]">
              The value came from reducing administrative effort and process
              delays, while improving traceability and reducing reliance on
              memory.
            </p>
          </div>
        </section>

        <section className="border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-[760px] sm:mb-14">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                What I learned
              </p>
              <h2 className="text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                Enforce the rules. Keep judgment with people.
              </h2>
            </div>

            <div className="grid gap-0 border-t border-[#493f33] md:grid-cols-2 md:divide-x md:divide-[#493f33]">
              <article className="border-b border-[#493f33] py-7 md:border-b-0 md:pr-8 lg:pr-12">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#d9673b]">01 / Control and judgment</p>
                <h3 className="mt-4 max-w-[520px] text-2xl font-bold uppercase leading-tight tracking-[-0.03em] text-[#f1e6d2] sm:text-3xl">
                  Make exceptions deliberate, not impossible.
                </h3>
                <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#b8aa96] sm:text-[15px]">
                  I learned to enforce defined safety rules without blocking
                  every unusual scenario. Experienced staff still need a
                  controlled route for legitimate exceptions.
                </p>
              </article>

              <article className="py-7 md:pl-8 lg:pl-12">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#d9673b]">02 / Automation and visibility</p>
                <h3 className="mt-4 max-w-[520px] text-2xl font-bold uppercase leading-tight tracking-[-0.03em] text-[#f1e6d2] sm:text-3xl">
                  Visibility can be enough.
                </h3>
                <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#b8aa96] sm:text-[15px]">
                  The system did not need to automate every decision. Making
                  ownership, pending actions, and delays visible gave
                  professionals useful information while leaving safety
                  judgments with them.
                </p>
              </article>
            </div>
          </div>
        </section>

        <footer className="bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:text-[10px]">
                Industrial Safety &amp; Work Compliance Platform
              </p>
              <p className="mt-2 text-sm text-[#514637]">Production case study / 01</p>
            </div>
            <Link
              href="/#CaseStudies"
              className="group inline-flex min-h-11 items-center gap-3 border border-[#17130f] px-4 font-mono text-[9px] uppercase tracking-[0.16em] transition-colors hover:border-[#b94725] hover:bg-[#b94725] hover:text-[#fff7e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b94725] sm:text-[10px]"
            >
              Back to production cases
              <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Approval & Stamp Automation | Felix Ohemu",
  description:
    "A production document workflow connecting SharePoint submissions, conditional Power Automate approvals, Adobe signing and stamping, and company-controlled records.",
};

const workflow = [
  {
    number: "01",
    title: "Submit",
    copy: "Employees send documents through a shared internal entry point with the information needed to route them.",
  },
  {
    number: "02",
    title: "Route for approval",
    copy: "Power Automate applies the document-specific approval path, including a selected approver and configured approvers where required.",
  },
  {
    number: "03",
    title: "Sign and stamp",
    copy: "Once internal approvals are complete, the document moves to Adobe services for signing and stamping.",
  },
  {
    number: "04",
    title: "Keep the record",
    copy: "The workflow retains the submission, approval progress, signed document, and process history for the organisation.",
  },
];

const outcomes = [
  {
    title: "One place to submit",
    copy: "Employees use a consistent entry point instead of moving documents manually between people and inboxes.",
  },
  {
    title: "Approvals before Adobe",
    copy: "The internal approval process is handled before the document reaches the signing and stamping step.",
  },
  {
    title: "A company-controlled history",
    copy: "The organisation can follow what was submitted, approved, signed, and retained through its own workflow records.",
  },
];

const learningNotes = [
  {
    title: "A signature tool is only one part of the workflow.",
    copy:
      "Adobe handled signing and stamping, but the business process also needed submission, internal review, routing, and a record of what happened before and after signature.",
  },
  {
    title: "Approval paths should reflect document rules.",
    copy:
      "Different document types can require different approvers. Encoding those routes in the flow makes the process more consistent than relying on employees to remember each sequence.",
  },
  {
    title: "Keep the process history with the organisation.",
    copy:
      "A connected signing service does not replace the company's need to track its own submissions, approvals, completed documents, and retention history.",
  },
];

export default function DocumentApprovalCaseStudy() {
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
                  <span className="text-[#d9673b]">05 / Production case study</span>
                  <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
                  <span>Document operations / regional deployment</span>
                </div>

                <h1 className="max-w-[1000px] text-[clamp(2.8rem,6.4vw,6.9rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#f1e6d2]">
                  Document Approval &amp; Stamp Automation
                  <span className="text-[#d9673b]">.</span>
                </h1>

                <p className="mt-7 max-w-[740px] text-[15px] leading-7 text-[#c6b9a6] sm:text-base sm:leading-8 lg:text-[17px]">
                  An internal workflow that carries employee documents through
                  the right approvals before handing them to Adobe for signing
                  and stamping.
                </p>
              </div>

              <div className="border-y border-[#493f33] py-5 lg:mb-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  My contribution
                </p>
                <p className="mt-3 text-xl font-semibold text-[#f1e6d2] sm:text-2xl">
                  Workflow automation &amp; integration
                </p>
                <p className="mt-2 text-sm leading-6 text-[#b8aa96]">
                  Connecting internal approvals, Adobe services, and company records.
                </p>
              </div>
            </div>

            <dl className="mt-12 grid grid-cols-3 border-y border-[#493f33] sm:mt-16">
              {[
                ["1,000+", "employees served"],
                ["1,000+", "documents each week"],
                ["Daily", "production use"],
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
              Production workflow / organisation identity withheld
            </p>
          </div>
        </header>

        <section className="border-b border-[#a9967a] bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                  The process problem
                </p>
                <h2 className="max-w-[640px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  Signing was only one step.
                </h2>
              </div>

              <div className="space-y-5 text-[15px] leading-7 text-[#514637] sm:text-base sm:leading-8">
                <p>
                  The organisation already used Adobe for signatures, but
                  documents needed internal review first. Approval paths varied
                  by document type, and requests moved through manual handoffs
                  that made status and history difficult to follow.
                </p>
                <p>
                  The platform added the missing process around the existing
                  signing tool: a shared submission point, conditional approval
                  routing, and an organisation-controlled record of each step.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#a9967a] bg-[#f1e6d2] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-[850px] sm:mb-14">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                The workflow
              </p>
              <h2 className="text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                Submit. Approve. Sign. Retain.
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step) => (
                <article key={step.number} className="border-t border-[#a9967a] pt-5">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#b94725]">{step.number}</p>
                  <h3 className="mt-4 text-xl font-bold uppercase leading-tight tracking-[-0.02em]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#625746]">{step.copy}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 border-y border-[#a9967a] bg-[#d7c5a8]/45 px-4 py-5 sm:mt-16 sm:px-6 sm:py-6">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:text-[10px]">
                Approval path example
              </p>
              <div className="flex flex-wrap items-center gap-y-3">
                {["Employee submission", "Selected approver", "Configured approver(s)", "Adobe sign / stamp", "Company record"].map((step, index, steps) => (
                  <div key={step} className="flex items-center">
                    <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#2f281f] sm:text-[10px]">{step}</span>
                    {index < steps.length - 1 && (
                      <span aria-hidden="true" className="mx-2.5 text-[#b94725] sm:mx-4">→</span>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-4 max-w-[850px] text-sm leading-6 text-[#625746]">
                Depending on document type, a route could include a selected
                approver followed by one or two predefined approvers.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  Stack &amp; responsibility split
                </p>
                <h2 className="max-w-[660px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                  Keep each tool doing its job.
                </h2>
                <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#b8aa96] sm:text-base sm:leading-8">
                  The solution used the organisation&apos;s SharePoint
                  environment for employee access and document handling,
                  Power Automate flows for conditional routing, and Adobe
                  services for the established signing and stamping experience.
                </p>
              </div>

              <dl className="border-t border-[#493f33]">
                {[
                  ["SharePoint", "Internal entry point and organisation-controlled records"],
                  ["Power Automate", "Document-specific approval routing and process automation"],
                  ["Adobe services", "Electronic signing and document stamping"],
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-3 border-b border-[#493f33] py-5 sm:grid-cols-[170px_minmax(0,1fr)] sm:items-center">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#d9673b]">{label}</dt>
                    <dd className="text-sm leading-6 text-[#e2d5c1] sm:text-[15px]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-[850px] sm:mb-14">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                What I learned
              </p>
              <h2 className="text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                Design the whole document journey.
              </h2>
            </div>

            <div className="grid gap-px border border-[#493f33] bg-[#493f33] sm:grid-cols-3">
              {learningNotes.map((lesson, index) => (
                <article key={lesson.title} className="bg-[#15130f] p-5 sm:p-7 lg:p-8">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#d9673b]">0{index + 1}</p>
                  <h3 className="mt-4 text-lg font-bold uppercase leading-tight tracking-[-0.03em] text-[#f1e6d2] sm:text-xl">
                    {lesson.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#b8aa96]">{lesson.copy}</p>
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
                  What changed
                </p>
                <h2 className="max-w-[620px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  A controlled path from request to record.
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                {outcomes.map((outcome) => (
                  <article key={outcome.title} className="border-t border-[#a9967a] pt-5">
                    <h3 className="font-mono text-[9px] uppercase leading-5 tracking-[0.16em] text-[#b94725] sm:text-[10px]">{outcome.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-[#625746]">{outcome.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:text-[10px]">
                Document Approval &amp; Stamp Automation
              </p>
              <p className="mt-2 text-sm text-[#514637]">Production case study / 05</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/case-studies/integrated-operations"
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

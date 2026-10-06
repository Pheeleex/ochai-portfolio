"use client";

import Link from "next/link";

const caseStudies = [
  {
    number: "01",
    title: "Industrial Safety & Work Compliance Platform",
    category: "Industrial operations / safety",
    status: "Production system / identity withheld",
    role: "Lead developer / end-to-end build",
    href: "/case-studies/industrial-safety",
    summary:
      "A digital safety workflow for an oil and gas company, connecting incident reports, work initiation, authorization, and close-out with company-wide visibility into pending and active work.",
    metrics: [
      { value: "~400", label: "system users" },
      { value: "4", label: "operating locations" },
      { value: "Daily", label: "production use" },
    ],
  },
  {
    number: "02",
    title: "Field Workforce & Promotion Operations Platform",
    category: "Field operations / distributed workforce",
    status: "Production system / deployed across Germany",
    role: "Developer / promoter experience and admin tools",
    href: "/case-studies/field-workforce",
    summary:
      "A field platform connecting promoters, agencies, brands, promotions, approved locations, and QR activations—with administrative tools to manage a large, distributed operation.",
    metrics: [
      { value: "500+", label: "promoters" },
      { value: "5,000+", label: "locations" },
      { value: "~17", label: "operational regions" },
    ],
  },
  {
    number: "03",
    title: "Outlet Classification & Retail Performance Intelligence",
    category: "FMCG / route-to-market intelligence",
    status: "Production platform / contributed project",
    role: "Backend developer / processing and business logic",
    href: "/case-studies/outlet-classification",
    summary:
      "A retail intelligence platform covering 7,000+ outlets, from large retailers to remote kiosks. Daily data from hundreds of reps feeds scheduled classifications that help teams compare performance and direct commercial resources.",
    metrics: [
      { value: "7,000+", label: "outlets tracked" },
      { value: "Hundreds", label: "reps submitting data" },
      { value: "Daily", label: "field data uploads" },
    ],
  },
  {
    number: "04",
    title: "Integrated Operations Platform",
    category: "CRM / inventory / procurement",
    status: "Client platform / evolving into ERP",
    role: "Platform development / connected workflows",
    href: "/case-studies/integrated-operations",
    summary:
      "A client-built platform connecting customer relationships, inventory, and procurement so information can follow the operating process. The product is now growing toward a broader ERP for FMCG operations.",
    problem:
      "Customer interactions, stock movement, and purchasing were handled in separate workflows, making it difficult to carry information between teams.",
    solution:
      "The platform connects multichannel CRM, inventory management, and procurement while keeping each module responsible for its own records. The shared workflows link customer demand to stock availability, purchasing, receiving, and fulfilment.",
    metrics: [
      { value: "3", label: "connected operating modules" },
      { value: "Next.js", label: "web application" },
      { value: "FastAPI", label: "Python backend" },
    ],
    highlights: [
      "Multichannel customer relationship management",
      "Inventory ledger, movement, batches, and expiry",
      "Purchase requests, approvals, orders, and receiving",
      "Customer demand connected to supply operations",
    ],
    flow: [
      "Customer demand",
      "Stock check",
      "Procurement",
      "Goods receipt",
      "Inventory",
      "Fulfilment",
    ],
  },
  {
    number: "05",
    title: "Document Approval & Stamp Automation",
    category: "Document operations / workflow automation",
    status: "Production system / regional deployment",
    role: "Developer / workflow automation and integration",
    href: "/case-studies/document-approval",
    summary:
      "A high-volume document workflow used across a West African regional organisation, connecting employee submissions, conditional approval routing, Adobe signing and stamping, and a company-controlled record of the process.",
    problem:
      "The organisation already used Adobe for signatures, but the signing step was only one part of the real process. Documents first needed to move through internal approvals, with different routes depending on document type, and the business needed its own reliable history of what had been submitted, approved, signed, and retained instead of relying on manual movement between desks and disconnected records.",
    solution:
      "The platform gives employees one place to submit documents, then routes each request through the required approval path before anything reaches Adobe. A route can include a selected approver plus one or two predefined approvers depending on the document type. Once approved, Adobe remains responsible for the familiar signing and stamping experience, while the custom platform keeps the organisation's workflow, records, and history under its own control.",
    metrics: [
      { value: "1,000+", label: "employees served" },
      { value: "1,000+", label: "documents / week" },
      { value: "Daily", label: "production use" },
    ],
    highlights: [
      "Conditional multi-step approval routing",
      "Selected + configured approvers",
      "Adobe signing and stamping integration",
      "Company-controlled document history",
    ],
    flow: [
      "Employee submission",
      "Approval routing",
      "Approver(s)",
      "Adobe sign / stamp",
      "Company record",
    ],
  },
];

const ProductionCaseStudies = () => {
  return (
    <section
      id="CaseStudies"
      className="relative w-full scroll-mt-[98px] overflow-x-clip border-b border-[#a9967a] bg-[#dfd0b7] text-[#17130f]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,19,15,0.085) 1px, transparent 1px), linear-gradient(90deg, rgba(23,19,15,0.055) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-36 top-24 h-[420px] w-[420px] rounded-full border border-[#c5522d]/16 lg:-left-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-44 h-[270px] w-[270px] rounded-full border border-[#c5522d]/12 lg:left-8"
      />

      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
        <header className="grid gap-8 border-b border-[#a9967a] pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)] lg:items-end lg:gap-20 lg:pb-14">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#746654] sm:text-[10px]">
              <span className="text-[#b94725]">02 / Production Case Studies</span>
              <span className="hidden h-px w-10 bg-[#9c896f] sm:block" aria-hidden="true" />
              <span>Real systems / anonymised where required</span>
            </div>

            <h2 className="max-w-[960px] text-[clamp(3rem,6.1vw,6.6rem)] font-black uppercase leading-[0.87] tracking-[-0.058em] text-[#17130f]">
              Systems built for real operations<span className="text-[#c5522d]">.</span>
            </h2>
          </div>

          <div className="max-w-[570px] lg:justify-self-end">
            <p className="text-[15px] leading-7 text-[#564a3b] sm:text-base sm:leading-8 lg:text-[17px]">
              Selected production platforms I&apos;ve built or contributed to. Company identities and sensitive operational details are intentionally withheld; the problems, system behaviour, and scale shown here are represented conservatively.
            </p>
            <div className="mt-6 border-t border-[#aa977b] pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:text-[10px]">
              <span className="text-[#b94725]">05 studies</span>
              <span className="mx-3 text-[#a08d72]">/</span>
              <span>Workflow · field · intelligence · transactions · automation</span>
            </div>
          </div>
        </header>

        <div className="divide-y divide-[#9e8b70] border-b border-[#9e8b70]">
          {caseStudies.map((study) => (
            <article key={study.number} className="group py-12 sm:py-14 lg:py-20">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#b19e82] pb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#746654] sm:text-[10px]">
                <span className="text-[#b94725]">{study.number} / {study.category}</span>
                <span>{study.status}</span>
              </div>

              {study.href ? (
                <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.7fr)] lg:items-end lg:gap-16">
                  <div>
                    <h3 className="max-w-[760px] text-[clamp(2.65rem,4.7vw,5.35rem)] font-black uppercase leading-[0.9] tracking-[-0.052em] text-[#17130f]">
                      {study.title}
                    </h3>
                    <p className="mt-5 max-w-[760px] text-[15px] leading-7 text-[#564a3b] sm:text-base sm:leading-8">
                      {study.summary}
                    </p>
                    <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:text-[10px]">
                      Role / <span className="text-[#41372b]">{study.role}</span>
                    </p>
                  </div>

                  <div>
                    <dl className="grid grid-cols-3 border-y border-[#a9967a]">
                      {study.metrics.map((metric, index) => (
                        <div
                          key={`${study.number}-${metric.label}`}
                          className={`py-5 ${index > 0 ? "border-l border-[#a9967a] pl-4 sm:pl-5" : "pr-4 sm:pr-5"}`}
                        >
                          <dt className="text-[clamp(1rem,2.1vw,2rem)] font-black uppercase leading-none tracking-[-0.035em] text-[#1d1812]">
                            {metric.value}
                          </dt>
                          <dd className="mt-2 font-mono text-[8px] uppercase leading-4 tracking-[0.16em] text-[#716350] sm:text-[9px]">
                            {metric.label}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <Link
                      href={study.href}
                      className="group/link mt-6 inline-flex min-h-12 items-center gap-4 border border-[#17130f] px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#17130f] transition-colors hover:border-[#b94725] hover:bg-[#b94725] hover:text-[#fff7e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b94725]"
                    >
                      Read the case study
                      <span aria-hidden="true" className="transition-transform group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              ) : (
                <>
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(520px,1fr)] lg:gap-16 xl:gap-24">
                <div className="lg:pr-4">
                  <h3 className="max-w-[760px] text-[clamp(2.65rem,4.7vw,5.35rem)] font-black uppercase leading-[0.9] tracking-[-0.052em] text-[#17130f]">
                    {study.title}
                  </h3>
                  <p className="mt-6 max-w-[690px] text-[15px] leading-7 text-[#564a3b] sm:text-base sm:leading-8">
                    {study.summary}
                  </p>

                  <dl className="mt-9 grid grid-cols-3 border-y border-[#a9967a]">
                    {study.metrics.map((metric, index) => (
                      <div
                        key={`${study.number}-${metric.label}`}
                        className={`py-5 ${index > 0 ? "border-l border-[#a9967a] pl-4 sm:pl-5" : "pr-4 sm:pr-5"}`}
                      >
                        <dt className="text-[clamp(1rem,2.1vw,2rem)] font-black uppercase leading-none tracking-[-0.035em] text-[#1d1812]">
                          {metric.value}
                        </dt>
                        <dd className="mt-2 font-mono text-[8px] uppercase leading-4 tracking-[0.16em] text-[#716350] sm:text-[9px]">
                          {metric.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div>
                  <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                    <div>
                      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                        The problem
                      </p>
                      <p className="text-sm leading-7 text-[#514637] sm:text-[15px]">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                        The system
                      </p>
                      <p className="text-sm leading-7 text-[#514637] sm:text-[15px]">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-9 border-t border-[#a9967a] pt-6">
                    <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#716350] sm:text-[10px]">
                      What it had to handle
                    </p>
                    <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {study.highlights?.map((highlight, index) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 border-t border-[#bba98e] pt-3 font-mono text-[9px] uppercase leading-5 tracking-[0.14em] text-[#41372b] sm:text-[10px]"
                        >
                          <span className="mt-[1px] text-[#b94725]">0{index + 1}</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-y border-[#a9967a] bg-[#d7c5a8]/45 px-4 py-5 sm:px-5 lg:mt-12">
                <div className="mb-4 flex items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[#746654] sm:text-[9px]">
                  <span className="text-[#b94725]">System path</span>
                  <span>{study.number} / 05</span>
                </div>

                <div className="flex flex-wrap items-center gap-y-3">
                  {study.flow?.map((step, index, steps) => (
                    <div key={step} className="flex items-center">
                      <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#2f281f] sm:text-[10px]">
                        {step}
                      </span>
                      {index < steps.length - 1 && (
                        <span aria-hidden="true" className="mx-2.5 text-[#b94725] sm:mx-4">
                          →
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
                </>
              )}
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-b border-[#a9967a] py-6 font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>Production proof / not client disclosure</span>
          <span className="text-[#b94725]">Problems → systems → operational use</span>
        </div>
      </div>
    </section>
  );
};

export default ProductionCaseStudies;

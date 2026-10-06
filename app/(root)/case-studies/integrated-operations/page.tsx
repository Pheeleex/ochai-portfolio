import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrated Operations Platform | Felix Ohemu",
  description:
    "A client-built operations platform connecting CRM, inventory, and procurement, now growing toward an ERP for FMCG operations.",
};

const modules = [
  {
    number: "01",
    name: "Multichannel CRM",
    purpose: "Keep the customer relationship in context.",
    detail:
      "Customer profiles bring conversations, requests, complaints, follow-ups, assigned staff, and related business records into a shared view. Employees can see the history and next action instead of relying on one person's memory or a disconnected inbox.",
    capabilities: ["Customer and conversation history", "Assigned follow-ups", "Requests, complaints, and status"],
  },
  {
    number: "02",
    name: "Inventory management",
    purpose: "Track stock as a history of movements.",
    detail:
      "Inventory records cover categories such as raw materials, packaging, finished goods, and operating supplies. Receipts, issues, adjustments, and returns explain how a stock balance changed; batches and expiry dates help teams identify what should be used first.",
    capabilities: ["Stock by category and location", "Movement history and traceability", "Batch and expiry tracking"],
  },
  {
    number: "03",
    name: "Procurement management",
    purpose: "Follow purchases through to verified receipt.",
    detail:
      "The purchasing workflow connects internal requests and approvals with purchase orders, suppliers, and goods receipt. Receiving is linked to inventory, so the process accounts for what arrived and updates the stock record.",
    capabilities: ["Purchase requests and approvals", "Orders and supplier tracking", "Goods receipt linked to inventory"],
  },
];

const operatingCycle = [
  "Customer demand",
  "Check availability",
  "Request a purchase",
  "Approve and order",
  "Receive into stock",
  "Fulfil the request",
];

const learningNotes = [
  {
    title: "Integration matters at the handoff.",
    copy:
      "The greatest value often appears between departments. I learned to prioritize connections that replace calls, emails, spreadsheet checks, and repeated entry as work moves from one team to another.",
  },
  {
    title: "Each module needs an owner for its data.",
    copy:
      "CRM owns customer relationships, Inventory owns stock positions, and Procurement owns purchasing. Other modules can use those records without keeping conflicting copies.",
  },
  {
    title: "Keep boundaries clear as the platform grows.",
    copy:
      "I learned to connect modules through clear contracts while preserving their independence, so a problem in one area does not have to stop the others from doing their core work.",
  },
];

export default function IntegratedOperationsCaseStudy() {
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
                  <span className="text-[#d9673b]">04 / Production case study</span>
                  <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
                  <span>FMCG operations / client identity withheld</span>
                </div>

                <h1 className="max-w-[1000px] text-[clamp(2.8rem,6.4vw,6.9rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#f1e6d2]">
                  Integrated Operations Platform
                  <span className="text-[#d9673b]">.</span>
                </h1>

                <p className="mt-7 max-w-[740px] text-[15px] leading-7 text-[#c6b9a6] sm:text-base sm:leading-8 lg:text-[17px]">
                  A client-built platform connecting customer relationships,
                  inventory, and procurement so operational information can
                  follow the work across teams.
                </p>
              </div>

              <div className="border-y border-[#493f33] py-5 lg:mb-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  Product direction
                </p>
                <p className="mt-3 text-xl font-semibold text-[#f1e6d2] sm:text-2xl">
                  Growing toward an ERP
                </p>
                <p className="mt-2 text-sm leading-6 text-[#b8aa96]">
                  Built for a specific client; now expanding into a broader
                  platform for FMCG operations.
                </p>
              </div>
            </div>

            <dl className="mt-12 grid grid-cols-3 border-y border-[#493f33] sm:mt-16">
              {[
                ["CRM", "customer relationships"],
                ["Inventory", "stock and movement"],
                ["Procurement", "purchasing and receipt"],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className={`py-5 sm:py-6 ${index > 0 ? "border-l border-[#493f33] pl-4 sm:pl-6" : "pr-4 sm:pr-6"}`}
                >
                  <dt className="text-[clamp(1rem,2.3vw,1.8rem)] font-black uppercase leading-none tracking-[-0.04em] text-[#f1e6d2]">
                    {value}
                  </dt>
                  <dd className="mt-2 font-mono text-[8px] uppercase leading-4 tracking-[0.16em] text-[#8f826f] sm:text-[9px]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <section className="border-b border-[#a9967a] bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                  The operational problem
                </p>
                <h2 className="max-w-[640px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  Information was stopping at team boundaries.
                </h2>
              </div>

              <div className="space-y-5 text-[15px] leading-7 text-[#514637] sm:text-base sm:leading-8">
                <p>
                  Customer conversations, inventory, and purchasing each had
                  their own work to manage. When those records were separated,
                  employees had to carry context between teams by email, calls,
                  spreadsheets, or memory.
                </p>
                <p>
                  The platform brings the three areas together around a practical
                  question: can the business meet a customer need with current
                  stock, and if not, what needs to happen before it can?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#a9967a] bg-[#f1e6d2] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-[850px] sm:mb-14">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                Three operational modules
              </p>
              <h2 className="text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                Separate responsibilities. Shared context.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {modules.map((module) => (
                <article key={module.number} className="flex flex-col border-t border-[#a9967a] pt-5">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#b94725]">{module.number}</p>
                  <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-3xl">
                    {module.name}
                  </h3>
                  <p className="mt-4 text-base font-semibold leading-6 text-[#352d23]">{module.purpose}</p>
                  <p className="mt-3 text-sm leading-6 text-[#625746]">{module.detail}</p>
                  <ul className="mt-5 space-y-2 border-t border-[#c4b398] pt-4 font-mono text-[9px] uppercase leading-5 tracking-[0.1em] text-[#716350] sm:text-[10px]">
                    {module.capabilities.map((item) => <li key={item}>{item}</li>)}
                  </ul>
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
                  The integration
                </p>
                <h2 className="max-w-[660px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                  Follow demand all the way to fulfilment.
                </h2>
                <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#b8aa96] sm:text-base sm:leading-8">
                  The platform is more than three tools placed side by side. It
                  connects the records and handoffs needed to turn a customer
                  request into a fulfilled need.
                </p>
              </div>

              <ol className="border-t border-[#493f33]">
                {operatingCycle.map((step, index) => (
                  <li key={step} className="grid grid-cols-[48px_minmax(0,1fr)] items-center gap-4 border-b border-[#493f33] py-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:py-5">
                    <span className="font-mono text-[9px] tracking-[0.18em] text-[#d9673b]">0{index + 1}</span>
                    <span className="text-base font-semibold text-[#e2d5c1] sm:text-lg">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 grid gap-px border border-[#493f33] bg-[#493f33] sm:grid-cols-3">
              {[
                ["If stock is available", "The team can confirm availability and continue toward fulfilment."],
                ["If stock is short", "The gap can inform a purchase request instead of being discovered late."],
                ["When goods arrive", "Goods receipt updates inventory so teams can see the new stock position."],
              ].map(([title, copy]) => (
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
                  Stack &amp; architecture
                </p>
                <h2 className="max-w-[620px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  A web platform with clear module boundaries.
                </h2>
              </div>

              <div className="space-y-6 text-[15px] leading-7 text-[#625746] sm:text-base sm:leading-8">
                <p>
                  The web application uses Next.js and TypeScript. A Python
                  backend built with FastAPI exposes APIs for the application
                  and the connected operational workflows. A relational data
                  layer supports the shared records.
                </p>
                <dl className="border-y border-[#a9967a]">
                  {[
                    ["Frontend", "Next.js · TypeScript"],
                    ["Backend", "Python · FastAPI"],
                    ["Integration", "APIs between modules and workflows"],
                    ["Information ownership", "CRM · Inventory · Procurement"],
                  ].map(([label, value]) => (
                    <div key={label} className="grid gap-2 border-b border-[#c4b398] py-4 last:border-0 sm:grid-cols-[180px_minmax(0,1fr)]">
                      <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8a7559]">{label}</dt>
                      <dd className="text-sm font-semibold leading-6 text-[#352d23]">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
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
                Build around the work between teams.
              </h2>
            </div>

            <div className="grid gap-px border border-[#493f33] bg-[#493f33] sm:grid-cols-3">
              {learningNotes.map((principle, index) => (
                <article key={principle.title} className="bg-[#15130f] p-5 sm:p-7 lg:p-8">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#d9673b]">0{index + 1}</p>
                  <h3 className="mt-4 text-lg font-bold uppercase leading-tight tracking-[-0.03em] text-[#f1e6d2] sm:text-xl">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#b8aa96]">{principle.copy}</p>
                </article>
              ))}
            </div>

            <p className="mt-10 max-w-[800px] border-l-2 border-[#d9673b] pl-5 text-lg font-semibold leading-8 text-[#e2d5c1] sm:text-xl">
              Built around one client&apos;s needs, the platform is now growing
              toward an ERP that connects more of the day-to-day operations of
              FMCG businesses.
            </p>
          </div>
        </section>

        <footer className="bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#746654] sm:text-[10px]">
                Integrated Operations Platform
              </p>
              <p className="mt-2 text-sm text-[#514637]">Production case study / 04</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/case-studies/outlet-classification"
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

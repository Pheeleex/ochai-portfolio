import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Field Workforce & Promotion Operations Platform | Felix Ohemu",
  description:
    "A production field-operations platform connecting promoters, agencies, brands, promotions, approved locations, and QR activations across Germany.",
};

const promoterFlow = [
  "Promoter signs in",
  "Location is checked",
  "Brand is selected",
  "QR is activated",
  "Customer scans QR",
];

const adminDomains = [
  "Promoters",
  "Agencies",
  "Brands",
  "Promotions",
  "Locations",
  "QR records",
];

const capabilities = [
  {
    number: "01",
    title: "Location-based activation",
    copy:
      "The promoter flow checks whether someone is within an approved activation area before making the relevant promotion QR available.",
  },
  {
    number: "02",
    title: "Agency and brand permissions",
    copy:
      "The platform models which brands an agency can work with and which promotions and brands are available to each promoter.",
  },
  {
    number: "03",
    title: "Bulk operational management",
    copy:
      "Bulk uploads and background processing handled thousands of promoter and QR records, along with large location datasets, instead of requiring one-by-one setup.",
  },
  {
    number: "04",
    title: "Field support and incidents",
    copy:
      "Promoters and other users can submit an issue or request help. Admins add comments and track it through statuses such as In Progress, Resolved, Closed, or Not Resolved.",
  },
];

const learningNotes = [
  {
    number: "01",
    title: "Test in the environment people will use.",
    copy:
      "During testing, location behaved differently across some mobile and PWA environments. Device permissions, browser behaviour, connectivity, operating systems, and installation mode all affected reliability. For field software, the real operating environment is part of the system design.",
  },
  {
    number: "02",
    title: "The admin side carries the operational complexity.",
    copy:
      "The promoter journey should stay straightforward. The harder product work is giving administrators sound tools to manage the relationships and records behind that simple experience.",
  },
  {
    number: "03",
    title: "Permissions follow business relationships.",
    copy:
      "A broad Promoter or Admin role was not enough to express the rules. Access depended on relationships between agencies, promoters, brands, promotions, and locations.",
  },
  {
    number: "04",
    title: "Hide system complexity from the field user.",
    copy:
      "The promoter should be able to open the app, verify, select, and activate. The platform handles the eligibility rules behind the scenes.",
  },
];

export default function FieldWorkforceCaseStudy() {
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
                  <span className="text-[#d9673b]">02 / Production case study</span>
                  <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
                  <span>Field operations / Germany</span>
                </div>

                <h1 className="max-w-[1000px] text-[clamp(2.8rem,6.4vw,6.9rem)] font-black uppercase leading-[0.88] tracking-[-0.06em] text-[#f1e6d2]">
                  Field Workforce &amp; Promotion Operations Platform
                  <span className="text-[#d9673b]">.</span>
                </h1>

                <p className="mt-7 max-w-[740px] text-[15px] leading-7 text-[#c6b9a6] sm:text-base sm:leading-8 lg:text-[17px]">
                  A field-operations platform connecting promoters, agencies,
                  brands, promotions, approved locations, and QR activations
                  across a large distributed network.
                </p>
              </div>

              <div className="border-y border-[#493f33] py-5 lg:mb-1">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  My contribution
                </p>
                <p className="mt-3 text-xl font-semibold text-[#f1e6d2] sm:text-2xl">
                  Promoter and admin experiences
                </p>
                <p className="mt-2 text-sm leading-6 text-[#b8aa96]">
                  Worked across both sides of the operation.
                </p>
              </div>
            </div>

            <dl className="mt-12 grid grid-cols-3 border-y border-[#493f33] sm:mt-16">
              {[
                ["500+", "promoters"],
                ["5,000+", "locations"],
                ["~17", "operational regions"],
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
              Production system / deployed across Germany
            </p>
          </div>
        </header>

        <section className="border-b border-[#a9967a] bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                  The challenge
                </p>
                <h2 className="max-w-[640px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  The right promoter. The right brand. The right place.
                </h2>
              </div>

              <div className="space-y-5 text-[15px] leading-7 text-[#514637] sm:text-base sm:leading-8">
                <p>
                  Field teams needed a reliable way to confirm which promoters
                  were active, where they were working, and which brands and
                  promotions they were allowed to represent. Locations and
                  assignments changed across regions, making fixed assignments
                  and manual confirmation difficult to maintain.
                </p>
                <p>
                  The promoter flow also had to stay simple enough to use during
                  a live activation, while administrators needed control over
                  the people, agencies, brands, promotions, locations, and QR records
                  behind it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#a9967a] bg-[#f1e6d2] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-end lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                  Promoter experience
                </p>
                <h2 className="max-w-[640px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  A short path through complex rules.
                </h2>
              </div>
              <p className="max-w-[720px] text-[15px] leading-7 text-[#5f5547] sm:text-base sm:leading-8">
                Promoters sign in, verify their location, choose an authorized
                brand, and access the QR code for the relevant activation only
                when the required location conditions are met.
              </p>
            </div>

            <div className="mt-10 grid gap-px border border-[#b6a58c] bg-[#b6a58c] sm:grid-cols-5">
              {promoterFlow.map((step, index) => (
                <div key={step} className="relative min-h-28 bg-[#eadfc9] p-4 sm:p-5">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#b94725]">0{index + 1}</p>
                  <p className="mt-4 max-w-[180px] text-sm font-semibold uppercase leading-5 tracking-[0.02em] text-[#2f281f]">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 max-w-[720px] text-sm leading-6 text-[#625746]">
              After scanning, the customer continues through the relevant promotional experience.
            </p>

          </div>
        </section>

        <section className="border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  Administrative operations
                </p>
                <h2 className="max-w-[660px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                  One place to manage the network.
                </h2>
                <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#b8aa96] sm:text-base sm:leading-8">
                  Behind the simple field journey, administrators manage the
                  relationships and operational records that determine who can
                  do what, for which brand, and at which location.
                </p>
              </div>

              <div className="border-y border-[#493f33]">
                {adminDomains.map((domain, index) => (
                  <div
                    key={domain}
                    className="flex items-center gap-5 border-b border-[#493f33] py-4 last:border-b-0"
                  >
                    <span className="font-mono text-[9px] tracking-[0.2em] text-[#d9673b]">0{index + 1}</span>
                    <span className="text-sm uppercase tracking-[0.12em] text-[#e2d5c1] sm:text-[15px]">{domain}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {capabilities.map((item) => (
                <article key={item.number} className="border border-[#493f33] bg-[#15130f] p-5 sm:p-6">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#d9673b]">{item.number}</p>
                  <h3 className="mt-4 text-lg font-bold uppercase leading-tight tracking-[-0.02em] text-[#f1e6d2]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#b8aa96]">{item.copy}</p>
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
                <h2 className="max-w-[640px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                  Simple in the field. Manageable at scale.
                </h2>
                <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#5f5547] sm:text-base sm:leading-8">
                  The field experience stayed focused on activation, while the
                  administrative side handled the relationships and large
                  datasets behind it.
                </p>
              </div>

              <div className="border-t border-[#ad9d83]">
                {[
                  ["Promoter", "Web / PWA and mobile experience"],
                  ["Administration", "React-based web application"],
                  ["Services", "Authentication, application data, and location functionality"],
                  ["Processing", "Bulk uploads and background processing"],
                  ["Environments", "Separate development and production deployments; changes tested before release"],
                ].map(([label, value]) => (
                  <div key={label} className="grid gap-2 border-b border-[#ad9d83] py-4 sm:grid-cols-[140px_minmax(0,1fr)] sm:items-center sm:gap-5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8a7a64] sm:text-[9px]">{label}</p>
                    <p className="text-sm leading-6 text-[#41372b] sm:text-[15px]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-5 font-mono text-[8px] uppercase leading-5 tracking-[0.14em] text-[#746654] sm:text-[9px]">
              Service providers and deployment details withheld for confidentiality.
            </p>
          </div>
        </section>

        <section className="border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                  Operational outcomes
                </p>
                <h2 className="max-w-[620px] text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-[#f1e6d2]">
                  More control across the field operation.
                </h2>
              </div>

              <div className="grid gap-px border border-[#493f33] bg-[#493f33] sm:grid-cols-2">
                {[
                  ["Verified activation", "Location checks connected promoter activity to approved places."],
                  ["Controlled assignments", "Agency, brand, and promotion relationships made field permissions more precise."],
                  ["Less repetitive admin", "Bulk processing helped administrators manage large promoter, QR, and location datasets."],
                  ["Trackable field support", "Issues could be followed from report through comments and resolution status."],
                  ["One operational layer", "Promoters in the field and the teams managing activations shared one view of promoter, promotion, location, and support activity."],
                  ["A simpler field journey", "Important checks happened in the product, reducing dependence on manual confirmation."],
                ].map(([title, copy]) => (
                  <article key={title} className="bg-[#15130f] p-5 sm:p-6 lg:p-7">
                    <h3 className="text-lg font-bold uppercase leading-tight tracking-[-0.02em] text-[#f1e6d2] sm:text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#b8aa96]">{copy}</p>
                  </article>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section className="border-b border-[#a9967a] bg-[#dfd0b7] text-[#17130f]">
          <div className="site-shell py-16 sm:py-20 lg:py-24">
            <div className="mb-10 max-w-[800px] sm:mb-14">
              <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#b94725] sm:text-[10px]">
                What I learned
              </p>
              <h2 className="text-[clamp(2.65rem,5vw,5.2rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                Put complexity where it can be managed.
              </h2>
            </div>

            <div className="grid gap-px border border-[#a9967a] bg-[#a9967a] sm:grid-cols-2">
              {learningNotes.map((note) => (
                <article key={note.number} className="bg-[#eadfc9] p-5 sm:p-7 lg:p-9">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#b94725]">{note.number}</p>
                  <h3 className="mt-4 max-w-[480px] text-xl font-bold uppercase leading-tight tracking-[-0.03em] sm:text-2xl">{note.title}</h3>
                  <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#625746] sm:text-[15px]">{note.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-[#11100d] text-[#f4ead7]">
          <div className="site-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#d8ccb9] sm:text-[10px]">
                Field Workforce &amp; Promotion Operations Platform
              </p>
              <p className="mt-2 text-sm text-[#938673]">Production case study / 02</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/case-studies/industrial-safety"
                className="group inline-flex min-h-11 items-center gap-3 border border-[#5d5143] px-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#d8ccb9] transition-colors hover:border-[#d9673b] hover:text-[#fff7e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] sm:text-[10px]"
              >
                Previous case
                <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>
              </Link>
              <Link
                href="/#CaseStudies"
                className="group inline-flex min-h-11 items-center gap-3 border border-[#d9673b] bg-[#d9673b] px-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#11100d] transition-colors hover:bg-[#ef7b4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ead7] sm:text-[10px]"
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

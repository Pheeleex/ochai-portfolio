"use client";

const processSteps = [
  {
    number: "01",
    label: "Understand",
    title: "Start with the operation as it exists today.",
    copy:
      "We walk through the current process, the people involved, the tools already in use, where work slows down, and what is actually worth fixing.",
    output: "Problem map / priority scope",
  },
  {
    number: "02",
    label: "Design",
    title: "Define the smallest useful system.",
    copy:
      "I turn the problem into roles, workflows, business rules, data, and clear system boundaries — including where an existing tool should stay instead of being rebuilt.",
    output: "Solution blueprint / pilot plan",
  },
  {
    number: "03",
    label: "Pilot",
    title: "Build one valuable workflow properly.",
    copy:
      "Rather than starting with a giant transformation, we prove the idea on a focused slice of the operation with real logic, real users, and foundations that can grow if it works.",
    output: "Working pilot / usable release",
  },
  {
    number: "04",
    label: "Validate",
    title: "Put it in front of the people doing the work.",
    copy:
      "The system gets tested against day-to-day reality. We watch what helps, what creates friction, what was misunderstood, and refine before expanding the footprint.",
    output: "Validated workflow / next decisions",
  },
  {
    number: "05",
    label: "Expand",
    title: "Scale only where the value is clear.",
    copy:
      "Once the core workflow earns its place, we can add integrations, automation, additional teams, locations, modules, reporting, and longer-term support where they are justified.",
    output: "Rollout / integrations / support",
  },
];

const StepCards = () => {
  return (
    <section
      id="Approach"
      className="relative w-full scroll-mt-[98px] overflow-x-clip border-b border-[#9d8d74] bg-[#eadfc9] text-[#17130f]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,19,15,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(23,19,15,0.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-44 h-[430px] w-[430px] rounded-full border border-[#d9673b]/25 sm:h-[590px] sm:w-[590px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-72 h-[210px] w-[210px] rounded-full border border-[#d9673b]/15 sm:h-[330px] sm:w-[330px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-screen-2xl py-16 sm:py-20 lg:py-24">
        <div className="mb-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[#ad9d83] pb-6 font-mono text-[9px] uppercase tracking-[0.22em] text-[#756956] sm:text-[10px] lg:mb-16">
          <span className="text-[#c9532d]">05 / Process</span>
          <span className="hidden h-px w-10 bg-[#9f8f75] sm:block" aria-hidden="true" />
          <span>Discovery / pilot / rollout</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(330px,0.78fr)_minmax(0,1.15fr)] lg:gap-20 xl:gap-28">
          <div className="lg:sticky lg:top-[126px] lg:self-start">
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.22em] text-[#776a57] sm:text-[10px]">
              How a project moves
            </p>

            <h2 className="max-w-[760px] text-[clamp(3.3rem,6.7vw,7.2rem)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-[#17130f]">
              Start small<span className="text-[#d9673b]">.</span> Prove the value<span className="text-[#d9673b]">.</span> Then expand<span className="text-[#d9673b]">.</span>
            </h2>

            <p className="mt-8 max-w-[590px] text-[15px] leading-7 text-[#625746] sm:text-base sm:leading-8">
              I&apos;d rather earn the right to build more than begin by proposing a giant system. The goal is to understand the problem, prove the smallest useful version, and let real use determine what comes next.
            </p>

            <div className="mt-9 border-y border-[#ad9d83] py-5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6d604f] sm:text-[10px]">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {processSteps.map((step, index) => (
                  <div key={step.number} className="flex items-center gap-3">
                    <span className={index === 0 ? "text-[#c9532d]" : ""}>{step.label}</span>
                    {index < processSteps.length - 1 && (
                      <span aria-hidden="true" className="text-[#9b8b72]">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#ad9d83]">
            {processSteps.map((step, index) => (
              <article
                key={step.number}
                className="group border-b border-[#ad9d83] py-8 sm:py-10 lg:py-11"
              >
                <div className="grid gap-5 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-7">
                  <div className="font-mono uppercase">
                    <p className="text-[10px] tracking-[0.22em] text-[#c9532d]">{step.number}</p>
                    <p className="mt-2 text-[8px] tracking-[0.18em] text-[#81735e] sm:text-[9px]">
                      {step.label}
                    </p>
                  </div>

                  <div>
                    <h3 className="max-w-[760px] text-[clamp(1.8rem,3.3vw,3.7rem)] font-black uppercase leading-[0.94] tracking-[-0.045em] text-[#17130f] transition-transform duration-300 group-hover:translate-x-1.5">
                      {step.title}
                    </h3>

                    <p className="mt-5 max-w-[720px] text-sm leading-7 text-[#625746] sm:text-[15px] sm:leading-7">
                      {step.copy}
                    </p>

                    <div className="mt-6 flex items-start gap-3 border-l border-[#c9b99e] pl-4 font-mono uppercase">
                      <span className="text-[8px] tracking-[0.2em] text-[#9b3f24] sm:text-[9px]">Output</span>
                      <span className="text-[8px] tracking-[0.16em] text-[#6f624f] sm:text-[9px]">{step.output}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            <div className="grid gap-4 border-b border-[#ad9d83] py-7 font-mono uppercase sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8">
              <span className="text-[9px] tracking-[0.2em] text-[#c9532d] sm:text-[10px]">
                Discovery can lead to
              </span>
              <span className="text-[9px] tracking-[0.16em] text-[#6f624f] sm:text-[10px]">
                Build / integrate / use an existing tool / do nothing yet
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepCards;

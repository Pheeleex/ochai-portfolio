"use client";

import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Internal Systems",
    description:
      "Purpose-built internal portals, operational platforms, dashboards, workflows, and business tooling shaped around how a team already works.",
    detail: "Portals / Dashboards / Workflow / Business tools",
  },
  {
    number: "02",
    title: "Field & Mobile",
    description:
      "Web and mobile software for work happening across sites, outlets, routes, and locations — including capture, verification, QR, and location-aware experiences.",
    detail: "Mobile / Field teams / Location / Verification",
  },
  {
    number: "03",
    title: "Connected Operations",
    description:
      "Systems that connect the moving parts behind day-to-day operations — from inventory and compliance to fulfilment, supply, and cross-team visibility.",
    detail: "Inventory / Supply / Compliance / Operations",
  },
  {
    number: "04",
    title: "Data, Automation & Integrations",
    description:
      "APIs, realtime data, background processes, reporting, notifications, third-party integrations, and AI where it removes useful work instead of adding theatre.",
    detail: "APIs / Realtime / Automation / Integrations / AI",
  },
];

const deliverySurface = [
  "Web apps",
  "Mobile",
  "APIs",
  "Databases",
  "Realtime",
  "Location",
  "Cloud",
  "AI",
];

const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Supabase",
  "Firebase",
];

const Capabilities = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="Capabilities"
      className="relative w-full scroll-mt-[98px] overflow-x-clip border-b border-[#b6a58c] bg-[#f1e6d2] text-[#17130f]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(23,19,15,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(23,19,15,0.065) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#d9673b]/20 sm:h-96 sm:w-96 lg:-right-16 lg:top-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-24 h-56 w-56 rounded-full border border-[#d9673b]/15 sm:h-72 sm:w-72 lg:right-12 lg:top-32"
      />

      <div className="relative mx-auto w-full max-w-screen-2xl py-16 sm:py-20 lg:py-24">
        <div className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[#b6a58c] pb-5 font-mono text-[9px] uppercase tracking-[0.22em] text-[#776b5b] sm:text-[10px] lg:mb-14">
          <span className="text-[#c5522d]">03 / Capabilities</span>
          <span className="hidden h-px w-10 bg-[#9d8d76] sm:block" aria-hidden="true" />
          <span>Systems / products / delivery</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.76fr)_minmax(520px,1fr)] lg:gap-20 xl:gap-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.52 }}
            className="lg:sticky lg:top-[124px] lg:self-start lg:pr-4"
          >
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#756958] sm:text-[10px]">
              What I build
            </p>

            <h2 className="max-w-[690px] text-[clamp(3.15rem,6.5vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#16120e]">
              Built around how the work actually happens<span className="text-[#d9673b]">.</span>
            </h2>

            <p className="mt-8 max-w-[610px] text-[15px] leading-7 text-[#5f5547] sm:text-base sm:leading-8 lg:text-[17px]">
              I do not start with a software category and force the business into it. I start with the people, the process, the constraints, and the systems already in place — then build the part that needs to work better.
            </p>

            <div className="mt-10 border-y border-[#b6a58c] py-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#756958] sm:text-[10px]">
              <div className="mb-3 flex items-center justify-between gap-5">
                <span className="text-[#c5522d]">Delivery surface</span>
                <span>Broad by design</span>
              </div>
              <p className="leading-6 text-[#41392f]">
                {deliverySurface.join("  /  ")}
              </p>
            </div>
          </motion.div>

          <div className="border-t border-[#9f8f78]">
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : Math.min(index * 0.05, 0.15),
                }}
                className="group border-b border-[#9f8f78] py-7 sm:py-8"
              >
                <div className="grid gap-5 sm:grid-cols-[54px_minmax(0,1fr)] sm:gap-7">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#c5522d]">
                    {capability.number}
                  </span>

                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="text-[clamp(1.9rem,3.3vw,3.7rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-[#17130f] transition-transform duration-300 group-hover:translate-x-1.5">
                        {capability.title}
                      </h3>
                      <span
                        aria-hidden="true"
                        className="mt-1 hidden font-mono text-lg text-[#9b8a73] transition-colors duration-200 group-hover:text-[#d9673b] sm:block"
                      >
                        ↘
                      </span>
                    </div>

                    <p className="mt-4 max-w-[700px] text-sm leading-7 text-[#5e5446] sm:text-[15px]">
                      {capability.description}
                    </p>

                    <p className="mt-5 border-l border-[#c9b99f] pl-4 font-mono text-[8px] uppercase leading-5 tracking-[0.17em] text-[#756958] sm:text-[9px]">
                      {capability.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-[#9f8f78] pt-6 font-mono uppercase lg:mt-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-[9px] tracking-[0.2em] text-[#c5522d] sm:text-[10px]">
              Engineering underneath
            </p>
            <p className="mt-2 text-[9px] leading-5 tracking-[0.16em] text-[#776b5b] sm:text-[10px]">
              The tools support the system. They are not the pitch.
            </p>
          </div>

          <p className="text-[9px] leading-6 tracking-[0.17em] text-[#3f382e] sm:text-[10px] lg:text-right">
            {coreStack.join("  /  ")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

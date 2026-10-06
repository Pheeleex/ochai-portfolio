"use client";

import { motion, useReducedMotion } from "framer-motion";

const aboutNotes = [
  {
    number: "01",
    label: "How I think",
    title: "Start with the reality, not the software category.",
    copy:
      "I want to understand what people are actually doing, where the work breaks down, and what they are already using before deciding what should be built.",
  },
  {
    number: "02",
    label: "What I value",
    title: "Useful systems beat impressive demos.",
    copy:
      "Good internal software should make the work clearer, faster, safer, or easier to manage. The interface matters, but it has to earn its place in the operation.",
  },
  {
    number: "03",
    label: "Where I fit",
    title: "Product thinking with engineering depth.",
    copy:
      "I like working across the whole problem — from workflow and permissions to APIs, data, mobile experiences, automation, and the decisions that hold the system together.",
  },
];

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="About"
      className="relative w-full scroll-mt-[98px] overflow-hidden border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,234,215,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(244,234,215,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-32 h-[430px] w-[430px] rounded-full border border-[#d9673b]/20 sm:h-[560px] sm:w-[560px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-56 h-[250px] w-[250px] rounded-full border border-[#d9673b]/10 sm:h-[340px] sm:w-[340px]"
      />

      <div className="site-shell relative py-16 sm:py-20 lg:py-24">
        <div className="mb-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[#493f33] pb-6 font-mono text-[9px] uppercase tracking-[0.22em] text-[#8f826f] sm:text-[10px] lg:mb-14">
          <span className="text-[#d9673b]">05 / About</span>
          <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
          <span>Person / product / engineering</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,0.82fr)] lg:gap-20 xl:gap-28">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.52 }}
            className="lg:sticky lg:top-[126px] lg:self-start"
          >
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[0.22em] text-[#9b8d79] sm:text-[10px]">
              A little context
            </p>

            <h2 className="max-w-[800px] text-[clamp(3rem,6.1vw,6.5rem)] font-black uppercase leading-[0.86] tracking-[-0.06em] text-[#f1e6d2]">
              The software is only half the job<span className="text-[#d9673b]">.</span>
            </h2>

            <div className="mt-9 max-w-[700px] space-y-5 text-[15px] leading-7 text-[#c3b6a3] sm:text-base sm:leading-8 lg:text-[17px]">
              <p>
                I&apos;m Felix, a software engineer based in Lagos. I&apos;m most interested in the point where a real business problem becomes a clear product, a dependable system, and something people can actually use day to day.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-px border border-[#493f33] bg-[#493f33] font-mono uppercase sm:grid-cols-4">
              {[
                ["Based", "Lagos / NG"],
                ["Work", "Web / Mobile"],
                ["Focus", "Internal systems"],
                ["Mode", "Build / improve"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#11100d] px-4 py-4 sm:px-5">
                  <p className="text-[8px] tracking-[0.2em] text-[#746957] sm:text-[9px]">
                    {label}
                  </p>
                  <p className="mt-2 text-[9px] tracking-[0.16em] text-[#d9ccb8] sm:text-[10px]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="border-t border-[#493f33]">
            {aboutNotes.map((note, index) => (
              <motion.article
                key={note.number}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : Math.min(index * 0.06, 0.12),
                }}
                className="group border-b border-[#493f33] py-8 sm:py-10"
              >
                <div className="grid gap-5 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-7">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d9673b]">
                    {note.number}
                  </span>

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.19em] text-[#817563] sm:text-[9px]">
                      {note.label}
                    </p>
                    <h3 className="mt-4 max-w-[650px] text-[clamp(1.75rem,2.9vw,3.35rem)] font-black uppercase leading-[0.96] tracking-[-0.04em] text-[#f1e6d2] transition-transform duration-300 group-hover:translate-x-1.5">
                      {note.title}
                    </h3>
                    <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#ad9f8c] sm:text-[15px]">
                      {note.copy}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}

            <motion.div
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: reduceMotion ? 0 : 0.5 }}
              className="flex flex-col gap-4 border-b border-[#493f33] py-7 font-mono text-[9px] uppercase tracking-[0.18em] text-[#817563] sm:flex-row sm:items-center sm:justify-between sm:text-[10px]"
            >
              <span>Curious about the operation first.</span>
              <span className="text-[#c6b8a4]">Technology follows the problem.</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

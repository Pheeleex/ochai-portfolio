"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import HeroNetwork from "./HeroNetwork";

const Intro = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,234,215,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(244,234,215,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-98px)] max-w-screen-2xl items-center gap-12 px-0 pb-10 pt-4 md:pb-14 md:pt-5 lg:grid-cols-[minmax(0,1.03fr)_minmax(430px,0.97fr)] lg:gap-10 xl:gap-16">
        <div className="relative z-10 max-w-4xl lg:py-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
            className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#9f917d] sm:text-[10px]"
          >
            <span className="text-[#d9673b]">01 / Introduction</span>
            <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
            <span>Software Engineer · Internal Systems</span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : 0.06 }}
            className="max-w-[950px] text-[clamp(3.1rem,7.5vw,7.8rem)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-[#f1e6d2]"
          >
            Software for the work behind the business<span className="text-[#d9673b]">.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.18 }}
            className="mt-6 max-w-2xl text-[15px] leading-7 text-[#c6b9a6] sm:text-base sm:leading-8 lg:text-[17px]"
          >
            I design and build internal software around how teams actually work — from field and mobile tools to operational platforms, automation, integrations, and the systems that keep day-to-day work moving.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.27 }}
            className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap"
          >
            <Link
              href="#RecentProjects"
              className="group inline-flex min-h-12 items-center justify-between gap-8 border border-[#d9673b] bg-[#d9673b] px-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#16120e] transition-colors hover:bg-[#ee8257] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ead7] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11100d]"
            >
              View selected work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="#Contact"
              className="group inline-flex min-h-12 items-center justify-between gap-8 border border-[#655948] px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#e9ddca] transition-colors hover:border-[#b49f84] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11100d]"
            >
              Start a conversation
              <span aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </Link>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.36 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#41382e] pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#827664] sm:text-[10px]"
          >
            <span>
              <span className="mr-2 text-[#b9aa94]">Based</span>
              Lagos, Nigeria
            </span>
            <span>
              <span className="mr-2 text-[#b9aa94]">Building</span>
              Web · Mobile · Connected Systems
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.18 }}
          className="relative z-10 w-full lg:justify-self-end"
        >
          <HeroNetwork />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;

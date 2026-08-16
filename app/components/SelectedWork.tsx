"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const selectedProjects = [
  {
    number: "01",
    title: "Daytona Rentals",
    category: "Business Operations / CRM",
    description:
      "A custom dealership operations platform combining CRM, personalised dashboards, authentication, automation, and web-scraping workflows.",
    image: "/carbooking(1).png",
    url: "https://oyster-rentals.vercel.app/",
  },
  {
    number: "02",
    title: "Care Pulse",
    category: "Healthcare Operations",
    description:
      "A clinic operations product designed to reduce administrative work, improve the patient experience, and make communication easier to manage.",
    image: "/carepulse.png",
    url: "https://care-pulse-gray.vercel.app/",
  },
  {
    number: "03",
    title: "StoreIt",
    category: "Realtime Collaboration",
    description:
      "A storage and collaboration tool with realtime device syncing, file sharing, and collaborative workflows across users and devices.",
    image: "/NELLYA.png",
    url: "https://turbo-save.vercel.app/",
  },
  {
    number: "04",
    title: "3D Shirt Customiser",
    category: "Interactive Commerce",
    description:
      "An interactive commerce experience exploring 3D product customisation and AI-assisted personalisation for a more expressive buying journey.",
    image: "/OysterSteeze.png",
    url: "https://modern-estore.vercel.app",
  },
];

const SelectedWork = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="RecentProjects"
      className="relative w-full scroll-mt-[98px] overflow-hidden border-b border-[#493f33] bg-[#11100d] text-[#f4ead7]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,234,215,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(244,234,215,0.045) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto w-full max-w-screen-2xl py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 border-b border-[#493f33] pb-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(380px,0.92fr)] lg:items-end lg:gap-20 lg:pb-14">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#9f917d] sm:text-[10px]">
              <span className="text-[#d9673b]">02 / Selected Work</span>
              <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
              <span>Built systems / live projects</span>
            </div>

            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.52 }}
              className="max-w-[780px] text-[clamp(3rem,6.2vw,6.35rem)] font-black uppercase leading-[0.88] tracking-[-0.055em] text-[#f1e6d2]"
            >
              Work that had to do more than look good<span className="text-[#d9673b]">.</span>
            </motion.h2>
          </div>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.48, delay: reduceMotion ? 0 : 0.08 }}
            className="w-full max-w-[620px] lg:justify-self-end lg:pb-1"
            aria-label="Selected work overview"
          >
            <div className="border-y border-[#493f33]">
              <div className="flex items-center justify-between gap-5 py-4 font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f826f] sm:text-[10px]">
                <span className="text-[#d9673b]">04 / Selected systems</span>
                <span>Range / not a niche</span>
              </div>

              <div className="divide-y divide-[#332d25] border-t border-[#332d25]">
                {[
                  ["01", "Business operations"],
                  ["02", "Healthcare systems"],
                  ["03", "Realtime tools"],
                  ["04", "Interactive products"],
                ].map(([number, label]) => (
                  <div
                    key={number}
                    className="flex items-center justify-between gap-6 py-3.5 font-mono uppercase"
                  >
                    <span className="text-[9px] tracking-[0.2em] text-[#62584b] sm:text-[10px]">
                      {number}
                    </span>
                    <span className="text-right text-[10px] tracking-[0.18em] text-[#d5c7b3] sm:text-[11px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-7 max-w-[570px] text-[15px] leading-7 text-[#c6b9a6] sm:text-base sm:leading-8 lg:text-[17px]">
              A selection of products where the interesting part was not only the interface, but the rules, data, automation, and day-to-day work underneath it.
            </p>

            <div className="mt-6 flex items-center justify-between gap-5 border-t border-[#41382e] pt-4 font-mono text-[9px] uppercase tracking-[0.18em] text-[#827664] sm:text-[10px]">
              <span>Selected / 04</span>
              <span>Web · Systems · Product</span>
            </div>
          </motion.aside>
        </div>

        <div className="divide-y divide-[#493f33] border-b border-[#493f33]">
          {selectedProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.12),
              }}
              className="group relative py-8 sm:py-10 lg:py-12"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -mx-4 bg-[#17140f] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:-mx-6 lg:-mx-8"
              />

              <div className="relative grid gap-7 lg:grid-cols-[72px_minmax(0,0.92fr)_minmax(300px,0.78fr)_44px] lg:items-center lg:gap-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#d9673b]">
                  {project.number}
                </span>

                <div>
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#8f826f] sm:text-[10px]">
                    {project.category}
                  </p>
                  <h3 className="text-[clamp(2.2rem,4.2vw,4.8rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-[#f1e6d2] transition-transform duration-300 group-hover:translate-x-1.5">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#b9ad9a] sm:text-[15px]">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} project`}
                  className="relative block aspect-[16/10] overflow-hidden border border-[#5a4e3e] bg-[#0d0c0a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11100d]"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 34vw"
                    className="object-cover opacity-80 grayscale-[20%] transition duration-500 group-hover:scale-[1.035] group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#11100d]/50 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-3 left-3 border border-[#705f4b] bg-[#11100d]/90 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#d8ccb9] backdrop-blur-sm sm:text-[9px]">
                    Live project
                  </div>
                </Link>

                <Link
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="hidden h-11 w-11 items-center justify-center border border-[#5a4e3e] font-mono text-sm text-[#d8ccb9] transition-colors duration-200 hover:border-[#d9673b] hover:bg-[#d9673b] hover:text-[#11100d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] lg:flex"
                >
                  ↗
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-7 font-mono text-[9px] uppercase tracking-[0.18em] text-[#827664] sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
          <span>A focused selection, not an archive.</span>
          <span className="text-[#b5a791]">Proof over project count.</span>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;

"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "/#CaseStudies" },
  { label: "About", href: "/#About" },
  { label: "Process", href: "/#Approach" },
  { label: "Contact", href: "/#Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        aria-label="Primary navigation"
        className="mx-auto max-w-[1920px] border border-[#6f6250]/50 bg-[#11100d]/95 text-[#f4ead7] shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-md"
      >
        <div className="flex min-h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/#Intro"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] focus-visible:ring-offset-4 focus-visible:ring-offset-[#11100d]"
            aria-label="Go to introduction"
          >
            <span
              aria-hidden="true"
              className="grid h-9 w-9 shrink-0 place-items-center border border-[#7f6e58] font-mono text-[11px] tracking-[0.08em] text-[#d9673b] transition-colors duration-200 group-hover:border-[#d9673b] group-hover:bg-[#d9673b] group-hover:text-[#11100d]"
            >
              FO
            </span>

            <span className="min-w-0 leading-none">
              <span className="block truncate text-[12px] font-semibold uppercase tracking-[0.18em] sm:text-[13px]">
                Felix Ohemu
              </span>
              <span className="mt-1.5 hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#a99c88] xs:block sm:text-[10px]">
                Software / Internal Systems
              </span>
            </span>
          </Link>

          <div className="hidden items-center md:flex">
            <span className="mr-8 font-mono text-[10px] uppercase tracking-[0.24em] text-[#8e816f] lg:mr-12">
              01 / Navigation
            </span>

            <ul className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative flex min-h-11 items-center px-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ccb9] transition-colors duration-200 hover:text-[#fff7e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] lg:px-4"
                  >
                    <span className="mr-2 text-[9px] text-[#756957] transition-colors duration-200 group-hover:text-[#d9673b]">
                      0{index + 1}
                    </span>
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-[#d9673b] transition-transform duration-200 group-hover:scale-x-100 lg:inset-x-4"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center border border-[#6f6250] text-[#f4ead7] transition-colors duration-200 hover:border-[#d9673b] hover:text-[#d9673b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] md:hidden"
          >
            {isMenuOpen ? <X size={19} strokeWidth={1.6} /> : <Menu size={19} strokeWidth={1.6} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`${
            isMenuOpen ? "grid grid-rows-[1fr] border-t" : "grid grid-rows-[0fr]"
          } overflow-hidden border-[#4d4438] transition-[grid-template-rows,border-color] duration-300 md:hidden`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="px-4 pb-5 pt-3 sm:px-6">
              <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.22em] text-[#807462]">
                <span>01 / Navigation</span>
                <span>Lagos / NG</span>
              </div>

              <ul className="divide-y divide-[#3a342b] border-y border-[#3a342b]">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex min-h-14 items-center justify-between py-3 font-mono text-xs uppercase tracking-[0.16em] text-[#eee2cf] transition-colors hover:text-[#d9673b] focus-visible:outline-none focus-visible:text-[#d9673b]"
                    >
                      <span className="flex items-center">
                        <span className="mr-4 text-[9px] text-[#756957]">0{index + 1}</span>
                        {item.label}
                      </span>
                      <span aria-hidden="true" className="text-[#756957] transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import { Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#11100d] text-[#f4ead7]">
      <div className="site-shell grid gap-8 border-t border-[#493f33] py-8 font-mono uppercase lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-[#e8dcc8]">Felix Ohemu</p>
          <p className="mt-2 text-[8px] tracking-[0.18em] text-[#746957] sm:text-[9px]">
            Software Engineer / Internal Systems · Lagos, Nigeria
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[8px] tracking-[0.16em] text-[#938673] sm:text-[9px]">
          <Link href="mailto:ohemufelix@gmail.com" className="transition-colors hover:text-[#d9673b]">
            Email
          </Link>
          <Link
            href="https://github.com/Pheeleex"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#d9673b]"
          >
            <Github size={13} strokeWidth={1.5} /> GitHub
          </Link>
          <span className="text-[#5d5143]">/</span>
          <span>© {year}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface ContactForm {
  email: string;
  fullname: string;
  message: string;
}

const reasons = [
  "New internal tool",
  "Existing process that needs improving",
  "Systems that need to connect",
  "Field or mobile software",
  "Early product idea",
];

const Contact: React.FC = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    email: "",
    fullname: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setContactForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_n6lbyzu",
        "template_cmaqnpt",
        {
          from_name: contactForm.fullname,
          to_name: "Pheeleex Ochai",
          from_email: contactForm.email,
          to_email: "ohemufelix@gmail.com",
          message: contactForm.message,
        },
        "Ty-5lVqBMOEhNjLzO"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setContactForm({ fullname: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="Contact"
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
        className="pointer-events-none absolute -right-28 top-24 h-[430px] w-[430px] rounded-full border border-[#d9673b]/20 sm:h-[620px] sm:w-[620px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-52 h-[220px] w-[220px] rounded-full border border-[#d9673b]/10 sm:h-[340px] sm:w-[340px]"
      />

      <div className="site-shell relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="mb-12 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-[#493f33] pb-6 font-mono text-[9px] uppercase tracking-[0.22em] text-[#8f826f] sm:text-[10px] lg:mb-16">
          <span className="text-[#d9673b]">07 / Contact</span>
          <span className="hidden h-px w-10 bg-[#5b5042] sm:block" aria-hidden="true" />
          <span>Problem / conversation / next step</span>
        </div>

        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.78fr)] lg:gap-20 xl:gap-28">
          <div>
            <h2 className="max-w-[900px] text-[clamp(3.3rem,6.8vw,7.4rem)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-[#f4ead7]">
              Have a process your current tools do not handle well<span className="text-[#d9673b]">?</span>
            </h2>

            <div className="mt-10 border-y border-[#493f33] py-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#d9673b] sm:text-[10px]">
                Good reasons to reach out
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3 font-mono text-[9px] uppercase tracking-[0.15em] text-[#a99b88] sm:text-[10px]">
                {reasons.map((reason, index) => (
                  <React.Fragment key={reason}>
                    <span>{reason}</span>
                    {index < reasons.length - 1 && (
                      <span aria-hidden="true" className="text-[#5d5143]">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="mailto:ohemufelix@gmail.com"
                className="group inline-flex min-h-12 items-center gap-4 border border-[#d9673b] bg-[#d9673b] px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#11100d] transition-colors hover:bg-[#ef7b4f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ead7]"
              >
                Email directly
                <ArrowUpRight size={15} strokeWidth={1.6} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="https://github.com/Pheeleex"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-12 items-center gap-3 border border-[#5d5143] px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#d8ccb9] transition-colors hover:border-[#d9673b] hover:text-[#fff7e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b]"
              >
                <Github size={15} strokeWidth={1.5} />
                GitHub
              </Link>
            </div>
          </div>

          <div className="lg:pt-2">
            <div className="border-t border-[#493f33]">
              <div className="flex items-center justify-between border-b border-[#493f33] py-5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#817563] sm:text-[10px]">
                <span>Send a note</span>
                <span className="text-[#c7baa6]">Usually starts with context</span>
              </div>

              <form onSubmit={handleSubmit} className="divide-y divide-[#493f33] border-b border-[#493f33]">
                <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-[#493f33]">
                  <label className="block py-5 sm:pr-5">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#746957] sm:text-[9px]">Name</span>
                    <input
                      type="text"
                      name="fullname"
                      required
                      placeholder="Your name"
                      value={contactForm.fullname}
                      onChange={handleChange}
                      className="mt-3 w-full bg-transparent text-[15px] text-[#f4ead7] outline-none placeholder:text-[#625748] focus:placeholder:text-[#817563]"
                    />
                  </label>

                  <label className="block border-t border-[#493f33] py-5 sm:border-t-0 sm:pl-5">
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#746957] sm:text-[9px]">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={contactForm.email}
                      onChange={handleChange}
                      className="mt-3 w-full bg-transparent text-[15px] text-[#f4ead7] outline-none placeholder:text-[#625748] focus:placeholder:text-[#817563]"
                    />
                  </label>
                </div>

                <label className="block py-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#746957] sm:text-[9px]">What are you trying to improve?</span>
                  <textarea
                    name="message"
                    required
                    placeholder="A little context about the problem, process, or product is enough to start."
                    value={contactForm.message}
                    onChange={handleChange}
                    className="mt-4 min-h-[190px] w-full resize-y bg-transparent text-[15px] leading-7 text-[#f4ead7] outline-none placeholder:text-[#625748] focus:placeholder:text-[#817563]"
                  />
                </label>

                <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex min-h-12 items-center justify-center gap-4 border border-[#d9673b] px-5 font-mono text-[10px] uppercase tracking-[0.16em] text-[#f4ead7] transition-colors hover:bg-[#d9673b] hover:text-[#11100d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9673b] disabled:cursor-wait disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Start a conversation"}
                    <ArrowUpRight size={15} strokeWidth={1.6} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

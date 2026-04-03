"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { Mail } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-mono text-2xl font-bold text-[#f1f5f9]"
        >
          <span className="text-[#22d3ee]">&gt; </span>Contact
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-xl"
        >
          <p className="mb-10 text-lg leading-relaxed text-[#64748b]">
            I&apos;m currently open to new opportunities. Whether you have a
            question, a project in mind, or just want to say hi — my inbox is
            always open.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 border border-[#22d3ee] px-6 py-3 font-mono text-sm text-[#22d3ee] transition-all hover:bg-[#22d3ee]/10"
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1f1f1f] px-6 py-3 font-mono text-sm text-[#64748b] transition-all hover:border-[#22d3ee] hover:text-[#22d3ee]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

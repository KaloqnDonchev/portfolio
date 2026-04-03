"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { hero } from "@/lib/data";
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

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = hero.titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % hero.titles.length);
    } else {
      const delay = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1)
        );
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  return (
    <section className="relative flex min-h-screen flex-col items-start justify-center px-6 pt-20">
      <div className="mx-auto w-full max-w-5xl">
        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 font-mono text-sm text-[#22d3ee]"
        >
          &gt; Hello, world!
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-3 text-5xl font-bold tracking-tight text-[#f1f5f9] sm:text-7xl"
        >
          {hero.name}
        </motion.h1>

        {/* Typing title */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 flex h-9 items-center gap-1 font-mono text-xl text-[#22d3ee] sm:text-2xl"
        >
          <span>{displayed}</span>
          <span className="animate-[blink_1s_step-end_infinite] border-r-2 border-[#22d3ee] pl-px" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10 max-w-xl text-lg leading-relaxed text-[#64748b]"
        >
          {hero.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 border border-[#22d3ee] px-6 py-3 font-mono text-sm text-[#22d3ee] transition-all hover:bg-[#22d3ee]/10"
          >
            [ View Projects ]
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-[#1f1f1f] px-6 py-3 font-mono text-sm text-[#64748b] transition-all hover:border-[#22d3ee] hover:text-[#22d3ee]"
          >
            [ Contact Me ]
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex items-center gap-5"
        >
          <a
            href={hero.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] transition-colors hover:text-[#22d3ee]"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${hero.email}`}
            className="text-[#64748b] transition-colors hover:text-[#22d3ee]"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-10 w-px bg-gradient-to-b from-[#22d3ee] to-transparent"
        />
      </motion.div>
    </section>
  );
}

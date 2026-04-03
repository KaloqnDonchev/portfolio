"use client";

import { motion } from "framer-motion";
import { about, skills, experience, education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 font-mono text-2xl font-bold text-[#f1f5f9]"
        >
          <span className="text-[#22d3ee]">&gt; </span>About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl text-lg leading-relaxed text-[#64748b]"
        >
          {about.bio}
        </motion.p>

        {/* Skills */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-xs text-[#64748b]"
        >
          <span className="text-[#22d3ee]">// </span>skills
        </motion.p>
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20 flex flex-wrap gap-3"
        >
          {skills.map((skill) => (
            <motion.li
              key={skill}
              variants={fadeUp}
              className="border border-[#1f1f1f] bg-[#111111] px-4 py-2 font-mono text-sm text-[#f1f5f9] transition-colors hover:border-[#22d3ee]/50 hover:text-[#22d3ee]"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        {/* Experience heading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs text-[#64748b]"
        >
          <span className="text-[#22d3ee]">// </span>experience
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-0 top-0 h-full w-px bg-[#1f1f1f]"
          />

          <div className="space-y-10 pl-8">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.125rem] top-1.5 h-2.5 w-2.5 rounded-full border border-[#22d3ee] bg-[#080808]" />

                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-[#f1f5f9]">{job.title}</h3>
                    <p className="text-sm text-[#22d3ee]">{job.company}</p>
                  </div>
                  <p className="font-mono text-xs text-[#64748b] sm:pt-0.5">{job.period}</p>
                </div>

                <ul className="mt-3 space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-[#64748b]">
                      <span className="mt-0.5 shrink-0 text-[#22d3ee]">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex items-center gap-4 border border-[#1f1f1f] bg-[#111111] p-5"
        >
          <GraduationCap className="h-5 w-5 shrink-0 text-[#22d3ee]" />
          <div>
            <p className="font-semibold text-[#f1f5f9]">{education.degree}</p>
            <p className="text-sm text-[#64748b]">
              {education.school} &middot; {education.period}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

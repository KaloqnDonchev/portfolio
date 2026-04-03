"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { sendMessage } from "@/app/actions/contact";

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

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const result = await sendMessage(data);

    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

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

        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono text-sm text-[#64748b]"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-[#1f1f1f] bg-[#111111] px-4 py-3 text-sm text-[#f1f5f9] outline-none transition-colors placeholder:text-[#334155] focus:border-[#22d3ee]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono text-sm text-[#64748b]"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-[#1f1f1f] bg-[#111111] px-4 py-3 text-sm text-[#f1f5f9] outline-none transition-colors placeholder:text-[#334155] focus:border-[#22d3ee]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-sm text-[#64748b]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none border border-[#1f1f1f] bg-[#111111] px-4 py-3 text-sm text-[#f1f5f9] outline-none transition-colors placeholder:text-[#334155] focus:border-[#22d3ee]"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 border border-[#22d3ee] px-6 py-3 font-mono text-sm text-[#22d3ee] transition-all hover:bg-[#22d3ee]/10 disabled:opacity-50"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle className="h-4 w-4" />
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Try emailing me directly.
              </p>
            )}
          </motion.form>

          {/* Direct links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-8 text-lg leading-relaxed text-[#64748b]">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind or just want to say hi — feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 border border-[#1f1f1f] px-5 py-4 text-sm text-[#64748b] transition-all hover:border-[#22d3ee] hover:text-[#22d3ee]"
              >
                <Mail className="h-5 w-5" />
                <div>
                  <div className="font-mono text-xs text-[#64748b]">Email</div>
                  <div className="text-[#f1f5f9]">{contact.email}</div>
                </div>
              </a>

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-[#1f1f1f] px-5 py-4 text-sm text-[#64748b] transition-all hover:border-[#22d3ee] hover:text-[#22d3ee]"
              >
                <GithubIcon className="h-5 w-5" />
                <div>
                  <div className="font-mono text-xs text-[#64748b]">GitHub</div>
                  <div className="text-[#f1f5f9]">KaloqnDonchev</div>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

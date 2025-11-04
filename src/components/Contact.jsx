import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Dribbble } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-24">
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 md:p-10"
      >
        <motion.div
          className="pointer-events-none absolute -inset-1 opacity-60"
          animate={{
            background: [
              'radial-gradient(200px 200px at 0px 0px, rgba(59,130,246,0.18), transparent 60%)',
              `radial-gradient(220px 220px at ${pos.x}px ${pos.y}px, rgba(236,72,153,0.18), transparent 60%)`,
            ],
          }}
          transition={{ duration: 0.35 }}
        />
        <div className="relative">
          <div className="mb-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Let’s build something great</h2>
              <p className="mt-2 max-w-2xl text-slate-300">
                Tell me about your product, goals, and timeline. I’ll reply within 24 hours with next steps.
              </p>
            </div>
            <a
              href="mailto:hello@ava.design"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow transition hover:shadow-lg"
            >
              <span className="absolute inset-0 -z-0 rounded-lg bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.35),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Mail size={18} />
              hello@ava.design
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-white/20 hover:bg-white/10"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:border-white/20 hover:bg-white/10"
            >
              <Dribbble size={18} />
              Dribbble
            </a>
          </div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-0 h-40 bg-gradient-to-t from-sky-500/20 to-transparent blur-3xl" />
    </section>
  );
}

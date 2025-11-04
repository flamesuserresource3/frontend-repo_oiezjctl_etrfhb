import { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { label: 'User Research', tip: 'Interviews, surveys, and synthesis to find truth.' },
  { label: 'Wireframing', tip: 'From idea to structure, fast and collaborative.' },
  { label: 'Prototyping', tip: 'High-fidelity flows to validate before building.' },
  { label: 'Design Systems', tip: 'Token-driven UI kits that scale across teams.' },
  { label: 'Accessibility', tip: 'Inclusive by default. WCAG-first decisions.' },
  { label: 'Interaction Design', tip: 'Micro-moments that feel alive and helpful.' },
];

const philosophy = [
  { key: 'Empathy', quote: 'Understand the human before the interface.' },
  { key: 'Clarity', quote: 'Great design reduces cognitive load.' },
  { key: 'Craft', quote: 'Details aren’t details — they make the design.' },
  { key: 'Systems', quote: 'Consistency creates trust and speed.' },
];

export default function About() {
  const [hoverKey, setHoverKey] = useState(null);

  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">About</h2>
        <span className="text-sm text-slate-400">Design is how I think, not just what I make.</span>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300"
        >
          <p className="text-base leading-relaxed">
            I’m a product-focused designer with 6+ years building scalable design systems and high-conversion
            interfaces. My process blends research, rapid prototyping, and pixel-level craft to ship meaningful results.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            I collaborate with founders and engineering teams to validate quickly, reduce risk, and move from 0→1 and
            beyond.
          </p>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-slate-400">Core skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s.label}
                  title={s.tip}
                  className="rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-slate-300 hover:bg-white/10"
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-400">Design philosophy</h3>
          <div className="grid grid-cols-2 gap-3">
            {philosophy.map((item) => (
              <button
                key={item.key}
                onMouseEnter={() => setHoverKey(item.key)}
                onMouseLeave={() => setHoverKey(null)}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-4 text-left"
              >
                <span className="text-sm font-medium text-white">{item.key}</span>
                <p className="mt-1 text-xs text-slate-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.quote}
                </p>
              </button>
            ))}
          </div>

          <motion.div
            className="mt-5 h-24 rounded-xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] p-4 text-sm text-slate-300"
            animate={{ opacity: hoverKey ? 1 : 0.8 }}
          >
            {hoverKey ? (
              <span>
                {hoverKey}: {philosophy.find((p) => p.key === hoverKey)?.quote}
              </span>
            ) : (
              <span>Hover over a value to reveal how it shapes my work.</span>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

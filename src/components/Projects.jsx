import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Fintech Dashboard',
    role: 'Product Design, Design System',
    tools: ['Figma', 'FigJam', 'A/B Testing'],
    description: 'Real-time portfolio insights with modular cards and investor workflows.',
  },
  {
    title: 'Wellness Mobile App',
    role: 'UX, Interaction Design',
    tools: ['Figma', 'ProtoPie'],
    description: 'Habit loops, streaks, and playful micro-interactions for daily retention.',
  },
  {
    title: 'AI SaaS Website',
    role: 'Marketing UX, Art Direction',
    tools: ['Figma', 'GA4'],
    description: 'Conversion-optimized website for a developer tools startup.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Selected Work</h2>
        <a href="#contact" className="text-sm text-emerald-300 hover:text-emerald-200">Start a project</a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-5"
          >
            {/* Visual mock placeholder with parallax hover */}
            <div className="relative h-44 w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.25),transparent_60%)] transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(2,6,23,0.35))]" />
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{p.role} • {p.tools.join(' · ')}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 translate-x-8 rounded-full bg-fuchsia-400/20 blur-2xl transition-all duration-500 group-hover:translate-y-[-12px] group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Fintech Dashboard',
    description: 'Real-time portfolio insights with a modular design system.',
    tags: ['Dashboard', 'Design System', 'Web'],
  },
  {
    title: 'Wellness Mobile App',
    description: 'Habit loops, streaks, and playful micro-interactions.',
    tags: ['Mobile', 'Motion', 'iOS/Android'],
  },
  {
    title: 'AI SaaS Website',
    description: 'Conversion-optimized marketing site for a devtools startup.',
    tags: ['Marketing', 'A/B Testing', 'Web'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Selected Work</h2>
        <a href="#contact" className="text-sm text-emerald-300 hover:text-emerald-200">Get a quote</a>
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
            <div className="relative h-44 w-full overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.25),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.25),transparent_60%)] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 right-0 h-32 w-32 translate-x-8 rounded-full bg-emerald-400/20 blur-2xl transition-all duration-500 group-hover:translate-y-[-12px] group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}

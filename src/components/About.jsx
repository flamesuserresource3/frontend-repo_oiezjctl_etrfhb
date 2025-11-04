import { motion } from 'framer-motion';

const skills = [
  'User Research',
  'Wireframing',
  'Prototyping',
  'Design Systems',
  'Accessibility',
  'Interaction Design',
  'Usability Testing',
  'Micro-interactions',
];

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">About</h2>
        <span className="text-sm text-slate-400">Based in Anywhere, Remote</span>
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
            I’m a product-focused designer with 6+ years of experience crafting scalable design systems and
            high-conversion interfaces. My process blends research, rapid prototyping, and pixel-perfect delivery to
            ship experiences users love.
          </p>
          <p className="mt-4 text-base leading-relaxed">
            I collaborate closely with founders and engineering teams to validate ideas quickly, reduce risk, and create
            measurable impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-slate-400">Core skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">80+</p>
              <p className="text-slate-400">Projects delivered</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-3xl font-semibold text-white">6 yrs</p>
              <p className="text-slate-400">Design experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

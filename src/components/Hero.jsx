import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:gap-8 md:py-28">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance projects
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Hi, I’m <span className="bg-gradient-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">Ava</span> —
              <br /> UI/UX Designer
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              I craft intuitive, delightful interfaces with a balance of aesthetics and usability. I turn complex
              problems into simple, engaging experiences across web and mobile.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow transition hover:shadow-lg"
              >
                View Work
                <svg
                  className="transition-transform group-hover:translate-x-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[360px] w-full rounded-2xl md:h-[520px] md:w-1/2"
        >
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-72 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl" />
    </section>
  );
}

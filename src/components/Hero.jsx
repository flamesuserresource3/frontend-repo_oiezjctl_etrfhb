import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const phrases = useMemo(
    () => [
      'Designing interfaces that feel human',
      'Turning complexity into clarity',
      'Crafting systems that scale',
      'Shaping delightful interactions',
    ],
    []
  );
  const [index, setIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), 2800);
    return () => clearInterval(id);
  }, [phrases.length]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] w-full overflow-hidden"
    >
      {/* Subtle gradient atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:gap-10 md:py-28">
        {/* Text column */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              UI/UX Designer • Product Thinker • Visual Storyteller
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Hi, I’m <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">Ava</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
              Design is how I think, not just what I make. I craft intuitive products that merge clarity, emotion, and
              measurable impact.
            </p>

            {/* Looping phrases */}
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm text-slate-300"
                >
                  {phrases[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow transition hover:shadow-lg"
              >
                View Case Studies
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
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3D column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[380px] w-full rounded-2xl md:h-[540px] md:w-1/2"
        >
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0" />
          <Spline
            scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </div>

      {/* Floating cursor orb (non-blocking) */}
      <motion.div
        className="pointer-events-none absolute z-20 h-24 w-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)]"
        animate={{ x: cursorPos.x - 48, y: cursorPos.y - 48 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.4 }}
      />
    </section>
  );
}

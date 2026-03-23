import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Wind, FileText, Github } from 'lucide-react';

/* Apple-style spring + easing */
const spring = { type: 'spring', stiffness: 80, damping: 20, mass: 1 } as const;
const smooth = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } as const;

/* Blur-fade variant — the signature Apple reveal */
const blurFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...smooth, delay },
  },
});

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'CFD Projects' },
  { value: 'MSc', label: 'Cranfield Scholar' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  /* Parallax layers */
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const avatarY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const avatarScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden pt-[73px]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#F0F9FF_0%,#ffffff_50%,#F8FAFC_100%)]" />

      {/* Faint aircraft silhouette — slow parallax drift */}
      <motion.svg
        className="absolute top-[15%] right-[-5%] h-[400px] w-[1000px] -rotate-12 opacity-[0.07]"
        viewBox="0 0 1000 400"
        style={{ y: bgY }}
      >
        <path d="M100 200Q300 180 600 200L950 210V230L600 240Q300 260 100 240Z" fill="#1D39C9" />
        <path d="M500 200L650 50H750L600 200Z" fill="#1D39C9" />
        <path d="M500 240L650 350H750L600 240Z" fill="#1D39C9" />
      </motion.svg>

      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24"
        style={{ y: contentY }}
      >
        {/* Left content card */}
        <motion.div
          className="glass-card-strong flex-1 p-8 sm:p-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
          }}
        >
          {/* Tag — slides in from left with blur */}
          <motion.div
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-6 py-1"
            variants={{
              hidden: { opacity: 0, x: -20, filter: 'blur(8px)' },
              visible: { opacity: 1, x: 0, filter: 'blur(0px)', transition: smooth },
            }}
          >
            <span className="font-body text-sm font-semibold text-primary">Aerospace Engineer & Researcher</span>
          </motion.div>

          {/* Name — word-level stagger with blur-fade */}
          <motion.h1
            className="mt-4 font-heading text-5xl font-black leading-[1] tracking-[-1.8px] sm:text-6xl lg:text-[72px] lg:leading-[72px]"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.span
              className="inline-block text-text-dark"
              variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(16px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
            >
              Tarun{' '}
            </motion.span>
            <motion.span
              className="inline-block text-primary"
              variants={{
                hidden: { opacity: 0, y: 40, filter: 'blur(16px)' },
                visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
            >
              Ramprakash
            </motion.span>
          </motion.h1>

          {/* Subtitle — blur-fade up */}
          <motion.p
            className="mt-6 max-w-lg font-heading text-xl font-medium leading-relaxed text-text-body sm:text-2xl sm:leading-[39px]"
            variants={blurFade(0)}
          >
            Building aerodynamic intelligence through CFD, scientific computing, and physics-informed AI.
          </motion.p>

          {/* Buttons — spring entrance */}
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            variants={blurFade(0)}
          >
            <motion.a
              href="#"
              className="btn-glow flex items-center gap-3 rounded-lg bg-primary px-8 py-3.5 font-body text-lg font-bold text-white shadow-[0_16px_32px_rgba(29,57,201,0.3)]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              <FileText className="h-[22px] w-[22px]" />
              Download CV
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass flex items-center gap-3 rounded-lg border border-white/60 bg-white/20 px-8 py-3.5 font-body text-lg font-bold text-text-dark backdrop-blur-[12px]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              <Github className="h-[22px] w-[22px]" />
              View GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Avatar + floating icons */}
        <motion.div
          className="relative flex flex-col items-center lg:flex-none"
          style={{ y: avatarY, scale: avatarScale }}
        >
          {/* Blue glow behind avatar — pulses gently */}
          <motion.div
            className="absolute inset-0 m-auto h-[338px] w-[338px] rounded-full bg-primary/10 blur-[64px]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          />

          {/* Avatar container — scale + blur entrance */}
          <motion.div
            className="relative h-[280px] w-[280px] rounded-full bg-white/20 shadow-[0_25px_50px_rgba(0,0,0,0.15)] backdrop-blur-[24px] sm:h-[338px] sm:w-[338px]"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-[9px] overflow-hidden rounded-full border border-white/40">
              <img
                src="./assets/IMG_1.webp"
                alt="Tarun Ramprakash"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Floating plane icon — organic float with rotation */}
          <motion.div
            className="glass-card absolute -top-4 -right-4 flex h-[50px] w-[50px] items-center justify-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0], rotate: [0, 6, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.5 },
              scale: { delay: 1, ...spring },
              y: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.5 },
              rotate: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.5 },
            }}
          >
            <Plane className="h-6 w-6 text-primary" />
          </motion.div>

          {/* Floating wind icon */}
          <motion.div
            className="glass-card absolute -bottom-2 -left-4 flex h-[50px] w-[50px] items-center justify-center opacity-75"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.75, scale: 1, y: [0, 8, 0], rotate: [0, -4, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.5 },
              scale: { delay: 1.2, ...spring },
              y: { repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.7 },
              rotate: { repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.7 },
            }}
          >
            <Wind className="h-6 w-6 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats bar — cascading reveal with blur */}
      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl flex-wrap justify-start gap-8 px-6 pb-16 lg:gap-12"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.9 } } }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="flex items-center gap-6"
            variants={blurFade(0)}
          >
            {i > 0 && (
              <motion.div
                className="hidden h-12 w-px sm:block"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: 1 + i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ background: '#E0E1E6', transformOrigin: 'top' }}
              />
            )}
            <div>
              <p className="font-heading text-[30px] font-black leading-9 text-primary">{stat.value}</p>
              <p className="mt-1 font-body text-xs font-bold uppercase tracking-[0.7px] text-text-muted">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Cpu, Brain, Layers, Zap } from 'lucide-react';

const smooth = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } as const;
const blurFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { ...smooth, delay } },
});

const skillBars = [
  { name: 'Python', sub: 'Scientific Computing', dots: 9 },
  { name: 'C++ OpenFOAM/SU2', sub: 'CFD Methods', dots: 8 },
  { name: 'PyTorch & JAX', sub: 'Physics-Informed AI', dots: 7 },
  { name: 'Fortran 90/95', sub: 'Legacy HPC', dots: 6 },
  { name: 'MPI / OpenMP', sub: 'HPC Workflows', dots: 7 },
  { name: 'React / TS / Tailwind', sub: 'Tools & Viz', dots: 6 },
];

const categories = [
  { icon: Cpu, label: 'HPC Computing' },
  { icon: Brain, label: 'Physics-ML' },
  { icon: Layers, label: 'Meshing' },
];

function DotBar({ filled, total = 10, rowIndex = 0 }: { filled: number; total?: number; rowIndex?: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className={`h-2.5 w-2.5 rounded-full ${
            i < filled ? 'bg-primary' : 'bg-[#E0E1E6]'
          }`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
            delay: 0.3 + rowIndex * 0.08 + i * 0.04,
          }}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section label */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1"
          initial={{ opacity: 0, x: -16, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={smooth}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-body text-xs font-bold uppercase tracking-[0.7px] text-primary">Capabilities</span>
        </motion.div>

        <motion.h2
          className="mt-4 font-heading text-[40px] font-black leading-[48px] tracking-[-1.2px] text-text-dark"
          initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smooth, delay: 0.1 }}
        >
          Technical Stack
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xl font-body text-lg font-medium leading-[31px] text-text-body"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smooth, delay: 0.2 }}
        >
          Languages, frameworks, and tools for scientific computing and aerodynamic research.
        </motion.p>

        <div className="perspective-container mt-12 grid gap-8 lg:grid-cols-[1fr_auto]">
          {/* Skill bars */}
          <motion.div
            className="glass-card-strong space-y-6 p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.08 }}
          >
            {skillBars.map((s, idx) => (
              <motion.div key={s.name} variants={blurFade()} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-heading text-base font-bold text-text-dark">{s.name}</p>
                  <p className="font-body text-xs text-text-muted">{s.sub}</p>
                </div>
                <DotBar filled={s.dots} rowIndex={idx} />
              </motion.div>
            ))}
          </motion.div>

          {/* Category badges + JAX banner */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.12 }}
          >
            {categories.map((c) => (
              <motion.div
                key={c.label}
                variants={blurFade()}
                className="glass-card-strong flex items-center gap-4 p-5"
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                <motion.div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/60 bg-white/50 backdrop-blur-[12px]"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <c.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <span className="font-heading text-base font-bold text-text-dark">{c.label}</span>
              </motion.div>
            ))}

            {/* JAX banner */}
            <motion.div
              variants={blurFade()}
              className="rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-5"
              whileHover={{ scale: 1.02, borderColor: 'rgba(29,57,201,0.5)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 20 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                >
                  <Zap className="h-5 w-5 text-primary" />
                </motion.div>
                <span className="font-heading text-sm font-bold text-primary">JAX Ecosystem</span>
              </div>
              <p className="mt-2 font-body text-xs leading-relaxed text-text-body">
                Active exploration of JAX for differentiable physics and GPU-accelerated PDE solvers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

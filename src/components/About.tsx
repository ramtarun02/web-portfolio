import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const smooth = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } as const;

const blurFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...smooth, delay },
  },
});

const tags = [
  'Aerodynamics',
  'CFD Solver Development',
  'Scientific Computing',
  'Physics-Informed AI/ML',
  'Flight Physics',
  'HPC Workflows',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
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
          <span className="font-body text-xs font-bold uppercase tracking-[0.7px] text-primary">The Abstract</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="mt-4 font-heading text-[40px] font-black leading-[48px] tracking-[-1.2px] text-text-dark"
          initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smooth, delay: 0.1 }}
        >
          MSc in Aerospace Engineering
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-4 max-w-2xl font-body text-lg font-medium leading-[31px] text-text-body"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smooth, delay: 0.2 }}
        >
          Specialising in computational aerodynamics at Cranfield University, with focus on
          rapid aircraft design and analysis tool development and applied aerodynamics.
        </motion.p>

        <div className="perspective-container mt-12 grid gap-8 lg:grid-cols-2">
          {/* Research Philosophy card — 3D tilt on hover */}
          <motion.div
            className="glass-card-strong p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={blurFade(0.25)}
            whileHover={{ rotateX: -2, rotateY: 3, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <motion.div
              className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/60 bg-white/50 backdrop-blur-[12px]"
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <Briefcase className="h-7 w-7 text-primary" />
            </motion.div>
            <h3 className="mt-6 font-heading text-2xl font-black tracking-[-0.6px] text-text-dark">
              Research Philosophy
            </h3>
            <p className="mt-3 font-body text-base leading-[27px] text-text-body">
              "Bridging high-fidelity aerodynamic/CFD analysis with state-of-the-art techniques to automate
              what once required months of manual computation."
            </p>

            {/* Stat mini-cards */}
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div
                className="rounded-lg border border-white/60 bg-white/40 px-6 py-4 backdrop-blur-[12px]"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                <p className="font-heading text-[28px] font-black leading-8 text-primary">3+ yrs</p>
                <p className="mt-1 font-body text-xs font-bold uppercase tracking-[0.7px] text-text-muted">CFD</p>
              </motion.div>
              <motion.div
                className="rounded-lg border border-white/60 bg-white/40 px-6 py-4 backdrop-blur-[12px]"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                <p className="font-heading text-[28px] font-black leading-8 text-primary">2+ yrs</p>
                <p className="mt-1 font-body text-xs font-bold uppercase tracking-[0.7px] text-text-muted">Research</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Tags card — 3D tilt + elastic tag stagger */}
          <motion.div
            className="glass-card-strong flex flex-col justify-center p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={blurFade(0.35)}
            whileHover={{ rotateX: -2, rotateY: -3, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <h3 className="font-heading text-lg font-bold text-text-dark">Core Competencies</h3>
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } } }}
            >
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/5 px-5 py-2 font-body text-sm font-semibold text-primary"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: 'blur(6px)' },
                    visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { type: 'spring', stiffness: 200, damping: 15 } },
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

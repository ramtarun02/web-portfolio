import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const smooth = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } as const;
const blurFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { ...smooth, delay } },
});

const timeline = [
  {
    role: 'Graduate Research Engineer',
    org: 'Cranfield University',
    period: '2022 — Present',
    description:
      'Leading transonic CFD research combining high-fidelity RANS/LES simulations with physics-informed neural networks for shock-boundary layer prediction.',
  },
  {
    role: 'CFD Intern',
    org: 'Aerospace Systems Ltd',
    period: '2021 — 2022',
    description:
      'Conducted winglet design validation using OpenFOAM, automated meshing pipelines, and contributed to HPC workflow optimisation.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
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
          <span className="font-body text-xs font-bold uppercase tracking-[0.7px] text-primary">Career</span>
        </motion.div>

        <motion.h2
          className="mt-4 font-heading text-[40px] font-black leading-[48px] tracking-[-1.2px] text-text-dark"
          initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smooth, delay: 0.1 }}
        >
          Professional Journey
        </motion.h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto]">
          {/* Timeline */}
          <div className="relative flex flex-col gap-8">
            {/* Vertical line — draws itself on scroll */}
            <motion.div
              className="absolute left-[15px] top-6 bottom-6 hidden w-0.5 origin-top bg-gradient-to-b from-primary/30 via-primary/15 to-transparent sm:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            />

            {timeline.map((entry, idx) => (
              <motion.div
                key={entry.role}
                className="glass-card-strong relative p-8 sm:ml-10"
                initial={{ opacity: 0, y: 32, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...smooth, delay: 0.25 + idx * 0.15 }}
                whileHover={{ y: -3, boxShadow: '0 20px 40px rgba(29,57,201,0.08), 0 8px 20px rgba(226,232,240,0.5)' }}
              >
                {/* Timeline dot — pulse then settle */}
                <div className="absolute -left-10 top-8 hidden sm:block">
                  <motion.div
                    className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-primary bg-white"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 + idx * 0.15 }}
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </motion.div>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-black text-text-dark">{entry.role}</h3>
                    <p className="font-body text-sm font-semibold text-primary">{entry.org}</p>
                  </div>
                  <motion.span
                    className="rounded-full border border-white/60 bg-white/40 px-4 py-1 font-body text-xs font-bold text-text-muted backdrop-blur-[12px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ ...smooth, delay: 0.5 + idx * 0.15 }}
                  >
                    {entry.period}
                  </motion.span>
                </div>

                <p className="mt-4 font-body text-sm leading-[22px] text-text-body">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Sidebar: Certification + trajectory text */}
          <motion.div
            className="flex flex-col gap-6 lg:w-72"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          >
            {/* Certification card */}
            <motion.div
              variants={blurFade()}
              className="glass-card-strong p-6"
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/60 bg-white/50 backdrop-blur-[12px]"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Award className="h-6 w-6 text-primary" />
              </motion.div>
              <h4 className="mt-4 font-heading text-base font-black text-text-dark">
                Advanced Fluid Dynamics
              </h4>
              <p className="mt-1 font-body text-xs font-semibold text-primary">
                Royal Aeronautical Society
              </p>
            </motion.div>

            {/* Trajectory text */}
            <motion.div
              variants={blurFade()}
              className="glass-card-strong p-6"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <p className="font-body text-sm leading-relaxed text-text-body">
                From fundamental aerodynamics training to cutting-edge research — a trajectory
                defined by rigorous computational methods and a drive for innovation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

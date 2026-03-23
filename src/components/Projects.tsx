import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const smooth = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } as const;
const blurFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { ...smooth, delay } },
});

const projects = [
  {
    id: 1,
    image: './assets/IMG_2.webp',
    category: 'Computational Aerodynamics',
    title: 'Transonic Buffer Layers',
    description:
      'High-fidelity CFD analysis of shock-boundary layer interactions on swept wings at transonic Mach numbers.',
  },
  {
    id: 2,
    image: './assets/IMG_3.webp',
    category: 'AI & ML',
    title: 'Physics-Informed Neural Networks',
    description:
      'PINN-based surrogate models for rapid aerodynamic load prediction with 0.99 R² validation accuracy.',
  },
  {
    id: 3,
    image: './assets/IMG_4.webp',
    category: 'Software Engineering',
    title: 'Hybrid CFD/ML Solver',
    description:
      'Custom solver coupling OpenFOAM with PyTorch for real-time flow field prediction and optimisation.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
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
          <span className="font-body text-xs font-bold uppercase tracking-[0.7px] text-primary">Research Output</span>
        </motion.div>

        <motion.h2
          className="mt-4 font-heading text-[40px] font-black leading-[48px] tracking-[-1.2px] text-text-dark"
          initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smooth, delay: 0.1 }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          className="mt-4 max-w-xl font-body text-lg font-medium leading-[31px] text-text-body"
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smooth, delay: 0.2 }}
        >
          Selected work in computational aerodynamics, AI-accelerated simulation, and solver development.
        </motion.p>

        {/* Project cards */}
        <motion.div
          className="perspective-container mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.15 }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={blurFade()}
              className="glass-card-strong group overflow-hidden"
              whileHover={{ rotateX: -2, rotateY: 3, scale: 1.02, boxShadow: '0 24px 48px rgba(29,57,201,0.12), 0 12px 24px rgba(226,232,240,0.6)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Image — Ken Burns slow zoom */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <motion.span
                  className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 font-body text-xs font-bold text-primary backdrop-blur-sm"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smooth, delay: 0.4 }}
                >
                  {p.category}
                </motion.span>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-black tracking-[-0.4px] text-text-dark">
                  {p.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-[22px] text-text-body line-clamp-3">
                  {p.description}
                </p>
                <motion.a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1 font-body text-sm font-bold text-primary transition-colors hover:text-primary/80"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  View Technical Details
                  <ChevronRight className="h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

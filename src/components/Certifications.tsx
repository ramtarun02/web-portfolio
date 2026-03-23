import { motion } from 'framer-motion';
import { RevealSection, StaggerChildren, fadeUp } from './RevealSection';
import { certifications } from '../data/portfolio';
import { CertBadge, GraduationIllustration, WaveDivider } from './Illustrations';

export default function Certifications() {
  return (
    <RevealSection id="certifications" className="relative py-24 sm:py-32">
      <WaveDivider className="absolute top-0 left-0 right-0 -translate-y-full" />
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Certifications &amp; Education
        </h2>
        <div className="mt-2 h-1 w-16 rounded bg-accent" />

        {/* Education highlight */}
        <motion.div
          className="glass-card mt-12 flex flex-col items-center gap-6 rounded-2xl p-8 sm:flex-row"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.22, 0.9, 0.32, 1] }}
        >
          {/* Graduation illustration */}
          <GraduationIllustration className="h-24 w-32 shrink-0" />
          <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Education</p>
          <h3 className="mt-2 font-heading text-xl font-bold">
            MSc by Research — Cranfield University
          </h3>
          <p className="mt-1 text-sm text-accent">Computational Aerodynamics</p>
          <p className="mt-2 text-sm text-text-secondary">
            Thesis: Development and Validation of a Transonic Vertex-Centred Finite-Volume Solver
            with Physics-Informed Machine Learning Augmentation
          </p>
          <span className="mt-3 inline-block text-xs text-text-muted">2023 – 2025</span>
          </div>
        </motion.div>

        {/* Certifications grid */}
        <StaggerChildren className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              className="glass-card rounded-xl p-5 text-center"
            >
              {/* Animated badge illustration */}
              <div className="mx-auto flex h-12 w-12 items-center justify-center">
                <CertBadge index={idx} />
              </div>
              <h4 className="mt-3 text-sm font-semibold text-text-primary">{cert.title}</h4>
              <p className="mt-1 text-xs text-text-muted">{cert.issuer}</p>
              <p className="mt-0.5 text-[10px] text-text-muted">{cert.date}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </RevealSection>
  );
}

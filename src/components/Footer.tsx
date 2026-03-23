import { motion } from 'framer-motion';
import { Plane, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';

const smooth = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } as const;

const navLinks = ['About', 'Projects', 'Skills', 'Experience', 'Contact'];
const connectLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Mail, label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-white/40 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={smooth}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="grid gap-10 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
        >
          {/* Brand */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: smooth },
            }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Plane className="h-5 w-5 text-white" />
              </motion.div>
              <span className="font-heading text-base font-black text-text-dark">Tarun Ramprakash Portfolio</span>
            </div>
            <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-text-body">
              Building aerodynamic intelligence through CFD, scientific computing, and physics-informed AI.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: smooth },
            }}
          >
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.7px] text-text-dark">Navigation</h4>
            <nav className="mt-4 flex flex-col gap-2">
              {navLinks.map((s, i) => (
                <motion.a
                  key={s}
                  href={`#${s.toLowerCase()}`}
                  className="nav-link w-fit font-body text-sm text-text-body transition-colors hover:text-primary"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smooth, delay: 0.3 + i * 0.05 }}
                >
                  {s}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Connect */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: smooth },
            }}
          >
            <h4 className="font-heading text-sm font-bold uppercase tracking-[0.7px] text-text-dark">Connect</h4>
            <div className="mt-4 flex flex-col gap-3">
              {connectLinks.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 font-body text-sm text-text-body transition-colors hover:text-primary"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smooth, delay: 0.3 + i * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/30 pt-6 sm:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...smooth, delay: 0.5 }}
        >
          <p className="font-body text-xs text-text-muted">
            © {new Date().getFullYear()} Tarun Ramprakash Portfolio. All rights reserved.
          </p>
          <motion.a
            href="#"
            className="flex items-center gap-1.5 font-body text-xs font-bold text-primary transition-colors hover:text-primary/80"
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Visit Full Site
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
}

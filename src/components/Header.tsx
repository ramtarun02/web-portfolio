import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, FileText, Github } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          scrolled
            ? 'bg-white/70 backdrop-blur-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.03)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -72, opacity: 0,  filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="mx-auto flex h-[73px] max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-primary">
              <Plane className="h-6 w-6 text-primary" />
            </div>
            <span className="font-heading text-[23px] font-bold leading-[23px] text-primary">
              Tarun Ramprakash
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="nav-link font-body text-sm font-medium text-text-light transition-colors hover:text-primary"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              href="#"
              className="btn-glass flex items-center gap-2 rounded-lg border border-white/50 bg-white/30 px-4 py-2 font-body text-sm font-medium text-text-dark backdrop-blur-[4px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <FileText className="h-4 w-4" />
              CV
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-body text-sm font-medium text-white shadow-[0_8px_16px_rgba(29,57,201,0.2)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <Github className="h-4 w-4" />
              GitHub
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`block h-0.5 w-6 bg-text-dark transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-text-dark transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-text-dark transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.header>

      {/* Mobile fullscreen nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-[rgba(240,249,255,0.96)] backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, filter: 'blur(16px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(16px)' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-heading text-2xl font-bold text-text-dark"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="mt-4 flex gap-4">
              <a href="#" className="flex items-center gap-2 rounded-lg border border-white/50 bg-white/30 px-5 py-2 text-sm text-text-dark">
                <FileText className="h-4 w-4" />
                CV
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

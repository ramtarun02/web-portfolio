import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const smooth = { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } as const;
const blurFade = (delay = 0) => ({
  hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { ...smooth, delay } },
});

const inputCls =
  'w-full rounded-lg border border-white/60 bg-white/50 px-4 py-3 font-body text-sm text-text-dark outline-none backdrop-blur-[12px] transition-all duration-500 placeholder:text-text-muted focus:shadow-[0_0_0_2px_#1D39C9,0_0_20px_rgba(29,57,201,0.15)] focus:border-primary/40';

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramtarun237/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/ramtarun02/About' },
  { icon: Mail, label: 'Email', href: 'mailto:tarun.uk24@gmail.com' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
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
          <span className="font-body text-xs font-bold uppercase tracking-[0.7px] text-primary">Get In Touch</span>
        </motion.div>

        <motion.h2
          className="mt-4 font-heading text-[40px] font-black leading-[48px] tracking-[-1.2px] text-text-dark"
          initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ ...smooth, delay: 0.1 }}
        >
          Initiate Contact
        </motion.h2>

        <div className="perspective-container mt-12 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card-strong flex flex-col gap-5 p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={blurFade(0.15)}
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block font-body text-sm font-bold text-text-dark">
                Name
              </label>
              <input id="name" type="text" required className={inputCls} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-body text-sm font-bold text-text-dark">
                Email
              </label>
              <input id="email" type="email" required className={inputCls} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="topic" className="mb-1.5 block font-body text-sm font-bold text-text-dark">
                Topic
              </label>
              <select id="topic" className={inputCls}>
                <option value="general">General Enquiry</option>
                <option value="collaboration">Research Collaboration</option>
                <option value="opportunity">Job Opportunity</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-body text-sm font-bold text-text-dark">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className={`${inputCls} resize-none`}
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              className="btn-glow mt-2 flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-3.5 font-body text-lg font-bold text-white shadow-[0_16px_32px_rgba(29,57,201,0.3)]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            >
              <Mail className="h-5 w-5" />
              Send Transmission
            </motion.button>
          </motion.form>

          {/* Connect sidebar */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={blurFade(0.25)}
          >
            <div className="glass-card-strong p-8">
              <h3 className="font-heading text-2xl font-black tracking-[-0.6px] text-text-dark">
                Connect Directly
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-body">
                Open to research collaborations, industry positions, and consulting in computational aerodynamics.
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 font-body text-sm font-semibold text-text-dark transition-colors hover:text-primary"
                    initial={{ opacity: 0, x: -12, filter: 'blur(6px)' }}
                    whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    viewport={{ once: true }}
                    transition={{ ...smooth, delay: 0.4 + i * 0.08 }}
                    whileHover={{ x: 6 }}
                  >
                    <motion.div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white/50 backdrop-blur-[12px]"
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    >
                      <s.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              className="glass-card-strong p-6"
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ ...smooth, delay: 0.5 }}
            >
              <p className="font-body text-sm italic leading-relaxed text-text-body">
                "The science of today is the technology of tomorrow."
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Toast */}
        {submitted && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 rounded-xl bg-primary px-6 py-3 font-body text-sm font-bold text-white shadow-lg"
            initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(4px)' }}
            transition={smooth}
          >
            ✓ Transmission sent — thank you!
          </motion.div>
        )}
      </div>
    </section>
  );
}

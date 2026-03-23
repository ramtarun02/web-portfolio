import { motion, type Variants } from 'framer-motion';

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay: i * 0.15, duration: 1.2, ease: [0.42, 0, 0.58, 1] }, opacity: { delay: i * 0.15, duration: 0.3 } },
  }),
};

/* ═══════════════════════════════════════════════════════════
   Hero – Detailed aircraft blueprint illustration
   ═══════════════════════════════════════════════════════════ */
export function AircraftBlueprint({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      initial="hidden"
      animate="visible"
    >
      {/* Aircraft body */}
      <motion.path
        d="M200,60 Q210,70 215,120 L218,180 L280,200 L340,210 L340,215 L280,212 L218,220 L215,280 L250,320 L245,325 L210,285 Q200,340 190,285 L155,325 L150,320 L185,280 L182,220 L120,212 L60,215 L60,210 L120,200 L182,180 L185,120 Q190,70 200,60Z"
        stroke="#0078b4"
        strokeWidth="1.2"
        custom={0}
        variants={draw}
      />
      {/* Cockpit */}
      <motion.ellipse cx="200" cy="90" rx="8" ry="18" stroke="#0078b4" strokeWidth="0.8" custom={1} variants={draw} />
      {/* Wing detail lines */}
      <motion.path d="M218,190 L310,205" stroke="#0078b4" strokeWidth="0.5" strokeDasharray="3 3" custom={2} variants={draw} />
      <motion.path d="M182,190 L90,205" stroke="#0078b4" strokeWidth="0.5" strokeDasharray="3 3" custom={2} variants={draw} />
      <motion.path d="M218,195 L290,208" stroke="#0078b4" strokeWidth="0.5" strokeDasharray="3 3" custom={3} variants={draw} />
      <motion.path d="M182,195 L110,208" stroke="#0078b4" strokeWidth="0.5" strokeDasharray="3 3" custom={3} variants={draw} />
      {/* Engine pods */}
      <motion.ellipse cx="260" cy="203" rx="18" ry="6" stroke="#00a0e0" strokeWidth="0.8" custom={4} variants={draw} />
      <motion.ellipse cx="140" cy="203" rx="18" ry="6" stroke="#00a0e0" strokeWidth="0.8" custom={4} variants={draw} />
      {/* Tail detail */}
      <motion.path d="M210,280 L240,310" stroke="#0078b4" strokeWidth="0.6" custom={5} variants={draw} />
      <motion.path d="M190,280 L160,310" stroke="#0078b4" strokeWidth="0.6" custom={5} variants={draw} />
      {/* Dimension lines */}
      <motion.line x1="55" y1="200" x2="55" y2="215" stroke="#8890a8" strokeWidth="0.4" custom={6} variants={draw} />
      <motion.line x1="345" y1="200" x2="345" y2="215" stroke="#8890a8" strokeWidth="0.4" custom={6} variants={draw} />
      <motion.line x1="55" y1="208" x2="345" y2="208" stroke="#8890a8" strokeWidth="0.3" strokeDasharray="2 4" custom={7} variants={draw} />
      <motion.text x="185" y="230" fill="#8890a8" fontSize="7" fontFamily="monospace" initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 1.4 }}>
        WINGSPAN
      </motion.text>
      {/* Blueprint grid circles */}
      <motion.circle cx="200" cy="200" r="90" stroke="#0078b4" strokeWidth="0.2" strokeDasharray="2 6" custom={8} variants={draw} />
      <motion.circle cx="200" cy="200" r="140" stroke="#0078b4" strokeWidth="0.15" strokeDasharray="2 8" custom={9} variants={draw} />
      {/* Center crosshair */}
      <motion.line x1="195" y1="200" x2="205" y2="200" stroke="#00a0e0" strokeWidth="0.5" custom={1} variants={draw} />
      <motion.line x1="200" y1="195" x2="200" y2="205" stroke="#00a0e0" strokeWidth="0.5" custom={1} variants={draw} />
    </motion.svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   About – Orbiting nodes (CFD, AI, HPC)
   ═══════════════════════════════════════════════════════════ */
export function OrbitingNodes({ className = '' }: { className?: string }) {
  const nodes = [
    { angle: 0, label: 'CFD', color: '#0078b4' },
    { angle: 120, label: 'AI', color: '#00a0e0' },
    { angle: 240, label: 'HPC', color: '#00d2be' },
  ];
  const r = 80;

  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 240 240" className="w-full h-full">
        {/* Orbit rings */}
        <motion.circle cx="120" cy="120" r={r} stroke="#0078b4" strokeWidth="0.5" fill="none" strokeDasharray="4 6"
          initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '120px 120px' }}
        />
        <motion.circle cx="120" cy="120" r={r * 0.55} stroke="#00a0e0" strokeWidth="0.3" fill="none" strokeDasharray="3 5"
          initial={{ rotate: 0 }} animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '120px 120px' }}
        />
        {/* Center icon */}
        <circle cx="120" cy="120" r="16" fill="#0078b4" fillOpacity="0.08" stroke="#0078b4" strokeWidth="0.8" />
        <text x="120" y="124" textAnchor="middle" fill="#0078b4" fontSize="9" fontWeight="600" fontFamily="Inter,system-ui">∇</text>
        {/* Orbiting nodes */}
        {nodes.map((n, i) => {
          const rad = ((n.angle - 90) * Math.PI) / 180;
          const cx = 120 + r * Math.cos(rad);
          const cy = 120 + r * Math.sin(rad);
          return (
            <motion.g key={n.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            >
              <circle cx={cx} cy={cy} r="22" fill={n.color} fillOpacity="0.08" stroke={n.color} strokeWidth="0.8" />
              <text x={cx} y={cy + 3.5} textAnchor="middle" fill={n.color} fontSize="8" fontWeight="600" fontFamily="Inter,system-ui">{n.label}</text>
              {/* Connection line */}
              <line x1="120" y1="120" x2={cx} y2={cy} stroke={n.color} strokeWidth="0.3" strokeDasharray="3 4" opacity="0.5" />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Skills – Category icon SVGs
   ═══════════════════════════════════════════════════════════ */
export function SkillIcon({ category }: { category: string }) {
  const cls = 'h-8 w-8 text-accent';

  if (category === 'Aerodynamics')
    return (
      <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4,22 Q10,14 16,16 T28,10" /><path d="M4,26 Q12,18 20,20 T28,14" />
        <path d="M16,8 L14,4 L18,4Z" fill="currentColor" opacity="0.3" />
      </svg>
    );

  if (category === 'CFD Methods & Solvers')
    return (
      <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="10" height="10" rx="2" /><rect x="19" y="3" width="10" height="10" rx="2" />
        <rect x="11" y="19" width="10" height="10" rx="2" />
        <line x1="13" y1="8" x2="19" y2="8" /><line x1="16" y1="13" x2="16" y2="19" />
      </svg>
    );

  if (category === 'Scientific Computing')
    return (
      <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        <polyline points="4,24 10,14 16,18 22,8 28,12" />
        <circle cx="10" cy="14" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.3" />
        <circle cx="22" cy="8" r="2" fill="currentColor" opacity="0.3" />
      </svg>
    );

  if (category === 'AI/ML for CFD')
    return (
      <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
        {/* Neural network mini */}
        {[8, 16, 24].map((y) => <circle key={`l1-${y}`} cx="6" cy={y} r="2.5" />)}
        {[10, 16, 22].map((y) => <circle key={`l2-${y}`} cx="16" cy={y} r="2.5" />)}
        {[12, 20].map((y) => <circle key={`l3-${y}`} cx="26" cy={y} r="2.5" />)}
        {[8, 16, 24].map((y1) => [10, 16, 22].map((y2) => <line key={`c1-${y1}-${y2}`} x1="8.5" y1={y1} x2="13.5" y2={y2} strokeWidth="0.4" opacity="0.4" />))}
        {[10, 16, 22].map((y1) => [12, 20].map((y2) => <line key={`c2-${y1}-${y2}`} x1="18.5" y1={y1} x2="23.5" y2={y2} strokeWidth="0.4" opacity="0.4" />))}
      </svg>
    );

  // HPC & Workflows
  return (
    <svg className={cls} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2">
      <rect x="4" y="4" width="24" height="8" rx="2" /><rect x="4" y="14" width="24" height="8" rx="2" />
      <circle cx="8" cy="8" r="1.5" fill="currentColor" opacity="0.4" /><circle cx="12" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="8" cy="18" r="1.5" fill="currentColor" opacity="0.4" /><circle cx="12" cy="18" r="1.5" fill="currentColor" opacity="0.4" />
      <line x1="16" y1="24" x2="16" y2="28" /><line x1="12" y1="28" x2="20" y2="28" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Experience – Vertical timeline node
   ═══════════════════════════════════════════════════════════ */
export function TimelineNode({ color, index }: { color: string; index: number }) {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="h-3 w-3 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}40` }} />
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Certifications – Badge illustration
   ═══════════════════════════════════════════════════════════ */
export function CertBadge({ index }: { index: number }) {
  const colors = ['#0078b4', '#00a0e0', '#00d2be', '#3b82f6'];
  const c = colors[index % colors.length];
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12">
      <motion.circle cx="24" cy="20" r="14" fill={c} fillOpacity="0.08" stroke={c} strokeWidth="1"
        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
        style={{ transformOrigin: '24px 20px' }}
      />
      <motion.path d="M24,30 L20,40 L24,37 L28,40Z" fill={c} fillOpacity="0.25" stroke={c} strokeWidth="0.6"
        initial={{ opacity: 0, y: -4 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + index * 0.1 }}
      />
      <motion.path d="M18,18 L22,22 L30,14" stroke={c} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Education – University/graduation cap
   ═══════════════════════════════════════════════════════════ */
export function GraduationIllustration({ className = '' }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 120 100" className={className} fill="none"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      {/* Cap */}
      <motion.polygon points="60,20 10,40 60,60 110,40" stroke="#0078b4" strokeWidth="1.2" fill="#0078b4" fillOpacity="0.06" custom={0} variants={draw} />
      <motion.polygon points="60,20 60,25 110,45 110,40" stroke="#005f8f" strokeWidth="0.6" fill="#005f8f" fillOpacity="0.04" custom={1} variants={draw} />
      {/* Tassel */}
      <motion.line x1="95" y1="42" x2="95" y2="65" stroke="#00a0e0" strokeWidth="1" custom={2} variants={draw} />
      <motion.circle cx="95" cy="68" r="3" fill="#00a0e0" fillOpacity="0.3" stroke="#00a0e0" strokeWidth="0.6" custom={3} variants={draw} />
      {/* Stand */}
      <motion.line x1="60" y1="60" x2="60" y2="80" stroke="#0078b4" strokeWidth="0.8" custom={2} variants={draw} />
      <motion.path d="M45,75 Q60,85 75,75" stroke="#0078b4" strokeWidth="0.8" fill="none" custom={3} variants={draw} />
    </motion.svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Contact – Paper airplane / mail illustration
   ═══════════════════════════════════════════════════════════ */
export function PaperPlaneIllustration({ className = '' }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 200 160" className={className} fill="none"
      initial="hidden" whileInView="visible" viewport={{ once: true }}
    >
      {/* Paper plane */}
      <motion.path d="M20,80 L180,20 L120,90 Z" stroke="#0078b4" strokeWidth="1.2" fill="#0078b4" fillOpacity="0.05" custom={0} variants={draw} />
      <motion.path d="M20,80 L120,90 L100,140 Z" stroke="#00a0e0" strokeWidth="1" fill="#00a0e0" fillOpacity="0.04" custom={1} variants={draw} />
      <motion.line x1="120" y1="90" x2="100" y2="140" stroke="#0078b4" strokeWidth="0.6" custom={2} variants={draw} />
      {/* Trail dots */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle key={i} cx={170 - i * 14} cy={25 + i * 6} r={1.5 - i * 0.2} fill="#00a0e0"
          initial={{ opacity: 0 }} animate={{ opacity: [0, 0.6, 0] }}
          transition={{ delay: 1.5 + i * 0.15, duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        />
      ))}
      {/* Envelope accent */}
      <motion.rect x="140" y="110" width="40" height="28" rx="3" stroke="#8890a8" strokeWidth="0.6" custom={3} variants={draw} />
      <motion.path d="M140,110 L160,128 L180,110" stroke="#8890a8" strokeWidth="0.5" custom={4} variants={draw} />
    </motion.svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Section Dividers – Wave shapes
   ═══════════════════════════════════════════════════════════ */
export function WaveDivider({ flip = false, className = '' }: { flip?: boolean; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="block h-[40px] w-full sm:h-[60px]">
        <path
          d="M0,30 Q180,0 360,30 T720,30 T1080,30 T1440,30 L1440,60 L0,60Z"
          fill="currentColor"
          className="text-white/30"
        />
        <path
          d="M0,35 Q240,10 480,35 T960,35 T1440,35 L1440,60 L0,60Z"
          fill="currentColor"
          className="text-white/20"
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Floating particles – decorative animated dots
   ═══════════════════════════════════════════════════════════ */
export function FloatingParticles({ count = 12, className = '' }: { count?: number; className?: string }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    x: 5 + ((i * 37) % 90),
    y: 5 + ((i * 53) % 90),
    size: 2 + (i % 3),
    delay: i * 0.4,
    duration: 6 + (i % 4) * 2,
  }));

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-accent/10"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Animated CFD flow field for project backgrounds
   ═══════════════════════════════════════════════════════════ */
export function FlowFieldBackground({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 200" className={`w-full ${className}`} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0078b4" stopOpacity="0" />
          <stop offset="50%" stopColor="#0078b4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0078b4" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="pressureBlob">
          <stop offset="0%" stopColor="#00a0e0" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00a0e0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Pressure blob */}
      <circle cx="200" cy="100" r="60" fill="url(#pressureBlob)" />
      {/* Streamlines */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.path
          key={i}
          d={`M0,${20 + i * 22} Q100,${15 + i * 20} 200,${25 + i * 21} T400,${18 + i * 23}`}
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="0.6"
          strokeDasharray="6 8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{ duration: 8 + i, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      {/* Airfoil */}
      <motion.path
        d="M160,100 Q170,85 200,82 Q230,80 250,90 Q270,98 250,105 Q230,112 200,112 Q170,110 160,100Z"
        stroke="#0078b4"
        strokeWidth="0.8"
        fill="#0078b4"
        fillOpacity="0.04"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Rocket launch illustration for Hero
   ═══════════════════════════════════════════════════════════ */
export function RocketIllustration({ className = '' }: { className?: string }) {
  return (
    <motion.svg viewBox="0 0 200 300" className={className} fill="none"
      initial="hidden" animate="visible"
    >
      {/* Rocket body */}
      <motion.path
        d="M100,30 Q115,50 118,100 L120,180 Q120,195 110,200 L90,200 Q80,195 80,180 L82,100 Q85,50 100,30Z"
        stroke="#0078b4" strokeWidth="1.2" fill="#0078b4" fillOpacity="0.05"
        custom={0} variants={draw}
      />
      {/* Nose cone */}
      <motion.path d="M100,30 Q105,40 108,55 Q100,45 92,55 Q95,40 100,30Z" fill="#0078b4" fillOpacity="0.1" stroke="#0078b4" strokeWidth="0.6"
        custom={1} variants={draw}
      />
      {/* Window */}
      <motion.circle cx="100" cy="100" r="10" stroke="#00a0e0" strokeWidth="1" fill="#00a0e0" fillOpacity="0.08"
        custom={2} variants={draw}
      />
      {/* Fins */}
      <motion.path d="M80,180 L60,210 L80,200Z" stroke="#0078b4" strokeWidth="0.8" fill="#0078b4" fillOpacity="0.06" custom={3} variants={draw} />
      <motion.path d="M120,180 L140,210 L120,200Z" stroke="#0078b4" strokeWidth="0.8" fill="#0078b4" fillOpacity="0.06" custom={3} variants={draw} />
      {/* Exhaust flame */}
      <motion.path d="M95,200 Q100,240 100,260 Q100,240 105,200" stroke="#00a0e0" strokeWidth="0.8" fill="#00a0e0" fillOpacity="0.1"
        animate={{ scaleY: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '100px 200px' }}
      />
      <motion.path d="M97,200 Q100,230 100,245 Q100,230 103,200" stroke="#0078b4" strokeWidth="0.5" fill="#0078b4" fillOpacity="0.15"
        animate={{ scaleY: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        style={{ transformOrigin: '100px 200px' }}
      />
      {/* Stars */}
      {[{ x: 30, y: 60 }, { x: 160, y: 40 }, { x: 170, y: 120 }, { x: 25, y: 140 }, { x: 50, y: 200 }, { x: 155, y: 190 }].map((s, i) => (
        <motion.circle key={i} cx={s.x} cy={s.y} r="1.5" fill="#0078b4"
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 2 + i * 0.5, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
      {/* Detail lines */}
      <motion.line x1="85" y1="130" x2="115" y2="130" stroke="#0078b4" strokeWidth="0.4" custom={4} variants={draw} />
      <motion.line x1="85" y1="150" x2="115" y2="150" stroke="#0078b4" strokeWidth="0.4" custom={5} variants={draw} />
    </motion.svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Footer – enhanced aircraft silhouette
   ═══════════════════════════════════════════════════════════ */
export function FooterAircraft({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 50" className={className} fill="none" stroke="currentColor" strokeWidth="0.5">
      <path d="M10,25 Q30,23 80,25 Q120,26 150,25" className="text-text-muted" />
      <path d="M60,25 Q50,15 35,8 Q33,7 32,8 Q35,14 60,25" className="text-text-muted" />
      <path d="M60,25 Q50,35 35,42 Q33,43 32,42 Q35,36 60,25" className="text-text-muted" />
      <path d="M120,25 Q118,20 115,15 Q114,14 113,15 Q116,20 120,25" className="text-text-muted" />
      <path d="M120,25 Q118,30 115,35 Q114,36 113,35 Q116,30 120,25" className="text-text-muted" />
      {/* Trail */}
      <line x1="150" y1="25" x2="155" y2="25" strokeDasharray="1 2" className="text-text-muted" opacity="0.4" />
    </svg>
  );
}

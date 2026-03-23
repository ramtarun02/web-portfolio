import { usePointer, useReducedMotion } from '../hooks/useAnimations';

/** Multilayer aerospace-themed hero background with parallax. */
export default function HeroBackground() {
  const pointer = usePointer();
  const reduced = useReducedMotion();

  const px = (pointer.x - 0.5) * 2; // -1..1
  const py = (pointer.y - 0.5) * 2;

  const layer = (depth: number) =>
    reduced
      ? {}
      : {
          transform: `translate(${px * depth * 12}px, ${py * depth * 12}px)`,
          transition: 'transform 0.22s ease-out',
        };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Soft sky vignette */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(214,220,236,0.5) 100%)' }} />

      {/* Aircraft silhouette */}
      <div className="absolute inset-0 flex items-center justify-center" style={layer(0.08)}>
        <svg
          viewBox="0 0 1200 400"
          className="w-[90vw] max-w-[1400px] opacity-[0.12]"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          {/* Fuselage */}
          <path d="M100,200 Q200,195 600,198 Q900,200 1100,200" className="text-slate-400" />
          {/* Wing left */}
          <path d="M500,198 Q420,150 280,100 Q260,96 250,100 Q260,110 500,200" className="text-slate-500" />
          {/* Wing right */}
          <path d="M500,200 Q420,250 280,300 Q260,304 250,300 Q260,290 500,200" className="text-slate-500" />
          {/* Tail */}
          <path d="M950,200 Q940,170 920,140 Q910,135 905,140 Q930,175 950,200" className="text-slate-400" />
          <path d="M950,200 Q940,230 920,260 Q910,265 905,260 Q930,225 950,200" className="text-slate-400" />
          {/* Nose */}
          <ellipse cx="100" cy="200" rx="20" ry="8" className="text-slate-400" />
          {/* Engine nacelles */}
          <ellipse cx="380" cy="140" rx="30" ry="8" className="text-slate-400/50" />
          <ellipse cx="380" cy="260" rx="30" ry="8" className="text-slate-400/50" />
        </svg>
      </div>

      {/* Pressure-contour gradient */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          ...layer(0.12),
          background:
            'linear-gradient(135deg, #a0c4ff 0%, #90ddd0 30%, #ffe0a0 60%, #ffb0a0 100%)',
          animation: reduced ? 'none' : 'contourDrift 40s ease-in-out infinite alternate',
        }}
      />

      {/* Mesh-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          ...layer(0.18),
          backgroundImage:
            'linear-gradient(rgba(80,120,180,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(80,120,180,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: reduced ? 'none' : 'meshPulse 25s ease-in-out infinite alternate',
        }}
      />

      {/* Streamlines */}
      <div className="absolute inset-0" style={layer(0.22)}>
        <svg className="h-full w-full opacity-[0.1]" viewBox="0 0 1440 900" preserveAspectRatio="none">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0,${300 + i * 50} Q360,${280 + i * 45} 720,${310 + i * 48} T1440,${290 + i * 52}`}
              fill="none"
              stroke="url(#streamGrad)"
              strokeWidth="1"
              strokeDasharray="8 12"
              style={{
                animation: reduced ? 'none' : `streamFlow ${30 + i * 3}s linear infinite`,
                animationDelay: `${i * -5}s`,
              }}
            />
          ))}
          <defs>
            <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4090c0" stopOpacity="0" />
              <stop offset="50%" stopColor="#4090c0" stopOpacity="1" />
              <stop offset="100%" stopColor="#4090c0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Neural-node constellation */}
      <div className="absolute inset-0" style={layer(0.28)}>
        <svg className="h-full w-full opacity-[0.06]" viewBox="0 0 1440 900">
          {Array.from({ length: 18 }, (_, i) => {
            const x = 120 + ((i * 197) % 1200);
            const y = 80 + ((i * 131) % 740);
            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r="2.5"
                  fill="#4090c0"
                  style={{
                    animation: reduced ? 'none' : `nodePulse ${4 + (i % 5)}s ease-in-out infinite`,
                    animationDelay: `${i * 0.6}s`,
                  }}
                />
                {i > 0 && (
                  <line
                    x1={x}
                    y1={y}
                    x2={120 + (((i - 1) * 197) % 1200)}
                    y2={80 + (((i - 1) * 131) % 740)}
                    stroke="#4090c0"
                    strokeWidth="0.3"
                    strokeOpacity="0.3"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* HUD tick marks */}
      <div className="absolute inset-0 opacity-[0.07]" style={layer(0.35)}>
        <svg className="h-full w-full" viewBox="0 0 1440 900">
          {/* Horizontal ruler */}
          {Array.from({ length: 20 }, (_, i) => (
            <g key={i}>
              <line x1={i * 72} y1="20" x2={i * 72} y2={i % 5 === 0 ? 38 : 28} stroke="#64a0dc" strokeWidth="0.5" />
              {i % 5 === 0 && (
                <text x={i * 72 + 3} y="48" fill="#64a0dc" fontSize="8" fontFamily="monospace">
                  {(i * 72).toString().padStart(4, '0')}
                </text>
              )}
            </g>
          ))}
          {/* Corner crosshairs */}
          <g stroke="#64a0dc" strokeWidth="0.5" opacity="0.6">
            <line x1="40" y1="860" x2="40" y2="880" />
            <line x1="30" y1="870" x2="50" y2="870" />
            <line x1="1400" y1="860" x2="1400" y2="880" />
            <line x1="1390" y1="870" x2="1410" y2="870" />
          </g>
        </svg>
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes contourDrift {
          0% { transform: translateX(-8%); }
          100% { transform: translateX(8%); }
        }
        @keyframes meshPulse {
          0% { opacity: 0.02; }
          100% { opacity: 0.05; }
        }
        @keyframes streamFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -200; }
        }
        @keyframes nodePulse {
          0%, 100% { r: 2.5; opacity: 0.6; }
          50% { r: 3.5; opacity: 1; }
        }
      `}</style>
    </div>
  );
}

import { motion } from 'framer-motion';

function ElectricPanel({ className = '' }) {
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none">
      {/* Panel body */}
      <rect x="10" y="10" width="180" height="260" rx="8" fill="url(#panelGrad)" stroke="currentColor" strokeWidth="2" className="text-white/10" />
      {/* Panel inner */}
      <rect x="20" y="20" width="160" height="240" rx="4" fill="rgba(0,0,0,0.3)" stroke="currentColor" strokeWidth="1" className="text-white/5" />
      {/* DIN rails */}
      {[40, 80, 120, 160, 200].map((y, i) => (
        <line key={i} x1="25" y1={y} x2="175" y2={y} stroke="currentColor" strokeWidth="1" className="text-cyan-500/30" />
      ))}
      {/* Circuit breakers */}
      {[40, 80, 120, 160, 200].map((y, i) => (
        <g key={i}>
          <rect x={35 + i * 25} y={y - 8} width="15" height="16" rx="2" fill="currentColor" className="text-cyan-500/60" />
          <rect x={38 + i * 25} y={y - 4} width="9" height="8" rx="1" fill="currentColor" className="text-cyan-400/80" />
          {/* Neon glow on breakers */}
          <motion.rect
            x={35 + i * 25}
            y={y - 8}
            width="15"
            height="16"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-400"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              filter: ['drop-shadow(0 0 2px rgba(0,212,255,0.3))', 'drop-shadow(0 0 6px rgba(0,212,255,0.6))', 'drop-shadow(0 0 2px rgba(0,212,255,0.3))'],
            }}
            transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>
      ))}
      {/* Meter */}
      <circle cx="100" cy="250" r="15" fill="rgba(0,0,0,0.5)" stroke="currentColor" strokeWidth="1" className="text-cyan-500/40" />
      <circle cx="100" cy="250" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-400/60" />
      {/* Neon label */}
      <motion.text
        x="100"
        y="254"
        textAnchor="middle"
        fill="currentColor"
        className="text-cyan-400"
        fontSize="8"
        fontWeight="bold"
        animate={{
          filter: ['drop-shadow(0 0 2px rgba(0,212,255,0.5))', 'drop-shadow(0 0 6px rgba(0,212,255,0.8))', 'drop-shadow(0 0 2px rgba(0,212,255,0.5))'],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        230V
      </motion.text>
      {/* Gradients */}
      <defs>
        <linearGradient id="panelGrad" x1="0" y1="0" x2="200" y2="280">
          <stop offset="0%" stopColor="rgba(20,27,45,0.9)" />
          <stop offset="100%" stopColor="rgba(15,22,41,0.9)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ElectricalDiagram({ className = '' }) {
  return (
    <svg viewBox="0 0 300 200" className={className} fill="none">
      {/* Background grid */}
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/5" />
      </pattern>
      <rect width="300" height="200" fill="url(#grid)" />
      {/* Main line */}
      <line x1="20" y1="100" x2="120" y2="100" stroke="currentColor" strokeWidth="2" className="text-cyan-500/60" />
      {/* Circuit breaker */}
      <rect x="120" y="80" width="30" height="40" rx="4" fill="rgba(0,0,0,0.5)" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400/80" />
      <line x1="130" y1="85" x2="140" y2="85" stroke="currentColor" strokeWidth="2" className="text-cyan-400" />
      {/* Branch lines */}
      {[60, 100, 140].map((y, i) => (
        <g key={i}>
          <line x1="150" y1={y} x2="250" y2={y} stroke="currentColor" strokeWidth="1.5" className="text-cyan-500/40" />
          <circle cx="250" cy={y} r="4" fill="currentColor" className="text-cyan-400/60" />
          <motion.circle
            cx="250"
            cy={y}
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-400"
            animate={{
              r: [4, 8, 4],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>
      ))}
      {/* Input label */}
      <text x="20" y="90" fill="currentColor" className="text-cyan-400/60" fontSize="10">L</text>
      <text x="20" y="115" fill="currentColor" className="text-cyan-400/60" fontSize="10">N</text>
      {/* Neon glow effect */}
      <motion.line
        x1="20"
        y1="100"
        x2="120"
        y2="100"
        stroke="currentColor"
        strokeWidth="4"
        className="text-cyan-400"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <defs>
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

function FusePanel({ className = '' }) {
  return (
    <svg viewBox="0 0 200 240" className={className} fill="none">
      {/* Panel */}
      <rect x="10" y="10" width="180" height="220" rx="6" fill="url(#fusePanelGrad)" stroke="currentColor" strokeWidth="1.5" className="text-white/10" />
      {/* Fuses */}
      {[30, 60, 90, 120, 150, 180].map((y, i) => (
        <g key={i}>
          <rect x="30" y={y} width="140" height="16" rx="3" fill="rgba(0,0,0,0.3)" stroke="currentColor" strokeWidth="1" className="text-white/10" />
          <rect x="40" y={y + 3} width="20" height="10" rx="2" fill="currentColor" className="text-cyan-500/50" />
          <rect x="140" y={y + 3} width="20" height="10" rx="2" fill="currentColor" className="text-cyan-500/50" />
          {/* Neon indicator */}
          <motion.circle
            cx="100"
            cy={y + 8}
            r="3"
            fill="currentColor"
            className="text-cyan-400"
            animate={{
              opacity: [0.4, 1, 0.4],
              filter: ['drop-shadow(0 0 2px rgba(0,212,255,0.3))', 'drop-shadow(0 0 8px rgba(0,212,255,0.8))', 'drop-shadow(0 0 2px rgba(0,212,255,0.3))'],
            }}
            transition={{ duration: 1.2 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>
      ))}
      <defs>
        <linearGradient id="fusePanelGrad" x1="0" y1="0" x2="200" y2="240">
          <stop offset="0%" stopColor="rgba(20,27,45,0.9)" />
          <stop offset="100%" stopColor="rgba(15,22,41,0.9)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { ElectricPanel, ElectricalDiagram, FusePanel };

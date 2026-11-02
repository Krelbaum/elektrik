import { motion } from 'framer-motion';

function Logo({ size = 'md' }) {
  const sizes = { sm: 32, md: 40, lg: 56 };
  const s = sizes[size] || 40;

  return (
    <motion.div
      className="relative inline-flex items-center justify-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-xl"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ scale: 1.5 }}
      />
      {/* Inner glow */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-cyan-400/30 blur-lg"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ scale: 1.3 }}
      />
      {/* Main logo */}
      <div
        className="relative rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30"
        style={{ width: s, height: s }}
      >
        <svg width={s * 0.6} height={s * 0.6} viewBox="0 0 24 24" fill="none">
          {/* Lightning bolt */}
          <motion.path
            d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{
              filter: [
                'drop-shadow(0 0 4px rgba(255,255,255,0.8))',
                'drop-shadow(0 0 8px rgba(255,255,255,1))',
                'drop-shadow(0 0 4px rgba(255,255,255,0.8))',
              ],
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

function LogoText({ className = '' }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="font-bold text-lg leading-none text-white">Электрощиты</span>
      <motion.span
        className="text-[10px] text-cyan-400 uppercase tracking-widest font-medium"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        НСК
      </motion.span>
    </div>
  );
}

function LogoFull({ size = 'md' }) {
  return (
    <div className="flex items-center gap-3">
      <Logo size={size} />
      <LogoText />
    </div>
  );
}

export { Logo, LogoText, LogoFull };

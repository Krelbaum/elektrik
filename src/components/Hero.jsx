import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ElectricIcon, ShieldIcon } from './ElectricIcons';
import { ElectricPanel, ElectricalDiagram } from './ElectricIllustrations';
import MagneticButton from './MagneticButton';

function Hero() {
  const stats = [
    { value: 500, suffix: '+', label: 'щитов собрано' },
    { value: 10, suffix: '', label: 'лет на рынке' },
    { value: 98, suffix: '%', label: 'довольных клиентов' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-aurora bg-grid-subtle">
      {/* Neon accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium mb-8"
            >
              <ElectricIcon size={14} className="text-cyan-400 animate-neon-pulse" />
              <span>Электрощиты прецизионного качества</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] mb-6 tracking-tight">
              Электрощиты на заказ
            </h1>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] mb-8 tracking-tight text-gradient neon-text">
              прецизионного качества
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
            >
              Проектируем и собираем электрощитовое оборудование по вашим требованиям.
              Качественные комплектующие, соблюдение ГОСТ, доставка по всей России.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-20"
            >
              <MagneticButton className="magnetic-btn magnetic-btn-primary text-base">
                Заказать расчёт
                <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton className="magnetic-btn magnetic-btn-secondary text-base">
                Наши работы
              </MagneticButton>
            </motion.div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                >
                  <div className="text-3xl sm:text-4xl font-black text-gradient mb-1">{stat.value}{stat.suffix}</div>
                  <div className="text-xs sm:text-sm text-white/30">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Electric panel illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            {/* Glow behind panel */}
            <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-[100px]" />
            
            <motion.div
              className="relative w-full max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ElectricPanel className="w-full h-auto text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-xl glass flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <ShieldIcon size={24} className="text-cyan-400" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl glass flex items-center justify-center"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <ElectricIcon size={22} className="text-purple-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
          <ChevronDown size={16} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { ArrowRight, Zap, Shield, Clock, ChevronDown } from 'lucide-react';
import TextReveal from './TextReveal';
import MagneticButton from './MagneticButton';

function AnimatedCounter({ end, duration = 2, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const totalSteps = duration * 60;
    const increment = end / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

function Hero() {
  const stats = [
    { value: 500, suffix: '+', label: 'щитов собрано' },
    { value: 10, suffix: '', label: 'лет на рынке' },
    { value: 98, suffix: '%', label: 'довольных клиентов' },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-aurora bg-grid-subtle">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-cyan-400 text-sm font-medium mb-8"
          >
            <Zap size={14} className="animate-pulse" />
            <span>Электрощиты прецизионного качества</span>
          </motion.div>

          {/* Main heading */}
          <TextReveal
            text="Электрощиты на заказ"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 tracking-tight"
            as="h1"
          />

          <TextReveal
            text="прецизионного качества"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight text-gradient"
            as="h1"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-white/50 max-w-2xl mb-12 leading-relaxed"
          >
            Проектируем и собираем электрощитовое оборудование по вашим требованиям.
            Качественные комплектующие, соблюдение ГОСТ, доставка по всей России.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.15, duration: 0.6 }}
              >
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-white/30">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
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

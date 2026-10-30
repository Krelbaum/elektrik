import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import ParticleBackground from '../components/ui/ParticleBackground';

const stats = [
  { value: 500, suffix: '+', label: 'щитов собрано' },
  { value: 10, suffix: '', label: 'лет на рынке' },
  { value: 100, suffix: '%', label: 'гарантия качества' },
  { value: 24, suffix: '/7', label: 'поддержка' },
];

const features = [
  { icon: Zap, text: 'Изготовление от 1 дня' },
  { icon: Shield, text: 'Гарантия 3 года' },
  { icon: Clock, text: 'Точные сроки' },
];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-radial from-electric/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-electric text-sm font-medium mb-8"
          >
            <Zap size={16} />
            <span>Электрощиты на заказ в Новосибирске</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            Электрощиты{' '}
            <span className="text-gradient">прецизионного</span>
            <br />
            качества
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            Проектируем и собираем электрощитовое оборудование по вашим требованиям.
            Качественные комплектующие, соблюдение ГОСТ, доставка по всей России.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="#order"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-electric text-background-deep font-bold rounded-xl shadow-electric-lg hover:shadow-electric transition-shadow text-lg"
            >
              Заказать расчёт
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-xl hover:border-electric/30 transition-colors text-lg"
            >
              Наши работы
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-electric/30 rounded-full flex items-start justify-center p-1"
          >
            <motion.div className="w-1.5 h-3 bg-electric rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

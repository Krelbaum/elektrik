import { motion } from 'framer-motion';
import {
  Target,
  Award,
  CalendarCheck,
  ShieldCheck,
  Users,
  Truck,
} from 'lucide-react';
import GlassCard from './ui/GlassCard';
import AnimatedCounter from './ui/AnimatedCounter';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';

const advantages = [
  {
    icon: Target,
    title: 'Индивидуальный подход',
    description: 'Каждый щит проектируется под конкретный объект с учётом всех требований и особенностей.',
  },
  {
    icon: Award,
    title: 'Качественные комплектующие',
    description: 'Используем продукцию ABB, Schneider Electric, IEK, EKF — проверенных производителей.',
  },
  {
    icon: CalendarCheck,
    title: 'Соблюдение сроков',
    description: 'Гарантируем выполнение заказов в оговоренные сроки. ценим ваше время.',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия 3 года',
    description: 'Полная гарантия на сборку и комплектующие. Оперативное устранение неисправностей.',
  },
  {
    icon: Users,
    title: 'Сертифицированные специалисты',
    description: 'Все работы выполняются сертифицированными инженерами по нормативам ПУЭ и ГОСТ.',
  },
  {
    icon: Truck,
    title: 'Доставка по всей России',
    description: 'Отправляем готовые щиты в любой регион России надёжными транспортными компаниями.',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'щитов собрано' },
  { value: 10, suffix: '', label: 'лет на рынке' },
  { value: 98, suffix: '%', label: 'довольных клиентов' },
  { value: 24, suffix: '/7', label: 'поддержка' },
];

function Advantages() {
  return (
    <section id="advantages" className="relative py-24 md:py-32 bg-background-primary bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Почему выбирают нас"
          subtitle="Более 10 лет создаём надёжное электрощитовое оборудование для объектов любой сложности"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {advantages.map((adv, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassCard className="h-full hover:border-electric/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-gradient-electric/10 flex items-center justify-center mb-4 group-hover:bg-gradient-electric/20 transition-colors">
                  <adv.icon size={24} className="text-electric" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{adv.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{adv.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-gradient mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;

import { motion } from 'framer-motion';
import { Settings, Wrench, Tag, MonitorCheck } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';

const services = [
  {
    icon: Settings,
    title: 'Проектирование',
    description: 'Разработка схем и документации для электрощитов любого уровня сложности. Учитываем все требования и нормы.',
  },
  {
    icon: Wrench,
    title: 'Сборка щитов',
    description: 'Изготовление электрощитов по вашим требованиям из качественных комплектующих ABB, Schneider Electric, IEK.',
  },
  {
    icon: Tag,
    title: 'Маркировка',
    description: 'Полная маркировка всех элементов и проводов. Удобство эксплуатации и обслуживания.',
  },
  {
    icon: MonitorCheck,
    title: 'Монтаж и пусконаладка',
    description: 'Установка и подключение щитов на объекте. Пусконаладочные работы и тестирование.',
  },
];

function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-background-primary bg-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Наши услуги"
          subtitle="Полный цикл работ — от проектирования до монтажа и обслуживания"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassCard className="h-full hover:border-electric/30 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-gradient-electric/10 flex items-center justify-center mb-5">
                  <service.icon size={28} className="text-electric" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.description}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

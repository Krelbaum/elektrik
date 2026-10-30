import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Settings, Wrench, Tag, MonitorCheck } from 'lucide-react';

function SectionWrapper({ children, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id={id}
      ref={ref}
      className="relative py-32 md:py-44 bg-[#030712] bg-grid-subtle"
    >
      {children}
    </section>
  );
}

function Card({ icon: Icon, title, description, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group spotlight"
    >
      <div className="glass-card h-full relative overflow-hidden">
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-500">
            <Icon size={28} className="text-cyan-400" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Services() {
  const services = [
    {
      icon: Settings,
      title: 'Проектирование',
      description: 'Разработка схем и документации для электрощитов любого уровня сложности. Учитываем все требования и нормы ПУЭ.',
    },
    {
      icon: Wrench,
      title: 'Сборка щитов',
      description: 'Изготовление электрощитов по вашим требованиям из качественных комплектующих ABB, Schneider Electric, IEK.',
    },
    {
      icon: Tag,
      title: 'Маркировка',
      description: 'Полная маркировка всех элементов и проводов. Удобство эксплуатации и обслуживания на десятилетия.',
    },
    {
      icon: MonitorCheck,
      title: 'Монтаж и пусконаладка',
      description: 'Установка и подключение щитов на объекте. Пусконаладочные работы, тестирование и сдача.',
    },
  ];

  return (
    <SectionWrapper id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">
              Услуги
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              Полный цикл <span className="text-gradient">работ</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              От проектирования до монтажа и обслуживания — берём на себя все этапы
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Services;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PanelTop, Network, Gauge, Power, Radio } from 'lucide-react';

function PanelCard({ icon: Icon, title, description, use, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group spotlight"
    >
      <div className="glass-card h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-500">
              <Icon size={22} className="text-cyan-400" />
            </div>
            <span className="text-xs text-white/20 font-mono">0{index + 1}</span>
          </div>

          <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h3>
          <p className="text-white/35 text-sm leading-relaxed mb-4">{description}</p>

          <div className="pt-4 border-t border-white/5">
            <p className="text-xs text-white/20">
              <span className="text-cyan-400/60">Применение:</span> {use}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PanelTypes() {
  const types = [
    {
      icon: PanelTop,
      title: 'Вводные щиты (ВРУ)',
      description: 'Вводно-распределительные устройства для приёма и распределения электроэнергии на объекте.',
      use: 'Жилые дома, коммерческие здания, промышленные объекты',
    },
    {
      icon: Network,
      title: 'Распределительные щиты (РЩ)',
      description: 'Распределение электроэнергии по группам и линиям. Защита от перегрузок и КЗ.',
      use: 'Квартиры, офисы, производственные помещения',
    },
    {
      icon: Gauge,
      title: 'Щиты учёта (ЩУ)',
      description: 'Учёт электроэнергии с возможностью дистанционного считывания показаний.',
      use: 'ИЖС, ТСЖ, жилые комплексы',
    },
    {
      icon: Power,
      title: 'Силовые щиты',
      description: 'Управление мощными электрическими нагрузками. Коммутация двигателей.',
      use: 'Промышленные предприятия, гаражи, склады',
    },
    {
      icon: Radio,
      title: 'Щиты слаботочных систем',
      description: 'Интеграция сетей интернет, видеонаблюдения, домофонии и пожарной сигнализации.',
      use: 'Умные дома, офисные центры',
    },
  ];

  return (
    <section id="panel-types" className="relative py-32 md:py-44 bg-[#030712] bg-dots-subtle">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">
              Каталог
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              Типы <span className="text-gradient">электрощитов</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Изготавливаем все типы щитового оборудования для любых задач
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((panel, i) => (
            <PanelCard
              key={i}
              icon={panel.icon}
              title={panel.title}
              description={panel.description}
              use={panel.use}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PanelTypes;

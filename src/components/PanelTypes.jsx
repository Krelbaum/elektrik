import { motion } from 'framer-motion';
import {
  PanelTop,
  Network,
  Gauge,
  Power,
  Radio,
} from 'lucide-react';
import GlassCard from './ui/GlassCard';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';

const panelTypes = [
  {
    icon: PanelTop,
    title: 'Вводные щиты (ВРУ)',
    description: 'Вводно-распределительные устройства для приёма и распределения электроэнергии на объекте.',
    use: 'Жилые дома, коммерческие здания, промышленные объекты',
  },
  {
    icon: Network,
    title: 'Распределительные щиты (РЩ)',
    description: 'Распределение электроэнергии по группам и линиям. Защита от перегрузок и коротких замыканий.',
    use: 'Квартиры, офисы, производственные помещения',
  },
  {
    icon: Gauge,
    title: 'Щиты учёта (ЩУ)',
    description: 'Учёт consumed электроэнергии с возможностью дистанционного считывания показаний.',
    use: 'Индивидуальное жилищное строительство, ТСЖ',
  },
  {
    icon: Power,
    title: 'Силовые щиты',
    description: 'Управление мощными электрическими нагрузками. Коммутация двигателей и нагревательных приборов.',
    use: 'Промышленные предприятия, гаражи, склады',
  },
  {
    icon: Radio,
    title: 'Щиты слаботочных систем',
    description: 'Интеграция сетей интернет, видеонаблюдения, домофонии и пожарной сигнализации.',
    use: 'Умные дома, офисные центры, жилые комплексы',
  },
];

function PanelTypes() {
  return (
    <section id="panel-types" className="relative py-24 md:py-32 bg-background-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Типы электрощитов"
          subtitle="Изготавливаем все типы щитового оборудования для любых задач"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {panelTypes.map((panel, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassCard className="h-full hover:border-electric/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-gradient-electric/10 flex items-center justify-center mb-4 group-hover:bg-gradient-electric/20 transition-colors">
                  <panel.icon size={24} className="text-electric" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{panel.title}</h3>
                <p className="text-text-secondary text-sm mb-3 leading-relaxed">{panel.description}</p>
                <div className="pt-3 border-t border-white/5">
                  <p className="text-xs text-text-muted">
                    <span className="text-electric">Применение:</span> {panel.use}
                  </p>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PanelTypes;

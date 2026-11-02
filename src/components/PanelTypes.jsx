import { motion } from 'framer-motion';
import { PanelTop, Network, Gauge, Power, Radio } from 'lucide-react';
import { PanelIcon, CircuitIcon, ShieldIcon, BoltIcon, CableIcon } from './ElectricIcons';
import { ElectricPanel } from './ElectricIllustrations';

function PanelTypes() {
  const types = [
    { icon: PanelIcon, title: 'Вводные щиты (ВРУ)', description: 'Вводно-распределительные устройства для приёма и распределения электроэнергии.', use: 'Жилые дома, коммерческие здания' },
    { icon: CircuitIcon, title: 'Распределительные щиты (РЩ)', description: 'Распределение электроэнергии по группам и линиям. Защита от перегрузок и КЗ.', use: 'Квартиры, офисы, производства' },
    { icon: ShieldIcon, title: 'Щиты учёта (ЩУ)', description: 'Учёт электроэнергии с возможностью дистанционного считывания.', use: 'ИЖС, ТСЖ, жилые комплексы' },
    { icon: BoltIcon, title: 'Силовые щиты', description: 'Управление мощными электрическими нагрузками. Коммутация двигателей.', use: 'Промышленные предприятия' },
    { icon: CableIcon, title: 'Щиты слаботочных систем', description: 'Интеграция сетей интернет, видеонаблюдения, домофонии.', use: 'Умные дома, офисные центры' },
  ];

  return (
    <section id="panel-types" className="relative py-32 md:py-44 bg-[#030712] bg-dots-subtle overflow-hidden">
      {/* Neon accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block neon-text">Каталог</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Типы <span className="text-gradient">электрощитов</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((panel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group spotlight neon-border-hover glass-card h-full"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-500">
                  <panel.icon size={22} className="text-cyan-400" />
                </div>
                <span className="text-xs text-white/20 font-mono">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors group-hover:neon-text">{panel.title}</h3>
              <p className="text-white/35 text-sm leading-relaxed mb-4">{panel.description}</p>
              <div className="pt-3 border-t border-white/5">
                <p className="text-xs text-white/20"><span className="text-cyan-400/60">Применение:</span> {panel.use}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PanelTypes;

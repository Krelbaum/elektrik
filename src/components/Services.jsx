import { motion } from 'framer-motion';
import { Settings, Wrench, Tag, MonitorCheck } from 'lucide-react';
import { ElectricIcon, ShieldIcon, PanelIcon, CircuitIcon } from './ElectricIcons';

function Services() {
  const services = [
    { icon: ElectricIcon, title: 'Проектирование', description: 'Разработка схем и документации для электрощитов любого уровня сложности. Учитываем все требования и нормы ПУЭ.' },
    { icon: ShieldIcon, title: 'Сборка щитов', description: 'Изготовление электрощитов по вашим требованиям из качественных комплектующих ABB, Schneider Electric, IEK.' },
    { icon: PanelIcon, title: 'Маркировка', description: 'Полная маркировка всех элементов и проводов. Удобство эксплуатации и обслуживания на десятилетия.' },
    { icon: CircuitIcon, title: 'Монтаж и пусконаладка', description: 'Установка и подключение щитов на объекте. Пусконаладочные работы, тестирование и сдача.' },
  ];

  return (
    <section id="services" className="relative py-32 md:py-44 bg-[#030712] bg-grid-subtle overflow-hidden">
      {/* Neon accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block neon-text">Услуги</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Полный цикл <span className="text-gradient">работ</span>
          </h2>
          <p className="text-white/40 text-lg max-w-2xl mx-auto">От проектирования до монтажа и обслуживания</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group spotlight neon-border-hover glass-card h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-500">
                <service.icon size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors group-hover:neon-text">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

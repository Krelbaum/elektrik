import { motion } from 'framer-motion';
import { Target, Award, CalendarCheck, ShieldCheck, Users, Truck } from 'lucide-react';
import { ShieldIcon, BoltIcon, PanelIcon, GearIcon, ElectricIcon, CircuitIcon } from './ElectricIcons';

function Advantages() {
  const advantages = [
    { icon: Target, title: 'Индивидуальный подход', description: 'Каждый щит проектируется под конкретный объект с учётом всех требований.' },
    { icon: ShieldIcon, title: 'Качественные комплектующие', description: 'ABB, Schneider Electric, IEK, EKF — проверенные производители.' },
    { icon: CalendarCheck, title: 'Соблюдение сроков', description: 'Гарантируем выполнение заказов в оговоренные сроки.' },
    { icon: ShieldCheck, title: 'Гарантия 3 года', description: 'Полная гарантия на сборку и комплектующие.' },
    { icon: Users, title: 'Сертифицированные специалисты', description: 'Работы по нормативам ПУЭ и ГОСТ.' },
    { icon: Truck, title: 'Доставка по всей России', description: 'Отправляем в любой регион надёжными ТК.' },
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'щитов собрано' },
    { value: 10, suffix: '', label: 'лет на рынке' },
    { value: 98, suffix: '%', label: 'довольных клиентов' },
    { value: 24, suffix: '/7', label: 'поддержка' },
  ];

  return (
    <section id="advantages" className="relative py-32 md:py-44 bg-[#030712] bg-grid-subtle overflow-hidden">
      {/* Neon accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block neon-text">Преимущества</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">
              Почему выбирают <span className="text-gradient">нас</span>
            </h2>
            <div className="space-y-6">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/25 transition-all neon-border-hover">
                    <adv.icon size={22} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors group-hover:neon-text">{adv.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed">{adv.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="glass-strong rounded-[32px] p-12 neon-border">
              <div className="grid grid-cols-2 gap-10">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-4xl sm:text-5xl font-black text-gradient mb-2 group-hover:neon-text-purple transition-all">{stat.value}{stat.suffix}</div>
                    <div className="text-sm text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

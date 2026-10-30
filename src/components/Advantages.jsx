import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Award, CalendarCheck, ShieldCheck, Users, Truck } from 'lucide-react';

function StatItem({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const totalSteps = 120;
    const increment = value / totalSteps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl sm:text-5xl font-black text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/30">{label}</div>
    </motion.div>
  );
}

function AdvantageCard({ icon: Icon, title, description, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-start gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 flex items-center justify-center flex-shrink-0 group-hover:from-cyan-500/25 group-hover:to-purple-500/25 transition-all duration-500">
        <Icon size={22} className="text-cyan-400" />
      </div>
      <div>
        <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-white/35 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

function Advantages() {
  const advantages = [
    {
      icon: Target,
      title: 'Индивидуальный подход',
      description: 'Каждый щит проектируется под конкретный объект с учётом всех требований.',
    },
    {
      icon: Award,
      title: 'Качественные комплектующие',
      description: 'ABB, Schneider Electric, IEK, EKF — проверенные производители.',
    },
    {
      icon: CalendarCheck,
      title: 'Соблюдение сроков',
      description: 'Гарантируем выполнение заказов в оговоренные сроки.',
    },
    {
      icon: ShieldCheck,
      title: 'Гарантия 3 года',
      description: 'Полная гарантия на сборку и комплектующие.',
    },
    {
      icon: Users,
      title: 'Сертифицированные специалисты',
      description: 'Работы по нормативам ПУЭ и ГОСТ.',
    },
    {
      icon: Truck,
      title: 'Доставка по всей России',
      description: 'Отправляем в любой регион надёжными ТК.',
    },
  ];

  return (
    <section id="advantages" className="relative py-32 md:py-44 bg-[#030712] bg-grid-subtle">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: advantages list */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">
                Преимущества
              </span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-12">
                Почему выбирают <span className="text-gradient">нас</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {advantages.map((adv, i) => (
                <AdvantageCard
                  key={i}
                  icon={adv.icon}
                  title={adv.title}
                  description={adv.description}
                  delay={0.2 + i * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div className="flex flex-col justify-center">
            <div className="glass-strong rounded-[32px] p-12">
              <div className="grid grid-cols-2 gap-10">
                <StatItem value={500} suffix="+" label="щитов собрано" delay={0.3} />
                <StatItem value={10} suffix="" label="лет на рынке" delay={0.4} />
                <StatItem value={98} suffix="%" label="довольных клиентов" delay={0.5} />
                <StatItem value={24} suffix="/7" label="поддержка" delay={0.6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

function Contacts() {
  const contacts = [
    { icon: Phone, label: 'Телефон', value: '+7 (383) 123-45-67', href: 'tel:+73831234567' },
    { icon: Mail, label: 'Email', value: 'info@nsk-elektrik.ru', href: 'mailto:info@nsk-elektrik.ru' },
    { icon: MapPin, label: 'Адрес', value: 'г. Новосибирск, ул. Промышленная, 15', href: '#' },
    { icon: Clock, label: 'График', value: 'Пн-Пт 9:00-18:00, Сб 10:00-15:00', href: '#' },
  ];

  return (
    <section id="contacts" className="relative py-32 md:py-44 bg-[#030712] bg-grid-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-4 block">
              Связаться
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
              <span className="text-gradient">Контакты</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-5 glass rounded-2xl group hover:border-cyan-500/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 flex items-center justify-center group-hover:from-cyan-500/25 transition-all">
                  <c.icon size={20} className="text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-white/20 uppercase tracking-wider">{c.label}</div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-[24px] overflow-hidden"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=82.8896%2C55.0302&z=14&pt=82.8896%2C55.0302%2Cpm2rdm"
              className="w-full h-full min-h-[350px] grayscale hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Карта"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

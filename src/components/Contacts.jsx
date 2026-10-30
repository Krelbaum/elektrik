import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Globe } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import SectionTitle from './ui/SectionTitle';
import ScrollReveal from './ui/ScrollReveal';

function Contacts() {
  const contacts = [
    {
      icon: Phone,
      label: 'Телефон',
      value: '+7 (383) 123-45-67',
      href: 'tel:+73831234567',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@nsk-elektrik.ru',
      href: 'mailto:info@nsk-elektrik.ru',
    },
    {
      icon: MapPin,
      label: 'Адрес',
      value: 'г. Новосибирск, ул. Промышленная, 15',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Режим работы',
      value: 'Пн-Пт: 9:00-18:00, Сб: 10:00-15:00',
      href: '#',
    },
  ];

  const socials = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/73831234567', color: 'hover:!bg-[#25D366]/20' },
    { icon: Send, label: 'Telegram', href: 'https://t.me/nskelektrik', color: 'hover:!bg-[#0088cc]/20' },
    { icon: Globe, label: 'ВКонтакте', href: 'https://vk.com/nskelektrik', color: 'hover:!bg-[#0077FF]/20' },
  ];

  return (
    <section id="contacts" className="relative py-24 md:py-32 bg-background-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Контакты"
          subtitle="Свяжитесь с нами любым удобным способом"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <div className="space-y-6">
            {contacts.map((contact, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlassCard className="hover:border-electric/30 transition-colors group cursor-pointer">
                  <a href={contact.href} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-electric/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-electric/20 transition-colors">
                      <contact.icon size={22} className="text-electric" />
                    </div>
                    <div>
                      <div className="text-sm text-text-muted mb-1">{contact.label}</div>
                      <div className="text-white font-medium group-hover:text-electric transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                </GlassCard>
              </ScrollReveal>
            ))}

            <div className="flex gap-3 pt-4">
              {socials.map((social, i) => (
                <ScrollReveal key={i} delay={0.3 + i * 0.1}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl glass flex items-center justify-center transition-all ${social.color}`}
                  >
                    <social.icon size={20} className="text-text-secondary" />
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="glass-strong rounded-2xl overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.7!2d82.9!3d55.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDMwJzAwLjAiTiA4MsKwNTQnMDAuMCJF!5e0!3m2!1sru!2sru!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Contacts;

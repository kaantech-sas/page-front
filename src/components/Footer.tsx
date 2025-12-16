import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Mail, Phone } from 'lucide-react';
import { KaantechLogo } from './KaantechLogo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', color: '#1877F2' },
    { icon: Instagram, href: '#', color: '#E4405F' },
    { icon: Linkedin, href: '#', color: '#0A66C2' },
    { icon: Youtube, href: '#', color: '#FF0000' },
    { icon: Twitter, href: '#', color: '#1DA1F2' }
  ];

  const footerLinks = [
    {
      title: 'Servicios',
      links: [
        'Realidad Aumentada',
        'Realidad Virtual',
        'Cobertura de Eventos',
        'Marketing Digital',
        'Branding & Storytelling'
      ]
    },
    {
      title: 'Compañía',
      links: [
        'Sobre Nosotros',
        'Portafolio',
        'Blog',
        'Casos de Éxito',
        'Contacto'
      ]
    },
    {
      title: 'Legal',
      links: [
        'Términos de Servicio',
        'Política de Privacidad',
        'Cookies',
        'Garantía'
      ]
    }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
              repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
            `,
            backgroundSize: '100% 100%'
          }}
        />
      </div>

      {/* Sacred Geometry Corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0 0 L100 0 L0 100 Z" fill="#D4AF37" />
          <circle cx="33" cy="33" r="15" stroke="#00F0FF" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M100 100 L0 100 L100 0 Z" fill="#00F0FF" />
          <circle cx="67" cy="67" r="15" stroke="#D4AF37" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <KaantechLogo className="mb-6" />
                <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                  Transformamos marcas ordinarias en símbolos de poder digital mediante tecnologías inmersivas y estrategias ancestrales de persuasión.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="tel:+573134367623"
                    className="flex items-center gap-3 text-white/80 hover:text-[#00F0FF] transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+57 313-436-7623</span>
                  </a>
                  <a
                    href="mailto:kantech34@gmail.com"
                    className="flex items-center gap-3 text-white/80 hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>kantech34@gmail.com</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-8">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, y: -3 }}
                        transition={{ duration: 0.3 }}
                        className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-none transition-all duration-300 group"
                        style={{
                          borderColor: 'rgba(255,255,255,0.1)'
                        }}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.currentTarget.style.borderColor = social.color;
                          const svg = e.currentTarget.querySelector('svg');
                          if (svg) svg.style.color = social.color;
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          const svg = e.currentTarget.querySelector('svg');
                          if (svg) svg.style.color = 'rgba(255,255,255,0.6)';
                        }}
                      >
                        <Icon className="w-5 h-5 text-white/60 transition-colors duration-300" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-white font-bold text-lg mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-white/60 hover:text-[#00F0FF] transition-colors duration-300 text-sm block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white/50 text-sm text-center md:text-left"
            >
              © {currentYear} KAANTECH SAS. Todos los derechos reservados. | Creado con tecnología avanzada 🔮
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-6 text-white/50 text-sm"
            >
              <span className="hidden md:block">As above, so below - Digital manifestation begins here</span>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#D4AF37] rounded-none" />
                <div className="w-3 h-3 bg-[#00F0FF] rounded-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

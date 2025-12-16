import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend integration
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/35193706/pexels-photo-35193706.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen'
        }}
      />

      {/* Portal Effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-[#00F0FF]/20 via-[#D4AF37]/10 to-transparent blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-[#00F0FF]/30 rounded-none">
              <span className="text-[#00F0FF] font-medium">Inicia tu Transformación</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Abre el Portal de
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#00F0FF]"> Comunicación</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Da el primer paso hacia la manifestación de tu imperio digital
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-none p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <CheckCircle className="w-20 h-20 text-[#00F0FF] mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">¡Mensaje Recibido!</h3>
                  <p className="text-white/70 text-lg">
                    Tu energía ha sido transmitida. Te contactaremos pronto para iniciar tu transformación.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-white mb-2 block">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/5 border-white/20 text-white rounded-none focus:border-[#00F0FF] transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/5 border-white/20 text-white rounded-none focus:border-[#00F0FF] transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-white mb-2 block">
                        Teléfono *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/5 border-white/20 text-white rounded-none focus:border-[#00F0FF] transition-all duration-300"
                        placeholder="+57 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-white mb-2 block">
                        Empresa
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/5 border-white/20 text-white rounded-none focus:border-[#00F0FF] transition-all duration-300"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Mensaje *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-white/5 border-white/20 text-white rounded-none focus:border-[#00F0FF] transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto y objetivos..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#00F0FF] text-black hover:bg-white font-bold py-6 text-lg rounded-none transition-all duration-400 group"
                  >
                    <span>Iniciar la Transmutación</span>
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <Card className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-none p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Conexión Directa</h3>
              <div className="space-y-6">
                <a
                  href="tel:+573134367623"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00F0FF]/50 rounded-none transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#00F0FF]/20 border border-[#00F0FF] rounded-none group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Teléfono</div>
                    <div className="text-white font-semibold text-lg">+57 313-436-7623</div>
                  </div>
                </a>

                <a
                  href="mailto:kantech34@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D4AF37]/50 rounded-none transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#D4AF37]/20 border border-[#D4AF37] rounded-none group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Email</div>
                    <div className="text-white font-semibold text-lg">kantech34@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/573134367623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#25D366]/50 rounded-none transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#25D366]/20 border border-[#25D366] rounded-none group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">WhatsApp</div>
                    <div className="text-white font-semibold text-lg">Inicia conversación</div>
                  </div>
                </a>
              </div>
            </Card>

            {/* Hours */}
            <Card className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-none p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Horario de Energía</h3>
              <div className="space-y-3 text-white/70">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Lunes - Viernes</span>
                  <span className="text-[#00F0FF] font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span>Sábados</span>
                  <span className="text-[#00F0FF] font-semibold">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Domingos</span>
                  <span className="text-white/50">Cerrado</span>
                </div>
              </div>
            </Card>

            {/* Guarantee */}
            <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-[#00F0FF]/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-none p-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🔮</div>
                <h4 className="text-xl font-bold text-white mb-3">Garantía de Transformación</h4>
                <p className="text-white/80 text-sm leading-relaxed">
                  Resultados mensurables en 30 días o trabajamos sin costo adicional hasta lograrlo
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


import { motion } from 'framer-motion';
import { Box, Glasses, Camera, Network, Feather, ArrowRight } from 'lucide-react';
import { services } from '../data/mockData';
import { Card } from './ui/card';
import { Button } from './ui/button';

const iconMap = {
  Box: Box,
  Glasses: Glasses,
  Camera: Camera,
  Network: Network,
  Feather: Feather
};

export const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden">
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

      {/* Mystical Pattern Overlay */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <img
          src="https://images.unsplash.com/photo-1619879310659-01e83a8e9d6b"
          alt="Mystical Pattern"
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-[#00F0FF]/30 rounded-none">
              <span className="text-[#00F0FF] font-medium">Nuestros Servicios</span>
            </div>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Tecnologías que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#D4AF37]"> Transforman</span>
          </h2>
          <p className="text-xl text-white/85 max-w-3xl mx-auto">
            Experiencias inmersivas que trascienden la realidad física y conectan con la consciencia colectiva
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="h-full bg-black/50 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 rounded-none p-8 transition-all duration-400 relative overflow-hidden shadow-lg hover:shadow-glow-cyan">
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-400 blur-xl"
                    style={{ backgroundColor: service.color }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 flex items-center justify-center border-2 rounded-none transition-all duration-400 group-hover:scale-110 group-hover:rotate-6"
                      style={{ borderColor: service.color }}
                    >
                      <IconComponent
                        className="w-8 h-8 transition-colors duration-400"
                        style={{ color: service.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#00F0FF] transition-colors duration-400">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/85 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/75">
                          <div
                            className="w-1.5 h-1.5 mt-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: service.color }}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <Button
                      className="w-full bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 rounded-none group/btn transition-all duration-400 font-semibold"
                    >
                      <span>Explorar Más</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${service.color} 0%, transparent 70%)`
                    }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

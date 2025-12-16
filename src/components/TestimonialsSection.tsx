
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { Card } from './ui/card';

export const TestimonialsSection = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1760693052314-7377ef83eeaf)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'screen'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-[#D4AF37]/30 rounded-none">
              <span className="text-[#D4AF37] font-medium">Voces de Transformación</span>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6" style={{ letterSpacing: '-0.02em' }}>
            Testimonios que
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#00F0FF]"> Inspiran</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Historias reales de empresarios que activaron su código maestro del éxito
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#D4AF37]/50 rounded-none p-8 transition-all duration-400 relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-[#00F0FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between">
                    <Quote className="w-12 h-12 text-[#D4AF37]/30" />
                    <div className="px-3 py-1 bg-[#00F0FF]/20 border border-[#00F0FF]/50 rounded-none">
                      <span className="text-[#00F0FF] font-bold text-sm">{testimonial.growth}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/80 leading-relaxed text-lg">
                    “{testimonial.content}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                    <div className="w-14 h-14 rounded-none overflow-hidden border-2 border-[#D4AF37]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{testimonial.name}</div>
                      <div className="text-white/60 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent opacity-50" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-12 py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-none">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-[#00F0FF]" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">97.3%</div>
                <div className="text-sm text-white/60">Tasa de Retención</div>
              </div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-[#D4AF37] fill-[#D4AF37]" />
              <div className="text-left">
                <div className="text-3xl font-bold text-white">4.9/5</div>
                <div className="text-sm text-white/60">Rating Promedio</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

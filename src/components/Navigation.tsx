import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { KaantechLogo } from './KaantechLogo';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Servicios', id: 'services' },
    { label: 'Casos', id: 'cases' },
    { label: 'Precios', id: 'pricing' },
    { label: 'Contacto', id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <KaantechLogo />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/80 hover:text-[#00F0FF] text-lg font-medium transition-colors duration-300 relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-[#00F0FF] text-black hover:bg-white font-semibold px-6 py-2 rounded-none transition-all duration-400 hover:shadow-lg hover:shadow-[#00F0FF]/50"
              >
                Comenzar Ahora
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/98 backdrop-blur-lg border-t border-white/10"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left text-white/90 hover:text-[#00F0FF] text-lg font-medium py-2 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('contact')}
            className="w-full bg-[#00F0FF] text-black hover:bg-white font-semibold py-3 rounded-none"
          >
            Comenzar Ahora
          </Button>
        </div>
      </motion.div>
    </motion.nav>
  );
};
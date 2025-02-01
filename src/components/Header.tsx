import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  Car,
  Menu,
  X,
  MessageSquare,
  CarFront,
  Gauge,
  Building2,
  Wrench
} from 'lucide-react';
import { useLocation } from '../contexts/LocationContext.tsx';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userCity, isLoading } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Gebrauchtwagen Ankauf',
      path: '/gebrauchtwagen-ankauf',
      icon: CarFront,
      description: 'Professioneller Ankauf von Gebrauchtwagen'
    },
    {
      title: 'Unfallwagen Ankauf',
      path: '/unfallwagen-ankauf',
      icon: Wrench,
      description: 'Ankauf von Unfallfahrzeugen'
    },
    {
      title: 'Firmenwagen Ankauf',
      path: '/firmenwagen-ankauf',
      icon: Building2,
      description: 'Ankauf von Firmenfahrzeugen'
    },
    {
      title: 'PKW Ankauf',
      path: '/pkw-ankauf',
      icon: Car,
      description: 'Ankauf von PKWs'
    },
    {
      title: 'KFZ Ankauf',
      path: '/kfz-ankauf',
      icon: Car,
      description: 'Ankauf von KFZs'
    },
    {
      title: 'Motorschaden Ankauf',
      path: '/motorschaden-ankauf',
      icon: Gauge,
      description: 'Ankauf von Fahrzeugen mit Motorschaden'
    }
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2'
        : 'bg-gradient-to-b from-gray-900/90 to-gray-900/50 backdrop-blur-md py-4'
        }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/logo_CleverAutoankauf.png"
              alt="Clever Autoankauf Logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Links */}
            <div className="flex items-center space-x-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={
                    !isLoading && userCity && userCity.toLowerCase() !== 'deutschland'
                      ? `/${userCity.toLowerCase()}${service.path}`
                      : service.path
                  }
                  className={`py-2 group relative ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="relative z-10 text-sm font-medium">{service.title}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>

            {/* Contact Link */}
            <Link
              to="/kontakt"
              className={`relative py-2 group ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Kontakt</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            {/* CTA Button */}
            <Link
              to="/kontakt"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Kostenlose Bewertung
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
              }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-6 space-y-6">
              {/* Mobile Services */}
              <div className="space-y-4">
                <div className="font-semibold text-gray-900 mb-2">Services</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={
                      !isLoading && userCity && userCity.toLowerCase() !== 'deutschland'
                        ? `/${userCity.toLowerCase()}${service.path}`
                        : service.path
                    }
                    className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <service.icon className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-medium text-gray-900">{service.title}</div>
                      <p className="text-sm text-gray-500">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Link */}
              <Link
                to="/kontakt"
                className="block px-4 py-2 text-gray-700 hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>

              {/* Mobile CTA */}
              <Link
                to="/kontakt"
                className="block w-full bg-primary text-white text-center px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>Kostenlose Bewertung</span>
                </div>
              </Link>

              {/* Mobile Contact */}
              <div className="space-y-4 border-t border-gray-100 pt-6">
                <a
                  href="tel:+4915256501567"
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+49 (0) 152 56 501 567</span>
                </a>
                <a
                  href="mailto:info@clever-autoankauf.de"
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@clever-autoankauf.de</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
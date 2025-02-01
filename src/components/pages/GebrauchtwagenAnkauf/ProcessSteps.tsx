import { motion } from 'framer-motion';
import { Car, BadgeEuro, Banknote, ArrowRight, CheckCircle2, Shield, Clock, Star, MapPin, ThumbsUp, MessageSquare } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import CountUp from 'react-countup';
import { useState } from 'react';

export default function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const steps = [
    {
      icon: MessageSquare,
      title: 'Kontakt aufnehmen',
      subtitle: 'Schnell & Unverbindlich',
      description: 'Kontaktieren Sie uns telefonisch oder über unser Formular für eine erste kostenlose Einschätzung.',
      benefits: [
        '24/7 Erreichbarkeit',
        'Sofortige Beratung',
        'Kostenlos & Unverbindlich',
        'Express Rückruf-Service'
      ],
      stats: {
        value: '20000+',
        label: 'Zufriedene Kunden'
      },
      image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&q=80'
    },
    {
      icon: Car,
      title: 'Fahrzeug bewerten',
      subtitle: 'Professionell & Fair',
      description: 'Unsere Experten bewerten Ihr Fahrzeug nach aktuellen Marktpreisen und berücksichtigen alle relevanten Faktoren.',
      benefits: [
        'Faire Marktpreise',
        'Transparente Bewertung',
        'Alle Fahrzeugtypen',
        'Detaillierte Analyse'
      ],
      stats: {
        value: '100%',
        label: 'Faire Bewertung'
      },
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80'
    },
    {
      icon: BadgeEuro,
      title: 'Angebot erhalten',
      subtitle: 'Bestpreis & Garantie',
      description: 'Sie erhalten von uns ein verbindliches Kaufangebot mit Bestpreis-Garantie - transparent und ohne versteckte Kosten.',
      benefits: [
        'Bestpreis-Garantie',
        'Verbindliches Angebot',
        'Keine versteckten Kosten',
        'Sofortige Zusage'
      ],
      stats: {
        value: '95%',
        label: 'Annahme-Quote'
      },
      image: 'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80'
    },
    {
      icon: Banknote,
      title: 'Sofortige Auszahlung',
      subtitle: 'Express & Sicher',
      description: 'Nach Einigung erfolgt die sofortige Bezahlung und kostenlose Abholung Ihres Fahrzeugs - schnell und unkompliziert.',
      benefits: [
        'Sofortige Bezahlung',
        'Kostenlose Abholung',
        'Express-Überweisung',
        'Kompletter Service'
      ],
      stats: {
        value: '24',
        label: 'Express Service'
      },
      image: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&q=80'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <ParallaxProvider>
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        </div>

        <div className="relative container mx-auto px-4">
          {/* Enhanced Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Express Ankauf Prozess</span>
              </div>
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              In nur 4 Schritten zu
              <span className="text-primary"> Ihrem Bestpreis</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400"
            >
              Schnell, transparent und unkompliziert - so einfach verkaufen Sie Ihr Auto bei uns
            </motion.p>
          </div>

          {/* Interactive Process Steps */}
          <div className="relative" ref={ref}>
            {/* Connection Line with Animation */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary to-primary/20"
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent blur-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>

            {/* Steps Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary to-primary-dark text-white rounded-full flex items-center justify-center font-bold z-10 shadow-lg">
                    {index + 1}
                  </div>

                  {/* Main Card */}
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 h-full">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: activeStep === index ? 0.1 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${step.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <Parallax translateY={[-5, 5]}>
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                      </Parallax>

                      {/* Title & Description */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-primary font-medium text-sm mb-3">{step.subtitle}</p>
                        <p className="text-gray-400">{step.description}</p>
                      </div>

                      {/* Benefits List */}
                      <ul className="space-y-3 mb-6">
                        {step.benefits.map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center space-x-2 text-gray-300"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Stats */}
                      <div className="flex items-center space-x-3 text-white">
                        <div className="text-2xl font-bold">
                          <CountUp
                            end={parseInt(step.stats.value) || 0}
                            suffix={isNaN(parseInt(step.stats.value)) ? step.stats.value : '+'}
                            duration={2}
                            separator="."
                          />
                        </div>
                        <div className="text-sm text-gray-400">{step.stats.label}</div>
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <motion.div
                      className="absolute inset-0 bg-primary/20 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <motion.div
                        animate={{
                          x: [0, 10, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <ArrowRight className="w-8 h-8 text-primary" />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex flex-wrap justify-center gap-8"
          >
            {[
              { icon: Shield, text: 'Seriöser Partner' },
              { icon: Star, text: 'Bestpreis Garantie' },
              { icon: MapPin, text: 'Bundesweiter Service' },
              { icon: ThumbsUp, text: 'Express Abwicklung' }
            ].map((indicator, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-white/90"
              >
                <indicator.icon className="w-5 h-5 text-primary" />
                <span>{indicator.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="/kontakt"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 group"
            >
              <span>Jetzt Fahrzeug bewerten</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </ParallaxProvider>
  );
}
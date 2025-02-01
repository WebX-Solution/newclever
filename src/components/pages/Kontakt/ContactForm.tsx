import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Phone, MapPin, FileText, MessageSquare, CheckCircle2, AlertCircle, CarFront, Gauge, Building2, Wrench } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  carBrand: string;
  carModel: string;
  year: string;
  mileage: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
  damage: string;
  message: string;
  privacy: boolean;
  vehicleType: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    carBrand: '',
    carModel: '',
    year: '',
    mileage: '',
    location: '',
    preferredDate: '',
    preferredTime: '',
    damage: '',
    message: '',
    privacy: false,
    vehicleType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here would be your API call to submit the form
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated API call
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        carBrand: '',
        carModel: '',
        year: '',
        mileage: '',
        location: '',
        preferredDate: '',
        preferredTime: '',
        damage: '',
        message: '',
        privacy: false,
        vehicleType: ''
      });
      setCurrentStep(1);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const vehicleTypes = [
    { icon: CarFront, label: 'Gebrauchtwagen', value: 'used' },
    { icon: Gauge, label: 'Unfallwagen', value: 'accident' },
    { icon: Building2, label: 'Firmenwagen', value: 'business' },
    { icon: Wrench, label: 'Motorschaden', value: 'engine' }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8"
          >
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Kostenlose Fahrzeugbewertung</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Kontaktieren Sie uns für ein
            <span className="text-primary"> unverbindliches Angebot</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400"
          >
            Füllen Sie das Formular aus oder rufen Sie uns direkt an. 
            Wir bewerten Ihr Fahrzeug kostenlos und unverbindlich.
          </motion.p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="flex-1 relative"
              >
                <div className={`h-2 ${
                  step === 1 ? 'rounded-l-full' : step === 3 ? 'rounded-r-full' : ''
                } ${
                  step <= currentStep ? 'bg-primary' : 'bg-gray-700'
                } transition-all duration-300`} />
                <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 text-sm ${
                  step <= currentStep ? 'text-primary' : 'text-gray-500'
                }`}>
                  {step === 1 ? 'Fahrzeugtyp' : step === 2 ? 'Fahrzeugdaten' : 'Kontaktdaten'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Vehicle Type Selection */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Wählen Sie Ihren Fahrzeugtyp</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {vehicleTypes.map((type) => (
                      <label
                        key={type.value}
                        className={`relative flex items-center p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                          formData.vehicleType === type.value
                            ? 'bg-primary/20 border-primary'
                            : 'bg-white/5 border-white/20 hover:bg-white/10'
                        } border`}
                      >
                        <input
                          type="radio"
                          name="vehicleType"
                          value={type.value}
                          checked={formData.vehicleType === type.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <type.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <span className="block text-lg font-medium text-white">
                              {type.label}
                            </span>
                          </div>
                        </div>
                        {formData.vehicleType === type.value && (
                          <CheckCircle2 className="absolute top-4 right-4 w-6 h-6 text-primary" />
                        )}
                      </label>
                    ))}
                  </div>
                  <div className="flex justify-end mt-8">
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.vehicleType}
                      className="px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Weiter
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Vehicle Details */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Fahrzeugdaten</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="carBrand" className="block text-sm font-medium text-gray-300 mb-2">
                        Marke *
                      </label>
                      <input
                        type="text"
                        id="carBrand"
                        name="carBrand"
                        required
                        value={formData.carBrand}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="z.B. BMW"
                      />
                    </div>
                    <div>
                      <label htmlFor="carModel" className="block text-sm font-medium text-gray-300 mb-2">
                        Modell *
                      </label>
                      <input
                        type="text"
                        id="carModel"
                        name="carModel"
                        required
                        value={formData.carModel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="z.B. 320d"
                      />
                    </div>
                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-2">
                        Baujahr *
                      </label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="z.B. 2018"
                      />
                    </div>
                    <div>
                      <label htmlFor="mileage" className="block text-sm font-medium text-gray-300 mb-2">
                        Kilometerstand *
                      </label>
                      <input
                        type="text"
                        id="mileage"
                        name="mileage"
                        required
                        value={formData.mileage}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="z.B. 125.000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="damage" className="block text-sm font-medium text-gray-300 mb-2">
                      Schäden oder Mängel
                    </label>
                    <textarea
                      id="damage"
                      name="damage"
                      rows={3}
                      value={formData.damage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Beschreiben Sie eventuelle Schäden oder Mängel am Fahrzeug"
                    />
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 rounded-xl bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all duration-300"
                    >
                      Zurück
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300"
                    >
                      Weiter
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Details */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-8">Kontaktdaten</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="ihre@email.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                        Standort *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="PLZ oder Stadt"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-2">
                        Wunschtermin
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
                        Wunschuhrzeit
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Bitte wählen</option>
                        <option value="morning">Vormittags (8:00 - 12:00)</option>
                        <option value="afternoon">Nachmittags (12:00 - 16:00)</option>
                        <option value="evening">Abends (16:00 - 20:00)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Weitere Informationen
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Weitere Informationen zu Ihrem Fahrzeug"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      checked={formData.privacy}
                      onChange={handleChange}
                      className="mt-1.5 h-4 w-4 rounded border-white/20 bg-white/10 text-primary focus:ring-primary"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-300">
                      Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen 
                      gespeichert werden. Weitere Informationen finden Sie in der 
                      <a href="/datenschutz" className="text-primary hover:text-primary-dark ml-1">
                        Datenschutzerklärung
                      </a>.
                    </label>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-4 rounded-xl bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all duration-300"
                    >
                      Zurück
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                        isSubmitting ? 'animate-pulse' : ''
                      }`}
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Anfrage absenden'}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Phone,
              title: '24/7 Erreichbarkeit',
              description: 'Wir sind rund um die Uhr für Sie da'
            },
            {
              icon: Car,
              title: 'Express Service',
              description: 'Schnelle Abwicklung innerhalb von 24h'
            },
            {
              icon: MapPin,
              title: 'Bundesweiter Service',
              description: 'Wir kommen kostenlos zu Ihnen'
            },
            {
              icon: FileText,
              title: 'Faire Bewertung',
              description: 'Transparente & marktgerechte Preise'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
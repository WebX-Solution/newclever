import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, BarChart, Settings, X, ChevronDown, ChevronUp} from 'lucide-react';

type CookieSettings = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setSettings({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    saveCookieSettings({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    });
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    saveCookieSettings(settings);
    setIsVisible(false);
  };

  const saveCookieSettings = (settings: CookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(settings));
    // Here you would implement the actual cookie settings
    // For example, enabling/disabling Google Analytics based on settings.analytics
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    if (key === 'necessary') return; // Necessary cookies can't be disabled
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gray-900 rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
            {/* Main Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Cookie className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-white">Cookie-Einstellungen</h2>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="prose prose-invert max-w-none mb-6">
                <p className="text-gray-300">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                  Einige sind notwendig für den Betrieb der Website, während andere uns helfen, 
                  die Website zu optimieren und das Nutzererlebnis zu verbessern.
                </p>
              </div>

              {/* Cookie Settings */}
              <div className="mb-8">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
                >
                  <span>Cookie-Einstellungen anpassen</span>
                  {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 space-y-4 overflow-hidden"
                    >
                      {/* Necessary Cookies */}
                      <div className="flex items-start space-x-4 bg-white/5 rounded-xl p-4">
                        <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-white">Notwendige Cookies</h3>
                            <div className="relative">
                              <input
                                type="checkbox"
                                checked={settings.necessary}
                                disabled
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-400">
                            Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                          </p>
                        </div>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="flex items-start space-x-4 bg-white/5 rounded-xl p-4">
                        <BarChart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-white">Analyse Cookies</h3>
                            <button
                              onClick={() => toggleSetting('analytics')}
                              className="relative"
                            >
                              <input
                                type="checkbox"
                                checked={settings.analytics}
                                onChange={() => {}}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                            </button>
                          </div>
                          <p className="text-sm text-gray-400">
                            Diese Cookies ermöglichen es uns, die Nutzung der Website zu analysieren und zu verbessern.
                          </p>
                        </div>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="flex items-start space-x-4 bg-white/5 rounded-xl p-4">
                        <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-white">Marketing Cookies</h3>
                            <button
                              onClick={() => toggleSetting('marketing')}
                              className="relative"
                            >
                              <input
                                type="checkbox"
                                checked={settings.marketing}
                                onChange={() => {}}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                            </button>
                          </div>
                          <p className="text-sm text-gray-400">
                            Diese Cookies werden verwendet, um Ihnen personalisierte Werbung anzuzeigen.
                          </p>
                        </div>
                      </div>

                      {/* Preference Cookies */}
                      <div className="flex items-start space-x-4 bg-white/5 rounded-xl p-4">
                        <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-white">Präferenz Cookies</h3>
                            <button
                              onClick={() => toggleSetting('preferences')}
                              className="relative"
                            >
                              <input
                                type="checkbox"
                                checked={settings.preferences}
                                onChange={() => {}}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-primary"></div>
                              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                            </button>
                          </div>
                          <p className="text-sm text-gray-400">
                            Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row justify-end items-center gap-4">
                <button
                  onClick={handleAcceptSelected}
                  className="w-full sm:w-auto px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl transition-colors"
                >
                  Auswahl bestätigen
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-black/20 border-t border-white/10 p-4 text-center">
              <p className="text-sm text-gray-400">
                Weitere Informationen finden Sie in unserer{' '}
                <a
                  href="/datenschutz"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  Datenschutzerklärung
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
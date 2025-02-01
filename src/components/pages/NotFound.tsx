import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, ArrowLeft, Home, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <main>
      <Helmet>
        <title>404 - Seite nicht gefunden | Clever-Autoankauf</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black relative overflow-hidden flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
        </div>

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-3xl mx-auto text-center">
            {/* 404 Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Car className="w-24 h-24 mx-auto text-primary mb-4" />
              <h1 className="text-8xl font-bold text-white mb-4">404</h1>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Oops! Diese Seite wurde nicht gefunden
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben.
                Lassen Sie uns gemeinsam den richtigen Weg finden.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link
                  to="/"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all duration-300 group"
                >
                  <Home className="w-5 h-5 mr-2" />
                  <span>Zur Startseite</span>
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Kontakt aufnehmen</span>
                </Link>
              </div>

              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center px-6 py-3 text-gray-400 hover:text-white transition-colors mt-8"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Zurück zur vorherigen Seite</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
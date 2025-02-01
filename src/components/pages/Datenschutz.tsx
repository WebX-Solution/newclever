import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  Shield,
  FileText,
  Mail,
  Phone,
  Database,
  MessageSquare,
  BarChart,
  Server,
  UserCheck,
  Settings,
  BookOpen,
  Layers,
} from 'lucide-react';

export default function Datenschutz() {
  return (
    <main>
      <Helmet>
        <title>Datenschutzerklärung | Clever-Autoankauf</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://clever-autoankauf.de/datenschutz" />
      </Helmet>

      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-8">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Datenschutz & Sicherheit</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Datenschutzerklärung
              </h1>
              <p className="text-xl text-gray-400">
                Informationen zum Schutz Ihrer persönlichen Daten
              </p>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 prose prose-lg prose-invert max-w-none"
            >
              {/* Inhaltsverzeichnis */}
              <div className="flex items-start space-x-4 mb-12">
                <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Inhaltsverzeichnis</h2>
                  <ol className="list-decimal list-inside text-gray-300 space-y-2">
                    <li><a href="#section-1" className="text-primary hover:text-primary-dark">Verantwortlicher</a></li>
                    <li><a href="#section-2" className="text-primary hover:text-primary-dark">Grundlegendes</a></li>
                    <li><a href="#section-3" className="text-primary hover:text-primary-dark">Datenerfassung auf unserer Website</a></li>
                    <li><a href="#section-4" className="text-primary hover:text-primary-dark">Hosting und Content Delivery Networks (CDN)</a></li>
                    <li><a href="#section-5" className="text-primary hover:text-primary-dark">Allgemeine Hinweise und Pflichtinformationen</a></li>
                    <li><a href="#section-6" className="text-primary hover:text-primary-dark">Datenerfassung auf dieser Website</a></li>
                    <li><a href="#section-7" className="text-primary hover:text-primary-dark">Analyse-Tools und Werbung</a></li>
                    <li><a href="#section-8" className="text-primary hover:text-primary-dark">Newsletter</a></li>
                    <li><a href="#section-9" className="text-primary hover:text-primary-dark">Plugins und Tools</a></li>
                    <li><a href="#section-10" className="text-primary hover:text-primary-dark">Eigene Dienste</a></li>
                  </ol>
                </div>
              </div>

              {/* 1. Verantwortlicher */}
              <div id="section-1" className="flex items-start space-x-4 mb-12">
                <UserCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Verantwortlicher</h2>
                  <p className="text-gray-300 mb-4">
                    Der Verantwortliche im Sinne der Datenschutz-Grundverordnung und anderer nationaler Datenschutzgesetze der Mitgliedsstaaten sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
                  </p>
                  <div className="bg-white/5 rounded-xl p-6 mb-6">
                    <p className="text-gray-300">Ahmed Alawe</p>
                    <p className="text-gray-300">Hustadtring 59</p>
                    <p className="text-gray-300">44801 Bochum</p>
                    <p className="text-gray-300">Deutschland</p>
                    <div className="mt-4">
                      <p className="text-gray-300">
                        <Phone className="w-5 h-5 text-primary inline-block mr-2" />
                        +49 (0) 152 56 501 567
                      </p>
                      <p className="text-gray-300">
                        <Mail className="w-5 h-5 text-primary inline-block mr-2" />
                        info@clever-autoankauf.de
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Grundlegendes */}
              <div id="section-2" className="flex items-start space-x-4 mb-12">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Grundlegendes</h2>
                  <p className="text-gray-300 mb-4">
                    Diese Datenschutzerklärung soll die Nutzer dieser Website über die Art, den Umfang und den Zweck der Erhebung und Verwendung personenbezogener Daten durch den Websitebetreiber informieren.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Der Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Vorschriften. Da durch neue Technologien und die ständige Weiterentwicklung dieser Webseite Änderungen an dieser Datenschutzerklärung vorgenommen werden können, empfehlen wir Ihnen sich die Datenschutzerklärung in regelmäßigen Abständen wieder durchzulesen.
                  </p>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">Definitionen der verwendeten Begriffe</h3>
                    <ul className="space-y-4 text-gray-300">
                      <li>
                        <strong className="text-white">Personenbezogene Daten:</strong> Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.
                      </li>
                      <li>
                        <strong className="text-white">Verarbeitung:</strong> Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit personenbezogenen Daten.
                      </li>
                      <li>
                        <strong className="text-white">Verantwortlicher:</strong> Die natürliche oder juristische Person, die über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Datenerfassung auf unserer Website */}
              <div id="section-3" className="flex items-start space-x-4 mb-12">
                <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Datenerfassung auf unserer Website</h2>

                  {/* Server-Log-Files */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Server-Log-Files</h3>
                    <p className="text-gray-300 mb-4">
                      Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                      <li>Browsertyp und Browserversion</li>
                      <li>Verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <p className="text-gray-300">
                      Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
                    </p>
                  </div>

                  {/* Nutzung von ipinfo.io */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Standortlokalisierung mittels ipinfo.io</h3>
                    <p className="text-gray-300 mb-4">
                      Unsere Website nutzt den Dienst ipinfo.io zur Standortlokalisierung anhand Ihrer IP-Adresse. Dies dient dazu, Ihnen standortbezogene Inhalte anzuzeigen, wie z. B. lokale Informationen oder spezifische Angebote. Hierzu wird Ihre IP-Adresse an die Server von ipinfo.io übertragen, wo sie verarbeitet und lokalisiert wird.
                    </p>
                    <p className="text-gray-300 mb-4">
                      Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an der Bereitstellung standortbezogener Inhalte haben. Weitere Informationen zur Datenverarbeitung durch ipinfo.io entnehmen Sie bitte deren Datenschutzerklärung unter:{" "}
                      <a
                        href="https://ipinfo.io/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        https://ipinfo.io/privacy
                      </a>.
                    </p>
                    <p className="text-gray-300">
                      Die Erhebung und Verarbeitung dieser Daten erfolgt ausschließlich für den genannten Zweck. Es erfolgt keine dauerhafte Speicherung der Daten durch uns. Falls Sie der Verarbeitung Ihrer Daten widersprechen möchten, können Sie dies durch geeignete Einstellungen in Ihrem Browser oder mit Tools zur Anonymisierung Ihrer IP-Adresse tun.
                    </p>
                  </div>

                {/* Cookies */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Cookies</h3>
                  <p className="text-gray-300 mb-4">
                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>
                  <div className="bg-white/5 rounded-xl p-6 mb-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Arten von Cookies:</h4>
                    <ul className="space-y-4 text-gray-300">
                      <li>
                        <strong className="text-white">Notwendige Cookies:</strong> Diese Cookies sind für den Betrieb der Website erforderlich und können in unseren Systemen nicht ausgeschaltet werden.
                      </li>
                      <li>
                        <strong className="text-white">Analyse-Cookies:</strong> Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können.
                      </li>
                      <li>
                        <strong className="text-white">Marketing-Cookies:</strong> Diese Cookies können von unseren Werbepartnern über unsere Website gesetzt werden.
                      </li>
                      <li>
                        <strong className="text-white">Funktionale Cookies:</strong> Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen.
                      </li>
                    </ul>
                  </div>
                  <p className="text-gray-300">
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren.
                  </p>
                </div>

                {/* Kontaktformular */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Kontaktformular</h3>
                  <p className="text-gray-300 mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <div className="bg-white/5 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Verarbeitete Daten:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Name</li>
                      <li>E-Mail-Adresse</li>
                      <li>Telefonnummer</li>
                      <li>Fahrzeugdaten</li>
                      <li>Standort</li>
                      <li>Nachrichteninhalt</li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>

          {/* 4. Hosting und CDN */}
          <div id="section-4" className="flex items-start space-x-4 mb-12">
            <Server className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Hosting und CDN</h2>
              <p className="text-gray-300 mb-4">
                Unsere Website wird bei der netcup GmbH gehostet. Die Server befinden sich ausschließlich in deutschen Rechenzentren und unterliegen damit den strengen deutschen und europäischen Datenschutzbestimmungen.
              </p>
              <div className="bg-white/5 rounded-xl p-6 mb-4">
                <h4 className="text-lg font-semibold text-white mb-3">Verarbeitete Daten:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>IP-Adresse</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>Inhalt der Anforderung (konkrete Seite)</li>
                  <li>Zugriffsstatus/HTTP-Statuscode</li>
                  <li>Jeweils übertragene Datenmenge</li>
                  <li>Website, von der die Anforderung kommt</li>
                  <li>Browser mit Version</li>
                  <li>Betriebssystem mit Version</li>
                </ul>
              </div>
              <p className="text-gray-300">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
              </p>
            </div>
          </div>

          {/* 5. Allgemeine Hinweise und Pflichtinformationen */}
          <div id="section-5" className="flex items-start space-x-4 mb-12">
            <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Allgemeine Hinweise und Pflichtinformationen</h2>

              {/* Datenschutz */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Datenschutz</h3>
                <p className="text-gray-300 mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
              </div>

              {/* Hinweis zur SSL-Verschlüsselung */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">SSL-Verschlüsselung</h3>
                <p className="text-gray-300 mb-4">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              {/* Widerruf Ihrer Einwilligung zur Datenverarbeitung */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p className="text-gray-300 mb-4">
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
              </div>

              {/* Beschwerderecht bei der zuständigen Aufsichtsbehörde */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Beschwerderecht</h3>
                <p className="text-gray-300 mb-4">
                  Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser Unternehmen seinen Sitz hat.
                </p>
              </div>

              {/* Recht auf Datenübertragbarkeit */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Recht auf Datenübertragbarkeit</h3>
                <p className="text-gray-300 mb-4">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Datenerfassung auf dieser Website */}
          <div id="section-6" className="flex items-start space-x-4 mb-12">
            <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Datenerfassung auf dieser Website</h2>

              {/* Cookies */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
                <div className="bg-white/5 rounded-xl p-6 mb-4">
                  <h4 className="text-lg font-semibold text-white mb-3">Verwendete Cookie-Arten:</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li>
                      <strong className="text-white">Notwendige Cookies:</strong> Diese Cookies sind für den Betrieb der Website erforderlich.
                    </li>
                    <li>
                      <strong className="text-white">Präferenz-Cookies:</strong> Diese Cookies ermöglichen der Website, sich an Informationen zu erinnern, die die Art und Weise beeinflussen, wie sich die Website verhält oder aussieht.
                    </li>
                    <li>
                      <strong className="text-white">Statistik-Cookies:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                    </li>
                    <li>
                      <strong className="text-white">Marketing-Cookies:</strong> Diese Cookies werden verwendet, um Besuchern auf Websites zu folgen.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Kontaktformular */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Kontaktformular</h3>
                <p className="text-gray-300 mb-4">
                  Bei der Kontaktaufnahme über unser Formular werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Rechtsgrundlage:</h4>
                  <p className="text-gray-300">
                    Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Analyse Tools und Werbung */}
          <div id="section-7" className="flex items-start space-x-4 mb-12">
            <BarChart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Analyse-Tools und Werbung</h2>
              <p className="text-gray-300 mb-4">
                Wir nutzen derzeit keine Analyse-Tools oder Werbetools von Drittanbietern auf unserer Website.
              </p>
            </div>
          </div>

          {/* 8. Newsletter */}
          <div id="section-8" className="flex items-start space-x-4 mb-12">
            <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Newsletter</h2>
              <p className="text-gray-300 mb-4">
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind (Double-Opt-In).
              </p>
            </div>
          </div>

          {/* 9. Plugins und Tools */}
          <div id="section-9" className="flex items-start space-x-4 mb-12">
            <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Plugins und Tools</h2>

              {/* Lokale Schriftarten */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Lokale Schriftarten</h3>
                <p className="text-gray-300 mb-4">
                  Wir verwenden auf unserer Website die Schriftart "Inter". Um die Datenschutzkonformität zu gewährleisten und die Übertragung von Daten an Google zu vermeiden, hosten wir diese Schriftart lokal auf unserem eigenen Server.
                </p>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Vorteile lokaler Schriftarten:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Keine Verbindung zu Google-Servern</li>
                    <li>Keine Übertragung Ihrer IP-Adresse an Google</li>
                    <li>Bessere Ladezeiten durch lokales Hosting</li>
                    <li>Vollständige DSGVO-Konformität</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 10. Eigene Dienste */}
          <div id="section-10" className="flex items-start space-x-4 mb-12">
            <Layers className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Eigene Dienste</h2>
              <p className="text-gray-300 mb-4">
                Wir hosten unsere Website bei der netcup GmbH in deutschen Rechenzentren. Sämtliche Datenverarbeitung findet ausschließlich in der Europäischen Union statt.
              </p>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technische Maßnahmen:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>SSL/TLS-Verschlüsselung</li>
                  <li>Regelmäßige Sicherheitsupdates</li>
                  <li>Firewall-Systeme</li>
                  <li>Backup-Systeme</li>
                  <li>Zugriffskontrollen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="/impressum"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
            >
              Impressum
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Kontakt
            </a>
          </div>
        </motion.div>
      </div>
    </div>
      </section >
    </main >
  );
}
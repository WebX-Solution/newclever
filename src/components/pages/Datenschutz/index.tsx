import SEO from '../../SEO'

export default function Datenschutz() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <SEO 
        title="Datenschutzerklärung | Clever-Autoankauf"
        description="Datenschutzerklärung von Clever-Autoankauf - Hier erfahren Sie, wie wir Ihre Daten schützen und verarbeiten."
      />
      
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <h3 className="text-xl font-semibold text-white mb-2">9.2 Lokale Schriftarten</h3>
        <p className="text-gray-300 mb-4">
          Wir verwenden auf unserer Website die Schriftart "Inter". Um die Datenschutzkonformität zu gewährleisten und die Übertragung von Daten an Google zu vermeiden, hosten wir diese Schriftart lokal auf unserem eigenen Server. Die Schriftdateien werden direkt von unserem Server geladen, wenn Sie unsere Website besuchen. Dies bedeutet:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Keine Verbindung zu Google-Servern</li>
          <li>Keine Übertragung Ihrer IP-Adresse an Google</li>
          <li>Bessere Ladezeiten durch lokales Hosting</li>
          <li>Vollständige DSGVO-Konformität</li>
        </ul>
        <p className="text-gray-300 mb-4">
          Die Schriftdateien werden in den gängigen Webformate (WOFF2) bereitgestellt und über CSS in das Design der Website eingebunden. Die Dateien werden im Browser Ihres Endgeräts zwischengespeichert, um eine optimale Darstellung zu gewährleisten.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">9.3 Hosting und CDN</h3>
        <p className="text-gray-300 mb-4">
          Unsere Website wird bei der netcup GmbH gehostet. Die Server befinden sich ausschließlich in deutschen Rechenzentren und unterliegen damit den strengen deutschen und europäischen Datenschutzbestimmungen. Die netcup GmbH verarbeitet dabei folgende Daten:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Inhalt der Anforderung (konkrete Seite)</li>
          <li>Zugriffsstatus/HTTP-Statuscode</li>
          <li>Jeweils übertragene Datenmenge</li>
          <li>Website, von der die Anforderung kommt</li>
          <li>Browser mit Version</li>
          <li>Betriebssystem mit Version</li>
        </ul>
        <p className="text-gray-300">
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
        </p>

        <h3 className="text-xl font-semibold text-white mb-2">9.4 Technische Sicherheitsmaßnahmen</h3>
        <p className="text-gray-300 mb-4">
          Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, folgende geeignete technische und organisatorische Maßnahmen:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>SSL/TLS-Verschlüsselung</li>
          <li>Regelmäßige Sicherheitsupdates</li>
          <li>Firewall-Systeme</li>
          <li>Intrusion-Detection-Systeme</li>
          <li>Regelmäßige Backups</li>
          <li>Zugangskontrollsysteme</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mb-2">9.5 Datenverarbeitung in der Europäischen Union</h3>
        <p className="text-gray-300">
          Wir verarbeiten Ihre Daten ausschließlich in Rechenzentren der Europäischen Union. Wir wählen unsere Dienstleister sorgfältig aus und verpflichten sie vertraglich zur Einhaltung der europäischen Datenschutzstandards. Dies gilt insbesondere für unseren Hosting-Provider netcup GmbH, der ausschließlich Rechenzentren in Deutschland betreibt.
        </p>
      </div>
    </div>
  )
}
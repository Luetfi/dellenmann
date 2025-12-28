import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/SEOHead";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <SEOHead
        title="Datenschutzerklärung | Dellenmann Ludwigsburg"
        description="Datenschutzerklärung des Dellenmann - Informationen zur Datenverarbeitung, Cookies und Ihren Rechten gemäß DSGVO."
        canonicalUrl="/datenschutz"
        noIndex={true}
      />
      <Header />
      
      <main className="pt-40 pb-16">
        <div className="container-narrow">
          {/* Page Header */}
          <header className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Rechtliches</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mt-3 mb-4">
              Datenschutzerklärung
            </h1>
          </header>

          {/* Content */}
          <div className="bg-dellen-dark rounded-2xl p-8 md:p-12 animate-fade-up">
            <div className="prose prose-invert max-w-none text-secondary-foreground/80 space-y-8">
              
              {/* Einleitung */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="font-display text-xl text-secondary-foreground/90 mb-3">Allgemeine Hinweise</h3>
                <p className="leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
                  wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
                  werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten 
                  Datenschutzerklärung.
                </p>
              </section>

              {/* Verantwortlicher */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">2. Verantwortlicher</h2>
                <p className="leading-relaxed mb-4">
                  Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-secondary/30 rounded-lg p-6 text-sm">
                  <p className="font-semibold text-secondary-foreground">DellenMann</p>
                  <p>Sercan Sacar</p>
                  <p>Gansäcker 8</p>
                  <p>74321 Bietigheim-Bissingen</p>
                  <p className="mt-3">Telefon: 0162 3236262</p>
                  <p>E-Mail: info@dellen-mann.de</p>
                </div>
                <p className="leading-relaxed mt-4">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über 
                  die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                </p>
              </section>

              {/* Datenerfassung */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">3. Datenerfassung auf dieser Website</h2>
                
                <h3 className="font-display text-xl text-secondary-foreground/90 mb-3">Cookies</h3>
                <p className="leading-relaxed mb-4">
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden 
                  und die Ihr Browser speichert. Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, 
                  Trojaner oder sonstige Schadsoftware.
                </p>
                <p className="leading-relaxed mb-4">
                  Wir setzen verschiedene Arten von Cookies ein:
                </p>
                <div className="bg-secondary/30 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-secondary-foreground mb-3">Notwendige Cookies</h4>
                  <p className="leading-relaxed mb-3">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. 
                    Sie werden in der Regel nur als Reaktion auf von Ihnen vorgenommene Aktionen gesetzt, wie z.B. das Speichern 
                    Ihrer Cookie-Einstellungen.
                  </p>
                  <p className="text-sm text-secondary-foreground/60">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)
                  </p>
                </div>
                <div className="bg-secondary/30 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-secondary-foreground mb-3">Externe Dienste (Google Maps)</h4>
                  <p className="leading-relaxed mb-3">
                    Für die Anzeige von Karteninhalten nutzen wir Google Maps. Diese Cookies werden nur gesetzt, wenn Sie 
                    dies ausdrücklich über unser Cookie-Banner erlauben. Hierbei kann Ihre IP-Adresse an Google übermittelt werden.
                  </p>
                  <p className="text-sm text-secondary-foreground/60">
                    Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
                  </p>
                </div>
                <p className="leading-relaxed mb-4">
                  <strong className="text-secondary-foreground">Cookie-Verwaltung:</strong> Sie können Ihre Cookie-Einstellungen 
                  jederzeit über den Cookie-Button am unteren linken Bildschirmrand anpassen oder widerrufen. Die meisten Browser 
                  akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem 
                  Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein neues Cookie angelegt wird.
                </p>
                <p className="leading-relaxed mb-6">
                  <strong className="text-secondary-foreground">Speicherdauer:</strong> Notwendige Cookies werden lokal in Ihrem 
                  Browser gespeichert und bleiben bestehen, bis Sie diese löschen oder Ihre Einstellungen ändern. Die Speicherung 
                  Ihrer Cookie-Präferenzen erfolgt in Ihrem Browser (LocalStorage).
                </p>

                <h3 className="font-display text-xl text-secondary-foreground/90 mb-3">Kontaktformulare</h3>
                <p className="leading-relaxed mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                  inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer, Betreff und Nachricht) 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir 
                  nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="leading-relaxed mb-6">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit 
                  der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. 
                  In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung 
                  der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>

                <h3 className="font-display text-xl text-secondary-foreground/90 mb-3">Schadensmeldung mit Foto-Upload</h3>
                <p className="leading-relaxed mb-4">
                  Über unser Formular zur Schadensmeldung können Sie zusätzlich zu Ihren Kontaktdaten auch Fotos Ihres Fahrzeugschadens 
                  hochladen. Dabei werden folgende Daten erhoben:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  <li>Name und Kontaktdaten (E-Mail, Telefon)</li>
                  <li>Fahrzeugdaten (Marke, Modell)</li>
                  <li>Schadensbeschreibung</li>
                  <li>Hochgeladene Fotos des Schadens</li>
                </ul>
                <p className="leading-relaxed mb-6">
                  Die Fotos und übermittelten Daten werden ausschließlich zur Erstellung eines Kostenvoranschlags und zur 
                  Durchführung der Reparaturleistung verwendet. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO 
                  (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
                </p>

                <h3 className="font-display text-xl text-secondary-foreground/90 mb-3">Speicherdauer</h3>
                <p className="leading-relaxed">
                  Die von Ihnen übermittelten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung 
                  zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – 
                  insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
              </section>

              {/* Google Maps */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">4. Google Maps</h2>
                <p className="leading-relaxed mb-4">
                  Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google"), 
                  Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                <p className="leading-relaxed mb-4">
                  Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen 
                  werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser 
                  Seite hat keinen Einfluss auf diese Datenübertragung.
                </p>
                <p className="leading-relaxed mb-4">
                  Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und 
                  an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes 
                  Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                </p>
                <p className="leading-relaxed">
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: 
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-accent hover:text-accent/80 ml-1"
                  >
                    https://policies.google.com/privacy
                  </a>
                </p>
              </section>

              {/* Hosting */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">5. Hosting</h2>
                <p className="leading-relaxed mb-4">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, 
                  Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, 
                  die über eine Website generiert werden, handeln.
                </p>
                <p className="leading-relaxed">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden 
                  Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung 
                  unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </section>

              {/* SSL/TLS */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
                <p className="leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel 
                  Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte 
                  Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an 
                  dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              {/* Betroffenenrechte */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">7. Ihre Rechte</h2>
                <p className="leading-relaxed mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
                  personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten 
                  zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung 
                  jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung 
                  der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong className="text-secondary-foreground">Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über 
                  Ihre von uns verarbeiteten personenbezogenen Daten verlangen.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong className="text-secondary-foreground">Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die 
                  Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong className="text-secondary-foreground">Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung 
                  Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht die Verarbeitung zur Ausübung des 
                  Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen 
                  des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong className="text-secondary-foreground">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie 
                  können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.
                </p>
                <p className="leading-relaxed mb-4">
                  <strong className="text-secondary-foreground">Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können 
                  verlangen, dass wir Ihnen Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, 
                  gängigen und maschinenlesbaren Format übermitteln.
                </p>
                <p className="leading-relaxed">
                  <strong className="text-secondary-foreground">Beschwerderecht bei einer Aufsichtsbehörde:</strong> Des Weiteren 
                  steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>

              {/* Widerspruchsrecht */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">8. Widerspruchsrecht</h2>
                <p className="leading-relaxed">
                  Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO 
                  verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen 
                  Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.
                </p>
              </section>

              {/* Aktualität */}
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                <p className="leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2024. Durch die Weiterentwicklung 
                  unserer Website und Angebote oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben 
                  kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;

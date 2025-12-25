import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      <main className="pt-40 pb-16">
        <div className="container-narrow">
          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Rechtliches</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mt-3 mb-4">
              Impress<span className="text-primary">um</span>
            </h1>
          </div>

          {/* Content */}
          <div className="bg-dellen-dark rounded-2xl p-8 md:p-12 animate-fade-up">
            <div className="prose prose-invert max-w-none text-secondary-foreground/80 space-y-8">
              
              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="bg-secondary/30 rounded-lg p-6 text-sm">
                  <p className="font-semibold text-secondary-foreground">DellenMann</p>
                  <p>Sercan Sacar</p>
                  <p>Gansäcker 8</p>
                  <p>74321 Bietigheim-Bissingen</p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">Kontakt</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-secondary-foreground/60 text-xs mb-1">Telefon</p>
                    <a href="tel:+491623236262" className="text-accent hover:text-accent/80 font-medium">
                      0162 3236262
                    </a>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <p className="text-secondary-foreground/60 text-xs mb-1">E-Mail</p>
                    <a href="mailto:info@dellen-mann.de" className="text-accent hover:text-accent/80 font-medium">
                      info@dellen-mann.de
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">Umsatzsteuer-ID</h2>
                <p className="leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  <span className="text-secondary-foreground">Keine Umsatzsteuer-Identifikationsnummer (Kleinunternehmer nach § 19 UStG)</span>
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p className="leading-relaxed mb-2">
                  <strong className="text-secondary-foreground">Berufsbezeichnung:</strong> Dellentechniker / Smart-Repair-Spezialist
                </p>
                <p className="leading-relaxed">
                  <strong className="text-secondary-foreground">Zuständige Kammer / berufsrechtliche Regelungen:</strong> Keine besondere Kammerzugehörigkeit; 
                  es gelten die Bestimmungen der Gewerbeordnung (GewO)
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">Angaben gemäß § 55 Abs. 2 RStV</h2>
                <p className="leading-relaxed mb-2">Verantwortlich für den Inhalt:</p>
                <div className="bg-secondary/30 rounded-lg p-6 text-sm">
                  <p className="font-semibold text-secondary-foreground">Sercan Sacar</p>
                  <p>Gansäcker 8</p>
                  <p>74321 Bietigheim-Bissingen</p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">EU-Streitschlichtung</h2>
                <p className="leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a 
                    href="https://ec.europa.eu/consumers/odr" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-accent hover:text-accent/80 ml-1"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  <br /><br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-secondary-foreground mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p className="leading-relaxed">
                  Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren 
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
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

export default Impressum;

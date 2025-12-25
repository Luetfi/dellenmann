import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Check, X } from "lucide-react";

export type CookieConsent = {
  necessary: boolean;
  maps: boolean;
  analytics: boolean;
};

const defaultConsent: CookieConsent = {
  necessary: true,
  maps: false,
  analytics: false,
};

export const getCookieConsent = (): CookieConsent | null => {
  const stored = localStorage.getItem("cookie-consent");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);

  useEffect(() => {
    const stored = getCookieConsent();
    if (!stored) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem("cookie-consent", JSON.stringify(newConsent));
    setIsVisible(false);
    // Reload to apply consent
    window.location.reload();
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, maps: true, analytics: true });
  };

  const acceptSelected = () => {
    saveConsent(consent);
  };

  const rejectAll = () => {
    saveConsent({ necessary: true, maps: false, analytics: false });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="bg-dellen-dark border border-secondary-foreground/10 rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl pointer-events-auto animate-fade-up">
        {!showSettings ? (
          <>
            {/* Main View */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl text-secondary-foreground mb-2">
                  Cookie-Einstellungen
                </h3>
                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  Wir nutzen Cookies und externe Dienste wie Google Maps, um Ihnen die bestmögliche Erfahrung 
                  auf unserer Website zu bieten. Sie können selbst entscheiden, welche Dienste Sie zulassen möchten.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={acceptAll}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Check className="w-4 h-4 mr-2" />
                Alle akzeptieren
              </Button>
              <Button
                onClick={() => setShowSettings(true)}
                variant="outline"
                className="flex-1 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary/50"
              >
                <Settings className="w-4 h-4 mr-2" />
                Einstellungen
              </Button>
              <Button
                onClick={rejectAll}
                variant="ghost"
                className="flex-1 text-secondary-foreground/60 hover:text-secondary-foreground hover:bg-secondary/50"
              >
                <X className="w-4 h-4 mr-2" />
                Ablehnen
              </Button>
            </div>
          </>
        ) : (
          <>
            {/* Settings View */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl text-secondary-foreground">
                Cookie-Einstellungen
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-secondary-foreground/60 hover:text-secondary-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4 p-4 bg-secondary/30 rounded-xl">
                <div>
                  <h4 className="font-semibold text-secondary-foreground mb-1">Notwendige Cookies</h4>
                  <p className="text-secondary-foreground/60 text-sm">
                    Diese Cookies sind für die Grundfunktionen der Website erforderlich.
                  </p>
                </div>
                <div className="w-12 h-6 bg-accent/30 rounded-full flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-accent rounded-full" />
                </div>
              </div>

              {/* Google Maps */}
              <label className="flex items-start justify-between gap-4 p-4 bg-secondary/30 rounded-xl cursor-pointer hover:bg-secondary/40 transition-colors">
                <div>
                  <h4 className="font-semibold text-secondary-foreground mb-1">Google Maps</h4>
                  <p className="text-secondary-foreground/60 text-sm">
                    Ermöglicht die Anzeige von interaktiven Karten für unseren Standort.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.maps}
                  onChange={(e) => setConsent({ ...consent, maps: e.target.checked })}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${consent.maps ? 'bg-accent/30 justify-end' : 'bg-secondary-foreground/20 justify-start'}`}>
                  <div className={`w-4 h-4 rounded-full transition-colors ${consent.maps ? 'bg-accent' : 'bg-secondary-foreground/40'}`} />
                </div>
              </label>

              {/* Analytics */}
              <label className="flex items-start justify-between gap-4 p-4 bg-secondary/30 rounded-xl cursor-pointer hover:bg-secondary/40 transition-colors">
                <div>
                  <h4 className="font-semibold text-secondary-foreground mb-1">Analyse & Statistiken</h4>
                  <p className="text-secondary-foreground/60 text-sm">
                    Hilft uns, die Website zu verbessern und Besucherstatistiken zu erstellen.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${consent.analytics ? 'bg-accent/30 justify-end' : 'bg-secondary-foreground/20 justify-start'}`}>
                  <div className={`w-4 h-4 rounded-full transition-colors ${consent.analytics ? 'bg-accent' : 'bg-secondary-foreground/40'}`} />
                </div>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={acceptSelected}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Check className="w-4 h-4 mr-2" />
                Auswahl speichern
              </Button>
              <Button
                onClick={acceptAll}
                variant="outline"
                className="flex-1 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary/50"
              >
                Alle akzeptieren
              </Button>
            </div>
          </>
        )}

        <p className="text-secondary-foreground/50 text-xs mt-4 text-center">
          Weitere Informationen finden Sie in unserer{" "}
          <a href="/datenschutz" className="text-accent hover:text-accent/80 underline">
            Datenschutzerklärung
          </a>
        </p>
      </div>
    </div>
  );
};

export default CookieBanner;

import { getCookieConsent } from "./CookieBanner";
import { MapPin } from "lucide-react";

interface ConsentGoogleMapProps {
  src: string;
  title?: string;
  className?: string;
}

const ConsentGoogleMap = ({ src, title = "Standort", className = "w-full h-full" }: ConsentGoogleMapProps) => {
  const consent = getCookieConsent();
  const hasMapConsent = consent?.maps === true;

  if (!hasMapConsent) {
    return (
      <div className={`${className} bg-secondary/50 flex flex-col items-center justify-center p-8 text-center`}>
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <MapPin className="w-8 h-8 text-primary" />
        </div>
        <h4 className="font-display text-lg text-secondary-foreground mb-2">
          Google Maps deaktiviert
        </h4>
        <p className="text-secondary-foreground/60 text-sm max-w-xs mb-4">
          Um die Karte anzuzeigen, akzeptieren Sie bitte Google Maps in den Cookie-Einstellungen.
        </p>
        <button
          onClick={() => {
            localStorage.removeItem("cookie-consent");
            window.location.reload();
          }}
          className="text-accent hover:text-accent/80 text-sm font-medium underline"
        >
          Cookie-Einstellungen öffnen
        </button>
      </div>
    );
  }

  return (
    <iframe
      src={src}
      className={className}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={title}
    />
  );
};

export default ConsentGoogleMap;

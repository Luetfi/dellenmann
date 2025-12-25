import { Cookie } from "lucide-react";
import { reopenCookieBanner } from "./CookieBanner";

const CookieSettingsButton = () => {
  return (
    <button
      onClick={reopenCookieBanner}
      className="fixed bottom-6 left-6 z-40 group"
      aria-label="Cookie-Einstellungen öffnen"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-dellen-dark border border-secondary-foreground/10 flex items-center justify-center shadow-lg hover:bg-dellen-dark/80 transition-all hover:scale-110">
          <Cookie className="w-5 h-5 text-accent group-hover:text-accent/80" />
        </div>
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-dellen-dark border border-secondary-foreground/10 px-3 py-1.5 rounded-lg text-sm text-secondary-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Cookie-Einstellungen
        </span>
      </div>
    </button>
  );
};

export default CookieSettingsButton;

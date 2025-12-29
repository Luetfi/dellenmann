import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/10">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={handleLogoClick}>
              <img src={logo} alt="DellenMann Logo - Dellenreparatur & Beulenreparatur Ludwigsburg" className="h-12 w-auto mb-4 cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Ihr Dellentechniker & Beulendoktor für professionelle Dellenentfernung ohne Lackieren in Ludwigsburg und Umgebung. PDR, Smart Repair & Hagelschaden Reparatur.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/sacar.sercan?igsh=Njd1M3N3eG5wZWJz&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/ergebnisse" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Ergebnisse
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/schaden-melden" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Schaden melden
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+491623236262" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>0162 3236262</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@dellen-mann.de" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@dellen-mann.de</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-secondary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span>Gansäcker 8<br />74321 Bietigheim-Bissingen</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Öffnungszeiten</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-secondary-foreground/70 text-sm">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <span className="block">Mo - Sa: 09:00 - 20:00</span>
                  <span className="block text-secondary-foreground/50">So: Geschlossen</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/10">
        <div className="container-narrow py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {currentYear} DellenMann. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/impressum" className="text-secondary-foreground/50 hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-secondary-foreground/50 hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

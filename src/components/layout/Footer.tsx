import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-narrow section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img src={logo} alt="DellenMann Logo" className="h-12 w-auto mb-4" />
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Ihr Spezialist für Dellenentfernung ohne Lackieren. Professionell, schnell und zu fairen Preisen.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#leistungen" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#prozess" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Prozess
                </a>
              </li>
              <li>
                <Link to="/galerie" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Galerie
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+491234567890" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+49 123 456 7890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@dellenmann.de" className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@dellenmann.de</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-secondary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span>Musterstraße 123<br />12345 Musterstadt</span>
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
                  <span className="block">Mo - Fr: 08:00 - 18:00</span>
                  <span className="block">Sa: 09:00 - 14:00</span>
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
            <a href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors">
              Impressum
            </a>
            <a href="#" className="text-secondary-foreground/50 hover:text-primary transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

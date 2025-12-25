import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Kontakt</span>
          <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mt-3 mb-4">
            Ich bin für Sie <span className="text-primary">da</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Haben Sie eine Delle entdeckt oder möchten Sie mehr über meine Leistungen erfahren? 
            Kontaktieren Sie mich – ich helfe Ihnen gerne weiter.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link 
            to="/schaden-melden"
            className="bg-primary/10 border-2 border-primary rounded-2xl p-8 hover:bg-primary/20 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="font-display text-2xl text-secondary-foreground mb-2">Schaden melden</h3>
            <p className="text-secondary-foreground/70">
              Laden Sie Fotos Ihres Schadens hoch und erhalten Sie eine kostenlose Einschätzung mit Festpreisangebot.
            </p>
          </Link>

          <Link 
            to="/kontakt"
            className="bg-accent/10 border-2 border-accent rounded-2xl p-8 hover:bg-accent/20 transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <ArrowRight className="w-6 h-6 text-accent group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="font-display text-2xl text-secondary-foreground mb-2">Allgemeine Anfragen</h3>
            <p className="text-secondary-foreground/70">
              Haben Sie Fragen zu meinen Leistungen oder möchten Sie mehr erfahren? Schreiben Sie mir.
            </p>
          </Link>
        </div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a 
            href="tel:+491623236262"
            className="bg-dellen-dark rounded-xl p-6 hover:bg-dellen-dark/80 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
              <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h4 className="font-semibold text-secondary-foreground mb-1">Telefon</h4>
            <p className="text-secondary-foreground/70 text-sm">0162 3236262</p>
          </a>

          <a 
            href="mailto:info@dellen-mann.de"
            className="bg-dellen-dark rounded-xl p-6 hover:bg-dellen-dark/80 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
              <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
            </div>
            <h4 className="font-semibold text-secondary-foreground mb-1">E-Mail</h4>
            <p className="text-secondary-foreground/70 text-sm">info@dellen-mann.de</p>
          </a>

          <div className="bg-dellen-dark rounded-xl p-6 hover:bg-dellen-dark/80 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-secondary transition-colors">
              <MapPin className="w-6 h-6 text-accent group-hover:text-secondary-foreground" />
            </div>
            <h4 className="font-semibold text-secondary-foreground mb-1">Adresse</h4>
            <p className="text-secondary-foreground/70 text-sm">
              Gansäcker 8<br />74321 Bietigheim-Bissingen
            </p>
          </div>

          <div className="bg-dellen-dark rounded-xl p-6 hover:bg-dellen-dark/80 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-secondary transition-colors">
              <Clock className="w-6 h-6 text-accent group-hover:text-secondary-foreground" />
            </div>
            <h4 className="font-semibold text-secondary-foreground mb-1">Öffnungszeiten</h4>
            <p className="text-secondary-foreground/70 text-sm">
              Mo-Sa: 09:00 - 20:00<br />So: Geschlossen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

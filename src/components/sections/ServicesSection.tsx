import { CircleDot, CloudRain, Car, Truck, AlertTriangle, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CircleDot,
    title: "Dellenentfernung ohne Lackieren (PDR)",
    description: "Professionelle Paintless Dent Repair (PDR) für Dellenreparatur & Beulenreparatur. Schonendes Ausbeulen ohne Schleifen, Spachteln oder Lackieren."
  },
  {
    icon: CloudRain,
    title: "Hagelschaden-Reparatur (PDR)",
    description: "Viele kleine Dellen nach Unwetter? Wir setzen Ihr Fahrzeug mit PDR (Dent Repair) lackschadenfrei instand. Professionelle Hagelschadenbeseitigung ohne Lackieren."
  },
  {
    icon: Car,
    title: "Beulenservice & Smart Repair",
    description: "Beulenreparatur bei Parkrempler oder Türkantenschlägen. Smart Repair für Karosserieteile – professionelles Ausbeulen mit PDR-Technik (Dentless Paint Repair)."
  },
  {
    icon: Truck,
    title: "Mobiler Dellenservice (Vor-Ort)",
    description: "Keine Zeit für die Werkstatt? Mobiler Dent Repair Service – ich komme zu Ihnen nach Hause, ins Büro oder zur Wunschwerkstatt. PDR im Umkreis Ludwigsburg."
  },
  {
    icon: AlertTriangle,
    title: "Vandalismusschäden reparieren",
    description: "Nicht jeder Vandalismusschaden muss lackiert werden. Druckbedingte Eindrückungen lassen sich mit PDR (Paintless Dent Repair) oft lackschadenfrei ausbeulen."
  },
  {
    icon: Building2,
    title: "Flottenservice & Gewerbekunden",
    description: "Professionelle Dellenreparatur für Autohäuser, Leasingfirmen und Fuhrparks. Volumenrabatte, Vor-Ort-Service und flexible Rahmenverträge für Gewerbekunden."
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="leistungen" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Meine Leistungen</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Professionelle <span className="text-primary">Dellenreparatur & PDR</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Von Beulenreparatur über Smart Repair bis zur Hagelschadenbeseitigung – Dent Repair vom Fachmann.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold btn-glow-red group"
          >
            Jetzt Angebot anfragen
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

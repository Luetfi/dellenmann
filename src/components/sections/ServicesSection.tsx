import { CircleDot, CloudRain, Car, Paintbrush, Sparkles, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: CircleDot,
    title: "Dellenentfernung ohne Lackieren (PDR)",
    description: "Professionelle Paintless Dent Repair Technik für Dellen aller Art. Der Originallack bleibt erhalten.",
    features: ["Originalzustand", "Schnelle Reparatur", "Keine Farbunterschiede"]
  },
  {
    icon: CloudRain,
    title: "Hagelschaden-Instandsetzung",
    description: "Spezialisiert auf die lackierfreie Beseitigung von Hagelschäden – auch bei großflächigen Beschädigungen.",
    features: ["Versicherungsabwicklung", "Großflächige Schäden", "Mobile Teams"]
  },
  {
    icon: Car,
    title: "Parkdellen & Karosserieschäden",
    description: "Parkrempler, Einkaufswagen-Dellen und kleinere Beulen – wir reparieren sie unsichtbar.",
    features: ["Kleine & mittlere Dellen", "Türkanten", "Kotflügel"]
  },
  {
    icon: Paintbrush,
    title: "Smart Repair",
    description: "Punktuelle Lackausbesserungen und Kratzerentfernung für kleine Beschädigungen.",
    features: ["Kratzer", "Steinschläge", "Lackkorrekturen"]
  },
  {
    icon: Sparkles,
    title: "Fahrzeugaufbereitung",
    description: "Professionelle Innen- und Außenreinigung für einen makellosen Gesamteindruck.",
    features: ["Politur", "Versiegelung", "Innenreinigung"]
  },
  {
    icon: Building2,
    title: "Flottenservice",
    description: "Maßgeschneiderte Lösungen für Autohäuser, Leasingfirmen und Versicherungen.",
    features: ["Volumenrabatte", "Vor-Ort-Service", "Rahmenverträge"]
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
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Unsere Leistungen</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Professionelle <span className="text-primary">Karosseriearbeit</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vom kleinen Parkschaden bis zur umfangreichen Hagelreparatur – wir bieten das volle Spektrum.
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
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span 
                    key={feature}
                    className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>
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

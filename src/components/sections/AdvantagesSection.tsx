import { Shield, Banknote, Clock, TrendingUp, Award, Truck } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "Lackierfreie Reparatur",
    description: "Der Originallack bleibt vollständig erhalten – keine Farbunterschiede, keine Wertverluste.",
    color: "accent"
  },
  {
    icon: Banknote,
    title: "Bis zu 70% günstiger",
    description: "Im Vergleich zur herkömmlichen Lackierung sparen Sie erhebliche Kosten.",
    color: "primary"
  },
  {
    icon: Clock,
    title: "Schnelle Bearbeitung",
    description: "Die meisten Reparaturen sind in wenigen Stunden erledigt – oft am selben Tag.",
    color: "accent"
  },
  {
    icon: TrendingUp,
    title: "Werterhalt",
    description: "Kein Lackieren bedeutet: Ihr Fahrzeug behält seinen vollen Wiederverkaufswert.",
    color: "primary"
  },
  {
    icon: Award,
    title: "Zertifizierte Techniker",
    description: "Unsere Spezialisten sind ausgebildet und zertifiziert in der PDR-Technik.",
    color: "accent"
  },
  {
    icon: Truck,
    title: "Mobiler Service",
    description: "Wir kommen zu Ihnen – ob privat, zum Autohaus oder zur Flotte.",
    color: "primary"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Ihre Vorteile</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Warum <span className="text-primary">DellenMann</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profitieren Sie von unserer Expertise und modernster PDR-Technik für makellose Ergebnisse.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={advantage.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/30 card-hover animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                advantage.color === "primary" 
                  ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
                  : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
              }`}>
                <advantage.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

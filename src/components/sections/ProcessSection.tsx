import { MessageSquare, Search, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Kontakt aufnehmen",
    description: "Kontaktieren Sie mich telefonisch oder füllen Sie das Schadenmelden-Formular mit Fotos aus, um eine erste Einschätzung zu erhalten."
  },
  {
    number: "02",
    icon: Search,
    title: "Begutachtung",
    description: "Ich analysiere den Schaden vor Ort oder über Ihre Fotos und erstelle Ihnen ein kostenloses und unverbindliches Festpreisangebot."
  },
  {
    number: "03",
    icon: Wrench,
    title: "Reparatur",
    description: "Ich behebe die Dellen präzise mit professioneller PDR-Technik. Der Originallack bleibt dabei vollständig erhalten und unversehrt."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Qualitätscheck",
    description: "Nach gründlicher Endkontrolle übergebe ich Ihnen Ihr makelloses und reparierten Fahrzeug in perfektem Zustand."
  }
];

const ProcessSection = () => {
  return (
    <section id="prozess" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">So funktioniert's</span>
          <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mt-3 mb-4">
            In 4 Schritten zur <span className="text-primary">makellosen Karosserie</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Ein einfacher, transparenter Prozess – von der ersten Anfrage bis zur Fahrzeugübergabe.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary-foreground/20 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step Card */}
                <div className="bg-dellen-dark rounded-2xl p-6 border border-secondary-foreground/10 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-xl bg-secondary-foreground/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-secondary-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-foreground/60 text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

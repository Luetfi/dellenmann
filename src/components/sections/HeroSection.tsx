import { Phone, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-secondary pt-32 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--secondary-foreground)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-dellen-dark" />

      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-up">
              <Star className="w-4 h-4 fill-accent" />
              <span>4,9 Sterne bei Google</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-secondary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Dellenentfernung{" "}
              <span className="text-primary">ohne Lackieren</span>
              <br />
              <span className="text-secondary-foreground/90">schnell, präzise, professionell</span>
            </h1>

            <p className="text-secondary-foreground/70 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Ihr Spezialist für lackierfreie Dellenreparatur, Hagelschadenbeseitigung und Smart Repair. 
              Originalzustand erhalten – bis zu 70% günstiger als Lackieren.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 btn-glow-red group"
              >
                Angebot anfragen
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 font-semibold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+491234567890">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Zertifizierte Techniker</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Mobiler Service</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/60 text-sm">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Festpreisgarantie</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="aspect-[4/3] bg-gradient-to-br from-dellen-dark to-secondary rounded-2xl overflow-hidden border border-secondary-foreground/10 shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="w-full h-full flex items-center justify-center text-secondary-foreground/30">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-secondary-foreground/5 flex items-center justify-center">
                    <span className="text-4xl">🚗</span>
                  </div>
                  <p className="text-sm">Hero-Bild hier einfügen</p>
                  <p className="text-xs text-secondary-foreground/20 mt-1">(Werkstatt oder Karosserie-Bild)</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg btn-glow-green">
              <div className="text-sm font-medium">Bis zu</div>
              <div className="text-2xl font-display font-bold">70% günstiger</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

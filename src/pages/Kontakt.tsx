import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-narrow">
          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Kontakt</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mt-3 mb-4">
              Allgemeine <span className="text-primary">Anfragen</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie mehr erfahren? 
              Kontaktieren Sie uns – wir helfen Ihnen gerne weiter.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-dellen-dark rounded-2xl p-8 animate-fade-up">
              <h2 className="font-display text-2xl text-secondary-foreground mb-6">Schreiben Sie uns</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-secondary-foreground">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ihr Name"
                      className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-secondary-foreground">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Ihre Telefonnummer"
                      className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-secondary-foreground">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="ihre@email.de"
                    className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-secondary-foreground">Betreff *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Worum geht es?"
                    className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-secondary-foreground">Ihre Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Wie können wir Ihnen helfen?"
                    rows={5}
                    className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 btn-glow-red"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Nachricht senden
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="tel:+491234567890"
                  className="bg-dellen-dark rounded-xl p-6 flex items-start gap-4 hover:bg-dellen-dark/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-foreground mb-1">Telefon</h4>
                    <p className="text-secondary-foreground/70 text-sm">+49 123 456 7890</p>
                  </div>
                </a>

                <a 
                  href="mailto:info@dellenmann.de"
                  className="bg-dellen-dark rounded-xl p-6 flex items-start gap-4 hover:bg-dellen-dark/80 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-foreground mb-1">E-Mail</h4>
                    <p className="text-secondary-foreground/70 text-sm">info@dellenmann.de</p>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="bg-dellen-dark rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-foreground mb-1">Adresse</h4>
                    <p className="text-secondary-foreground/70 text-sm">
                      Musterstraße 123<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-dellen-dark rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-foreground mb-3">Öffnungszeiten</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-secondary-foreground/70">
                        <span>Montag - Freitag</span>
                        <span className="text-accent">08:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between text-secondary-foreground/70">
                        <span>Samstag</span>
                        <span className="text-accent">09:00 - 14:00</span>
                      </div>
                      <div className="flex justify-between text-secondary-foreground/50">
                        <span>Sonntag</span>
                        <span>Geschlossen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-dellen-dark rounded-xl overflow-hidden h-48">
                <div className="w-full h-full flex items-center justify-center text-secondary-foreground/30">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Google Maps hier einfügen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;

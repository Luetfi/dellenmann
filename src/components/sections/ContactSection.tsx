import { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Upload, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const isValid = file.type.startsWith('image/');
      const isUnderLimit = file.size <= 10 * 1024 * 1024; // 10MB
      return isValid && isUnderLimit;
    });
    
    if (validFiles.length + uploadedFiles.length > 5) {
      toast({
        title: "Zu viele Dateien",
        description: "Sie können maximal 5 Bilder hochladen.",
        variant: "destructive"
      });
      return;
    }
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns schnellstmöglich bei Ihnen.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setUploadedFiles([]);
    setIsSubmitting(false);
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Kontakt</span>
          <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground mt-3 mb-4">
            Schaden <span className="text-primary">melden</span>
          </h2>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Senden Sie uns Fotos Ihres Schadens für eine kostenlose Einschätzung. Wir melden uns umgehend!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dellen-dark rounded-2xl p-8 animate-fade-up">
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
                <Label htmlFor="message" className="text-secondary-foreground">Schadensbeschreibung *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Beschreiben Sie kurz den Schaden an Ihrem Fahrzeug..."
                  rows={4}
                  className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 resize-none"
                />
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label className="text-secondary-foreground">Fotos hochladen (optional)</Label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-secondary-foreground/20 rounded-xl p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <Upload className="w-8 h-8 mx-auto mb-2 text-secondary-foreground/40" />
                  <p className="text-secondary-foreground/60 text-sm">
                    Klicken Sie hier oder ziehen Sie Bilder hierher
                  </p>
                  <p className="text-secondary-foreground/40 text-xs mt-1">
                    Max. 5 Bilder, je max. 10MB
                  </p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />

                {/* Uploaded Files Preview */}
                {uploadedFiles.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Upload ${index + 1}`}
                          className="w-16 h-16 object-cover rounded-lg border border-secondary-foreground/20"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3 text-primary-foreground" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
                    Anfrage senden
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
    </section>
  );
};

export default ContactSection;

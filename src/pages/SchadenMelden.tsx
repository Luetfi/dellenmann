import { useState, useRef } from "react";
import { Phone, Mail, Upload, X, Send, Car, Camera, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SchadenMelden = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleBrand: "",
    vehicleModel: "",
    damageDescription: ""
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
      const isUnderLimit = file.size <= 10 * 1024 * 1024;
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
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Schaden erfolgreich gemeldet!",
      description: "Ich prüfe Ihre Anfrage und melde mich innerhalb von 24 Stunden bei Ihnen.",
    });
    
    setFormData({ name: "", email: "", phone: "", vehicleBrand: "", vehicleModel: "", damageDescription: "" });
    setUploadedFiles([]);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      
      <main className="pt-40 pb-16">
        <div className="container-narrow">
          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Schadensmeldung</span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-foreground mt-3 mb-4">
              Schaden <span className="text-primary">melden</span>
            </h1>
            <p className="text-secondary-foreground/70 max-w-2xl mx-auto text-lg">
              Senden Sie mir Fotos Ihres Schadens für eine kostenlose Einschätzung und ein unverbindliches Festpreisangebot.
            </p>
          </div>

          {/* Info Banner */}
          <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-12 flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-accent" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-secondary-foreground mb-1">Kostenlose Schadenseinschätzung</h3>
              <p className="text-secondary-foreground/70 text-sm">
                Laden Sie einfach Fotos hoch und erhalten Sie innerhalb von 24 Stunden ein unverbindliches Angebot.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Larger */}
            <div className="lg:col-span-3 bg-dellen-dark rounded-2xl p-8 animate-fade-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div>
                  <h3 className="font-display text-xl text-secondary-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</span>
                    Ihre Kontaktdaten
                  </h3>
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
                      <Label htmlFor="phone" className="text-secondary-foreground">Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Ihre Telefonnummer"
                        className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
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
                </div>

                {/* Vehicle Info */}
                <div>
                  <h3 className="font-display text-xl text-secondary-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
                    Fahrzeugdaten
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicleBrand" className="text-secondary-foreground">Marke</Label>
                      <Input
                        id="vehicleBrand"
                        name="vehicleBrand"
                        value={formData.vehicleBrand}
                        onChange={handleInputChange}
                        placeholder="z.B. BMW, Mercedes, VW"
                        className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vehicleModel" className="text-secondary-foreground">Modell</Label>
                      <Input
                        id="vehicleModel"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleInputChange}
                        placeholder="z.B. 3er, C-Klasse, Golf"
                        className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40"
                      />
                    </div>
                  </div>
                </div>

                {/* Damage Description */}
                <div>
                  <h3 className="font-display text-xl text-secondary-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
                    Schadensbeschreibung
                  </h3>
                  <div className="space-y-2">
                    <Label htmlFor="damageDescription" className="text-secondary-foreground">Beschreiben Sie den Schaden *</Label>
                    <Textarea
                      id="damageDescription"
                      name="damageDescription"
                      value={formData.damageDescription}
                      onChange={handleInputChange}
                      required
                      placeholder="Wo befindet sich der Schaden? Wie groß ist er ungefähr? Wie ist er entstanden?"
                      rows={4}
                      className="bg-secondary border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/40 resize-none"
                    />
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <h3 className="font-display text-xl text-secondary-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">4</span>
                    Fotos hochladen
                  </h3>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-secondary-foreground/20 rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
                  >
                    <Camera className="w-10 h-10 mx-auto mb-3 text-secondary-foreground/40" />
                    <p className="text-secondary-foreground/70 mb-1">
                      Klicken Sie hier oder ziehen Sie Bilder hierher
                    </p>
                    <p className="text-secondary-foreground/40 text-sm">
                      Max. 5 Bilder, je max. 10MB (JPG, PNG)
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
                    <div className="flex flex-wrap gap-3 mt-4">
                      {uploadedFiles.map((file, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Upload ${index + 1}`}
                            className="w-20 h-20 object-cover rounded-lg border border-secondary-foreground/20"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4 text-primary-foreground" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 btn-glow-red text-lg"
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Schaden melden
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {/* Quick Contact */}
              <div className="bg-dellen-dark rounded-xl p-6">
                <h3 className="font-display text-xl text-secondary-foreground mb-4">Schneller Kontakt</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+491623236262"
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-secondary-foreground/60 text-xs">Rufen Sie mich an</p>
                      <p className="text-secondary-foreground font-medium">0162 3236262</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:info@dellen-mann.de"
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-secondary-foreground/60 text-xs">Schreiben Sie mir</p>
                      <p className="text-secondary-foreground font-medium">info@dellen-mann.de</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-dellen-dark rounded-xl p-6">
                <h3 className="font-display text-xl text-secondary-foreground mb-4">Foto-Tipps</h3>
                <ul className="space-y-3 text-sm text-secondary-foreground/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Fotografieren Sie bei Tageslicht</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Machen Sie Nahaufnahmen der Delle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Fotografieren Sie auch die Umgebung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Bei mehreren Dellen: alle einzeln fotografieren</span>
                  </li>
                </ul>
              </div>

              {/* Process */}
              <div className="bg-dellen-dark rounded-xl p-6">
                <h3 className="font-display text-xl text-secondary-foreground mb-4">So geht's weiter</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-xs">1</span>
                    </div>
                    <p className="text-secondary-foreground/70">Sie senden mir Ihre Anfrage mit Fotos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-xs">2</span>
                    </div>
                    <p className="text-secondary-foreground/70">Ich prüfe die Bilder und melde mich innerhalb von 24h</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-xs">3</span>
                    </div>
                    <p className="text-secondary-foreground/70">Sie erhalten ein unverbindliches Festpreisangebot</p>
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

export default SchadenMelden;

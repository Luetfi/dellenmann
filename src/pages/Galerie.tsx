import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Category = "alle" | "dellen" | "hagelschaden" | "smart-repair";

interface GalleryItem {
  id: number;
  category: Category;
  title: string;
  beforeImage: string;
  afterImage: string;
}

// Placeholder gallery items
const galleryItems: GalleryItem[] = [
  { id: 1, category: "dellen", title: "Türdelle entfernt", beforeImage: "", afterImage: "" },
  { id: 2, category: "dellen", title: "Kotflügel-Delle", beforeImage: "", afterImage: "" },
  { id: 3, category: "hagelschaden", title: "Dach nach Hagel", beforeImage: "", afterImage: "" },
  { id: 4, category: "hagelschaden", title: "Motorhaube Hagel", beforeImage: "", afterImage: "" },
  { id: 5, category: "smart-repair", title: "Kratzer beseitigt", beforeImage: "", afterImage: "" },
  { id: 6, category: "dellen", title: "Parkrempler", beforeImage: "", afterImage: "" },
  { id: 7, category: "smart-repair", title: "Steinschlag repariert", beforeImage: "", afterImage: "" },
  { id: 8, category: "hagelschaden", title: "Komplette Hagelreparatur", beforeImage: "", afterImage: "" },
];

const categories: { value: Category; label: string }[] = [
  { value: "alle", label: "Alle" },
  { value: "dellen", label: "Dellen" },
  { value: "hagelschaden", label: "Hagelschäden" },
  { value: "smart-repair", label: "Smart Repair" },
];

const GaleriePage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("alle");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const filteredItems = activeCategory === "alle" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setShowBefore(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    setShowBefore(true);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    setShowBefore(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container-narrow">
          {/* Back Link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-4">
              Vorher-Nachher <span className="text-primary">Galerie</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Überzeugen Sie sich selbst von meiner Arbeit. Sehen Sie echte Ergebnisse meiner Dellenreparaturen – persönlich durchgeführt vom Dellenmann.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={activeCategory === cat.value ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.value)}
                className={activeCategory === cat.value 
                  ? "bg-primary text-primary-foreground" 
                  : "border-border text-foreground hover:bg-muted"
                }
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-[4/3] bg-muted rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 relative">
                  {/* Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground/50">
                    <div className="text-center p-4">
                      <div className="text-3xl mb-2">📸</div>
                      <p className="text-xs">Bild einfügen</p>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-secondary-foreground font-semibold">Ansehen</span>
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <span className="text-xs text-accent capitalize">{item.category.replace("-", " ")}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              Keine Bilder in dieser Kategorie gefunden.
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center animate-fade-in">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-secondary-foreground/70 hover:text-secondary-foreground p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button 
            onClick={prevImage}
            className="absolute left-4 text-secondary-foreground/70 hover:text-secondary-foreground p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-4 text-secondary-foreground/70 hover:text-secondary-foreground p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div className="max-w-4xl w-full px-8">
            <div className="aspect-[16/10] bg-dellen-dark rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center text-secondary-foreground/50">
                <div className="text-6xl mb-4">📸</div>
                <p>{showBefore ? "Vorher-Bild" : "Nachher-Bild"}</p>
              </div>
            </div>

            {/* Toggle Before/After */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant={showBefore ? "default" : "outline"}
                onClick={() => setShowBefore(true)}
                className={showBefore ? "bg-primary" : "border-secondary-foreground/30 text-secondary-foreground"}
              >
                Vorher
              </Button>
              <Button
                variant={!showBefore ? "default" : "outline"}
                onClick={() => setShowBefore(false)}
                className={!showBefore ? "bg-accent" : "border-secondary-foreground/30 text-secondary-foreground"}
              >
                Nachher
              </Button>
            </div>

            {/* Title */}
            <h3 className="text-center mt-4 text-secondary-foreground font-display font-semibold text-xl">
              {filteredItems[currentIndex]?.title}
            </h3>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GaleriePage;

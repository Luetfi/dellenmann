import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

interface GalleryItem {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
}

// Placeholder gallery items - nur 6 Bilder
const galleryItems: GalleryItem[] = [
  { id: 1, title: "Reparatur 1", beforeImage: "/src/assets/Vorher1.jpg", afterImage: "/src/assets/Nachher1.jpg" },
  { id: 2, title: "Reparatur 2", beforeImage: "/src/assets/Vorher2.jpg", afterImage: "/src/assets/Nachher2.jpg" },
  { id: 3, title: "Reparatur 3", beforeImage: "/src/assets/Vorher3.jpg", afterImage: "/src/assets/Nachher3.jpg" },
  { id: 4, title: "Reparatur 4", beforeImage: "/src/assets/Vorher4.jpg", afterImage: "/src/assets/Nachher4.jpg" },
  { id: 5, title: "Reparatur 5", beforeImage: "/src/assets/Vorher5.jpg", afterImage: "/src/assets/Nachher5.jpg" },
  { id: 6, title: "Reparatur 6", beforeImage: "/src/assets/Vorher6.jpg", afterImage: "/src/assets/Nachher6.jpg" },
];

const GaleriePage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const filteredItems = galleryItems;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setSliderPosition(50);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
    setSliderPosition(50);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    let x: number;
    
    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
    } else {
      x = (e as React.MouseEvent).clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-40 pb-16">
        <div className="container-narrow">
          {/* Page Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Vorher-Nachher</span>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mt-3 mb-4">
              <span className="text-primary">Ergebnisse</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Überzeugen Sie sich selbst von meiner Arbeit. Sehen Sie echte Ergebnisse meiner Dellenreparaturen.
            </p>
          </div>

          {/* Gallery Grid - 3 Spalten für 6 Bilder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Before/After Container */}
                <div className="relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-300 bg-muted aspect-[4/3]">
                  {/* Vorher Bild - Standardmäßig sichtbar */}
                  <div className="absolute inset-0 w-full h-full">
                    {item.beforeImage && (
                      <img 
                        src={item.beforeImage} 
                        alt="Vorher" 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Nachher Bild - Bei Hover sichtbar */}
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.afterImage && (
                      <img 
                        src={item.afterImage} 
                        alt="Nachher" 
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Comparison Badge */}
                  <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Vorher/Nachher
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              Keine Bilder gefunden.
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Main Content */}
          <div className="max-w-5xl w-full">
            {/* Interactive Before-After Slider */}
            <div 
              className="relative w-full bg-muted rounded-2xl overflow-hidden aspect-[16/10] mb-8 cursor-col-resize group select-none"
              onClick={handleSliderChange}
              onMouseMove={(e) => {
                if (e.buttons === 1) handleSliderChange(e);
              }}
              onTouchMove={handleSliderChange}
              onTouchStart={handleSliderChange}
            >
              {/* Nachher Bild (Background - Immer vollständig sichtbar) */}
              <div className="absolute inset-0 w-full h-full">
                {filteredItems[currentIndex]?.afterImage && (
                  <img 
                    src={filteredItems[currentIndex].afterImage} 
                    alt="Nachher" 
                    className="w-full h-full object-cover pointer-events-none"
                  />
                )}
              </div>

              {/* Vorher Bild (Slidable - Wird verdeckt) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                {filteredItems[currentIndex]?.beforeImage && (
                  <img 
                    src={filteredItems[currentIndex].beforeImage} 
                    alt="Vorher" 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Slider Handle / Divider */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white/80 transition-all hover:w-1.5 hover:bg-primary shadow-lg pointer-events-auto"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Handle Circle mit Icons */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-foreground rounded-full p-2 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="flex gap-1.5">
                    <ChevronLeft className="w-5 h-5" />
                    <div className="w-0.5 h-5 bg-foreground/20"></div>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-white/90 text-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                ← Vorher
              </div>
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                Nachher →
              </div>

              {/* Mobile Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-foreground/80 text-white px-4 py-2 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Schieben zum Vergleichen
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              {/* Left Navigation */}
              <button 
                onClick={prevImage}
                className="text-white/70 hover:text-white p-3 transition-colors hover:bg-white/10 rounded-lg"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Title and Counter */}
              <div className="text-center flex-1">
                <h3 className="text-white font-display font-semibold text-2xl mb-2">
                  Reparatur {currentIndex + 1}
                </h3>
                <p className="text-white/60 text-sm">
                  {currentIndex + 1} / {filteredItems.length}
                </p>
              </div>

              {/* Right Navigation */}
              <button 
                onClick={nextImage}
                className="text-white/70 hover:text-white p-3 transition-colors hover:bg-white/10 rounded-lg"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GaleriePage;

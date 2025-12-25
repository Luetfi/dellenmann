import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Denisa Pllana",
    rating: 5,
    text: "Ich bin extra aus der Schweiz angereist, weil mir viele andere Werkstätten gesagt hatten, dass die Delle an meinem Auto nicht mehr repariert werden könne. Die Reparatur wurde schnell erledigt, die Qualität ist erstklassig und der Preis war wirklich fair. Von der Delle sieht man jetzt wirklich nichts mehr. Die Kommunikation war durchweg freundlich, transparent und professionell.",
    date: "Google Bewertung"
  },
  {
    name: "E. D.",
    rating: 5,
    text: "Absolute Empfehlung! Mein Auto hatte mehrere unschöne Parkdellen, und ich war wirklich skeptisch, ob man das wieder perfekt hinbekommt. Der Dellendoktor hat großartige Arbeit geleistet, keine Spur mehr von den Dellen, als wäre nie etwas gewesen. Sehr freundlicher Kontakt, schnelle Terminvergabe und fairer Preis.",
    date: "Google Bewertung"
  },
  {
    name: "M U",
    rating: 5,
    text: "Ich bin absolut begeistert! Der Dellenmann in Stuttgart hat an meinem Auto mehrere unschöne Dellen perfekt entfernt – und das Ergebnis ist einfach unglaublich. Man sieht absolut nichts mehr, als wäre nie etwas gewesen. Saubere, schnelle und professionelle Arbeit zu einem fairen Preis. Der Mann versteht sein Handwerk zu 100%!",
    date: "Google Bewertung"
  },
  {
    name: "Daniel Timpe",
    rating: 5,
    text: "Sehr korrekter Mensch, super Arbeit, eine Delle auf der Haube komplett weg, und andere auch sehr gutes Ergebnis ohne zu lackieren. Bin super zufrieden! Und alles zu einem sehr fairem Preis. Komme gerne wieder wenn ich was hab.",
    date: "Google Bewertung"
  }
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Kundenstimmen</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Das sagen meine <span className="text-primary">Kunden</span>
          </h2>
        </div>

        {/* Rating Highlight */}
        <div className="bg-secondary rounded-2xl p-8 text-center mb-12 animate-fade-up">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="font-display text-4xl font-bold text-secondary-foreground mb-2">5,0</div>
          <p className="text-secondary-foreground/70">
            bei über <span className="text-primary font-semibold">20+ Google Bewertungen</span>
          </p>
          <a 
            href="https://maps.app.goo.gl/XtitGtDHiQBjbYMCA"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mt-4 text-sm font-medium transition-colors"
          >
            Alle Bewertungen ansehen
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={review.name}
              className="bg-card rounded-xl p-6 border border-border animate-fade-up hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>

              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">{review.name}</span>
                <span className="text-muted-foreground text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

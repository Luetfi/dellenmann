import { Star, Quote, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Thomas M.",
    rating: 5,
    text: "Hagelschaden am Dach perfekt beseitigt! Absolut professionelle Arbeit, man sieht nichts mehr. Sehr zu empfehlen!",
    date: "vor 2 Wochen"
  },
  {
    name: "Sandra K.",
    rating: 5,
    text: "Schnell, zuverlässig und super Ergebnis. Die Delle in meiner Fahrertür ist wie weggeblasen. Fairer Preis!",
    date: "vor 1 Monat"
  },
  {
    name: "Michael B.",
    rating: 5,
    text: "Als Autohaus arbeiten wir regelmäßig mit DellenMann zusammen. Immer top Qualität und termingerecht!",
    date: "vor 1 Monat"
  },
  {
    name: "Julia R.",
    rating: 5,
    text: "Vom Erstkontakt bis zur Abholung alles einwandfrei. Transparente Preise und hervorragendes Ergebnis.",
    date: "vor 2 Monaten"
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
            Das sagen unsere <span className="text-primary">Kunden</span>
          </h2>
        </div>

        {/* Rating Highlight */}
        <div className="bg-secondary rounded-2xl p-8 text-center mb-12 animate-fade-up">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <div className="font-display text-4xl font-bold text-secondary-foreground mb-2">4,9</div>
          <p className="text-secondary-foreground/70">
            bei über <span className="text-primary font-semibold">100+ Google Bewertungen</span>
          </p>
          <a 
            href="#" 
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
              className="bg-card rounded-xl p-6 border border-border animate-fade-up"
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

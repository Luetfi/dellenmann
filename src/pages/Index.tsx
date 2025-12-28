import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import ConsentGoogleMap from "@/components/ConsentGoogleMap";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  // FAQ Schema für strukturierte Daten
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Wie lange dauert eine Dellenreparatur?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Dauer hängt von der Anzahl und Größe der Dellen ab. Eine einzelne Parkdelle kann oft in 30-60 Minuten repariert werden. Bei Hagelschäden mit vielen Dellen sollten Sie mit einem halben bis ganzen Tag rechnen.",
        },
      },
      {
        "@type": "Question",
        name: "Bleibt der Originallack wirklich erhalten?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, bei der PDR-Technik (Paintless Dent Repair) wird die Delle von innen herausgedrückt oder mit speziellen Werkzeugen bearbeitet, ohne den Lack zu beschädigen. Der Originallack bleibt zu 100% erhalten.",
        },
      },
      {
        "@type": "Question",
        name: "Wie viel kostet eine Dellenreparatur ungefähr?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Die Kosten variieren je nach Größe, Lage und Anzahl der Dellen. Kleine Parkdellen starten ab ca. 50-80€. Sie erhalten immer einen Festpreis vor der Reparatur.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich Hagelschäden über die Versicherung abrechnen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, Hagelschäden werden in der Regel von der Teilkasko-Versicherung übernommen. Wir unterstützen Sie bei der Abwicklung und erstellen eine detaillierte Dokumentation für Ihre Versicherung.",
        },
      },
      {
        "@type": "Question",
        name: "Bieten Sie auch einen mobilen Service an?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, für Autohäuser, Flottenkunden und auf Anfrage auch für Privatkunden bieten wir einen mobilen Service im Umkreis von Ludwigsburg an.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Dellenreparatur Ludwigsburg | Dellen entfernen ohne Lackieren | PDR Dellenmann"
        description="Professionelle Dellenentfernung & Beulenreparatur in Ludwigsburg. PDR (Paintless Dent Repair), Smart Repair, Hagelschaden Reparatur. Dellen reparieren lassen vom Dellentechniker – mobiler Service! Bis zu 70% günstiger."
        keywords="Dellenentfernung, Dellen entfernen ohne Lackieren, Lackfreie Dellenentfernung, Smart Repair, Hagelschaden Reparatur, Parkdellen entfernen, Karosserieschaden Reparatur, Auto Dellen Reparatur, Dellentechnik, Dellentechniker, Beulendoktor, Beulenmann, Dellenmann, Dellen reparatur, Dellen reparieren lassen, PDR, Beulenreparatur, Ludwigsburg"
        canonicalUrl="/"
        structuredData={faqSchema}
      />
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <ProcessSection />
        <ServicesSection />
        <ReviewsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <section className="bg-secondary/50">
        <div className="w-full h-[420px]">
          <ConsentGoogleMap
            src="https://maps.google.com/maps?q=Gans%C3%A4cker+8,+74321+Bietigheim-Bissingen&t=&z=15&ie=UTF8&iwloc=&output=embed"
            title="DellenMann Standort - Dellenreparatur Ludwigsburg"
            className="w-full h-full"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;

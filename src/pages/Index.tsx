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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
            title="DellenMann Standort"
            className="w-full h-full"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;

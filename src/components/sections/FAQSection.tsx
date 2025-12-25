import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie lange dauert eine Dellenreparatur?",
    answer: "Die Dauer hängt von der Anzahl und Größe der Dellen ab. Eine einzelne Parkdelle kann oft in 30-60 Minuten repariert werden. Bei Hagelschäden mit vielen Dellen sollten Sie mit einem halben bis ganzen Tag rechnen. Ich gebe Ihnen vorab eine genaue Zeiteinschätzung."
  },
  {
    question: "Bleibt der Originallack wirklich erhalten?",
    answer: "Ja, bei der PDR-Technik (Paintless Dent Repair) wird die Delle von innen herausgedrückt oder mit speziellen Werkzeugen bearbeitet, ohne den Lack zu beschädigen. Der Originallack bleibt zu 100% erhalten."
  },
  {
    question: "Wie viel kostet eine Dellenreparatur ungefähr?",
    answer: "Die Kosten variieren je nach Größe, Lage und Anzahl der Dellen. Kleine Parkdellen starten ab ca. 50-80€. Für ein verbindliches Angebot biete ich eine kostenlose Begutachtung an. Sie erhalten immer einen Festpreis vor der Reparatur."
  },
  {
    question: "Muss ich einen Termin vereinbaren?",
    answer: "Ja, ich empfehle eine Terminvereinbarung, um Wartezeiten zu vermeiden und ausreichend Zeit für Ihr Fahrzeug einzuplanen. Sie können mich telefonisch erreichen oder das Kontaktformular nutzen."
  },
  {
    question: "Kann ich Hagelschäden über die Versicherung abrechnen?",
    answer: "Ja, Hagelschäden werden in der Regel von der Teilkasko-Versicherung übernommen. Ich unterstütze Sie bei der Abwicklung und erstelle eine detaillierte Dokumentation für Ihre Versicherung."
  },
  {
    question: "Welche Schäden können nicht lackierfrei entfernt werden?",
    answer: "Dellen mit Lackrissen, sehr scharfkantigen Beschädigungen oder stark gedehntem Blech können unter Umständen nicht zu 100% lackierfrei repariert werden. In solchen Fällen berate ich Sie ehrlich über die bestmögliche Lösung."
  },
  {
    question: "Bieten Sie auch einen mobilen Service an?",
    answer: "Ja, für Autohäuser, Flottenkunden und auf Anfrage auch für Privatkunden biete ich einen mobilen Service an. Ich komme direkt zu Ihnen und führe die Reparatur vor Ort durch."
  },
  {
    question: "Gibt es eine Garantie auf die Reparatur?",
    answer: "Ja, ich gebe auf alle meine Reparaturen eine Garantie. Sollte wider Erwarten etwas nicht zu Ihrer Zufriedenheit sein, bessere ich kostenfrei nach."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-muted">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Häufig gestellte <span className="text-primary">Fragen</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Finden Sie Antworten auf die wichtigsten Fragen rund um meine Dienstleistungen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "491623236262"; // Format: country code + number without + or spaces
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp Chat öffnen"
    >
      <div className="relative">
        <div className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20BA5A] border border-secondary-foreground/10 flex items-center justify-center shadow-lg transition-all hover:scale-110">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-dellen-dark border border-secondary-foreground/10 px-3 py-1.5 rounded-lg text-sm text-secondary-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          WhatsApp
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;

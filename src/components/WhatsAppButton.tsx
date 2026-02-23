import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "50254608276";
  const message = encodeURIComponent("Hola Yetzi, me gustaría información sobre tus servicios de wedding planning.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] px-5 py-3 shadow-lg hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-body font-medium hidden sm:inline">Contáctanos por WhatsApp</span>
      <span className="text-sm font-body font-medium sm:hidden">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

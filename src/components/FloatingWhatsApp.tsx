import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após 300px de scroll
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "5551997418179";
    const message = encodeURIComponent("Olá! Gostaria de conhecer mais sobre as velas Seraphim");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        {/* Tooltip/Mensagem */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 bg-white text-foreground px-4 py-3 rounded-xl shadow-hover max-w-[200px] mb-2 animate-in fade-in slide-in-from-bottom-2">
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute -top-2 -right-2 bg-muted rounded-full p-1 hover:bg-muted/80 transition-smooth"
              aria-label="Fechar mensagem"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-sm font-medium mb-1">Tire suas dúvidas!</p>
            <p className="text-xs text-muted-foreground">
              Fale conosco pelo WhatsApp 💬
            </p>
          </div>
        )}

        {/* Botão Principal */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsExpanded(true)}
          className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-hover hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Abrir WhatsApp"
        >
          {/* Pulse Animation Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
          
          {/* Icon */}
          <MessageCircle className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          
          {/* Badge de notificação (opcional) */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      </div>

      {/* Botão "Voltar ao Topo" - aparece mais embaixo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 z-40 bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-3 shadow-soft hover:shadow-hover transition-all duration-500 hover:scale-110 active:scale-95 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
};

import { Instagram, Mail, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">Entre em Contato</h3>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
          {/* Instagram */}
          <a
            href="https://instagram.com/seraphim.home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-smooth"
          >
            <Instagram className="w-6 h-6" />
            <span>@seraphim.home</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5551997418179"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-smooth"
          >
            <MessageCircle className="w-6 h-6" />
            <span>(51) 99741-8179</span>
          </a>

          {/* Email */}
          <a
            href="mailto:homeseraphim@gmail.com"
            className="flex items-center gap-2 hover:opacity-80 transition-smooth"
          >
            <Mail className="w-6 h-6" />
            <span>homeseraphim@gmail.com</span>
          </a>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm opacity-80">
            © 2025 Seraphim. Feito com carinho e dedicação ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <>
      <footer id="contato" className="bg-primary text-primary-foreground py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Juliana Corrêa Terapeuta</h3>
            <p className="text-primary-foreground/70 font-sans text-sm leading-relaxed">
              Cuidando de você com amor, ciência e intuição. Agende sua consulta e inicie sua transformação.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 font-sans text-sm text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                (45) 9989-1066
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                contato@terapeuta.com.br
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                R. Rodrigues Alves, 1391 - Parque São Paulo, Cascavel - PR, 85803-690, Brasil
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50 font-sans">
          © 2026 Juliana Corrêa Terapeuta. Todos os direitos reservados.
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
};

export default FooterSection;

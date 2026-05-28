import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
                julianacorrea.jmc@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                R. Rodrigues Alves, 1450 - Maria Luíza, Cascavel - PR, 85803-690, Brasil
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/terapias.jumcorrea?igsh=MWc5aXJ6aWgzOG5ieQ%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors" aria-label="Instagram">
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

        {/* Google Maps */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-card">
          <iframe
            src="https://www.google.com/maps?q=R.+Rodrigues+Alves,+1450+-+Maria+Lu%C3%ADza,+Cascavel+-+PR,+85803-690&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização - Juliana Corrêa Terapeuta"
          ></iframe>
        </div>

        {/* Compliance Google Ads */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="max-w-6xl mx-auto">
            {/* Business Info */}
            <div className="mb-6 text-center">
              <p className="font-serif text-sm font-semibold text-primary-foreground/80 mb-1">
                Espaço AlinhaMente Terapias Integradas
              </p>
              <p className="text-xs text-primary-foreground/50 font-sans">
                Responsável: Juliana Corrêa · CNPJ/CPF conforme legislação vigente
              </p>
              <p className="text-xs text-primary-foreground/50 font-sans">
                R. Rodrigues Alves, 1450 - Maria Luíza, Cascavel - PR, 85803-690, Brasil
              </p>
              <p className="text-xs text-primary-foreground/50 font-sans">
                Telefone: (45) 9989-1066 · E-mail: julianacorrea.jmc@gmail.com
              </p>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs font-sans">
              <a href="#politica-de-privacidade" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-2">
                Política de Privacidade
              </a>
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs font-sans">
              <Link to="/politica-de-privacidade" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-2">
                Política de Privacidade
              </Link>
              <span className="text-primary-foreground/30">|</span>
              <Link to="/termos-de-uso" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-2">
                Termos de Uso
              </Link>
              <span className="text-primary-foreground/30">|</span>
              <Link to="/politica-de-cookies" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-2">
                Política de Cookies
              </Link>
            </div>
              Os serviços oferecidos são de natureza terapêutica complementar e não substituem acompanhamento médico ou psicológico. Os resultados podem variar de pessoa para pessoa. Ao utilizar este site, você concorda com nossa Política de Privacidade e Termos de Uso.
            </p>

            {/* Copyright */}
            <div className="text-center text-xs text-primary-foreground/50 font-sans">
              © {new Date().getFullYear()} Espaço AlinhaMente Terapias Integradas. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/554599891066"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contato via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </>
  );
};

export default FooterSection;

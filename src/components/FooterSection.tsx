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
                julianacorrea.jmc@gmail.com
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

        {/* Google Maps */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0!2d-53.455!3d-24.955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sR.+Rodrigues+Alves%2C+1391+-+Parque+S%C3%A3o+Paulo%2C+Cascavel+-+PR%2C+85803-690!5e0!3m2!1spt-BR!2sbr"
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
                R. Rodrigues Alves, 1391 - Parque São Paulo, Cascavel - PR, 85803-690, Brasil
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
              <span className="text-primary-foreground/30">|</span>
              <a href="#termos-de-uso" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-2">
                Termos de Uso
              </a>
              <span className="text-primary-foreground/30">|</span>
              <a href="#politica-de-cookies" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors underline underline-offset-2">
                Política de Cookies
              </a>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-[11px] text-primary-foreground/40 font-sans max-w-3xl mx-auto leading-relaxed mb-6">
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
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
};

export default FooterSection;

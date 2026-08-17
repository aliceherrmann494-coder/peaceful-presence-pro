import { useState } from "react";
import { Menu, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const navLinks = ["Início", "Sobre", "Terapias", "Espaço", "Contato"];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionMap: Record<string, string> = {
    Início: "hero",
    Sobre: "sobre",
    Terapias: "terapias",
    Espaço: "espaco",
    Contato: "contato",
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <nav className="relative z-20 flex items-center justify-between gap-3 px-5 sm:px-6 lg:px-16 py-5 md:py-6">
        <span className="font-serif text-lg sm:text-xl font-semibold text-foreground tracking-wide min-w-0 truncate">
          Juliana Moço Corrêa
        </span>
        <ul className="hidden lg:flex gap-8 shrink-0">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(sectionMap[link])}
                className="text-sm font-sans font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="lg:hidden shrink-0 w-11 h-11 rounded-full border border-foreground/15 flex items-center justify-center text-foreground"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="lg:hidden relative z-20 px-5 sm:px-6 pb-4">
          <ul className="flex flex-col gap-1 rounded-2xl bg-background/95 backdrop-blur-md border border-foreground/10 p-3 shadow-soft">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(sectionMap[link])}
                  className="w-full text-left px-4 py-3 rounded-xl text-sm font-sans font-medium text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-6 py-12">
        <h1 className="font-serif text-[2rem] leading-tight sm:text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground max-w-3xl">
          Cuide da sua essência, <br className="hidden sm:block" />
          <em className="font-normal">transforme sua vida</em>
        </h1>
        <p className="mt-5 md:mt-6 text-base md:text-lg text-muted-foreground max-w-xl font-sans">
          Um espaço acolhedor dedicado ao seu bem-estar integral, com terapias que conectam corpo, mente e espírito.
        </p>
        <button
          onClick={() => scrollTo("contato")}
          className="mt-8 md:mt-10 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:opacity-90 transition-opacity shadow-soft"
        >
          Agendar Consulta
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

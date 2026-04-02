import heroBg from "@/assets/hero-bg.jpg";

const navLinks = ["Início", "Sobre", "Terapias", "Espaço", "Contato"];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionMap: Record<string, string> = {
    "Início": "hero",
    "Sobre": "sobre",
    "Terapias": "terapias",
    "Espaço": "espaco",
    "Contato": "contato",
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        <span className="font-serif text-xl font-semibold text-foreground tracking-wide">
          Terapeuta
        </span>
        <ul className="hidden md:flex gap-8">
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
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight max-w-3xl">
          Cuide da sua essência, <br className="hidden md:block" />
          <em className="font-normal">transforme sua vida</em>
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl font-sans">
          Um espaço acolhedor dedicado ao seu bem-estar integral, com terapias que conectam corpo, mente e espírito.
        </p>
        <button
          onClick={() => scrollTo("contato")}
          className="mt-10 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:opacity-90 transition-opacity shadow-soft"
        >
          Agendar Consulta
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

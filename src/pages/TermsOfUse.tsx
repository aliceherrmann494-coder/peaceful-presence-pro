import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <main className="bg-background text-foreground min-h-screen py-16 px-6 md:px-16">
      <article className="max-w-3xl mx-auto font-sans">
        <Link to="/" className="text-sm text-primary underline underline-offset-2">← Voltar ao início</Link>
        <h1 className="font-serif text-4xl font-semibold mt-6 mb-2">Termos de Uso</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="space-y-6 leading-relaxed text-foreground/90">
          <p>
            Bem-vindo(a) ao site do Espaço AlinhaMente Terapias Integradas. Ao acessar e utilizar este site,
            você concorda com os Termos de Uso a seguir. Caso não concorde, por favor, não utilize o site.
          </p>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">1. Identificação</h2>
            <p>
              Este site é mantido por Juliana Corrêa – Espaço AlinhaMente Terapias Integradas, localizado em
              R. Rodrigues Alves, 1450 - Maria Luíza, Cascavel - PR, 85803-690, Brasil.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">2. Objeto</h2>
            <p>
              Este site tem caráter informativo e tem como finalidade apresentar serviços de terapias
              integrativas complementares, tais como Reiki, Barras de Access, Autoconstelação Sistêmica e
              Acupuntura Auricular, além de produtos correlatos.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">3. Natureza dos serviços</h2>
            <p>
              Os serviços oferecidos são de natureza terapêutica complementar e <strong>não substituem
              acompanhamento médico, psicológico ou psiquiátrico</strong>. Os resultados podem variar de
              pessoa para pessoa e não há garantia de cura ou de resultado específico.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">4. Uso do site</h2>
            <p>O usuário se compromete a:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Fornecer informações verdadeiras nos formulários e canais de contato;</li>
              <li>Não utilizar o site para fins ilícitos ou que possam prejudicar terceiros;</li>
              <li>Não tentar acessar áreas restritas ou comprometer a segurança do site.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">5. Propriedade intelectual</h2>
            <p>
              Todo o conteúdo do site — incluindo textos, imagens, logotipos, marcas e layout — é de
              propriedade do Espaço AlinhaMente Terapias Integradas ou de seus licenciadores, sendo proibida
              a reprodução, total ou parcial, sem autorização prévia por escrito.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">6. Links externos</h2>
            <p>
              O site pode conter links para sites de terceiros (como WhatsApp e Instagram). Não nos
              responsabilizamos pelo conteúdo, políticas ou práticas desses sites.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">7. Limitação de responsabilidade</h2>
            <p>
              O site é fornecido "como está". Não garantimos que estará livre de erros ou interrupções, e
              não nos responsabilizamos por danos decorrentes do uso ou da impossibilidade de uso do site.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">8. Privacidade</h2>
            <p>
              O tratamento de dados pessoais é regido pela nossa
              {" "}<Link to="/politica-de-privacidade" className="text-primary underline underline-offset-2">Política de Privacidade</Link>
              {" "}e pela nossa
              {" "}<Link to="/politica-de-cookies" className="text-primary underline underline-offset-2">Política de Cookies</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">9. Alterações</h2>
            <p>
              Estes Termos podem ser alterados a qualquer momento. As alterações entram em vigor a partir
              da sua publicação nesta página.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">10. Legislação aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da
              Comarca de Cascavel/PR para dirimir quaisquer questões.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">11. Contato</h2>
            <p>
              Espaço AlinhaMente Terapias Integradas<br />
              R. Rodrigues Alves, 1450 - Maria Luíza, Cascavel - PR, 85803-690, Brasil<br />
              Telefone: (45) 9989-1066<br />
              E-mail: julianacorrea.jmc@gmail.com
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default TermsOfUse;

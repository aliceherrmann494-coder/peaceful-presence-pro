import { Link } from "react-router-dom";

const CookiePolicy = () => {
  return (
    <main className="bg-background text-foreground min-h-screen py-16 px-6 md:px-16">
      <article className="max-w-3xl mx-auto font-sans">
        <Link to="/" className="text-sm text-primary underline underline-offset-2">← Voltar ao início</Link>
        <h1 className="font-serif text-4xl font-semibold mt-6 mb-2">Política de Cookies</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="space-y-6 leading-relaxed text-foreground/90">
          <p>
            Esta Política de Cookies explica como o Espaço AlinhaMente Terapias Integradas utiliza cookies e
            tecnologias semelhantes quando você visita nosso site, em conformidade com a LGPD e com as
            políticas do Google Ads.
          </p>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">1. O que são cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um
              site. Eles permitem que o site reconheça seu navegador e armazene informações sobre suas
              preferências e atividades.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">2. Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site.</li>
              <li><strong>Cookies de desempenho e analíticos:</strong> Google Analytics, para entender como os visitantes interagem com o site.</li>
              <li><strong>Cookies de publicidade:</strong> Google Ads, Meta Pixel e similares, utilizados para mensurar e personalizar anúncios.</li>
              <li><strong>Cookies de funcionalidade:</strong> armazenam suas preferências (como idioma) para melhorar a experiência.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">3. Cookies de terceiros</h2>
            <p>
              Alguns cookies são definidos por serviços de terceiros que aparecem em nossas páginas, como
              Google, Meta (Facebook/Instagram) e WhatsApp. Não temos controle sobre esses cookies; consulte
              as políticas de privacidade desses provedores para mais informações.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">4. Como gerenciar cookies</h2>
            <p>
              Você pode aceitar, recusar ou apagar cookies a qualquer momento nas configurações do seu
              navegador (Chrome, Firefox, Safari, Edge etc.). Para gerenciar anúncios personalizados do
              Google, visite
              {" "}<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">adssettings.google.com</a>.
            </p>
            <p className="mt-2">
              Ao continuar navegando neste site, você concorda com o uso de cookies conforme descrito nesta
              política.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">5. Mais informações</h2>
            <p>
              Para saber como tratamos os dados coletados, consulte nossa
              {" "}<Link to="/politica-de-privacidade" className="text-primary underline underline-offset-2">Política de Privacidade</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">6. Contato</h2>
            <p>
              Dúvidas? Escreva para
              {" "}<a href="mailto:julianacorrea.jmc@gmail.com" className="text-primary underline underline-offset-2">julianacorrea.jmc@gmail.com</a>.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default CookiePolicy;

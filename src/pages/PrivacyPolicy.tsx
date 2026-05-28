import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="bg-background text-foreground min-h-screen py-16 px-6 md:px-16">
      <article className="max-w-3xl mx-auto font-sans">
        <Link to="/" className="text-sm text-primary underline underline-offset-2">← Voltar ao início</Link>
        <h1 className="font-serif text-4xl font-semibold mt-6 mb-2">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground mb-8">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <section className="space-y-6 leading-relaxed text-foreground/90">
          <p>
            O Espaço AlinhaMente Terapias Integradas ("nós", "nosso") respeita a sua privacidade e está
            comprometido com a proteção dos seus dados pessoais, em conformidade com a Lei Geral de Proteção
            de Dados (Lei nº 13.709/2018 – LGPD) e com as políticas do Google Ads.
          </p>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">1. Dados que coletamos</h2>
            <p>Coletamos somente os dados necessários para contato e prestação dos nossos serviços:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nome, telefone e e-mail informados voluntariamente em formulários ou via WhatsApp;</li>
              <li>Dados de navegação (endereço IP, tipo de dispositivo, navegador, páginas visitadas) coletados via cookies e ferramentas de análise como Google Analytics e Google Ads.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">2. Como utilizamos seus dados</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Responder solicitações de contato e agendamento de sessões;</li>
              <li>Enviar informações sobre nossos serviços, quando autorizado;</li>
              <li>Melhorar a experiência de navegação no site;</li>
              <li>Mensurar a eficácia de campanhas publicitárias no Google Ads e em redes sociais.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">3. Compartilhamento de dados</h2>
            <p>
              Não vendemos nem compartilhamos seus dados pessoais com terceiros, exceto com provedores de
              tecnologia necessários para a operação do site (como Google e Meta) e quando exigido por
              obrigação legal.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">4. Cookies e tecnologias semelhantes</h2>
            <p>
              Utilizamos cookies para entender como você utiliza o site e para personalizar anúncios.
              Você pode gerenciar suas preferências no seu navegador. Para mais detalhes, consulte
              nossa <Link to="/politica-de-cookies" className="text-primary underline underline-offset-2">Política de Cookies</Link>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">5. Seus direitos (LGPD)</h2>
            <p>Você pode, a qualquer momento, solicitar:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Confirmação da existência de tratamento dos seus dados;</li>
              <li>Acesso, correção ou exclusão dos seus dados;</li>
              <li>Revogação de consentimento;</li>
              <li>Portabilidade dos dados.</li>
            </ul>
            <p className="mt-2">
              Para exercer seus direitos, entre em contato pelo e-mail
              {" "}<a href="mailto:julianacorrea.jmc@gmail.com" className="text-primary underline underline-offset-2">julianacorrea.jmc@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">6. Segurança</h2>
            <p>
              Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não
              autorizados, perda ou alteração indevida.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">7. Publicidade e Google Ads</h2>
            <p>
              Este site utiliza serviços do Google Ads e remarketing. O Google pode exibir nossos anúncios
              em sites parceiros com base em visitas anteriores. Você pode desativar a personalização de
              anúncios em
              {" "}<a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">adssettings.google.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">8. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos a consulta regular desta página.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">9. Contato</h2>
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

export default PrivacyPolicy;

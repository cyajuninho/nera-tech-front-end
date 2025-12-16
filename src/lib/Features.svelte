<script>
  import { fade } from "./animate.js";
</script>

<section id="features" class="section">
  <div class="container">
    <div class="section-header" use:fade>
      <h2>Por que escolher o Nera ERP?</h2>
      <p>
        Um conjunto de módulos profissionais, estáveis e rápidos que colocam o
        seu negócio em outro nível.
      </p>
    </div>

    <div class="features-grid">
      <div class="feature-card" use:fade={{ delay: 0 }}>
        <div class="icon">🖥️</div>
        <h3>Sistema Gerencial Retaguarda</h3>
        <p class="subtitle">Controle Total</p>
        <p>
          Visão completa da sua empresa: estoque, financeiro, compras, vendas,
          fiscal, cadastros e muito mais. Tudo o que você precisa para gerir seu
          negócio com segurança e eficiência.
        </p>
      </div>

      <div class="feature-card" use:fade={{ delay: 100 }}>
        <div class="icon">⚡</div>
        <h3>PDV Rápido e Robusto</h3>
        <p class="subtitle">Velocidade e Estabilidade</p>
        <ul>
          <li>Operação rápida e intuitiva</li>
          <li>Emissão de NFC-e 4.0 e SAT</li>
          <li>Integração com balanças e terminais</li>
          <li>Parcelamentos configuráveis</li>
          <li>Importação automática de pedidos</li>
        </ul>
        <p class="highlight">
          Feito para não travar, não cair e não parar sua operação.
        </p>
      </div>

      <div class="feature-card" use:fade={{ delay: 200 }}>
        <div class="icon">📱</div>
        <h3>Pré-Venda Inteligente</h3>
        <p class="subtitle">Agilidade no Atendimento</p>
        <p>
          Agiliza atendimento, filas e pedidos — ideal para lojas, bares,
          mercados e restaurantes.
        </p>
      </div>

      <div class="feature-card" use:fade={{ delay: 300 }}>
        <div class="icon">💬</div>
        <h3>WhatsApp Integrado</h3>
        <p class="subtitle">Comunicação Automática</p>
        <p>Envie automaticamente:</p>
        <ul>
          <li>Notas fiscais</li>
          <li>Orçamentos</li>
          <li>Mensagens comerciais</li>
          <li>Confirmações</li>
        </ul>
        <p class="highlight">Tudo sem precisar de WhatsApp Business.</p>
      </div>

      <div class="feature-card" use:fade={{ delay: 500 }}>
        <div class="icon">🏢</div>
        <h3>Gestão Multi-Lojas</h3>
        <p class="subtitle">Controle Centralizado</p>
        <p>
          Tem mais de uma unidade? Controle estoque, vendas e financeiro de
          todas as suas filiais em um único painel, em tempo real.
        </p>
        <ul>
          <li>Estoque unificado ou separado</li>
          <li>Relatórios consolidados</li>
          <li>Transferência entre lojas</li>
        </ul>
      </div>

      <div class="feature-card" use:fade={{ delay: 400 }}>
        <div class="icon">👨🏻‍💻</div>
        <h3>Suporte Humanizado</h3>
        <p class="subtitle">Resolução Ágil</p>
        <p>
          Nada de robôs ou filas intermináveis. Fale com especialistas que
          entendem do seu negócio e resolvem seus problemas com rapidez e
          praticidade.
        </p>
        <p class="highlight">Estamos sempre ao seu lado.</p>
      </div>
    </div>
  </div>
</section>

<style>
  .section-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
  }

  .section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .section-header p {
    font-size: 1.2rem;
    color: var(--text-light);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .feature-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease;
    border: 1px solid #e2e8f0;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: var(--secondary);
    font-weight: 600;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 0.05em;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.5rem;
    color: var(--text-light);
  }

  p {
    color: var(--text-light);
    line-height: 1.6;
  }

  .highlight {
    margin-top: 1rem;
    font-weight: 600;
    color: var(--text-main);
    border-left: 3px solid var(--accent);
    padding-left: 1rem;
  }
</style>

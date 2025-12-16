<script>
  import { fade } from './animate.js';
</script>

<section id="resources" class="section bg-light">
  <div class="container">
    <div class="section-header" use:fade>
      <h2>Recursos que fazem a diferença</h2>
      <p>Ferramentas poderosas para otimizar cada aspecto do seu negócio</p>
    </div>

    <div class="resources-grid">
      <div class="resource-item" use:fade={{ delay: 0 }}>
        <div class="icon-box">🛒</div>
        <div class="content">
          <h3>Compras</h3>
          <ul>
            <li>Importação de XML (entrada/compra)</li>
            <li>Geração automática de contas a pagar</li>
          </ul>
        </div>
      </div>

      <div class="resource-item" use:fade={{ delay: 100 }}>
        <div class="icon-box">📦</div>
        <div class="content">
          <h3>Produtos / Estoque</h3>
          <ul>
            <li>Movimentação de estoque</li>
            <li>Cadastro completo</li>
            <li>NCM/CEST integrado</li>
            <li>Pesquisa rápida de preço/estoque</li>
          </ul>
        </div>
      </div>

      <div class="resource-item" use:fade={{ delay: 200 }}>
        <div class="icon-box">🧾</div>
        <div class="content">
          <h3>Fiscal Completo</h3>
          <div class="tags">
            <span>NFe 4.0</span>
            <span>NFC-e 4.0</span>
            <span>SAT</span>
            <span>MDFe</span>
            <span>CTe / CTe OS</span>
            <span>Sped Fiscal</span>
            <span>Sped Contribuições</span>
            <span>Sintegra</span>
          </div>
          <p class="note">Tabela IBPT integrada. Segurança total e conformidade com a legislação.</p>
        </div>
      </div>

      <div class="resource-item" use:fade={{ delay: 300 }}>
        <div class="icon-box">💰</div>
        <div class="content">
          <h3>Financeiro Completo</h3>
          <ul>
            <li>Boletos diversos bancos</li>
            <li>Carnês</li>
            <li>Arquivo remessa (.rem)</li>
            <li>Contas a pagar e receber</li>
            <li>Controle de comissões</li>
            <li>Relatórios completos de caixa</li>
          </ul>
        </div>
      </div>

      <div class="resource-item" use:fade={{ delay: 400 }}>
        <div class="icon-box">📊</div>
        <div class="content">
          <h3>Relatórios Gerenciais</h3>
          <p>Acompanhe tudo com gráficos, indicadores e relatórios completos para decisões rápidas e inteligentes.</p>
        </div>
      </div>

      <div class="resource-item" use:fade={{ delay: 500 }}>
        <div class="icon-box">🔒</div>
        <div class="content">
          <h3>Segurança</h3>
          <ul>
            <li>Backup automático</li>
            <li>Sistema totalmente parametrizável</li>
            <li>Suporte a todas as impressoras fiscais</li>
            <li>Tecnologia estável</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .bg-light {
    background-color: var(--bg-light);
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .resource-item {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .icon-box {
    background-color: rgba(37, 99, 235, 0.1);
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    flex-shrink: 0;
  }

  .content h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: var(--text-light);
    position: relative;
    padding-left: 1.25rem;
  }

  li::before {
    content: "•";
    color: var(--secondary);
    position: absolute;
    left: 0;
    font-weight: bold;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tags span {
    background-color: #f1f5f9;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    color: var(--text-main);
    font-weight: 500;
  }

  .note {
    font-size: 0.9rem;
    color: var(--text-light);
    font-style: italic;
  }
</style>

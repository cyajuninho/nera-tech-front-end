<script>
  import { fade } from './animate.js';
</script>

<section id="segments" class="section">
  <div class="container">
    <div class="section-header" use:fade>
      <h2>Módulos Específicos Para Cada Negócio</h2>
      <p>Soluções personalizadas para atender as necessidades do seu segmento</p>
    </div>

    <div class="segments-grid">
      <div class="segment-card" use:fade={{ delay: 0 }}>
        <div class="emoji">🍔</div>
        <h3>Restaurantes e Lanchonetes</h3>
        <ul>
          <li>Controle de mesas e comandas</li>
          <li>Delivery integrado</li>
          <li>Operação rápida e organizada</li>
        </ul>
      </div>

      <div class="segment-card" use:fade={{ delay: 100 }}>
        <div class="emoji">🛍️</div>
        <h3>Lojas de Roupas</h3>
        <ul>
          <li>Controle por grade (tamanho/cor)</li>
          <li>Etiquetas de embalagem</li>
          <li>Gestão de modelos e grupos</li>
        </ul>
      </div>

      <div class="segment-card" use:fade={{ delay: 200 }}>
        <div class="emoji">🍨</div>
        <h3>Açaiterias e Sorveterias</h3>
        <ul>
          <li>Integração com balanças</li>
          <li>Cadastro de combinações</li>
          <li>Ingredientes e adicionais</li>
        </ul>
      </div>

      <div class="segment-card" use:fade={{ delay: 300 }}>
        <div class="emoji">🏪</div>
        <h3>Mercados</h3>
        <ul>
          <li>PDV de alta velocidade</li>
          <li>Balanças integradas</li>
          <li>Controle de estoque em volume</li>
        </ul>
      </div>

      <div class="segment-card" use:fade={{ delay: 400 }}>
        <div class="emoji">🚚</div>
        <h3>Transportadoras</h3>
        <ul>
          <li>Controle de frota completo</li>
          <li>Emissão de CTe e MDF-e</li>
          <li>Gestão logística</li>
        </ul>
      </div>

      <div class="segment-card" use:fade={{ delay: 500 }}>
        <div class="emoji">🚗</div>
        <h3>Oficinas</h3>
        <ul>
          <li>Ordem de serviço</li>
          <li>Controle de comissões</li>
          <li>Faturamento integrado</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<style>
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-header h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .segments-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .segment-card {
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
  }

  .segment-card:hover {
    border-color: var(--secondary);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  .emoji {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
  }

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  ul {
    text-align: left;
    padding-left: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    color: var(--text-light);
    list-style-type: disc;
  }
</style>

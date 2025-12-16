<script>
  import { fade } from './animate.js';
</script>

<section class="hero section">
  <div class="container">
    <div class="content">
      <span class="badge" use:fade={{ delay: 0 }}>Nera ERP</span>
      <h1 use:fade={{ delay: 100 }}>O Sistema de Gestão Completo Para o Comércio Moderno</h1>
      <p class="lead" use:fade={{ delay: 200 }}>
        Controle total de estoque, vendas, financeiro, emissão fiscal e atendimento — tudo em um único sistema poderoso.
      </p>
      <p class="sub-lead" use:fade={{ delay: 300 }}>
        Transforme sua empresa com o ERP mais completo do mercado.
      </p>
      <div class="actions" use:fade={{ delay: 400 }}>
        <a href="#contact" class="btn btn-primary">Quero uma Demonstração</a>
        <a href="#features" class="btn btn-outline">Saiba Mais</a>
      </div>
      <p class="target-audience" use:fade={{ delay: 500 }}>
        Ideal para supermercados, lojas de roupas, açaiterias, lanchonetes, bares, distribuidoras, oficinas, transportadoras e varejo em geral.
      </p>
    </div>
    <div class="image" use:fade={{ delay: 200, duration: 800 }}>
      <!-- Placeholder for hero image -->
      <div class="hero-placeholder">
        <div class="screen">
          <div class="header-bar"></div>
          <div class="sidebar"></div>
          <div class="main-content">
            <div class="chart"></div>
            <div class="grid">
              <div class="item"></div>
              <div class="item"></div>
              <div class="item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 6rem 0 4rem;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .badge {
    background-color: rgba(37, 99, 235, 0.1);
    color: var(--secondary);
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary);
    line-height: 1.1;
  }

  .lead {
    font-size: 1.25rem;
    color: var(--text-light);
    margin-bottom: 1rem;
  }

  .sub-lead {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-main);
    margin-bottom: 2rem;
  }

  .actions {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .target-audience {
    font-size: 0.9rem;
    color: var(--text-light);
    border-top: 1px solid #cbd5e1;
    padding-top: 1rem;
  }

  .hero-placeholder {
    width: 100%;
    aspect-ratio: 4/3;
    background: white;
    border-radius: 1rem;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    padding: 1rem;
    position: relative;
  }

  .screen {
    background: #f1f5f9;
    height: 100%;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .header-bar {
    height: 40px;
    background: var(--primary);
    width: 100%;
  }

  .sidebar {
    width: 60px;
    background: #334155;
    height: 100%;
    position: absolute;
    top: 40px;
    bottom: 0;
  }

  .main-content {
    margin-left: 60px;
    padding: 20px;
    flex: 1;
  }

  .chart {
    height: 100px;
    background: #cbd5e1;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .item {
    height: 80px;
    background: white;
    border-radius: 8px;
  }

  @media (max-width: 968px) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .actions {
      justify-content: center;
    }
    
    h1 {
      font-size: 2.5rem;
    }
  }
</style>

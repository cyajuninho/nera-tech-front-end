<script>
  import { fade } from './animate.js';
</script>

<section id="testimonials" class="section bg-light">
  <div class="container">
    <div class="section-header" use:fade>
      <h2>O que nossos clientes dizem</h2>
    </div>

    <div class="testimonials-grid">
      <div class="testimonial-card" use:fade={{ delay: 0 }}>
        <div class="quote">“</div>
        <p class="text">Depois que implementamos o sistema, nosso caixa ficou mais rápido e preciso. O estoque nunca mais deu divergência.</p>
        <div class="author">
          <strong>Supermercado São Lucas</strong>
        </div>
      </div>

      <div class="testimonial-card" use:fade={{ delay: 100 }}>
        <div class="quote">“</div>
        <p class="text">O módulo de mesas e delivery é simplesmente perfeito. Agilizou muito nosso atendimento.</p>
        <div class="author">
          <strong>Restaurante Bom Sabor</strong>
        </div>
      </div>

      <div class="testimonial-card" use:fade={{ delay: 200 }}>
        <div class="quote">“</div>
        <p class="text">O WhatsApp integrado salvou meu atendimento. Consigo enviar orçamentos e notas em segundos.</p>
        <div class="author">
          <strong>Loja de Moda Trend</strong>
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

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .testimonial-card {
    background: white;
    padding: 2.5rem;
    border-radius: 1rem;
    position: relative;
    box-shadow: var(--shadow-md);
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }

  .quote {
    font-size: 4rem;
    color: var(--secondary);
    opacity: 0.2;
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-family: serif;
    line-height: 1;
  }

  .text {
    font-size: 1.1rem;
    color: var(--text-main);
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
    font-style: italic;
    flex-grow: 1;
  }

  .author {
    border-top: 1px solid #e2e8f0;
    padding-top: 1rem;
    color: var(--text-light);
  }

  .author strong {
    color: var(--primary);
    display: block;
  }
</style>

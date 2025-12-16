<script>
  import whatsappIcon from '../assets/whatsapp-icon.svg';
</script>

<section id="contact" class="section cta-section">
  <div class="container">
    <div class="cta-content">
      <h2>Quer ver o sistema funcionando ao vivo?</h2>
      <p>Clique no botão abaixo e fale com um consultor agora mesmo.</p>
      
      <div class="buttons">
        <a href="https://wa.me/5518981699709?text=Ol%C3%A1,%20vim%20do%20site%20da%20Nera.%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Nera%20ERP!" class="btn btn-whatsapp btn-lg">
          <img src={whatsappIcon} alt="WhatsApp" class="icon-svg" /> Chame no WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .cta-section {
    background: #003B73;
    color: white;
    text-align: center;
    padding: 6rem 0;
  }

  h2 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.25rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .btn-lg {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .btn-whatsapp {
    background-color: #25D366;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .btn-whatsapp:hover {
    background-color: #128C7E;
  }

  .icon-svg {
    width: 24px;
    height: 24px;
    margin-right: 0.5rem;
    filter: brightness(0) invert(1);
  }

  .divider {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
  }

  @media (max-width: 600px) {
    .buttons {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>

<script>
  import whatsappIcon from '../assets/whatsapp-icon.svg';
</script>

<a
  href="https://wa.me/5518981699709?text=Ol%C3%A1,%20vim%20do%20site%20da%20Nera.%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20Nera%20ERP!"
  class="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Fale conosco no WhatsApp"
>
  <img src={whatsappIcon} alt="WhatsApp" />
</a>

<style>
  .whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #25D366;
    color: white;
    border-radius: 50%;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .whatsapp-float:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 14px rgba(0,0,0,0.4);
    background-color: #128C7E;
  }

  .whatsapp-float img {
    width: 30px;
    height: 30px;
    filter: brightness(0) invert(1);
  }
</style>

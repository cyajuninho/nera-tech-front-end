<script>
  import logo from '../assets/logo.png';
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header>
  <div class="container">
    <div class="logo">
      <a href="/">
        <img src={logo} alt="Nera Tech" class="logo-img" />
      </a>
    </div>
    
    <button class="mobile-toggle" on:click={toggleMenu} aria-label="Toggle menu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>

    <nav class="{isMenuOpen ? 'open' : ''}">
      <a href="#features" on:click={() => isMenuOpen = false}>Vantagens</a>
      <a href="#resources" on:click={() => isMenuOpen = false}>Recursos</a>
      <a href="#segments" on:click={() => isMenuOpen = false}>Segmentos</a>
      <a href="#testimonials" on:click={() => isMenuOpen = false}>Depoimentos</a>
      <a href="#contact" on:click={() => isMenuOpen = false}>Fale Conosco</a>
    </nav>
  </div>
</header>

<style>
  header {
    background-color: #003B73;
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1rem 0;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-img {
    height: 40px;
    width: auto;
    display: block;
  }

  nav {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  nav a {
    font-weight: 500;
    color: white;
    opacity: 0.9;
    position: relative;
    padding-bottom: 4px;
  }

  nav a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transition: width 0.3s ease-in-out;
  }

  nav a:hover {
    color: white;
    opacity: 1;
  }

  nav a:hover::after {
    width: 100%;
  }

  .mobile-toggle {
    display: none;
    background: none;
    border: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    .mobile-toggle {
      display: flex;
    }

    nav {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #003B73;
      flex-direction: column;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transform: translateY(-150%);
      transition: transform 0.3s ease;
      z-index: -1;
    }

    nav.open {
      transform: translateY(0);
    }
  }
</style>

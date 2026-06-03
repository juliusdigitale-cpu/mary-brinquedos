import foto00 from './imagens/foto00.jpeg';
import foto01 from './imagens/foto01.jpeg';
import foto02 from './imagens/foto02.jpeg';
import foto03 from './imagens/foto03.jpeg';
import foto04 from './imagens/foto04.jpeg';

const services = [
  'Locação de brinquedos infláveis',
  'Mesas e cadeiras para festas',
  'Kit infantil completo',
  'Montagem e retirada rápida'
];

const gallery = [
  { src: foto01, alt: 'Decoração de festa infantil 1' },
  { src: foto02, alt: 'Mesa e cadeira para festa' },
  { src: foto03, alt: 'Brinquedos para locação' },
  { src: foto04, alt: 'Ambientação divertida' }
];

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2H17C19.76 2 22 4.24 22 7V17C22 19.76 19.76 22 17 22H7C4.24 22 2 19.76 2 17V7C2 4.24 4.24 2 7 2ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15ZM17.5 6C16.67 6 16 6.67 16 7.5C16 8.33 16.67 9 17.5 9C18.33 9 19 8.33 19 7.5C19 6.67 18.33 6 17.5 6Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM17.6 9.73H16.05C15.61 9.73 15.41 9.93 15.41 10.37V11.6H17.55L17.27 13.68H15.41V18.5H13.23V13.68H12V11.6H13.23V10.66C13.23 8.73 14.38 7.73 16.04 7.73C16.82 7.73 17.5 7.78 17.6 7.79V9.73Z" />
  </svg>
);

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-image">
          <img src={foto00} alt="Mary's Brinq" className="hero-logo" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Mary's Brinq</p>
          <h1>Locação de brinquedos, mesas e cadeiras para sua festa</h1>
          <p className="hero-text">
            Em São Bernardo do Campo, oferecemos soluções completas para festas infantis.
            Agende seu evento com rapidez e confiança.
          </p>
          <div className="hero-actions">
            <a className="social-icon" href="https://www.instagram.com/marysbrinqsbc" target="_blank" rel="noreferrer" title="Instagram">
              <InstagramIcon />
            </a>
            <a className="social-icon" href="https://www.facebook.com/marysbrinq" target="_blank" rel="noreferrer" title="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-content">
            <h2>Aluguel com carinho e atendimento rápido</h2>
            <p>Mesas, cadeiras, brinquedos e muito mais para tornar sua festa inesquecível.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="info-section">
          <div>
            <p className="section-label">Por que escolher?</p>
            <h2>Atendimento dedicado para festas e eventos</h2>
            <p>
              A Mary's Brinq oferece locação completa de entretenimento, móveis e equipamentos para aniversários,
              chás, formaturas e confraternizações. Tudo pensado para a criançada se divertir e os pais ficarem tranquilos.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article key={service} className="service-card">
                <h3>{service}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery-section">
          <p className="section-label">Galeria</p>
          <h2>Inspiração para sua festa</h2>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure key={item.alt} className="gallery-item">
                <img src={item.src} alt={item.alt} />
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div>
          <p className="footer-title">Mary's Brinq</p>
          <p>Locação de brinquedos, mesas e cadeiras para festas infantis em SBC.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

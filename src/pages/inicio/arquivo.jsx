import { Link } from 'react-router-dom'
import Icon from '../../components/Icon.jsx'

function Inicio() {
  return (
    <main>
      <section className="contact-hero home-hero" id="inicio">
        <div className="contact-container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> SEU FUTURO COMEÇA AQUI
            </div>
            <h1>
              Conhecimento que
              <br />
              ilumina <em>caminhos.</em>
            </h1>
            <p>
              Encontre novas possibilidades, desenvolva seu talento e prepare-se
              para construir o futuro que você imagina.
            </p>
            <Link className="hero-link" to="/sobre">
              Conheça a faculdade <Icon name="arrow" size={18} />
            </Link>
          </div>
          <div className="home-highlight">
            <span className="highlight-number">01</span>
            <div className="highlight-shape" aria-hidden="true">
              <span>✳</span>
            </div>
            <p>Uma educação feita para abrir novos horizontes.</p>
          </div>
        </div>
      </section>

      <section className="home-invitation">
        <div className="contact-container invitation-content">
          <div>
            <div className="eyebrow">PRÓXIMO PASSO</div>
            <h2>Vamos conversar sobre o seu futuro?</h2>
          </div>
          <Link className="header-cta" to="/contato">
            Entre em contato <Icon name="arrow" size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Inicio

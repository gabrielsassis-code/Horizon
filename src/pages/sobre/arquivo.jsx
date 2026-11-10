import { Link } from 'react-router-dom'
import Icon from '../../components/Icon.jsx'

function Sobre() {
  return (
    <main>
      <section className="contact-hero about-hero" id="sobre">
        <div className="contact-container about-content">
          <div className="eyebrow">
            <span /> A FACULDADE AURORA
          </div>
          <h1>
            Aprender para
            <br />
            <em>transformar.</em>
          </h1>
          <p>
            Acreditamos que a educação amplia horizontes e ajuda cada pessoa a
            descobrir seu próprio caminho. Na Aurora, aprender é o começo de
            novas possibilidades.
          </p>
          <Link className="hero-link" to="/contato">
            Fale com nosso time <Icon name="arrow" size={18} />
          </Link>
        </div>
      </section>

      <section className="about-values">
        <div className="contact-container about-values-grid">
          <div>
            <span className="channel-label">NOSSO PROPÓSITO</span>
            <h2>Educação com sentido e novas perspectivas.</h2>
          </div>
          <p>
            Queremos criar um ambiente acolhedor, onde conhecimento, troca e
            curiosidade caminham juntos. Cada trajetória é única, e estamos
            aqui para apoiar o próximo passo.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Sobre

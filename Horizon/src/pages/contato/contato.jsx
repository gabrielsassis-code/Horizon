import ContactChannels from '../../components/ContactChannels.jsx'
import ContactForm from '../../components/ContactForm.jsx'
import Icon from '../../components/Icon.jsx'
import './contato.css'

function Contato() {
  return (
    <main>
      <section className="contact-hero" id="inicio">
        <div className="contact-container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> CONTE COM A GENTE
            </div>
            <h1>
              Boas conversas
              <br />
              abrem <em>caminhos.</em>
            </h1>
            <p>
              Tem uma dúvida, uma ideia ou quer saber mais sobre a Aurora?
              Estamos por perto para ajudar você a dar o próximo passo.
            </p>
            <a className="hero-link" href="#canais">
              Encontre o melhor canal <Icon name="arrow" size={18} />
            </a>
          </div>
          <div
            className="hero-art"
            aria-label="Ilustração de uma estudante em uma ligação"
            role="img"
          >
            <div className="art-sun" />
            <div className="art-note note-one">
              oi, futuro! <span>✳</span>
            </div>
            <div className="art-note note-two">
              <span>✦</span> pode falar :)
            </div>
            <div className="art-figure">
              <div className="figure-hair" />
              <div className="figure-face">
                <span className="face-eye" />
                <span className="face-smile" />
              </div>
              <div className="figure-neck" />
              <div className="figure-body" />
              <div className="figure-arm" />
              <div className="figure-phone">
                <span />
              </div>
              <div className="figure-plant">
                <i />
                <i />
                <i />
                <b />
              </div>
            </div>
            <div className="art-caption">
              <span>01</span> Pessoas de verdade. Respostas de verdade.
            </div>
          </div>
        </div>
      </section>

      <ContactChannels />

      <section className="message-section" id="mensagem">
        <div className="contact-container message-grid">
          <div className="message-copy">
            <div className="eyebrow">ESTAMOS À DISPOSIÇÃO</div>
            <h2>
              Conta pra gente.
              <br />
              <em>A gente escuta.</em>
            </h2>
            <p>
              Preencha o formulário e nosso time vai entrar em contato com
              você. Sem pressa, sem robôs — uma conversa de verdade.
            </p>
            <div className="address-card" id="localizacao">
              <span className="address-icon">
                <Icon name="location" />
              </span>
              <div>
                <strong>Venha tomar um café</strong>
                <span>
                  Av. das Palmeiras, 1200 · Vila Nova
                  <br />
                  São Paulo, SP · CEP 04567-890
                </span>
              </div>
            </div>
            <div className="hours-note">
              <Icon name="clock" size={18} />
              <span>
                <strong>Nosso atendimento</strong>
                <br />
                Segunda a sexta, das 9h às 18h
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default Contato

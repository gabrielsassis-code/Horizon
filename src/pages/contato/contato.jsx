import { useState } from 'react'
import './contato.css'

function Icon({ name, size = 20 }) {
  const sharedProps = {
    'aria-hidden': true,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    message: <><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8Z" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.8 2.1Z" /></>,
  }

  return <svg {...sharedProps}>{paths[name]}</svg>
}

function Contato() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <div className="contact-page">
      <div className="topline">
        <div className="contact-container topline-content">
          <span>Seu próximo capítulo começa aqui.</span>
          <a href="#canais">Fale com nosso time <Icon name="arrow" size={15} /></a>
        </div>
      </div>

      <header className="site-header">
        <div className="contact-container header-content">
          <a className="brand" href="#inicio" aria-label="Aurora, início">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">aurora<span>.</span><small>FACULDADE</small></span>
          </a>
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#inicio">Início</a>
            <a href="#canais">Cursos</a>
            <a href="#canais">A faculdade</a>
            <a className="nav-active" href="#mensagem">Contato</a>
          </nav>
          <a className="header-cta" href="#mensagem">Quero estudar <Icon name="arrow" size={17} /></a>
        </div>
      </header>

      <main>
        <section className="contact-hero" id="inicio">
          <div className="contact-container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span /> CONTE COM A GENTE</div>
              <h1>Boas conversas<br />abrem <em>caminhos.</em></h1>
              <p>Tem uma dúvida, uma ideia ou quer saber mais sobre a Aurora? Estamos por perto para ajudar você a dar o próximo passo.</p>
              <a className="hero-link" href="#canais">Encontre o melhor canal <Icon name="arrow" size={18} /></a>
            </div>
            <div className="hero-art" aria-label="Ilustração de uma estudante em uma ligação" role="img">
              <div className="art-sun" />
              <div className="art-note note-one">oi, futuro! <span>✳</span></div>
              <div className="art-note note-two"><span>✦</span> pode falar :)</div>
              <div className="art-figure">
                <div className="figure-hair" />
                <div className="figure-face"><span className="face-eye" /><span className="face-smile" /></div>
                <div className="figure-neck" />
                <div className="figure-body" />
                <div className="figure-arm" />
                <div className="figure-phone"><span /></div>
                <div className="figure-plant"><i /><i /><i /><b /></div>
              </div>
              <div className="art-caption"><span>01</span> Pessoas de verdade. Respostas de verdade.</div>
            </div>
          </div>
        </section>

        <section className="channels-section" id="canais">
          <div className="contact-container">
            <div className="section-heading">
              <div>
                <div className="eyebrow">A GENTE SE FALA</div>
                <h2>Como podemos ajudar?</h2>
              </div>
              <p>Escolha o canal que funciona melhor<br />para você. Nosso time está pronto.</p>
            </div>
            <div className="channel-grid">
              <a className="channel-card" href="tel:+551140002025">
                <span className="channel-icon"><Icon name="phone" /></span>
                <span className="channel-label">LIGUE PARA NÓS</span>
                <strong>(11) 4000-2025</strong>
                <span className="channel-detail">Seg a sex, das 9h às 18h</span>
                <span className="card-arrow"><Icon name="arrow" size={18} /></span>
              </a>
              <a className="channel-card" href="mailto:oi@faculdadeaurora.edu.br">
                <span className="channel-icon"><Icon name="email" /></span>
                <span className="channel-label">MANDE UM E-MAIL</span>
                <strong>oi@faculdadeaurora.edu.br</strong>
                <span className="channel-detail">Respondemos em até 1 dia útil</span>
                <span className="card-arrow"><Icon name="arrow" size={18} /></span>
              </a>
              <a className="channel-card" href="#mensagem">
                <span className="channel-icon"><Icon name="message" /></span>
                <span className="channel-label">PREFERE ESCREVER?</span>
                <strong>Envie uma mensagem</strong>
                <span className="channel-detail">Preencha o formulário abaixo</span>
                <span className="card-arrow"><Icon name="arrow" size={18} /></span>
              </a>
            </div>
          </div>
        </section>

        <section className="message-section" id="mensagem">
          <div className="contact-container message-grid">
            <div className="message-copy">
              <div className="eyebrow">ESTAMOS À DISPOSIÇÃO</div>
              <h2>Conta pra gente.<br /><em>A gente escuta.</em></h2>
              <p>Preencha o formulário e nosso time vai entrar em contato com você. Sem pressa, sem robôs — uma conversa de verdade.</p>
              <div className="address-card" id="localizacao">
                <span className="address-icon"><Icon name="location" /></span>
                <div><strong>Venha tomar um café</strong><span>Av. das Palmeiras, 1200 · Vila Nova<br />São Paulo, SP · CEP 04567-890</span></div>
              </div>
              <div className="hours-note"><Icon name="clock" size={18} /><span><strong>Nosso atendimento</strong><br />Segunda a sexta, das 9h às 18h</span></div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-top">
                <div><span className="form-kicker">FORMULÁRIO DE CONTATO</span><h3>Vamos conversar?</h3></div>
                <span className="form-step">01 <i /> 02</span>
              </div>
              <div className="form-fields">
                <label>Seu nome<input name="name" type="text" placeholder="Como podemos te chamar?" autoComplete="name" required /></label>
                <div className="form-row">
                  <label>Seu e-mail<input name="email" type="email" placeholder="voce@email.com" autoComplete="email" required /></label>
                  <label>Telefone<input name="phone" type="tel" placeholder="(00) 00000-0000" autoComplete="tel" /></label>
                </div>
                <label>O que você quer saber?
                  <select name="subject" defaultValue="" required>
                    <option value="" disabled>Escolha um assunto</option>
                    <option value="cursos">Cursos e graduações</option>
                    <option value="ingresso">Formas de ingresso</option>
                    <option value="bolsas">Bolsas e financiamento</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </label>
                <label>Sua mensagem<textarea name="message" placeholder="Escreva sua mensagem aqui..." rows="3" required /></label>
              </div>
              <div className="form-bottom">
                <span className="privacy-note">Seus dados ficam seguros com a gente.</span>
                <button type="submit">Enviar mensagem <Icon name="arrow" size={17} /></button>
              </div>
              {submitted && <p className="success-message" role="status">Mensagem enviada! Em breve, nosso time falará com você.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="contact-container footer-content">
          <a className="brand footer-brand" href="#inicio" aria-label="Aurora, voltar ao início">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span className="brand-name">aurora<span>.</span><small>FACULDADE</small></span>
          </a>
          <p>Conhecimento que ilumina novos caminhos.</p>
          <span>© 2025 Faculdade Aurora. Feita para o seu futuro.</span>
        </div>
      </footer>
    </div>
  )
}

export default Contato
import Icon from './Icon.jsx'

const channels = [
  {
    icon: 'phone',
    label: 'LIGUE PARA NÓS',
    title: '(11) 4000-2025',
    detail: 'Seg a sex, das 9h às 18h',
    href: 'tel:+551140002025',
  },
  {
    icon: 'email',
    label: 'MANDE UM E-MAIL',
    title: 'oi@faculdadeaurora.edu.br',
    detail: 'Respondemos em até 1 dia útil',
    href: 'mailto:oi@faculdadeaurora.edu.br',
  },
  {
    icon: 'message',
    label: 'PREFERE ESCREVER?',
    title: 'Envie uma mensagem',
    detail: 'Preencha o formulário abaixo',
    href: '#mensagem',
  },
]

function ContactChannels() {
  return (
    <section className="channels-section" id="canais">
      <div className="contact-container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">A GENTE SE FALA</div>
            <h2>Como podemos ajudar?</h2>
          </div>
          <p>
            Escolha o canal que funciona melhor
            <br />
            para você. Nosso time está pronto.
          </p>
        </div>
        <div className="channel-grid">
          {channels.map((channel) => (
            <a className="channel-card" href={channel.href} key={channel.label}>
              <span className="channel-icon">
                <Icon name={channel.icon} />
              </span>
              <span className="channel-label">{channel.label}</span>
              <strong>{channel.title}</strong>
              <span className="channel-detail">{channel.detail}</span>
              <span className="card-arrow">
                <Icon name="arrow" size={18} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactChannels

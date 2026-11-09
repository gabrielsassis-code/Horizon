import Icon from './Icon.jsx'

function ContactForm() {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const subject = `Contato - ${formData.get('subject')}`
    const body = [
      `Nome: ${formData.get('name')}`,
      `E-mail: ${formData.get('email')}`,
      `Telefone: ${formData.get('phone') || 'Não informado'}`,
      '',
      `Mensagem: ${formData.get('message')}`,
    ].join('\n')

    window.location.href = `mailto:oi@faculdadeaurora.edu.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-top">
        <div>
          <span className="form-kicker">FORMULÁRIO DE CONTATO</span>
          <h3>Vamos conversar?</h3>
        </div>
        <span className="form-step">01 <i /> 02</span>
      </div>
      <div className="form-fields">
        <label>
          Seu nome
          <input
            name="name"
            type="text"
            placeholder="Como podemos te chamar?"
            autoComplete="name"
            required
          />
        </label>
        <div className="form-row">
          <label>
            Seu e-mail
            <input
              name="email"
              type="email"
              placeholder="voce@email.com"
              autoComplete="email"
              required
            />
          </label>
          <label>
            Telefone
            <input
              name="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              autoComplete="tel"
            />
          </label>
        </div>
        <label>
          O que você quer saber?
          <select name="subject" defaultValue="" required>
            <option value="" disabled>
              Escolha um assunto
            </option>
            <option value="Cursos e graduações">Cursos e graduações</option>
            <option value="Formas de ingresso">Formas de ingresso</option>
            <option value="Bolsas e financiamento">Bolsas e financiamento</option>
            <option value="Outro assunto">Outro assunto</option>
          </select>
        </label>
        <label>
          Sua mensagem
          <textarea
            name="message"
            placeholder="Escreva sua mensagem aqui..."
            rows="3"
            required
          />
        </label>
      </div>
      <div className="form-bottom">
        <span className="privacy-note">
          Seu aplicativo de e-mail será aberto para enviar a mensagem.
        </span>
        <button type="submit">
          Abrir e-mail <Icon name="arrow" size={17} />
        </button>
      </div>
    </form>
  )
}

export default ContactForm

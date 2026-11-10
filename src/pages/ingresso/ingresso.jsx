import { Link } from 'react-router-dom'
import './ingresso.css'

const formasDeIngresso = [
  {
    numero: '01',
    titulo: 'Vestibular',
    descricao: 'Faça nossa prova online e escolha o melhor momento para começar.',
  },
  {
    numero: '02',
    titulo: 'Nota do Enem',
    descricao: 'Use sua nota do Enem para concorrer a uma vaga na Faculdade Aurora.',
  },
  {
    numero: '03',
    titulo: 'Transferência',
    descricao: 'Continue sua jornada acadêmica com a gente e aproveite seus estudos.',
  },
]

function Ingresso() {
  return (
    <main className="admission-page">
      <section className="admission-hero">
        <div className="admission-container">
          <span className="admission-eyebrow">SEU FUTURO COMEÇA AQUI</span>
          <h1>Chegar até aqui<br />já é <em>começar.</em></h1>
          <p>Escolha como quer ingressar e dê o próximo passo para construir uma história que é sua.</p>
          <a className="admission-primary-link" href="#formas-de-ingresso">Ver formas de ingresso <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section className="admission-options" id="formas-de-ingresso">
        <div className="admission-container">
          <span className="admission-eyebrow">ESCOLHA SUA FORMA DE ENTRAR</span>
          <h2>Tem mais de um caminho.</h2>
          <div className="admission-grid">
            {formasDeIngresso.map((forma) => (
              <article className="admission-card" key={forma.numero}>
                <span className="admission-number">{forma.numero}</span>
                <h3>{forma.titulo}</h3>
                <p>{forma.descricao}</p>
              </article>
            ))}
          </div>
          <div className="admission-contact">
            <div>
              <h2>Vamos dar o primeiro passo?</h2>
              <p>Nosso time pode ajudar você a encontrar a melhor opção.</p>
            </div>
            <Link to="/contato">Fale com a gente <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Ingresso

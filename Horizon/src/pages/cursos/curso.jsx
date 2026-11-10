import { Link } from 'react-router-dom'
import './curso.css'

const cursos = [
  { area: 'NEGÓCIOS', nome: 'Administração', formato: 'Bacharelado · 4 anos' },
  { area: 'TECNOLOGIA', nome: 'Análise e Desenvolvimento de Sistemas', formato: 'Tecnólogo · 2 anos' },
  { area: 'COMUNICAÇÃO', nome: 'Design', formato: 'Bacharelado · 4 anos' },
]

function Curso() {
  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="courses-container">
          <span className="courses-eyebrow">APRENDA. EXPLORE. REALIZE.</span>
          <h1>Um curso para<br />o seu <em>próximo passo.</em></h1>
          <p>Conheça formações conectadas ao mundo real e descubra onde o seu futuro pode chegar.</p>
          <a className="courses-primary-link" href="#lista-cursos">Explorar cursos <span aria-hidden="true">↓</span></a>
        </div>
      </section>
      <section className="courses-list-section" id="lista-cursos">
        <div className="courses-container">
          <div className="courses-section-heading">
            <div>
              <span className="courses-eyebrow">ESCOLHA SEU CAMINHO</span>
              <h2>Conhecimento que abre portas.</h2>
            </div>
            <p>Formações pensadas para transformar curiosidade em novas possibilidades.</p>
          </div>
          <div className="courses-grid">
            {cursos.map((curso) => (
              <article className="course-card" key={curso.nome}>
                <span className="course-area">{curso.area}</span>
                <h3>{curso.nome}</h3>
                <p>{curso.formato}</p>
                <Link to="/ingresso">Saiba como ingressar <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <p className="courses-note">Quer conhecer outras opções? <Link to="/contato">Fale com a gente</Link>.</p>
        </div>
      </section>
    </main>
  )
}

export default Curso

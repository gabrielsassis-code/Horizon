import { Link } from 'react-router-dom'
import Icon from '../../components/Icon.jsx'

const noticias = [
  {
    categoria: 'VIDA ACADÊMICA',
    data: '2026-10-28',
    dataFormatada: '28 de outubro de 2026',
    titulo: 'Aurora abre inscrições para a semana de integração',
    resumo:
      'Uma programação especial para conhecer os espaços da faculdade, encontrar colegas e começar o semestre com novas ideias.',
  },
  {
    categoria: 'EDUCAÇÃO',
    data: '2026-10-16',
    dataFormatada: '16 de outubro de 2026',
    titulo: 'Aprendizagem colaborativa: crescer junto também transforma',
    resumo:
      'Projetos em grupo aproximam diferentes perspectivas e ajudam estudantes a desenvolver habilidades para além da sala de aula.',
  },
  {
    categoria: 'COMUNIDADE',
    data: '2026-10-02',
    dataFormatada: '2 de outubro de 2026',
    titulo: 'Conheça as iniciativas que conectam a faculdade à comunidade',
    resumo:
      'Ações e encontros aproximam estudantes, educadores e moradores em torno de conhecimento e novas possibilidades.',
  },
]

function Noticia() {
  return (
    <main>
      <section className="contact-hero about-hero" id="noticias">
        <div className="contact-container about-content">
          <div className="eyebrow">
            <span /> NOVIDADES DA AURORA
          </div>
          <h1>
            Ideias que
            <br />
            <em>movem o futuro.</em>
          </h1>
          <p>
            Acompanhe notícias, histórias e novidades da nossa comunidade
            acadêmica. Tem sempre algo novo acontecendo por aqui.
          </p>
          <a className="hero-link" href="#ultimas-noticias">
            Veja as últimas notícias <Icon name="arrow" size={18} />
          </a>
        </div>
      </section>

      <section className="channels-section" id="ultimas-noticias">
        <div className="contact-container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">ACONTECE NA AURORA</div>
              <h2>Últimas notícias</h2>
            </div>
            <p>Histórias e novidades para acompanhar de perto.</p>
          </div>
          <div className="channel-grid">
            {noticias.map((noticia) => (
              <article className="channel-card" key={noticia.titulo}>
                <span className="channel-label">{noticia.categoria}</span>
                <time className="channel-detail" dateTime={noticia.data}>
                  {noticia.dataFormatada}
                </time>
                <strong>{noticia.titulo}</strong>
                <span className="channel-detail">{noticia.resumo}</span>
              </article>
            ))}
          </div>
          <div className="section-heading">
            <p>Quer saber mais sobre a Faculdade Aurora?</p>
            <Link className="hero-link" to="/contato">
              Fale com nosso time <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Noticia

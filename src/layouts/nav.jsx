import { Link, NavLink } from 'react-router-dom'
import './layout.css'

function Nav() {
  return (
    <>
      <div className="layout-topline">
        <div className="layout-container layout-topline-content">
          <span>Seu próximo capítulo começa aqui.</span>
          <Link to="/contato">Fale com nosso time <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <header className="layout-header">
        <div className="layout-container layout-header-content">
          <Link className="layout-brand" to="/" aria-label="Aurora, início">
            <span className="layout-brand-mark" aria-hidden="true"><i /><i /><i /></span>
            <span className="layout-brand-name">Horizon<span>.</span><small>FACULDADE</small></span>
          </Link>
          <nav className="layout-nav" aria-label="Navegação principal">
            <NavLink to="/" end>Início</NavLink>
            <NavLink to="/sobre">A faculdade</NavLink>
            <NavLink to="/cursos">Cursos</NavLink>
            <NavLink to="/noticias">Notícias</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </nav>
          <Link className="layout-cta" to="/ingresso">Quero estudar <span aria-hidden="true">→</span></Link>
        </div>
      </header>
    </>
  )
}

export default Nav

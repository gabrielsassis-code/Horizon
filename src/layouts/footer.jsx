import { Link } from 'react-router-dom'
import './layout.css'

function Footer() {
  return (
    <footer className="layout-footer">
      <div className="layout-container layout-footer-content">
        <Link className="layout-brand" to="/" aria-label="Horizon, voltar ao início">
          <span className="layout-brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="layout-brand-name">Horizon<span>.</span><small>FACULDADE</small></span>
        </Link>
        <p>Conhecimento que ilumina novos caminhos.</p>
        <span>© 2025 Faculdade Horizon. Feita para o seu futuro.</span>
      </div>
    </footer>
  )
}

export default Footer

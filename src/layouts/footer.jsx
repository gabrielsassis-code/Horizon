import { Link } from 'react-router-dom'
import './layout.css'

function Footer() {
  return (
    <footer className="layout-footer">
      <div className="layout-container layout-footer-content">
        <Link className="layout-brand" to="/" aria-label="Aurora, voltar ao início">
          <span className="layout-brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="layout-brand-name">aurora<span>.</span><small>FACULDADE</small></span>
        </Link>
        <p>Conhecimento que ilumina novos caminhos.</p>
        <span>© 2025 Faculdade Aurora. Feita para o seu futuro.</span>
      </div>
    </footer>
  )
}

export default Footer

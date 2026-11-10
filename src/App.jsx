import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './layouts/footer.jsx'
import Nav from './layouts/nav.jsx'
import Inicio from './pages/inicio/arquivo.jsx'
import Sobre from './pages/sobre/arquivo.jsx'
import Contato from './pages/contato/contato.jsx'
import Curso from './pages/cursos/curso.jsx'
import Ingresso from './pages/ingresso/ingresso.jsx'
import Noticia from './pages/noticia/arquivo.jsx'
import './pages/paginas.css'

function App() {
  return (
    <BrowserRouter>
      <div className="contact-page">
        <Nav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cursos" element={<Curso />} />
          <Route path="/ingresso" element={<Ingresso />} />
          <Route path="/noticias" element={<Noticia />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

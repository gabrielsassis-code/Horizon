import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './layouts/Footer.jsx'
import Header from './layouts/Header.jsx'
import Inicio from './pages/inicio/arquivo.jsx'
import Sobre from './pages/sobre/arquivo.jsx'
import Contato from './pages/contato/contato.jsx'
import './pages/paginas.css'

function App() {
  return (
    <BrowserRouter>
      <div className="contact-page">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

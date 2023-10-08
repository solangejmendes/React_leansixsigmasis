import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Inicio from './components/pages/Inicio';
import Servicios from './components/pages/Certificacion';
import Formacion from './components/pages/Formacion2';
import Contacto from './components/pages/Contacto';
import Gracias from './components/pages/inc/Gracias';
import Quiensomos from './components/pages/Quiensomos';
import Certificacion from './components/pages/Certificacion';
import CertifLssbb from './components/pages/CertifLssbb';
import CertifLssgb from './components/pages/CertifLssyb';
import CertifLssyb from './components/pages/CertifLssbb';
import CertifLsswb from './components/pages/CertifLsswb';
import CertifLssmbb from './components/pages/CertifLssmbb';
import CertifVitLean from './components/pages/CertifVitLean';



function App() {
  return (
    <Router>
        <div>
            <Navbar />
            <Routes>
                <Route path="servicios" element={<Servicios />} />
                <Route path="formacion" element={<Formacion />} />
                <Route path="quiensomos" element={<Quiensomos />} />
                <Route path="certificacion" element={<Certificacion />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="gracias" element={<Gracias />} />
                <Route path="certiflssbb" element={<CertifLssbb />} />
                <Route path="certiflssgb" element={<CertifLssgb />} />
                <Route path="certiflssyb" element={<CertifLssyb />} />
                <Route path="certiflsswb" element={<CertifLsswb />} />
                <Route path="certiflssmbb" element={<CertifLssmbb />} />
                <Route path="certifvitlean" element={<CertifVitLean />} />
                <Route path="/" element={<Inicio />} />
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;

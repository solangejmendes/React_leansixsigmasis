import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';
import Inicio from './components/pages/Inicio';
import Servicios from './components/pages/Servicios';
import Transformacion from './components/pages/Transformacion';
import Contacto from './components/pages/Contacto';
import Gracias from './components/pages/inc/Gracias';
import Quiensomos from './components/pages/Quiensomos';
import Certificacion from './components/pages/Certificacion';
import CertifLssbb from './components/pages/CertifLssbb';
import CertifLssgb from './components/pages/CertifLssgb';
import CertifLssyb from './components/pages/CertifLssyb';
import CertifLsswb from './components/pages/CertifLsswb';
import CertifLssmbb from './components/pages/CertifLssmbb';
import CertifVitLean from './components/pages/CertifVitLean';
import { Helmet } from 'react-helmet';
import { GA_TRACKING_ID } from './config'; 



function App() {
  return (
    <Router>
      <Helmet>
        <title>Lean Six Sigma formación y consultoría</title>
        <meta 
            name="description"
            content="información sobre cursos de formación y certificación online, presencial y hibrida para black belts, green belts, yellow belts y white belts así como consultoría y transformación digital / industria 4.0"
        />
        <meta 
            name="keywords"
            content="Lean, SixSigma, formación, Certificación, Cursos, Mejora continua, procesos, eficiencia, calidad, transformación digital, consultoría, industria 4.0, Lean manufacturing, Lean services"
        />
        {/* Agrega el código de seguimiento de Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </script>
      </Helmet>
        <div>
            <Navbar />
            <Routes>
                <Route path="servicios" element={<Servicios />} />
                <Route path="transformacion" element={<Transformacion />} />
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

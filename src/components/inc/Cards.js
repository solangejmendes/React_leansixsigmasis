import React from 'react'
import Card from './Card'

import image1 from '../../assets/images/MobileApp2.jpg'
import image2 from '../../assets/images/iot2.jpg'
import image3 from '../../assets/images/office365.jpg'
import image4 from '../../assets/images/security.jpg'
import image5 from '../../assets/images/PowerAutomate.png'
import image6 from '../../assets/images/flexibility.jpg'

const cards = [
    {
        id: 1,
        title: 'Aplicaciones móviles',
        image: image1,
        text: "Además de aplicaciones de desktop, se puede desarrollar aplicaciones móviles totalmente responsive a los distintos tamaños de pantalla.",
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 2,
        title: 'Funcionalidad IoT',
        image: image2,
        text: "Utilización de la cámara de fotos para lectura de códigos de barra y códigos QR, subir fotos para una gestión online de incidencias u operaciones.",
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 3,
        title: 'Integración ',
        image: image3,
        text: 'Aplicaciones totalmente integradas con herramientas de Microsoft Office 365 (Teams para trabajo en equipo, planificación de tareas en planner, notificaciones por email, ...).',
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 4,
        title: 'Seguridad ',
        image: image4,
        text: 'Aplicación y datos protegidos en protocolos de Azure y personalización de accesos a la medida de las necesidades y por role de usuario.',
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 5,
        title: 'Administración ',
        image: image5,
        text: 'Total autonomía en administrar los accesos y acceder al “core” (programa) de la aplicación.',
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 6,
        title: 'Versatilidad',
        image: image6,
        text: 'Permite crear una gran variedad de aplicaciones a medida de las necesidades del negocio.',
        url: 'https://youtube.com/appsleanIT'
    },

]

export default function Cards() {
  return (
    <div className="container cards d-flex justify-content-center align-items-center h-100">
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <Card 
                            title={card.title} 
                            imageSource={card.image} 
                            text={card.text}
                            url={card.url}
                        />
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

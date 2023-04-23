import React from 'react'
import Card from './Card'

import image1 from '../../assets/images/digitalization.png'
import image2 from '../../assets/images/Automatization.jpg'
import image3 from '../../assets/images/Integration.jpg'
import image4 from '../../assets/images/Analitics1.png'
import image5 from '../../assets/images/Maintenance.jpg'
import image6 from '../../assets/images/Consultoria.jpg'


const cards = [
    {
        id: 1,
        title: 'Digitalización de procesos',
        image: image1,
        text: "Te permite quitar el papel y trabajar en remoto. ",
        url: "",
    },
    {
        id: 2,
        title: 'Automatización de Procesos',
        image: image2,
        text: "No más olvidos. El propio proceso te notificará cuando sea el momento indicado. ",
        url: "",
    },
    {
        id: 3,
        title: 'Integración de herramientas',
        image: image3,
        text: 'Integra varias aplicaciones dentro de Office 365.',
        url: "",
    },
    {
        id: 4,
        title: 'Analítica de datos / Dashboards',
        image: image4,
        text: "Navega en las métricas cruciales a tus operaciones para tomar las acciones más pertinentes.",
        url: "",
    },
    {
        id: 5,
        title: 'Mantenimiento Evolutivo',
        image: image5,
        text: "Suporte técnico y evolutivos (mejoras, integraciones y ampliaciones de las aplicaciones implementadas).",
        url: "",
    },
    {
        id: 6,
        title: 'Consultoría IT',
        image: image6,
        text: 'Orientamos en la herramienta o procesos que más pueda impactar con una perspectiva de retorno de la inversión.',
        url: "",
    }
]

export default function ServiceCards() {
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

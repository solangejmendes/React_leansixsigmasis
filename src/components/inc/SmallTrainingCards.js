import React from 'react'
import SmallCard from './SmallCard'

import image1 from '../../assets/images/CSSC-MBB.png'
import image2 from '../../assets/images/CSSC-BB.png'
import image3 from '../../assets/images/CSSC-GB.png'
import image4 from '../../assets/images/CSSC-YB.png'
import image5 from '../../assets/images/CSSC-WB.png'
import image6 from '../../assets/images/Vitamina.jpg'


const cards = [
    {
        id: 1,
        title: 'Lean Six Sigma MBB',
        image: image1,
        text: "Lidera el despliegue lean six sigma, la gestión de los proyectos DMAIC y obtiene la certificación reconocida por entidades acreditadoras internacionales.",
        url: "/certifLssbb",
    },
    {
        id: 2,
        title: 'Lean Six Sigma BB',
        image: image2,
        text: "Lidera proyectos de alto nivel utilizando la metodología DMAIC y obtiene la certificación reconocida por entidades acreditadoras internacionales. ",
        url: "/certiflssbb",
    },
    {
        id: 3,
        title: 'Lean Six Sigma GGB',
        image: image3,
        text: 'ILidera proyectos lean y six sigma y obtiene la certificación reconocida por entidades acreditadoras internacionales.',
        url: "",
    },
    {
        id: 4,
        title: 'Lean Six Sigma YB',
        image: image4,
        text: "Implementa el Kaizen y las herramientas lean en tu día a día y obtiene la certificación reconocida por entidades acreditadoras internacionales.",
        url: "",
    },
    {
        id: 5,
        title: 'Lean Six Sigma WB',
        image: image5,
        text: "Conoce de la metodología lean six sigma y obtiene la certificación reconocida por entidades acreditadoras internacionales.",
        url: "",
    },
    {
        id: 6,
        title: 'Vitaminas Lean',
        image: image6,
        text: 'Varias formaciones de 4h máximo enfocadas en herramientas específicas, tales como: VSM, SMED, FMEA, Brainstorming, etc.',
        url: "",
    }
]

export default function SmallTrainingCards() {
  return (
    <div className="container cards d-flex justify-content-center align-items-center h-100">
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-2' key={card.id}>
                        <SmallCard 
                            title={card.title} 
                            imageSource={card.image} 
                            url={card.url}
                        />
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

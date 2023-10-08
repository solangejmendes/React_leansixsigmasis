import React from 'react'
import Card from './Card'

import image1 from '../../assets/images/CSSC-MBB.png'
import image2 from '../../assets/images/CSSC-BB.png'
import image3 from '../../assets/images/CSSC-GB.png'
import image4 from '../../assets/images/CSSC-YB.png'
import image5 from '../../assets/images/CSSC-WB.png'
import image6 from '../../assets/images/Vitamina.jpg'

const cards = [
    {
        id: 1,
        title: 'Lean Six Sigma Master Black Belt',
        image: image1,
        text: "Lidera el despliegue lean six sigma, la gestión de los proyectos DMAIC y obtiene la certificación reconocida por entidades acreditadoras internacionales.",
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 2,
        title: 'Lean Six Sigma Black Belt',
        image: image2,
        text: "Lidera proyectos de alto nivel utilizando la metodología DMAIC y obtiene la certificación reconocida por entidades acreditadoras internacionales.",
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 3,
        title: 'Lean Six Sigma Green Belt ',
        image: image3,
        text: 'Lidera proyectos lean y six sigma y obtiene la certificación reconocida por entidades acreditadoras internacionales.',
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 4,
        title: 'Lean Six Sigma Yellow Belt',
        image: image4,
        text: 'Implementa el Kaizen y las herramientas lean en tu día a día y obtiene la certificación reconocida por entidades acreditadoras internacionales.',
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 5,
        title: 'Lean Six Sigma White Belt ',
        image: image5,
        text: 'Conoce de la metodología lean six sigma y obtiene la certificación reconocida por entidades acreditadoras internacionales.',
        url: 'https://youtube.com/appsleanIT'
    },
    {
        id: 6,
        title: 'Vitamina Lean',
        image: image6,
        text: 'Varias formaciones de 4h máximo enfocadas en herramientas específicas, tales como: VSM, SMED, FMEA, Brainstorming, etc.',
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

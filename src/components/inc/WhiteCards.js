import React from 'react'
import WhiteCard from './WhiteCard'

import image1 from '../../assets/images/Learning2.jpg'
import image2 from '../../assets/images/Transformacion.jpg'
import image3 from '../../assets/images/project3.jpg'

const cards = [
    {
        id: 1,
        title: 'Formación y certificación',
        image: image1,
        text: "En un mercado empresarial cada vez más competitivo, la excelencia en la gestión de procesos es esencial. Creemos que la base está en la formación y te enseñaremos a pescar. Ofrecemos certificación en Lean Six Sigma desde White Belt hasta el Master Black Belt acreditada y reconocida a nivel internacional. Esto significa que, una vez obtenida nuestra certificación, tus habilidades en Lean Six Sigma serán reconocidas y respetadas en todo el mundo. Nuestros instructores son altamente calificados y experimentados que te guiarán a través de los conceptos. Ya sea que estés buscando mejorar tu carrera profesional o fortalecer la eficiencia operativa de tu organización, nuestra formación y certificación en Lean Six Sigma son la clave para alcanzar tus objetivos. Únete a nosotros en el camino hacia la excelencia en la gestión de procesos y desbloquea un mundo de oportunidades.",
        url: "/formacion",
    },
    {
        id: 2,
        title: 'Transformación digital',
        image: image2,
        text: "La automatización se aplica a una variedad de tareas, desde la gestión de documentos hasta la cadena de suministro. Esto reduce costos y errores, al tiempo que agiliza las operaciones y proporciona datos en tiempo real que mejoran la toma de decisiones. En suma, esto que permite a las organizaciones adaptarse rápidamente a los cambios del mercado por lo que la transformación digital está revolucionando la forma en que las empresas operan en la era moderna.",
        url: "",
    },
    {
        id: 3,
        title: 'Asesoría y coaching',
        image: image3,
        text: 'El éxito se forja a través de la colaboración estrecha y la mejora constante. Ofrecemos coaching a pie de operación con un enfoque que se sumerge en los detalles de las operativas empresariales y trabaja codo a codo con los equipos para impulsar el progreso. Esta colaboración cercana nos permitirá identificar oportunidades de mejora que marcarán la diferencia en la eficiencia y competitividad de tu empresa a la vez que brinda coaching a tu gente para alcanzar la excelencia.',
        url: "",
    }
]

export default function WhiteCards() {
  return (
    <div className="container cards d-flex justify-content-center align-items-center h-100">
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-4' key={card.id}>
                        <WhiteCard 
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

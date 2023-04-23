import React from 'react'
import WhiteCard from './WhiteCard'

import image1 from '../../assets/images/PowerApps.jpg'
import image2 from '../../assets/images/PowerAutomate3.PNG'
import image3 from '../../assets/images/powerBI.png'

const cards = [
    {
        id: 1,
        title: 'PowerApps',
        image: image1,
        text: "plataforma de programación para desarrollar aplicaciones de desktop o móviles integrados a otros softwares a través de APIs o a diferentes tipos de bases de datos (SharePoint, Dataverse, SQL, Excel, entre otras) y que permite digitalizar e integrar los procesos de negocio.",
        url: "",
    },
    {
        id: 2,
        title: 'Power Automate',
        image: image2,
        text: "Plataforma de programación para desarrollar flujos automáticos de trabajo o aprobación, notificaciones, alertas, etc. integrados con otras aplicaciones de Microsoft Office 365 como Outlook, Teams, SharePoint, OneDrive, entre otras, permitiendo un incremento sustancial de la productividad de los procesos de negocio.",
        url: "",
    },
    {
        id: 3,
        title: 'Power BI',
        image: image3,
        text: 'Plataforma de business intelligence que integra toda la información contenida en una variedad muy amplia y diversificada de bases de datos de Azure y Microsoft, relacionarlas y transformar en un modelo analítico de los indicadores de proceso de su negocio.',
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

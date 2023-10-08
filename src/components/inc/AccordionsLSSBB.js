import React from 'react'
import Accordion from './Accordion'


const accordions = [
    {
        id: 1,
        title: 'Objetivos',
        body: "El objetivo es dar a los participantes las herramientas necesarias para desarrollar el rol de un Lean Six Sigma Black Belt y poder:"
    },
    {
        id: 2,
        title: 'Dirigido a',
        body: "Directores, mandos intermedios, supervisores, personal técnico y cualquier profesional que tenga un conocimiento previo nivel Lean Six Sigma Green Belt."
    },
    {
        id: 3,
        title: 'Lean Six Sigma Green Belt ',
        body: 'Lidera proyectos lean y six sigma y obtiene la certificación reconocida por entidades acreditadoras internacionales.'
    },
    {
        id: 4,
        title: 'Lean Six Sigma Yellow Belt',
        body: 'Implementa el Kaizen y las herramientas lean en tu día a día y obtiene la certificación reconocida por entidades acreditadoras internacionales.'
    },
    {
        id: 5,
        title: 'Lean Six Sigma White Belt ',
        body: 'Conoce de la metodología lean six sigma y obtiene la certificación reconocida por entidades acreditadoras internacionales.'
    },
    {
        id: 6,
        title: 'Vitamina Lean',
        body: 'Varias formaciones de 4h máximo enfocadas en herramientas específicas, tales como: VSM, SMED, FMEA, Brainstorming, etc.'
    },

]

export default function Accordions() {
  return (
    <div className="container cards d-flex justify-content-center align-items-center h-100">
        <div className='row'>
            {
                accordions.map(accordion => (
                    <div className='col-md-4' key={accordion.id}>
                        <Accordion 
                            title={accordion.title} 
                            body={accordion.body}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

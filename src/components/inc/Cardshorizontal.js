import React from 'react'
import Cardhorizontal from './Cardhorizontal'

import image1 from '../../assets/images/Auditorias_5s.PNG'
import image2 from '../../assets/images/GestionProyectos.PNG'
import image3 from '../../assets/images/Produccion.PNG'
import image4 from '../../assets/images/CRM.PNG'
import image5 from '../../assets/images/Carga_Massiva.PNG'
import image6 from '../../assets/images/Recepcion_Mercancia.PNG'
import image7 from '../../assets/images/Guardado_Mercancías.PNG'
import image8 from '../../assets/images/Surtido_Kanban.PNG'
import image9 from '../../assets/images/Logistica_Inversa.PNG'


const cards = [
    {
        id: 1,
        title: 'Formación',
        image: image1,
        text: "Aplicación móvil para contestar a pie de operación a preguntas relacionadas con los criterios de buenas prácticas de Lean 5s. Formulario libre o accesible por medio de código de acceso. Cálculo del resultado final obtenido. Varias notificaciones automáticas por email a los equipos responsables por las áreas evaluadas. Consulta de formularios por distintos filtros.",
        url: 'https://www.youtube.com/watch?v=nMTd6FXW4n4'
    },
    {
        id: 2,
        title: 'Gestión de Proyectos',
        image: image2,
        text: 'Aplicación para definir proyectos desde su acta de constitución, pasando por las actas de lanzamiento y control con respectivas definiciones de entregables, hasta el cierre de proyecto con la definición de acciones y beneficios relacionados. Imputación de horas de carga de trabajo, así como de riesgos de proyecto.',
        url: 'https://www.youtube.com/watch?v=nMTd6FXW4n4'
    },
    {
        id: 3,
        title: 'Producción ',
        image: image3,
        text: 'Aplicación para planificación y registro de producción. Visualización de la producción e 3 líneas en simultaneo. Configuración de las líneas de producción en función de la estandarización de productos. Definición de la configuración de paletizado del producto.',
        url: 'https://www.youtube.com/watch?v=Crb-WSlBfoA'
    },
    {
        id: 4,
        title: 'Pedidos de clientes',
        image: image4,
        text: 'Alta y edición de clientes. Alta y edición de productos. Alta y edición de ordenes de clientes. Planificación de pedidos de clientes.',
        url: 'https://www.youtube.com/watch?v=sZHcORgvtS8'
    },
    {
        id: 5,
        title: 'Carga masiva de productos y su lista de materiales ',
        image: image5,
        text: 'Carga automática de la lista de materiales y configuración completa de un producto. Archivo csv cargado en SharePoint que será utilizado por una aplicación en PowerApps para producción y suministro de los materiales.',
        url: 'https://www.youtube.com/watch?v=v2yNs-1C1bQ'
    },
    {
        id: 6,
        title: 'Recepción de mercancía',
        image: image6,
        text: 'Aplicación móvil para registrar la recepción de mercancía a pie de operación tanto por introducción manual del número de referencia como por lectura del código de barras. Registro de la configuración de cada mercancía cuando al pack en la que viene contenida como el paletizado. Balance de la recepción con relación a los pedidos de mercancía introducidos.',
        url: 'https://www.youtube.com/watch?v=Ye_0IPtaPwM'
    },
    {
        id: 7,
        title: 'Guardado de mercancía',
        image: image7,
        text: 'Aplicación móvil para registrar el guardado de mercancía a pie de operación. Posibilidad de introducción manual de referencia (con validación en el sistema de la mercancía dada de alta) como por lectura de código de barras y balance del guardado pendiente en función de la mercancía recibida y de la ya guardada. Asignación de hueco de guardado por lectura de código de barras del hueco para evitar errores de introducción de datos.',
        url: 'https://www.youtube.com/watch?v=BIiCimkh8qA'
    },    
    {
        id: 8,
        title: 'Surtido de mercancía en Kanban',
        image: image8,
        text: 'Establecimiento de objetivo de Kanban y, en función de la productividad histórica o estimada de la línea de producción, asignación de las cantidades de materiales a consumir en cada periodo de kanban. Objetivos variables en función de cómo se desarrolla la producción. Envío por Outlook de un fichero Excel con la estructura de datos para copiar y pegar en el sistema maestro de gestión de stock.',
        url: 'https://www.youtube.com/watch?v=CKxLZB-Che4'
    },
    {
        id: 9,
        title: 'Logística Inversa',
        image: image9,
        text: 'Aplicación móvil para registrar toda la logística inversa procedente de la producción: Devoluciones que seguirán una reclamación a proveedor por mal estado; Roturas por se haber dañado en la línea de producción; y Sobrantes de la producción que serán devueltos al stock de materia prima.',
        url: 'https://www.youtube.com/watch?v=D_wuJguJRQs'
    }
]

export default function Cardshorizontal() {
  return (
    <div className="container cards d-flex justify-content-center align-items-center h-100">
        <div className='row'>
            {
                cards.map(card => (
                    <div className='col-md-12' key={card.id}>
                        <Cardhorizontal 
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


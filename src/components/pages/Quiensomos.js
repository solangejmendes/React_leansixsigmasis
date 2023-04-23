import React from 'react';
import Slider from '../inc/Slider'

export default function Quiensomos() {
    return (
        <div className='newpage'>        
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Quien Somos
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 left">
                            <p>
                                Nos dedicamos, tanto a la integración de soluciones existentes (ver apartado de Productos), 
                                como al desarrollo de soluciones de software personalizado para empresas industriales o de servicios. 
                            </p>
                            <p>
                                Nuestras soluciones tecnológicas visan:
                            </p>
                            <ul>
                                <li>incrementar la productividad de los procesos de negocio, </li>
                                <li>digitalizar procesos </li>
                                <li>automatizar flujos de trabajo.</li>

                            </ul>
                            <br/>
                            <p>
                                Somos un equipo de Ingenieros con más de 15 años de experiencia laboral en diferentes áreas de tecnología y empresariales, como: 
                                desarrollo de software, análisis de negocios con enfoques tecnológicos y gestión de proyectos. Dominamos la plataforma Power de Microsoft. 
                            </p>
                            <Slider />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

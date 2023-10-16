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
                                ¿Buscas optimizar tus procesos y maximizar la eficiencia en tu empresa? ¡Estás en el lugar adecuado! 
Somos especializados en mejora de eficiencia de procesos y podemos ayudar a tu empresa a impulsar la productividad, reducir costos y lograr resultados excepcionales. 
                            </p>
                            <p>
                                Nuestro enfoque se adapta tanto a entornos industriales como a servicios, brindando soluciones a medida que se alinean con tus objetivos y desafíos específicos. Con un historial probado de éxito, estamos comprometidos a trabajar junto a ti para identificar áreas de mejora, implementar estrategias efectivas y medir el impacto positivo en tu organización.
                            </p>
                            <br/>
                            <p>
                                Ya sea que desees simplificar tus operaciones, optimizar la cadena de suministro, mejorar la calidad del producto o servicio, o cualquier otro objetivo relacionado con la eficiencia, estamos aquí para ofrecerte orientación experta y resultados tangibles.
                            </p>
                            <br/>
                            <p>
                                ¿Listo/a para llevar tu empresa al siguiente nivel? Contáctanos hoy mismo y comencemos a trabajar juntos en la mejora de tus procesos. ¡Juntos alcanzaremos el éxito que mereces!   
                            </p>
                            <br/>
                            <Slider />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

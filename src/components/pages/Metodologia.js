import React from 'react';
import metodologia from '../../assets/images/Metodologia.PNG';
import Accordions from '../inc/AccordionsLSSBB';

export default function Metodologia() {
    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Metodología 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                        <h6 className="text-center">
                            Usamos metodología agile y control de proyectos por sprints de scrum para que su proyecto tenga éxito en el menor tiempo posible.   
                        </h6>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <h6>1</h6>
                                <p>
                                    Gestión de proyectos en modelo Agile y Scrum
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h6>2</h6>
                                <p>
                                    QA y testing de software
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <h6>3</h6>
                                <p>
                                    Informes y métricas
                                </p>
                            </div>
                        </div>
                        <img src={metodologia} className="w-100 border-bottom" alt="agua" />
                        </div>
                        <Accordions />
                    </div>
                </div>
            </section>
        </div>
    )
}
import React from 'react'
//import CardsTipos from '../../inc/CardsTipos'
import WhiteCards from '../../inc/WhiteCards';

export default function Tipos() {
    return (
        <div>
            <section className="section border-top">
                <div className="row"></div>
                <div className="col-md-12 text-center">
                    <h3 className="main-heading">
                        Servicios 
                    </h3>
                    <div className="underline mx-auto"></div>
                </div>
                <h6 className="text-center">
                    Nuestro lema es "enseñar a pescar en lugar de dar pescado" porque este es el principio que genuinamente creemos que tiene mayor relevancia en el mundo empresarial 
                </h6>
                <h6 className="text-center">
                    y puede traer un impacto significativo en la competitividad de las organizaciones.  
                </h6>
                <WhiteCards />
            </section>
        </div>
    )
}

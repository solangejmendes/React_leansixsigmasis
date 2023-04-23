import React from 'react';
import ServiceCards from '../inc/ServiceCards';

export default function Servicios() {
    return (
        <div className='newpage'>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">
                                Servicios 
                            </h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-12 text-center">
                        <h6 className="text-center">
                            Nuestros servicios de basan fundamentalmente en el desarrollo de software en el entorno de la plataforma Power de Microsoft 365.   
                        </h6>
                        <ServiceCards />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
